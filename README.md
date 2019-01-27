
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

## 说明

- 强调与注重敏捷开发；
- 约定高于配置（Convention over configuration）；
- DRY（Don't repeat yourself）不要重复自己，提倡代码重用；
- 重视「编码愉悦性」。

## 约定 
1. 每个目录代表一个页面
2. 每个目录下面的data.js是临时使用的假数据，正式可以删除
3. temp也是一个临时的目录，用于存放在开发阶段的占位图片之类的文件
4. src->api 目录下的每个文件表示一类api，请分类清楚。一个文件的全部api不一定只在一个页面使用，但是在分类上是很明确无歧义的。
5. src->components 存放全局组件，每个组件的相关资源（img、css）请放在一起。文件夹和文件命名请使用大驼峰命名法。
6. 每个页面的相关配置请统一放在config->page.js文件里
7. 全局相关的工具函数统一放在utils下，也请分类好，如dataStorage是相关的数据操作函数。
8. 请调整编辑器缩进为4个字符。让代码看起来更清晰。
9. assets是全局的静态文件存放地址，如css img js等。如果只是页面或者组件相关，请放到相关目录


## 题型

typeB表示单选还是多选题

### A1A2题型
newType == 1传统的单选（typeB == 1 ,A1）或者多选题 (typeB == 2 || typeB == 4 ,A2)
### A3A4题型
newType == 3公共的题干，有多个小题，如果此题是单选，那么所有小题全部是单选，多选也是。
### B题型
newType == 5 公共的选项，有多个小题，如果此题是单选，那么所有小题全部是单选，多选也是。
