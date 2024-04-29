## 彻底删除历史记录

PS1 会将历史命令储存在一个文本文件中，因此删除该文本文件即可。

```ps1
del $env:appdata\Microsoft\Windows\PowerShell\PSReadLine\ConsoleHost_history.txt
```
