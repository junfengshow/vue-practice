<template>
  <div 
    class="tag" 
    @click="clickTag"
    v-bind:class='activeClass'
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'component-tag',
  data: function () {
    return {
    };
  },
  props: {
    title: Number,
    type: String,
  },
  computed: {
    activeClass (_this) {
      return _this.type ? `tag-${_this.type}` : '';
    }
  },
  methods: {
    clickTag () {
      this.$emit('tagClick', this.type)
    }
  }
}
</script>
<style lang="scss" scoped>
  .tag {
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    background: #eee;
    text-align: center;
    display: inline;
    border: 1px solid #ccc;
  }
  .tag-primary {
    border-color: red;
  }
</style>