<template>
  <v-card color="purple" elevation="9" class="fumble-card">
    <div id="fumble-rolls" class="flex flex-row justify-between width-full">
      <div id="low-roll">
        <strong>Low {{low}}</strong>
      </div>
      <div id="high-roll">
        <strong>High {{high}}</strong>
      </div>
    </div>
    <div id="fumble-content">
      <p class="italic pt-1">{{title}}</p>
      <hr>
      <p>{{effect}}</p>
    </div>
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
    low: Number
  }
})

@Component
export default class FumbleCard extends FumbleCardProps {

}
</script>

<style lang="scss" scoped>
.fumble-card {
  @apply bg-purple-700;
  padding: 0.75rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
}
</style>
