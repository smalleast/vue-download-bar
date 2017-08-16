#vue-download-bar
> download-bar for vue.

## props:

```
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
```

## usage:
+ install:
```bash
npm install smalleast/vue-download-bar --save


```

+ code:
```javascript
    import VueDownloadBar from '../components/download-bar.vue'

    export default {
      data() {
        return {
          AppUrl: {
            IOS: 'http://itunes.apple.com/cn/app/da-cang/id1080860264?ls=1&mt=8',
            Android: 'http://a.app.qq.com/o/simple.jsp?pkgname=cn.dcpai.auction',
            PC: 'http://www.dcpai.cn/'
          }
        };
      },
      methods: {
        getMlinks() {
          const {post_id, auctionId, activity_id, lotId, phaseId, productId, forumId} = nx.hashlize();
          let mlinks = [
            {
              hashId: post_id || '',
              link: 'http://a.mlinks.cc/AaJO'
            },
            {
              hashId: auctionId || '',
              link: 'http://a.mlinks.cc/AaJ3'
            },
            {
              hashId: activity_id || '',
              link: 'http://a.mlinks.cc/AaJj'
            },
            {
              hashId: lotId || '',
              link: 'http://a.mlinks.cc/AaJN'
            },
            {
              hashId: phaseId || '',
              link: 'https://a.mlinks.cc/AKX9'
            },
            {
              hashId: productId || '',
              link: 'https://a.mlinks.cc/AKXP'
            },
            {
              hashId: forumId || '',
              link: 'https://a.mlinks.cc/AcU4'
            }
          ];
          return mlinks;
        }
      },
      components: {VueDownloadBar}
    };


```

+template
```
<template>
  <aside class="dev">
    <VueDownloadBar :mlinks="getMlinks()" :AppUrl="AppUrl">
      测试下载
    </VueDownloadBar>
  </aside>
</template>
```

## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
