---
to: src/components/<%= name %>/<%= name %>.vue
---
<script lang="ts" src="./<%= name %>.ts"></script>
<style scoped lang="scss" src="./<%= name %>.scss"></style>
<template>
  <div class="<%= name %>">
    <p>{{ msg }}</p>
  </div>
</template>
