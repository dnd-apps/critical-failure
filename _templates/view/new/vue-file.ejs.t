---
to: src/views/<%= name %>/<%= name %>.vue
---
<script lang="ts" src="./<%= name %>.ts"></script>
<style scoped lang="scss" src="./<%= name %>.scss"></style>
<template>
  <div class="<%= name %>">
    <h1>{{ msg }}</h1>
  </div>
</template>
