<script lang="ts" src="./classy.ts"></script>
<style scoped lang="scss" src="./classy.scss"></style>
<template>
  <div id="classy">
    <div v-bind:key="type" v-for="(entries, type) in fumbles">
      <h2 class="fumble-type">{{type}}</h2>
      <p>D100</p>
      <table class="fumble-table">
        <thead>
          <tr>
            <th class="dice-roll">Low</th>
            <th class="dice-roll">High</th>
            <th class="name">Name</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in entries" v-bind:key="index + type">
            <td>{{entry.low}}</td>
            <td>{{entry.high}}</td>
            <td>{{entry.title}}</td>
            <td>{{entry.effect}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
