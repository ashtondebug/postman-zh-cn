/* Postman 简体中文增强层 (pm-cn)
 * 由 DSH 生成：只替换界面文案，不改动请求/响应数据。
 * 开关：Ctrl+Alt+Z（写入 localStorage 后自动刷新）
 */
(function () {
  'use strict';
  if (window.__PMCN_INSTALLED__) return;
  window.__PMCN_INSTALLED__ = true;

  var DICT = {
  "Search": "搜索",
  "Overview": "概览",
  "Docs": "文档",
  "Updates": "更新",
  "Apps": "应用",
  "Settings": "设置",
  "COLLECTIONS": "集合",
  "APIS": "API",
  "ENVIRONMENTS": "环境",
  "MOCK SERVERS": "模拟服务器",
  "MONITORS": "监视器",
  "HISTORY": "历史",
  "Collections": "集合",
  "APIs": "API",
  "Environments": "环境",
  "Mock Servers": "模拟服务器",
  "Monitors": "监视器",
  "History": "历史",
  "Workspaces": "工作区",
  "Workspace": "工作区",
  "My Workspace": "我的工作区",
  "Team Workspace": "团队工作区",
  "Personal": "个人",
  "Team": "团队",
  "New": "新建",
  "Create": "创建",
  "Save": "保存",
  "Save As": "另存为",
  "Send": "发送",
  "Cancel": "取消",
  "Delete": "删除",
  "Duplicate": "复制",
  "Rename": "重命名",
  "Edit": "编辑",
  "Copy": "复制",
  "Paste": "粘贴",
  "Cut": "剪切",
  "Add": "添加",
  "Remove": "移除",
  "Close": "关闭",
  "Close All": "全部关闭",
  "Open": "打开",
  "Import": "导入",
  "Export": "导出",
  "Share": "分享",
  "Invite": "邀请",
  "Apply": "应用",
  "Reset": "重置",
  "Clear": "清除",
  "Undo": "撤销",
  "Redo": "重做",
  "Confirm": "确认",
  "Done": "完成",
  "Next": "下一步",
  "Back": "返回",
  "Finish": "完成",
  "Skip": "跳过",
  "Continue": "继续",
  "Retry": "重试",
  "Try again": "重试",
  "Refresh": "刷新",
  "Reload": "重新加载",
  "Upload": "上传",
  "Download": "下载",
  "Install": "安装",
  "Update": "更新",
  "Upgrade": "升级",
  "Enable": "启用",
  "Disable": "停用",
  "Enabled": "已启用",
  "Disabled": "已停用",
  "On": "开",
  "Off": "关",
  "Yes": "是",
  "No": "否",
  "OK": "确定",
  "None": "无",
  "All": "全部",
  "Custom": "自定义",
  "Default": "默认",
  "Advanced": "高级",
  "General": "通用",
  "Appearance": "外观",
  "Theme": "主题",
  "Light": "浅色",
  "Dark": "深色",
  "System": "跟随系统",
  "Language": "语言",
  "Account": "账户",
  "Account Settings": "账户设置",
  "Profile": "个人资料",
  "Sign In": "登录",
  "Sign Out": "退出登录",
  "Sign Up": "注册",
  "Log In": "登录",
  "Log Out": "退出登录",
  "Help": "帮助",
  "About": "关于",
  "Support": "支持",
  "Documentation": "文档",
  "Keyboard Shortcuts": "键盘快捷键",
  "Shortcuts": "快捷键",
  "Preferences": "偏好设置",
  "Feedback": "反馈",
  "Release Notes": "更新说明",
  "Check for updates": "检查更新",
  "New Request": "新建请求",
  "New Collection": "新建集合",
  "New Folder": "新建文件夹",
  "New Environment": "新建环境",
  "New Workspace": "新建工作区",
  "New API": "新建 API",
  "Add request": "添加请求",
  "Add folder": "添加文件夹",
  "Add a short summary...": "添加简短摘要…",
  "Add workspace README": "添加工作区 README",
  "Write with AI": "用 AI 撰写",
  "Pin collections": "固定集合",
  "Pin to sidebar": "固定到侧边栏",
  "Untitled": "未命名",
  "Untitled Request": "未命名请求",
  "Untitled Collection": "未命名集合",
  "Request": "请求",
  "Response": "响应",
  "Requests": "请求",
  "Folders": "文件夹",
  "Folder": "文件夹",
  "Collection": "集合",
  "Environment": "环境",
  "Variables": "变量",
  "Globals": "全局变量",
  "Global Variables": "全局变量",
  "Environment Variables": "环境变量",
  "Collection Variables": "集合变量",
  "Local Variables": "局部变量",
  "Initial Value": "初始值",
  "Current Value": "当前值",
  "Shared Value": "共享值",
  "Variable": "变量",
  "Type": "类型",
  "Name": "名称",
  "Value": "值",
  "Key": "键",
  "Description": "描述",
  "Default Value": "默认值",
  "Save Changes": "保存更改",
  "Discard": "放弃",
  "Unsaved changes": "未保存的更改",
  "Auto-save": "自动保存",
  "Saved": "已保存",
  "Unsaved": "未保存",
  "Saving...": "正在保存…",
  "Loading...": "加载中…",
  "Loading": "加载中",
  "Search...": "搜索…",
  "Filter": "筛选",
  "Sort": "排序",
  "Sort by": "排序方式",
  "Name (A-Z)": "名称（A-Z）",
  "Last Updated": "最近更新",
  "Params": "参数",
  "Params.": "参数",
  "Authorization": "授权",
  "Headers": "请求头",
  "Header": "请求头",
  "Body": "请求体",
  "Scripts": "脚本",
  "Pre-request Script": "前置脚本",
  "Post-response Script": "后置脚本",
  "Tests": "测试",
  "Test": "测试",
  "Cookies": "Cookie",
  "Code": "代码",
  "Code snippet": "代码片段",
  "Examples": "示例",
  "Example": "示例",
  "Response Headers": "响应头",
  "Response Body": "响应体",
  "Request Headers": "请求头",
  "Request Body": "请求体",
  "Pretty": "美化",
  "Raw": "原始",
  "Preview": "预览",
  "Visualize": "可视化",
  "Split": "分栏",
  "Word Wrap": "自动换行",
  "Wrap lines": "自动换行",
  "Status": "状态",
  "Time": "耗时",
  "Size": "大小",
  "Save Response": "保存响应",
  "Save as example": "保存为示例",
  "Clear All": "全部清除",
  "Clear History": "清除历史",
  "No response": "无响应",
  "Sending Request...": "正在发送请求…",
  "Sending request...": "正在发送请求…",
  "Send Request": "发送请求",
  "Inherit auth from parent": "从父级继承授权",
  "No Auth": "无授权",
  "Basic Auth": "基本认证",
  "Bearer Token": "Bearer 令牌",
  "JWT Bearer": "JWT Bearer",
  "Digest Auth": "摘要认证",
  "OAuth 1.0": "OAuth 1.0",
  "OAuth 2.0": "OAuth 2.0",
  "Hawk Authentication": "Hawk 认证",
  "AWS Signature": "AWS 签名",
  "NTLM Authentication": "NTLM 认证",
  "API Key": "API 密钥",
  "Token": "令牌",
  "Username": "用户名",
  "Password": "密码",
  "Client ID": "客户端 ID",
  "Client Secret": "客户端密钥",
  "Scope": "作用域",
  "Callback URL": "回调地址",
  "Auth URL": "授权地址",
  "Access Token URL": "访问令牌地址",
  "Get New Access Token": "获取新的访问令牌",
  "Form Data": "表单数据",
  "form-data": "表单数据",
  "x-www-form-urlencoded": "x-www-form-urlencoded",
  "raw": "原始",
  "binary": "二进制",
  "Binary": "二进制",
  "GraphQL": "GraphQL",
  "Text": "文本",
  "JSON": "JSON",
  "XML": "XML",
  "HTML": "HTML",
  "JavaScript": "JavaScript",
  "Bulk Edit": "批量编辑",
  "Key-Value Edit": "键值编辑",
  "Mass Edit": "批量编辑",
  "Bulk edit": "批量编辑",
  "Add row": "添加行",
  "Auto-generated headers": "自动生成的请求头",
  "Hidden": "已隐藏",
  "Show": "显示",
  "Hide": "隐藏",
  "Show more": "显示更多",
  "Show less": "显示更少",
  "Expand": "展开",
  "Collapse": "收起",
  "Expand All": "全部展开",
  "Collapse All": "全部收起",
  "More": "更多",
  "More actions": "更多操作",
  "Select all": "全选",
  "Duplicate tab": "复制标签页",
  "Close tab": "关闭标签页",
  "Runner": "运行器",
  "Run": "运行",
  "Run Collection": "运行集合",
  "Run Folder": "运行文件夹",
  "Iterations": "迭代次数",
  "Delay": "延迟",
  "Data": "数据",
  "Data File": "数据文件",
  "Select File": "选择文件",
  "Start Run": "开始运行",
  "Stop Run": "停止运行",
  "Passed": "通过",
  "Failed": "失败",
  "Skipped": "跳过",
  "Pass": "通过",
  "Fail": "失败",
  "Results": "结果",
  "Summary": "摘要",
  "Total": "总计",
  "Average": "平均",
  "Errors": "错误",
  "Error": "错误",
  "Warning": "警告",
  "Info": "信息",
  "Success": "成功",
  "Status Code": "状态码",
  "2xx": "2xx",
  "Learn more": "了解更多",
  "Read more": "阅读更多",
  "View all": "查看全部",
  "View more": "查看更多",
  "See all": "查看全部",
  "Open in new tab": "在新标签页打开",
  "Open in Postman": "在 Postman 中打开",
  "Copy link": "复制链接",
  "Copy as cURL": "复制为 cURL",
  "Copy as cURL (bash)": "复制为 cURL (bash)",
  "Generate Code": "生成代码",
  "Code Generation": "代码生成",
  "Choose Language": "选择语言",
  "Public": "公开",
  "Private": "私有",
  "Members": "成员",
  "Roles": "角色",
  "Admin": "管理员",
  "Editor": "编辑者",
  "Viewer": "查看者",
  "Owner": "所有者",
  "Team Members": "团队成员",
  "Manage Team": "管理团队",
  "Billing": "账单",
  "Usage": "用量",
  "Plan": "套餐",
  "Free": "免费",
  "Analytics": "分析",
  "Reports": "报告",
  "Flows": "流程",
  "Gateway": "网关",
  "Agent Mode": "智能体模式",
  "Postbot": "Postbot",
  "AI": "AI",
  "Fork": "复刻",
  "Merge": "合并",
  "Sync": "同步",
  "Synced": "已同步",
  "Offline": "离线",
  "Online": "在线",
  "Connected": "已连接",
  "Disconnected": "未连接",
  "Reconnecting...": "正在重新连接…",
  "Update Available": "有可用更新",
  "Restart to Update": "重启以更新",
  "Download Update": "下载更新",
  "Sign in to sync your data": "登录以同步你的数据",
  "Add a folder": "添加文件夹",
  "Add a request": "添加请求",
  "Choose a collection or request to get started": "选择一个集合或请求开始使用",
  "Create a request": "创建请求",
  "Get started": "开始使用",
  "Welcome": "欢迎",
  "Documents": "文档",
  "DOCUMENTS": "文档",
  "Specs": "规范",
  "SPECS": "规范",
  "Mocks": "模拟",
  "MOCKS": "模拟",
  "Datasets": "数据集",
  "DATASETS": "数据集",
  "Toolsets": "工具集",
  "TOOLSETS": "工具集",
  "No Environment": "未选择环境",
  "Connect": "连接",
  "New Chat": "新建对话",
  "Describe what you need. Press @ for context, / for Skills.": "描述你的需求。按 @ 引用上下文，按 / 使用技能。",
  "Auto": "自动",
  "Open Folder": "打开文件夹",
  "Terminal": "终端",
  "Console": "控制台",
  "Need help with the next steps?": "需要后续帮助吗？",
  "Vault": "保险库",
  "Tools": "工具",
  "App settings": "应用设置",
  "Workspace settings": "工作区设置",
  "Team settings": "团队设置",
  "Account settings": "账户设置",
  "Direct": "私信",
  "Watching": "已关注",
  "Unwatch": "取消关注",
  "Watch": "关注",
  "Add a short summary…": "添加简短摘要…",
  "Menu": "菜单",
  "Go back (Alt+Left arrow)": "后退（Alt+←）",
  "Go forward (Alt+Right arrow)": "前进（Alt+→）",
  "Navigation menu": "导航菜单",
  "Open search": "打开搜索",
  "Toolbar": "工具栏",
  "Notifications": "通知",
  "Manage accounts": "管理账户",
  "Minimize": "最小化",
  "Restore down": "还原",
  "Items in Cloud": "云端条目",
  "Services": "服务",
  "Local Files": "本地文件",
  "Filter panels": "筛选面板",
  "Input field": "输入框",
  "Create new": "新建",
  "Use resources or import": "使用资源或导入",
  "Create new request": "新建请求",
  "Search tabs": "搜索标签页",
  "Select Environment": "选择环境",
  "Breadcrumb navigation": "面包屑导航",
  "Star workspace": "收藏工作区",
  "More workspace actions": "更多工作区操作",
  "Activity": "动态",
  "Send and Download": "发送并下载",
  "Query Params": "查询参数",
  "Path Variables": "路径变量",
  "Test Results": "测试结果",
  "Environment Quick Look": "环境速览",
  "No auth": "无授权",
  "Body types": "请求体类型",
  "Form": "表单",
  "URL": "URL",
  "Method": "方法",
  "Headers (8)": "请求头 (8)",
  "Add header": "添加请求头",
  "Hide auto-generated headers": "隐藏自动生成的请求头",
  "Show auto-generated headers": "显示自动生成的请求头",
  "Uppercase": "大写",
  "System Proxy": "系统代理",
  "Proxy": "代理",
  "Certificate": "证书",
  "Ignore server certificate": "忽略服务器证书",
  "Request timeout": "请求超时",
  "Max response size": "最大响应大小",
  "Follow redirects": "跟随重定向",
  "Follow original HTTP Method": "沿用原始 HTTP 方法",
  "Enable SSL certificate verification": "启用 SSL 证书校验",
  "Working directory": "工作目录",
  "Workspace access": "工作区访问",
  "Leave": "离开",
  "Transfer": "转移",
  "Delete workspace": "删除工作区",
  "Create Workspace": "创建工作区",
  "Invite collaborators": "邀请协作者",
  "Upgrade now": "立即升级",
  "AI credits": "AI 额度",
  "Ask AI": "询问 AI",
  "Attach": "附加",
  "Clear chat": "清空对话",
  "Copy code": "复制代码",
  "Generated code": "生成的代码",
  "Try it": "试一试",
  "Wrapped": "已换行",
  "Unwrapped": "未换行",
  "Toggle left sidebar Ctrl+\\": "切换左侧栏 Ctrl+\\",
  "Toggle right sidebar Ctrl+Alt+\\": "切换右侧栏 Ctrl+Alt+\\",
  "Typeahead menu": "下拉建议菜单",
  "Enter URL or paste text": "输入 URL 或粘贴文本",
  "Send + Get a successful response": "发送 + 获取成功响应",
  "Send + Visualize response": "发送 + 可视化响应",
  "Send + Write tests": "发送 + 编写测试",
  "This request does not have a body": "此请求没有请求体",
  "none": "无",
  "Switch request type": "切换请求类型",
  "Button group": "按钮组",
  "button": "按钮",
  "Copy Link": "复制链接",
  "Open dropdown": "打开下拉菜单",
  "Send options": "发送选项",
  "View more actions": "查看更多操作",
  "search": "搜索",
  "Parent": "父级",
  "Inherit": "继承",
  "Themes": "主题",
  "Certificates": "证书",
  "Proxy settings": "代理设置",
  "Auto-follow redirects": "自动跟随重定向",
  "Send request": "发送请求",
  "New request": "新建请求",
  "Open a request": "打开请求",
  "Cancel run": "取消运行",
  "Run again": "重新运行",
  "Copy response": "复制响应",
  "Save response": "保存响应",
  "Clear response": "清除响应",
  "Show response in console": "在控制台显示响应",
  "Hide response": "隐藏响应",
  "Show response": "显示响应",
  "Expand response": "展开响应",
  "Add-ons": "附加组件",
  "HTTP version": "HTTP 版本",
  "NEW": "新",
  "Select the HTTP version to use for sending the request.": "选择发送请求使用的 HTTP 版本。",
  "SSL certificate verification": "SSL 证书校验",
  "SSL/TLS key log": "SSL/TLS 密钥日志",
  "Enable SSL/TLS session key logging for debugging encrypted connections": "为调试加密连接启用 SSL/TLS 会话密钥日志",
  "Disable cookies": "禁用 Cookie",
  "Disable cookie jar for all requests.": "对所有请求禁用 Cookie 存储。",
  "Response format detection": "响应格式检测",
  "setup your working directory": "设置工作目录",
  "Location": "位置",
  "Choose": "选择",
  "Read files outside working directory": "读取工作目录之外的文件",
  "Send no-cache header": "发送 no-cache 请求头",
  "Send Postman Token header": "发送 Postman Token 请求头",
  "Retain headers when clicking on links": "点击链接时保留请求头",
  "Automatically follow redirects": "自动跟随重定向",
  "User interface": "用户界面",
  "Always open sidebar item in new tab": "始终在新标签页打开侧边栏项目",
  "Always ask when closing unsaved tabs": "关闭未保存标签页时始终询问",
  "Show icons with tab names": "标签页名称旁显示图标",
  "Two-pane view": "双栏视图",
  "Show middle workbench": "显示中间工作台",
  "Swap left and right sidebars": "交换左右侧边栏",
  "Variable autocomplete": "变量自动补全",
  "Default documentation editor": "默认文档编辑器",
  "Postman editor": "Postman 编辑器",
  "Markdown editor": "Markdown 编辑器",
  "Editor settings": "编辑器设置",
  "Font Family": "字体",
  "Font Size (px)": "字号（px）",
  "Indentation count": "缩进宽度",
  "Set number of indentations to add per code level.": "设置每级代码的缩进宽度。",
  "Indentation type": "缩进类型",
  "Indent lines of code with either Space or Tab.": "使用空格或制表符缩进代码。",
  "Space": "空格",
  "Tab": "制表符",
  "Auto close brackets": "自动闭合括号",
  "Auto close quotes": "自动闭合引号",
  "Application": "应用",
  "Open in desktop app": "在桌面应用中打开",
  "Open Postman on web": "在网页版 Postman 中打开",
  "Choose the language for the Postman app and email notifications.": "选择 Postman 应用与邮件通知使用的语言。",
  "Autosave": "自动保存",
  "BETA": "测试版",
  "Autosave changes to your requests.": "自动保存对请求的更改。",
  "Send anonymous usage data to Postman": "向 Postman 发送匿名使用数据",
  "Show notification badge on app icon": "在应用图标上显示通知角标",
  "Show a count of unread notifications on the Postman app icon.": "在 Postman 应用图标上显示未读通知数量。",
  "Theme selection": "主题选择",
  "Sync with system": "跟随系统",
  "Manual": "手动",
  "High Contrast Light": "高对比度浅色",
  "High Contrast Dark": "高对比度深色",
  "Ayu Light": "Ayu 浅色",
  "Ayu Dark": "Ayu 深色",
  "Night Owl Light": "Night Owl 浅色",
  "Night Owl Dark": "Night Owl 深色",
  "Solarized Light": "Solarized 浅色",
  "Solarized Dark": "Solarized 深色",
  "Restore Defaults": "恢复默认",
  "Tabs": "标签页",
  "Close Tab": "关闭标签页",
  "Force Close Tab": "强制关闭标签页",
  "Switch To Next Tab": "切换到下一个标签页",
  "Switch To Previous Tab": "切换到上一个标签页",
  "Switch To Tab at Position": "切换到指定位置的标签页",
  "through": "至",
  "Switch To Last Tab": "切换到最后一个标签页",
  "Reopen Last Closed Tab": "重新打开上次关闭的标签页",
  "New Runner Tab": "新建运行器标签页",
  "Search Tabs": "搜索标签页",
  "Sidebar": "侧边栏",
  "Search Sidebar": "搜索侧边栏",
  "Next Item": "下一项",
  "Previous Item": "上一项",
  "Expand Item": "展开项",
  "Collapse Item": "收起项",
  "Select Item": "选中项",
  "Rename Item": "重命名项",
  "Cut Item": "剪切项",
  "Copy Item": "复制项",
  "Paste Item": "粘贴项",
  "Duplicate Item": "创建副本",
  "Delete Item": "删除项",
  "Request URL": "请求 URL",
  "Save Request": "保存请求",
  "Save Request As": "请求另存为",
  "Send And Download Request": "发送并下载请求",
  "Send Request with AI": "用 AI 发送请求",
  "Interface": "界面",
  "Zoom In": "放大",
  "Zoom Out": "缩小",
  "Reset Zoom": "重置缩放",
  "Toggle Two-Pane View": "切换双栏视图",
  "Toggle Left Sidebar": "切换左侧栏",
  "Toggle Right Sidebar": "切换右侧栏",
  "Toggle Workbench": "切换工作台",
  "Swap Sidebars": "交换侧边栏",
  "Reset Layout": "重置布局",
  "Environment Selector": "环境选择器",
  "Window and modals": "窗口与弹窗",
  "New...": "新建…",
  "New Postman Window": "新建 Postman 窗口",
  "New Console Window": "新建控制台窗口",
  "Find": "查找",
  "Open Shortcut Help": "打开快捷键帮助",
  "Search in Current Workspace": "在当前工作区搜索",
  "Open Agent Mode": "打开智能体模式",
  "Open Vault": "打开保险库",
  "Open Browser Tab": "打开浏览器标签页",
  "Cancel Conversation": "取消对话",
  "Accept All": "全部接受",
  "Reject All": "全部拒绝",
  "Clear Console": "清空控制台",
  "Show/Hide Console": "显示/隐藏控制台",
  "Control AI-powered features within Postman": "控制 Postman 内的 AI 功能",
  "Configure AI behavior when using Agent Mode.": "配置智能体模式下的 AI 行为。",
  "Configure your own key": "配置你自己的密钥",
  "Web search": "网页搜索",
  "Show AI suggestions": "显示 AI 建议",
  "Display fix and improvement suggestions in the status bar.": "在状态栏显示修复与改进建议。",
  "Show error diagnosis": "显示错误诊断",
  "Code editing assistance": "代码编辑辅助",
  "Code Autocomplete": "代码自动补全",
  "Show autocomplete suggestions while working with scripts.": "编写脚本时显示自动补全建议。",
  "Import data": "导入数据",
  "Import a Postman data dump. This may overwrite existing data.": "导入 Postman 数据转储，可能覆盖现有数据。",
  "Import Data File": "导入数据文件",
  "Scratch Pad Data": "草稿板数据",
  "Migrate Scratch Pad data": "迁移草稿板数据",
  "Migrate and sync all your Scratch Pad data to a workspace.": "将所有草稿板数据迁移并同步到工作区。",
  "Migrate Data": "迁移数据",
  "Export Scratch Pad data": "导出草稿板数据",
  "Export all your scratch Pad data into a single dump file.": "将所有草稿板数据导出为单个转储文件。",
  "Export Scratch Pad Data": "导出草稿板数据",
  "Postman CLI": "Postman 命令行",
  "Download from npm": "从 npm 下载",
  "Install in terminal": "在终端安装",
  "Postman VS Code Extension": "Postman VS Code 扩展",
  "Install on VS Code": "在 VS Code 中安装",
  "Postman Interceptor": "Postman 拦截器",
  "Install on Chrome": "在 Chrome 中安装",
  "CA certificates": "CA 证书",
  "PEM file": "PEM 文件",
  "Client certificates": "客户端证书",
  "Add and manage SSL certificates on a per domain basis. Learn more about": "按域名添加和管理 SSL 证书。了解更多",
  "working with certificates": "证书的使用方法",
  "Add Certificate…": "添加证书…",
  "No accounts connected yet": "尚未连接账户",
  "Once you connect your accounts to an API, they will appear here.": "将账户连接到 API 后会显示在这里。",
  "Default proxy configuration": "默认代理配置",
  "This proxy requires authentication": "此代理需要认证",
  "Proxy configurations for sending requests": "发送请求使用的代理配置",
  "using a custom proxy": "使用自定义代理",
  "Use system proxy": "使用系统代理",
  "Respect HTTP_PROXY, HTTPS_PROXY, and NO_PROXY environment variables": "遵循 HTTP_PROXY、HTTPS_PROXY 和 NO_PROXY 环境变量",
  "Use custom proxy configuration": "使用自定义代理配置",
  "You are up to date!": "已是最新版本！",
  "Postman for Windows": "Postman Windows 版",
  "Version": "版本",
  "UI version": "界面版本",
  "Desktop platform version": "桌面平台版本",
  "Architecture": "架构",
  "OS platform": "操作系统",
  "Website": "官网",
  "Twitter": "Twitter",
  "Privacy": "隐私",
  "Release notes": "更新说明",
  "Learning center": "学习中心",
  "Report an issue": "反馈问题",
  "Close modal": "关闭弹窗",
  "Switch": "开关",
  "Set how long a request should wait for a response before timing out. To never time out, set to 0.": "设置请求等待响应的超时时间。设为 0 表示永不超时。",
  "Set the maximum size of a response to download. To download a response of any size, set to 0.": "设置可下载的响应大小上限。设为 0 表示不限大小。",
  "Collaborate on files used in requests by sharing your working directory. Learn how to": "通过共享工作目录，协作处理请求中用到的文件。了解如何",
  "Enabling this will allow any 3rd party collections to potentially read any file on your system.": "开启后，任何第三方集合都可能读取你系统上的任意文件。",
  "Automatically open links in desktop app when possible. You can update your preference in the Settings of Postman in your browser.": "尽可能在桌面应用中自动打开链接。你可以在浏览器版 Postman 的设置中修改此偏好。",
  "Personalize your experience with themes that match your style. Manually select a theme or sync with system settings and let the machine set your day and night themes.": "用契合风格的主题个性化你的体验。可手动选择主题，或跟随系统设置自动切换浅色与深色主题。",
  "Allow Agent Mode to search the web for real-time information during task execution.": "允许智能体模式在执行任务时联网搜索实时信息。",
  "View what caused the error and suggested fixes along with the error messages.": "在错误信息旁查看错误原因与修复建议。",
  "Configure AI assistance when editing scripts, JSON payloads, or example responses in Postman.": "配置在 Postman 中编辑脚本、JSON 负载或示例响应时的 AI 辅助。",
  "Bring the power of Postman to your command line. Run collections, automate tests, and integrate with CI/CD workflows.": "把 Postman 的能力带到命令行：运行集合、自动化测试，接入 CI/CD 流程。",
  "Send requests, test APIs, and manage collections — all from within your code editor. Also available for Cursor, Windsurf, and other compatible editors.": "在代码编辑器里发送请求、测试 API、管理集合。同样支持 Cursor、Windsurf 等编辑器。",
  "Capture and sync cookies and requests directly from your browser to Postman. Use it to test authenticated APIs and debug browser-based workflows seamlessly.": "直接从浏览器捕获并同步 Cookie 与请求到 Postman，用于测试需要鉴权的 API、调试浏览器相关工作流。",
  "The file should consist of one or more trusted certificates in PEM format.": "该文件应包含一个或多个 PEM 格式的受信任证书。",
  "Postman uses the system’s proxy configurations by default to connect to any online services, or to send API requests.": "Postman 默认使用系统代理配置连接在线服务或发送 API 请求。",
  "Specify a proxy setting to act as an intermediary for requests sent through the Builder in Postman. These configurations do not apply to any Postman services. Learn more about": "指定一个代理作为 Postman 构建器所发请求的中间层。这些配置不适用于任何 Postman 服务。了解更多",
  "No items in this panel": "此面板暂无内容",
  "No items": "暂无内容",
  "Nothing here yet": "这里还什么都没有"
};

  var LS_KEY = 'pmcn.disabled';
  try {
    if (window.localStorage && window.localStorage.getItem(LS_KEY) === '1') return;
  } catch (e) {}

  var RULES = [
    [/^(.+) profile picture$/, '$1 头像'],
    [/^(\d+) results?$/, '$1 条结果'],
    [/^(\d+) items?$/, '$1 项'],
    [/^(\d+) selected$/, '已选 $1 项'],
    [/^Postman (v[\d.]+) is the latest version\.$/, 'Postman $1 已是最新版本。'],
    [/^Last checked on (.+)$/, '上次检查：$1'],
    [/^(\d+) notifications?$/, '$1 条通知']
  ];

  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  var SKIP = 'input,textarea,select,pre,code,kbd,samp,script,style,noscript,svg,canvas,' +
    '.CodeMirror,.cm-editor,.monaco-editor,.view-lines,[contenteditable],[contenteditable="true"],' +
    '[role="textbox"],[data-pmcn-skip]';

  function skipped(el) {
    if (!el) return true;
    try {
      if (el.closest && el.closest(SKIP)) return true;
      var cls = el.className;
      if (typeof cls === 'string' && /codemirror|monaco|shiki|hljs|ace_editor/i.test(cls)) return true;
    } catch (e) {}
    return false;
  }

  function core(text) {
    var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(text);
    if (!m) return null;
    return { lead: m[1], body: m[2], tail: m[3] };
  }

  var MONTHS = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

  function localizeDate(text) {
    var m = /^([A-Z][a-z]{2}) (\d{1,2}), (\d{4}) at (\d{1,2}):(\d{2})\s*(AM|PM)?/.exec(text);
    if (!m) return null;
    var mo = MONTHS[m[1]];
    if (!mo) return null;
    var h = parseInt(m[4], 10);
    if (m[6] === 'PM' && h < 12) h += 12;
    if (m[6] === 'AM' && h === 12) h = 0;
    return m[3] + '-' + ('0' + mo).slice(-2) + '-' + ('0' + m[2]).slice(-2) + ' ' + ('0' + h).slice(-2) + ':' + m[5];
  }

  function translateValue(text) {
    if (!text || text.length > 240) return null;
    var c = core(text);
    if (!c || !c.body) return null;
    var hit = DICT[c.body];
    if (hit === undefined && c.body.indexOf('Last checked on ') === 0) {
      var d = localizeDate(c.body.slice(16));
      if (d) return c.lead + '上次检查：' + d + c.tail;
    }
    if (hit === undefined) {
      for (var i = 0; i < RULES.length; i++) {
        var r = RULES[i];
        if (r[0].test(c.body)) { hit = c.body.replace(r[0], r[1]); break; }
      }
    }
    if (hit === undefined || hit === c.body) return null;
    return c.lead + hit + c.tail;
  }

  function doTextNode(node) {
    var v = node.nodeValue;
    if (!v || !/[A-Za-z]/.test(v)) return;
    if (skipped(node.parentElement)) return;
    var next = translateValue(v);
    if (next === null) return;
    node.nodeValue = next;
  }

  function doAttrs(el) {
    if (!el || !el.getAttribute) return;
    try {
      if (el.closest && el.closest('.CodeMirror,.cm-editor,.monaco-editor,[contenteditable],[role="textbox"]')) return;
    } catch (e) {}
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      var val = el.getAttribute(a);
      if (!val) continue;
      var next = translateValue(val);
      if (next === null) continue;
      try { el.setAttribute(a, next); } catch (e) {}
    }
  }

  function scan(root) {
    if (!root) return;
    if (root.nodeType === 3) {
      doTextNode(root);
      return;
    }
    if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;
    if (root.nodeType === 1) {
      if (skipped(root)) return;
      doAttrs(root);
    }
    var walker;
    try {
      walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null);
    } catch (e) {
      return;
    }
    var batch = [];
    var n;
    while ((n = walker.nextNode())) {
      batch.push(n);
      if (batch.length >= 5000) break;
    }
    for (var i = 0; i < batch.length; i++) {
      var node = batch[i];
      if (node.nodeType === 3) doTextNode(node);
      else doAttrs(node);
    }
  }

  var queue = [];
  var scheduled = false;

  function push(node) {
    if (!node) return;
    queue.push(node);
    if (scheduled) return;
    scheduled = true;
    setTimeout(flush, 0);
  }

  function flush() {
    scheduled = false;
    var items = queue;
    queue = [];
    for (var i = 0; i < items.length; i++) {
      try { scan(items[i]); } catch (e) {}
    }
  }

  var mo = new MutationObserver(function (muts) {
    for (var i = 0; i < muts.length; i++) {
      var m = muts[i];
      if (m.type === 'characterData') {
        if (m.target && m.target.parentNode) push(m.target.parentNode);
        continue;
      }
      if (m.type === 'attributes') {
        if (m.target && m.target.nodeType === 1) doAttrs(m.target);
        continue;
      }
      var added = m.addedNodes;
      if (!added) continue;
      for (var j = 0; j < added.length; j++) {
        var a = added[j];
        if (a.nodeType === 1) push(a);
        else if (a.nodeType === 3 && a.parentNode) push(a.parentNode);
      }
    }
  });

  function translateTitle() {
    try {
      var t = document.title;
      if (!t || !/[A-Za-z]/.test(t)) return;
      var parts = t.split(' - ');
      var changed = false;
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i].trim();
        if (DICT[p] !== undefined && DICT[p] !== p) { parts[i] = DICT[p]; changed = true; }
      }
      if (changed) document.title = parts.join(' - ');
    } catch (e) {}
  }

  function boot() {
    try {
      mo.observe(document.documentElement, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['placeholder', 'title', 'aria-label', 'alt']
      });
    } catch (e) {}
    scan(document.body || document.documentElement);
    translateTitle();
    setInterval(translateTitle, 3000);
  }

  document.addEventListener('keydown', function (ev) {
    if (ev.ctrlKey && ev.altKey && (ev.key === 'z' || ev.key === 'Z')) {
      try {
        var now = window.localStorage.getItem(LS_KEY) === '1';
        window.localStorage.setItem(LS_KEY, now ? '0' : '1');
        location.reload();
      } catch (e) {}
    }
  }, true);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
