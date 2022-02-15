// import Vue from 'vue';

const focus = {
  inserted: function (el) {
    el.focus();
  }
}

export default {
  data: function () {
    return {
      name: 'zhangsan',
      tagType: 'primary'
    }
  },
  methods: {
    tagClick (a) {
      console.log('a', a);
    }
  },
  directives: {
    focus,
  }
}
