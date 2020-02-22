### 项目1.Element UI + Node JS(express)开发后台管理界面

仓库文件夹为element-admin

vul-cli初始化项目

```shell
//初始化一个项目名为element-admin的vue项目
vue create element-admin

please pick a preset
*Manually select features

Check the features needed for your project: 
Babel, Router, Linter


 Use history mode for router? (Requires proper server setup for index fallback in production)
 No
 
 pick a linter / formatter config :
 ESlite with error prevention only
 
 lint on save
 
 where do you prefer placeing config for Babel,Router, Linter,etc.?
* In dedicated config files
 
 savw this A pewawt for future projects
 y
 
```

安装element插件

```shell
cd element-admin
vue add element
```

后端

```shell
//cors是解决跨域请求
npm i express@next mongoose cors
```

前端插件发送ajax请求

```
npm i axios
```

