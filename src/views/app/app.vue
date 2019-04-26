<script lang="ts" src="./app.ts"></script>
<style  lang="scss" src="./app.scss"></style>
<template>
  <div class="app" :style="appStyle">
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>
