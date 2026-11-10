# 还原 Postman 原始文件
# 用法（PowerShell）：  .\restore.ps1

$ErrorActionPreference = 'Stop'
$postmanRoot = Join-Path $env:LOCALAPPDATA 'Postman'

if (-not (Test-Path $postmanRoot)) {
  Write-Host "找不到 Postman 安装目录：$postmanRoot" -ForegroundColor Red
  exit 1
}

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

if (-not (Test-Path $backup)) {
  Write-Host '没有找到备份文件，可能从未安装过补丁' -ForegroundColor Yellow
  exit 1
}

Get-Process -Name Postman -ErrorAction SilentlyContinue | Stop-Process -Force
$deadline = (Get-Date).AddSeconds(30)
while ((Get-Process -Name Postman -ErrorAction SilentlyContinue) -and (Get-Date) -lt $deadline) {
  Start-Sleep -Milliseconds 500
}

Copy-Item $backup $asar -Force
Write-Host "已还原 $($latest.Name) 的原始 app.asar" -ForegroundColor Green
Start-Process -FilePath "$env:WINDIR\explorer.exe" -ArgumentList (Join-Path $postmanRoot 'Postman.exe')
