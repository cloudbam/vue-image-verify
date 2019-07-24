<template>
  <div id="app">
    <div class="_box">
      <vueVerify @sendVerif="getInfo"
                 @movedistance="puzzleGapDistance"></vueVerify>
    </div>

    <!-- <button @click="send">将数组发送给C组件</button> -->
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      verifyInfo: {
        puzzle: 'https://i.loli.net/2019/07/24/5d37c59d2846b70245.png',
        puzzleGap: 'https://note.youdao.com/yws/public/resource/15367ab95ac676543b7b596df224a730/xmlnote/WEBRESOURCE77e8190164d0890165dbcd2b99bcab3a/16719',
        puzzleGapX: 20,
        puzzleGapY: 60
      },
      results: '111'
    }

  },

  methods: {
    getInfo (e) {
      var promise = new Promise((resovle, reject) => {
        resovle('验证回传')
      })
      promise.then(() => {
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
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
._box {
  margin-top: 200px;
}
</style>
