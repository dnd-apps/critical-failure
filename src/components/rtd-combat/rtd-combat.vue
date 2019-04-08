<script lang="ts" src="./rtd-combat.ts"></script>
<style scoped lang="scss" src="./rtd-combat.scss"></style>
<template>
  <div class="rtd-combat-content">
    <button v-on:click="handleRtd" class="ripple">{{this.state.type}}</button>
    <p>{{note}}</p>
    <h4>{{state.title}}</h4>
    <p>{{state.effect}}</p>
  </div>
</template>
