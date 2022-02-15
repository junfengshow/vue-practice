<template>
  <div class="page-content-wrap">
    <router-view></router-view>
    <div 
      class='page-footer-wrap'
    >
      <ul class="page-footer">
        <li @click="tabChange('/chat')">
          <img src='../assets/icon/icon_chat.png' alt="">
          <h4>视频聊</h4>
        </li>

        <li @click="tabChange('/live')">
          <img src='../assets/icon/icon_live.png' alt="">
          <h4>直播</h4>
        </li>

        <li @click="tabChange('/find')" v-show="currentPath==='/find'">
          <img src='../assets/icon/icon_find.png' alt="">
          <h4>发现</h4>
        </li>

        <li @click="tabChange('/message')">
          <img src='../assets/icon/icon_message.png' alt="">
          <h4>消息</h4>
        </li>

        <li @click="tabChange('/mine')">
          <img src='../assets/icon/icon_mine.png' alt="">
          <h4>我的</h4>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mainLayout',
    data (_this) {
      return {
        currentPath: _this.$route.path,
      }
    },
    computed: {
      activeClass (path) {
        return path === this.currentPath ? 'tab-active' : '';
      }
    },
    watch: {
      $route (val) {
        this.currentPath = val.path;
      }
    },
    created () {
      // console.log(this.$route.path)
    },
    methods: {
      tabChange (pathname) {
        if (pathname === this.currentPath) {
          return;
        }
        this.$router.push(pathname);
      }
    }
  }
</script>
<style scoped>
.page-content-wrap {
  padding-bottom: 50px;
}
.page-footer-wrap {
  position: fixed;
  top: unset;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  transition: all .3s ease 0s;
}
.page-footer-find-wrap {
  background: #15061A;
  color: #FFFFFF;
  transition: all .3s ease 0s;
}
.page-footer {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.page-footer > li {
  flex: 1;
  padding: 5px 0;
}
.page-footer > li > img {
  width: 24px;
  height: 24px;
  margin: 0 auto 4px;
}
.page-footer > li > h4 {
  font-size: 10px;
  line-height: 14px;
}
</style>
