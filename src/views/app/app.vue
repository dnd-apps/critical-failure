<script lang="ts" src="./app.ts"></script>
<style scoped lang="scss" src="./app.scss"></style>
<template>
  <div class="app">
    <h1>Critical Failure</h1>
    <h2>Please click a combat type below:</h2>
    <div v-for="(type, index) in combatTypes" :key="index">
      <RTDCombat :type="type" :data="fumbles[type]"></RTDCombat>
    </div>
    <FumbleDisplay></FumbleDisplay>
  </div>
</template>
