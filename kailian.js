#!name=开练
#!desc=开练

[Script]

nanxiani = type=http-response,pattern=^http[s]?:\/\/fitness-notes.nanxiani.cn\/api\/user_info,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/nanxiani.js

[MITM]

hostname = nanxiani.cn
