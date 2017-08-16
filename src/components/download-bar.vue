<template>
  <div id="app" class="download-bar">
    <a id="openAppDown">
      <div class="bottom-tip" :class="className">
        <slot>
          打开龘藏APP更多精彩
        </slot>
      </div>
    </a>
  </div>
</template>
<script type="text/javascript">
  import browser from 'nx-browser';

  export default {
    props: {
      mlinks: {
        type: [Object, Array],
      },
      AppUrl: {
        type: [Object, String]
      },
      className: {
        type: String
      }
    },
    methods: {
      download() {

        if (browser.ios) {
          window.location.href = this.AppUrl.IOS;
        } else if (browser.android) {
          window.location.href = this.AppUrl.Android;
        } else {
          window.location.href = this.AppUrl.PC;
        }
      },
    },
    mounted() {
      let options = [];
      this.mlinks.length > 0 && this.mlinks.map((item, index) => {
        if (!!item.hashId) {
          options = [{
            mlink: item.link,
            button: document.querySelector("a#openAppDown"),
            params: {id: item.hashId}
          }];
        }
      });
      if (browser.ios && !browser.ios8 && !!options) {
        new Mlink(options);
      } else {
        document.getElementById('openAppDown').onclick = function () {
          this.download();
        };
      }
    }
  }

</script>
<style rel="stylesheet/scss" lang="scss">
  .download-bar {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    .bottom-tip {
      width: 100%;
      height: 49px;
      line-height: 49px;
      text-align: center;
      background: rgb(167, 46, 35);
      color: #fff;
      position: fixed;
      z-index: 100;
      bottom: 0;
      left: 0;
      font-size: 14px;
      &:active {
        background: #7b1c1a;
      }
    }
  }
</style>
