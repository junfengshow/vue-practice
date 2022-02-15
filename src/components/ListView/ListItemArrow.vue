<template>
  <div class="wrap">
    <div class="item-left">
      <slot></slot>
      <span>{{title}}</span>
    </div>
    <div class="item-right">
      <img src="../../assets/icon/icon_arrow_right.png" alt="">
    </div>
  </div>
</template>
<script>

export default {
  name: 'listItemArrow',
  props: {
    title: String
  }
}
</script>
<style lang="scss" scoped>
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
  }
  .item-left, .itme-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .item-left {
    color: #303133;;
    font-size: 15px
  }
  .item-right {
    color: #C0C4CC;
    font-size: 13px;
  }
  .item-left img {
    width: 18px;
    height: 18px;
    display: block;
    margin-right: 9px;
  }
  .item-right img {
    width: 6px;
    height: 10px;
    display: block;
    margin-left: 12px;
  }
</style>