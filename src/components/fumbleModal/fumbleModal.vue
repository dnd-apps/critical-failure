<script lang="ts" src="./fumbleModal.ts"></script>
<style scoped lang="scss" src="./fumbleModal.scss"></style>
<template>
  <div
    class="fumble-modal"
    v-on:click="handleToggle"
    :style="{display: fumbleModalToggle ? 'block' : 'none'}"
  >
    <div class="fumble-modal-content">
      <h2 v-if="fumble.title.length > 0">{{ fumble.title }}</h2>
      <hr>
      <p v-if="fumble.effect.length > 0">{{ fumble.effect }}</p>
    </div>
  </div>
</template>
