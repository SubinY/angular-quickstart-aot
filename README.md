# angular-quickstart-aot
此项目克隆自[quickstart](https://github.com/angular/quickstart)，并根据[aot文档](https://angular.io/guide/aot-compiler)进行了修改。可以用来学习aot编译。
[这是对Angular编译机制进行讨论的博客](https://segmentfault.com/a/1190000011562077)。

## 通过JIT启动项目
```
npm run start
访问 http://localhost:3000/index-jit.html
```
它可以监测你对源文件的修改并自动更新。
> JIT相关的配置文件包括：src/tsconfig.json, src/index-jit.html(其中引用了src/main-jit.ts, src/systemjs\*)。

## 通过AOT启动项目
```
npm run build:aot   // 这一步会产生一个aot文件夹，其中放着编译后的代码。并且产生src/build.js。
npm run serve
访问 http://localhost:3000/index.html （或者直接http://localhost:3000/）
```
注意，它不会监测你对源文件的修改，如果你想要看到修改后的效果，你需要保持原来的命令行窗口，在**另一个命令行窗口**中执行：
```
npm run build:aot
然后刷新浏览器页面
```
> AOT相关的配置文件包括：tsconfig-aot.json, rollup-config.js, src/index.html(其中引用了src/build.js，也就是从src/main.ts出发进行打包的)

尽情探索吧！
