<script lang="ts" src="./app.ts"></script>
<style  lang="scss" src="./app.scss"></style>
<template>
  <div class="app" :style="appStyle">
    <div id="content">
      <h1>Critical Failure</h1>
      <h2>Please click a combat type below:</h2>
      <div v-for="(type, index) in combatTypes" :key="index" class="rtd-combat">
        <RTDCombat :type="type" :data="fumbles[type]"></RTDCombat>
      </div>
      <FumbleDisplay></FumbleDisplay>
      <FumbleModal></FumbleModal>
    </div>
  </div>
</template>
