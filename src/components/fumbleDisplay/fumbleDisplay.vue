<script lang="ts" src="./fumbleDisplay.ts"></script>
<style scoped lang="scss" src="./fumbleDisplay.scss"></style>
<template>
  <div class="fumble-display" v-on:click="handleToggleFumbleModal">
    <h2 v-if="fumble.title.length > 0">{{ fumble.title }}</h2>
    <p v-if="fumble.effect.length > 0">{{ fumble.effect }}</p>
    <span class="tooltiptext">Click to expand.</span>
  </div>
</template>
