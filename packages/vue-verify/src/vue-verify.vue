<template>
  <div class="verify">
    <div class="show_butn">
      <div @click="showVerified">点击开始验证</div>
    </div>
    <div class="box"
         v-show="boxShow">
      <div class='box_title'>拖动下方滑块完成拼图</div>
      <div class="boxImage">
        <div class="imageArea">
          <img class="verifyImage"
               :src="verifyInfo.puzzle" />
        </div>
        <div>
          <img @mousedown="mousedownFn($event)"
               @mousemove="mouseMoveFn($event)"
               @mouseup="moseUpFn($event)"
               :class="{'around animated':btnFailShake}"
               class="verified"
               id="verifiedGap"
               :src="verifyInfo.puzzleGap" />
        </div>
        <div class="suessMask"
             v-show="showStatus">
          <div class='sucess_prompt'>{{sucesePrompt}}</div>
        </div>
      </div>
      <div class="drag"
           ref="dragDiv">
        <div class="stroke"></div>

        <div class="drag_text">{{confirmWords}}</div>
        <div ref="moveDiv"
             @mousedown="mousedownFn($event)"
             @mousemove="mouseMoveFn($event)"
             @mouseup="moseUpFn($event)"
             :class="{'handler_ok_bg':confirmSuccess,'around animated':btnFailShake}"
             class="handler handler_bg "
             style="position: absolute;top: 0px;left: 0px;"></div>
      </div>
      <!--提示-->
      <div class="result">
        <span class="result_title">{{resultTitle}}</span>
        <img class="reflesh"
             src="../src/assets/image/iconRefresh.png"
             @click="refleshVerify" />
        <img class="out"
             src="../src/assets/image/iconOut.png"
             @click="dropOut" />
      </div>
      <div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import './assets/css/animation.css';
import { getDefalutElementsStyle } from './utils/getElements';
export default {
  name: 'vueVerify',
  data () {
    return {
      verifyInfo: {}, /** 拼图初始化数据 */
      boxShow: false,   /**验证弹框默认隐藏 */
      showStatus: false,  /**/
      sucesePrompt: '验证成功',    /*验证成功的提示*/
      btnFailShake: false,        /*按钮失败抖动 */
      resultTitle: '由心诉科技提供支持', /* 动态结果文字提示 */
      failOpertionNumber: 0,        /* 失败操作次数 失败3次会重新换图*/
      beginClientX: 0,           /*距离屏幕左端距离*/
      mouseMoveStata: false,     /*触发拖动状态  判断*/
      maxwidth: '',               /*拖动最大宽度，依据滑块宽度算出来的*/
      confirmWords: '拖动滑块验证',   /*滑块文字*/
      confirmSuccess: false           /*验证成功判断*/
    }
  },
  components: {
  },
  mounted () {

  },
  methods: {
    // 显示验证拼块
    showVerified () {
      // 获取数据（拼图 位置）
      this.$emit("sendVerif", '获取数据');
      let promise = new Promise((resovle, reject) => {
        this.$on('global:getVerifyInfo', (param) => {
          window.console.log(param);
          resovle(param);
          if (param == '') {
            reject('回传正确的数据')
          }
        });
      })
      promise.then((data) => {
        window.console.log(data);
        this.verifyInfo = data;
        window.console.log('获取数据（拼图 位置）');
        this.maxwidth = 340;
        getDefalutElementsStyle(this.verifyInfo);
        // document.getElementsByClassName('verified')[0].style.left = `${this.verifyInfo.puzzleGapX}px`;
        // document.getElementsByClassName('verified')[0].style.top = `${this.verifyInfopuzzleGapY}px`;
        // document.getElementsByClassName('handler')[0].style.left = `${this.verifyInfo.puzzleGapX}px`;
      })
      // 显示 验证弹框
      this.boxShow = true;
    },
    //  mousedoen 事件
    mousedownFn: function (e) {
      //获取移动的坐标
      if (!this.confirmSuccess) {
        e.preventDefault && e.preventDefault();   //阻止文字选中等 浏览器默认事件
        this.mouseMoveStata = true;
        this.beginClientX = e.clientX;
      }
    },
    // mousemove事件           
    mouseMoveFn (e) {
      window.console.log(`mousemove事件--移动的距离:`);
      if (this.mouseMoveStata) {
        let width = e.clientX - this.beginClientX;
        window.console.log(`mousemove事件--移动的距离:${width}`);
        // 判断移动位置出现负数的现象
        if (width > 0 && width <= this.maxwidth) {
          window.console.log(`mousemove事件--移动的距离:${width}`);
          document.getElementsByClassName('handler')[0].style.left = `${width}px`;
          document.getElementsByClassName('verified')[0].style.left = `${width}px`;
        }
      }
    },
    // mouseup事件
    moseUpFn (e) {
      //  1.鼠标放下进行延时验证 
      //  2. 验证失败 进行动画提示 并返回原点更新图片
      // #获取移动的x坐标值 
      this.mouseMoveStata = false;
      let width = e.clientX - this.beginClientX;
      // 获取到的移动值  传给父组件 
      // window.console.log(`mouseup事件-移动的距离:${width}`);
      this.$emit("movedistance", width);
      //  等待父组件返回的结果
      window.console.log('param');
      var promise = new Promise((resovle, reject) => {
        this.$on('global:validationResults', (param) => {
          resovle(param);
          window.console.log(param)
          if (param == '') {
            reject('回传正确的数据')
          }
        });
      })
      promise.then((data) => {
        const _reslut = data;
        window.console.log(_reslut)
        if (_reslut === '111') {
          //  验证成功 
          window.console.log('验证通过')
          this.confirmSuccess = true
          this.confirmWords = '验证通过';
          this.showStatus = true;
        }
      })
    },
    // 刷新数据 拼图
    refleshVerify () {
      // 从新获取 数据进行验证
      // 恢复初始状态 重新获取 基本数据
      // 1.恢复初始样式
      this.showStatus = false;
      // 2.恢复缺块和移动按钮的位置
      this.verifyInfo = {};

    },
    // 退出隐藏
    dropOut () {
      //  关闭弹框
      this.boxShow = false;


    }

  },
}
</script>
<style scoped>
.verify {
  border: 1px solid red;
}
.show_butn {
  height: 50px;
  width: 200px;
  border: 1px solid red;
}
.box {
  background-color: #fff;
  position: relative;
  z-index: 6;
  top: -150px;
  left: 50px;
  width: 340px;
  border: 1px solid rgb(139, 137, 137);
  padding: 0 10px 0 10px;
}
.box_title {
  padding: 20px 0 20px 0px;
  text-align: left;
  /* height: 50px; */
  font-size: 15px;
  /* border: 1px solid red; */
  color: black;
}
.sucess_prompt {
  position: absolute;
  left: 80px;
  top: 80px;
  /* align-items: center; */
  color: #5def36;
  font-size: 20px;
  font-weight: 800;
}
/***/
.boxImage {
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 0 px 0 rgba(0, 0, 0, 0.4);
}
.suessMask {
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 11;
  opacity: 0.7;
  position: absolute;
  top: 0px;
  left: 0px;
}
.verifyImage {
  height: 200px;
  width: 100%;
}
.verified {
  height: 70px;
  width: 70px;
  z-index: 10;
  position: absolute;
  top: 0px;
  left: 0px;
}

/***/
.drag {
  position: relative;
  /* background-color: #e8e8e8; */
  /* border: 1px solid red; */
  width: 100%;
  height: 34px;
  font-size: 10px;
  line-height: 34px;
  text-align: center;
}
.stroke {
  width: 100%;
  height: 15px;
  background-color: #e4e4e4;
  position: relative;
  top: 10px;
  border-radius: 20px;
}
.handler {
  width: 60px;
  height: 32px;
  /* border: 1px solid #ccc; */
  border-radius: 50px;
  cursor: move;
}
.handler_bg {
  background: #fff url("../src/assets/image/iconSlider.png") no-repeat center;
}
.handler_ok_bg {
  background: #fff
    url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==")
    no-repeat center;
}
/* .drag_bg {
  background-color: #7ac23c;
  height: 34px;
  width: 0px;
} */
.drag_text {
  position: absolute;
  top: 0px;
  width: 100%;
  text-align: center;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
}
/**动态文字提示*/
.result {
  margin-top: 20px;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.result_title {
  font-size: 10px;
}
.reflesh {
  height: 20px;
  width: 20px;
  /* border: 1px solid red; */
  margin-left: 150px;
}
.out {
  height: 20px;
  width: 20px;
}
</style>
