<template>
  <div>
      <h2>this is chat</h2>
      <p>{{name}}</p>
      <component-tag
        v-bind:type='tagType'
        v-on:tagClick='tagClick'
      >this is a tag</component-tag>
      <input type="text" v-focus>
  </div>
</template>
<script src='./index.js'></script>
<style scoped src='./index.scss' lang='scss'></style>
