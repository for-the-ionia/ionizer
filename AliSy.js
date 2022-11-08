[rewrite_local]

^http://aliyun\.example\.com url script-analyze-echo-response https://raw.githubusercontent.com/for-the-ionia/ionizer/ip/aliyun.js


/*
圈X + Fileball 挂Aliyun

第一步：圈X 添加重写
1.1 类型选 script-analyze-echo-response
1.2 URL to match 填 ^http://aliyun\.example\.com
1.3 Script 填 aliyun.js

第二步：下载aliyun.js
下载aliyun.js后，保存到圈X的文件夹下（系统文件应用- Quantumult X - Scripts）


第三步：添加Synology协议
地址填 aliyun.example.com
用户名填 abc
密码填 refresh_token（需要用阿里云盘扫描alist的二维码获得）
https://alist-doc.nn.ci/docs/driver/aliyundrive

第四步：连接 & Enjoy
*/