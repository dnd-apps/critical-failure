<template>
  <v-card color="purple" elevation="9" dark>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle class="flex flex-row justify-between width-full">
      <div id="low-roll">
        <strong>Low {{ low }}</strong>
      </div>
      <div id="high-roll">
        <strong>High {{ high }}</strong>
      </div>
    </v-card-subtitle>
    <v-card-text>{{ effect }}</v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
const FumbleCardProps = Vue.extend({
  props: {
    title: String,
    effect: String,
    high: Number,
    low: Number,
  },
});

@Component
export default class FumbleCard extends FumbleCardProps {}
</script>

<style lang="scss" scoped></style>
