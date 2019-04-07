<script lang="ts" src="./fumbleDisplay.ts"></script>
<style scoped lang="scss" src="./fumbleDisplay.scss"></style>
<template>
  <div class="fumble-display">
    <h2 v-if="fumble.title.length > 0">{{ fumble.title }}</h2>
    <p v-if="fumble.effect.length > 0">{{ fumble.effect }}</p>
  </div>
</template>
