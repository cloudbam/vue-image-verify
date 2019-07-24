## vue-image-verify



![](https://i.loli.net/2019/07/24/5d3819eb3bdc165412.png)

Using npm:

```
$ npm install vue-image-verify
$ npm install vue-event-proxy
```

Using bower:

```
$ bower install vue-image-verify
$ bower install vue-event-proxy
```

Using yarn:

```
$ yarn add vue-image-verify
$ yarn add vue-event-proxy
```



## Example

Main.js

```
import vueVerify from 'vue-image-verify'
Vue.use(vueVerify);

import EventProxy from 'vue-event-proxy';
Vue.use(EventProxy);

```

App.vue

```
  <vueVerify @sendVerif="getInfo"
             @movedistance="puzzleGapDistance"></vueVerify>
```



```
data () {
    return {
      verifyInfo: {
        puzzle: ' ',    // 背景缺口图片
        puzzleGap: ' ',  // 缺口图
        puzzleGapX: 0,  // 缺口的默认x轴
        puzzleGapY: 0   // 缺口默认的y轴
      }
    }
  },

methods: {
    getInfo (e) {
      var promise = new Promise((resovle, reject) => {
        resovle('验证回传')
      })
      promise.then(() => {
      // 通过aixos 获取基本的属性值：插件内部是根据上面的参数配置的请 引入的时候让后端工程师基本参数名进行字段统一
        this.$emit('global:getVerifyInfo', this.verifyInfo);
      })
    },
    puzzleGapDistance (e) {

      let length = e;
      window.console.log(`length:${length}`);
      //  通过axios 获取后端验证结果 再次返回给子组件
      var promise = new Promise((resovle, reject) => {
        resovle('验证回传 结果')
      })
      promise.then(() => {
        this.$emit('global:validationResults', this.results);
      })
    },
    send () {
      this.$emit('global:validationResults', this.results);
    }
  },
```



Use tutorial：

```
https://github.com/Moocliu/vue-image-verify
```

