HEUI
=

一个switch 按钮，本人只是用来熟悉发布代码使用

Vue 项目中 npm install heui --save

在main.js引入全局使用 import HEUI from 'heui' Vue.use(HEUI)

使用
通过一个标签<he-switch v-model="oppen"></he-switch>,里面v-model定义true or false 来确定按钮的初始状态;
同时，可以禁止切换按钮使用<he-switch v-model="oppen" disabled></he-switch>




