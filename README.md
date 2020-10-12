# nuxt-template
### 使用 nuxt 开发过程中，遇到很多问题，初次解决起来还是很棘手的，nuxt-template是一款快速开发模板，旨在消除开发初期的一些常见开发阻力。


## 内置功能及已解决问题
- 定义了全局配置文件 config/index.js，项目配置更简便
- 解决了开发过程中的跨域问题
- 封装了自定义的axios（nuxt推荐的 @nuxtjs/axios 是真的不合适我！）：
  1. 主要是用来处理后台返回数据不规范的问题
  2. 解决手工刷新页面、新开页面时 或 vue运行在服务端时，请求数据时 token 丢失的问题
  3. 自定义了的全局的 post 和 get 方法，自己的东西用起来就是顺手
- nuxt的默认的404错误页对用户实在不够友好，已改为我喜欢的样子
- 添加了cnzz统计分析, 配置好统计地址就可以开始在生产环境中开启统计
- IE谁用谁傻B：不兼容IE11以下的浏览器，使用这些不兼容的浏览器访问时将给出不兼容页面提示
- 关于vuex的actions，定义了一个公用的数据修改方法， store.dispatch('SetStore', { key: value })
- 定义了一些常用的 flex 布局的 class 名， 如 .flex-align-center，详见 assets/css/common/flex.styl
- 定义了一些基础 css 变量，详见 assets/css/common/variables.styl
- css预处理器选用 stylus 的理由：灵活简洁，重点是可以不写花刮号、冒号和分号
- 目前使用的UI是 ant-design-vue，喜欢别的可自行更换。

## 配置说明
挺多的，有空补充吧

## 内置及自定义方法
不多，但是，方法的参数...，有空了再补充完整

## 开发约定
要约定的规范还挺多，但是我没空，有空再整理。

## 开发及构建

```bash
# 安装依赖
$ npm i

# 在热重载的开发环境中运行
$ npm run dev

# 在开发机上编译生产环境并启动服务
$ npm run build
$ npm run start

# 在linux服务器下编译生产环境并启动服务
$ npm run build
# 请先安装pm2，完成安装后即可启动以下命令
$ pm2 start npm --name domain.com -- start
# --- 重启站点服务 ---
$ pm2 restart domain.com
# --- 停止站点服务 ---
$ pm2 stop domain.com
# == 注： 每次更改，都必须重启站点服务 ==

# generate static project
$ npm run generate
```

