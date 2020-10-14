<template>
  <div id="index" class="sm:w-full md:w-4/5 lg:w-2/3">
    <div id="index-content" class="flex flex-col p-1">
      <div>
        <ul class="flex border-b">
          <li 
            class="-mb-px mr-1" 
            v-for="table in tables" 
            v-bind:key="table.name" 
            @click="setSelectedTable(table.id)"
          >
            <p 
              class="fumble-table-tab"
              :class="{ selected: table.id === selectedTableId }"
            >{{ table.name }}</p>
          </li>
        </ul>
      </div>
      <fumble-card class="w-full" v-bind="selectedEntry"></fumble-card>
      <div class="text-white pt-2">
        <button 
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          @click="rollTheDice">Roll</button>
        <p class="float-right">Current Roll: {{currentRoll}}</p>
      </div>
    </div>
    <footer>
      <hr>
      <a href="https://github.com/mbround18/critical-failure" target="_blank" rel="noopener noreferrer">
        <img
            class="p-1 inline-block"
            src="~/assets/GitHub-Mark-64px.png"
            srcset=""
            alt="GitHub Link"
            width="50rem"
            height="auto" />
        <span>Check this project out on GitHub!</span>
      </a>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  get selectedTableId() {
    return this.$store?.state?.rollTables?.selectedTableId;
  }

  get tables() {
    return this.$store?.state?.rollTables?.tables;
  }

  get selectedTable() {
    const rollTables = this.$store?.state?.rollTables?.tables || [];
    const selectedTable = rollTables?.find(({id}: any) => id === this.selectedTableId);
    if (selectedTable) {
      const {dieSize} =  selectedTable;
      this.$store.commit('dice/parseDice', {dieSize})
    }    
    return selectedTable;    
  }

  get currentRoll() {
    const roll = this.$store?.state?.dice?.currentRoll || 0;
    this.$store.dispatch('rollTables/findSelectedEntryIndex', roll);
    return roll;
  }

  get selectedEntryIndex() {
    return this.$store?.state?.rollTables?.selectedEntryIndex; 
  }

  get selectedEntry() {
    return this.selectedTable.entries[this.selectedEntryIndex];
  }  

  rollTheDice() {    
    this.$store.dispatch('dice/rollTheDice', { dieSize: this.selectedTable.dieSize });
    
  }

  setSelectedTable(id: string)  {
    this.$store.commit('rollTables/setSelectedTableId', { id });
  }
  
  mounted() {
    console.info(`   

░█████╗░██████╗░██╗████████╗██╗░█████╗░░█████╗░██╗░░░░░
██╔══██╗██╔══██╗██║╚══██╔══╝██║██╔══██╗██╔══██╗██║░░░░░
██║░░╚═╝██████╔╝██║░░░██║░░░██║██║░░╚═╝███████║██║░░░░░
██║░░██╗██╔══██╗██║░░░██║░░░██║██║░░██╗██╔══██║██║░░░░░
╚█████╔╝██║░░██║██║░░░██║░░░██║╚█████╔╝██║░░██║███████╗
░╚════╝░╚═╝░░╚═╝╚═╝░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚═╝╚══════╝

███████╗░█████╗░██╗██╗░░░░░██╗░░░██╗██████╗░███████╗
██╔════╝██╔══██╗██║██║░░░░░██║░░░██║██╔══██╗██╔════╝
█████╗░░███████║██║██║░░░░░██║░░░██║██████╔╝█████╗░░
██╔══╝░░██╔══██║██║██║░░░░░██║░░░██║██╔══██╗██╔══╝░░
██║░░░░░██║░░██║██║███████╗╚██████╔╝██║░░██║███████╗
╚═╝░░░░░╚═╝░░╚═╝╚═╝╚══════╝░╚═════╝░╚═╝░░╚═╝╚══════╝

Welcome to the console!! If someone told you to paste something here.. Dont.

If you know what you are doing.. Have fun! :) This is an open source application. 
Check out the GitHub for this app at: 

https://github.com/mbround18/critical-failure
    `)
  }

}
</script>
<style lang="scss">
@import "~tailwindcss/base";
@import "~tailwindcss/components";
@import '~tailwindcss/utilities';

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: monaco, Consolas, Lucida Console, monospace;
}
html {
  font-size: large;
  background-color: #202020;
  body {
    #__layout {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    // background-color: darkslategray;
    line-height: 1.7em;
    font-size: 13px;
    h1 {
      color: snow;
      text-transform: capitalize;
    }
    h2,
    h3,
    h4, 
    p,
    span,
    strong {
      color: snow;
    }
  }
}

.fumble-table-tab {
  background-color: white;
  @apply text-blue-700;
  @apply border-l;
  @apply border-t;
  @apply border-r;
  @apply rounded-t;
  @apply py-2;
  @apply px-4;
  @apply font-semibold;
  display: inline-block; 
  &.selected {
    @apply bg-blue-600;
    color: snow;
  }  
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 999999;
  hr {
    box-shadow: inset 0 15px 5px -16px #111;
  }
  img {
    filter: invert(70%);
  }
}
</style>
