# 对当前安装的 Postman 应用中文补丁
# 用法（PowerShell）：  .\install.ps1

$ErrorActionPreference = 'Stop'
$patcher = Split-Path -Parent $MyInvocation.MyCommand.Path
$postmanRoot = Join-Path $env:LOCALAPPDATA 'Postman'

if (-not (Test-Path $postmanRoot)) {
  Write-Host "找不到 Postman 安装目录：$postmanRoot" -ForegroundColor Red
  exit 1
}

# 取版本号最大的 app-* 目录
$latest = Get-ChildItem $postmanRoot -Directory -Filter 'app-*' |
  Where-Object { Test-Path (Join-Path $_.FullName 'resources\app.asar') } |
  Sort-Object { [version]($_.Name -replace '^app-', '') } -Descending |
  Select-Object -First 1

if (-not $latest) {
  Write-Host '未找到 Postman 的 app-* 版本目录' -ForegroundColor Red
  exit 1
}

$resources = Join-Path $latest.FullName 'resources'
$asar = Join-Path $resources 'app.asar'
$backup = Join-Path $resources 'app.asar.pmcn-backup'
Write-Host "目标版本：$($latest.Name)"

# 需要 Node.js
$nodeExe = (Get-Command node -ErrorAction SilentlyContinue)
if (-not $nodeExe) {
  Write-Host '需要 Node.js（用于重新打包 app.asar），请先安装后重试' -ForegroundColor Red
  exit 1
}

# 首次应用时保留原始文件
if (-not (Test-Path $backup)) {
  Copy-Item $asar $backup -Force
  Write-Host '已备份原始 app.asar'
}

$out = Join-Path $env:TEMP ('app.asar.pmcn-' + [guid]::NewGuid().ToString('N') + '.tmp')
Write-Host '正在生成补丁包（约需 10-30 秒）...'
& $nodeExe.Source --max-old-space-size=3072 (Join-Path $patcher 'repack.js') $backup $out
if ($LASTEXITCODE -ne 0 -or -not (Test-Path $out)) {
  Write-Host '打包失败' -ForegroundColor Red
  exit 1
}

# 关闭 Postman 并等待文件锁释放
Get-Process -Name Postman -ErrorAction SilentlyContinue | Stop-Process -Force
$deadline = (Get-Date).AddSeconds(30)
while ((Get-Process -Name Postman -ErrorAction SilentlyContinue) -and (Get-Date) -lt $deadline) {
  Start-Sleep -Milliseconds 500
}

$copied = $false
for ($i = 0; $i -lt 10; $i++) {
  try {
    Copy-Item $out $asar -Force -ErrorAction Stop
    $copied = $true
    break
  } catch {
    Start-Sleep -Seconds 1
  }
}
if (-not $copied) {
  Write-Host '写入失败：app.asar 仍被占用，请彻底退出 Postman（含托盘图标）后重试' -ForegroundColor Red
  exit 1
}
Remove-Item $out -Force -ErrorAction SilentlyContinue

Write-Host '中文补丁已应用，正在启动 Postman...' -ForegroundColor Green
Start-Process -FilePath "$env:WINDIR\explorer.exe" -ArgumentList (Join-Path $postmanRoot 'Postman.exe')
