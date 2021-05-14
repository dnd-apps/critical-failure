import magic from "../data/magic.json";
import melee from "../data/melee.json";
import ranged from "../data/ranged.json";
import unarmed from "../data/unarmed.json";
import { range, findIndex } from "lodash";
import { uniq } from "lodash";
import { sortedUniq } from "lodash";

const magicTableId = "19b5710c-e3e4-4ece-aead-dd73ec01d628";

export const state = () => ({
  selectedTableId: magicTableId,
  selectedEntryIndex: 0,
  tables: [
    {
      id: magicTableId,
      name: "Magic",
      dieSize: "1D100",
      entries: magic
    },
    {
      id: "bcdd5c1c-5f10-449c-b608-8b930f38f997",
      name: "Melee",
      dieSize: "1D100",
      entries: melee
    },
    {
      id: "df8d0413-8345-4d9d-8267-c6920117a80d",
      name: "Ranged",
      dieSize: "1D100",
      entries: ranged
    },
    {
      id: "5bcbed63-23b9-44f2-bf29-ad02e5d5f852",
      name: "Unarmed",
      dieSize: "1D100",
      entries: unarmed
    }
  ]
});


export const mutations = {
  setSelectedTableId(state: any, { id }: any) {
    state.selectedTableId = id
  },
  setSelectedEntryIndex(state: any, { index }: any) {
    state.selectedEntryIndex = index;
  }
}

export const actions = {
  async findSelectedEntryIndex({ commit, state: {selectedTableId, tables} }: any, num: number) {
    const selectedTable = tables.find(({ id }: any) => id === selectedTableId)
    if (selectedTable) {
      const selectedEntryIndex = findIndex(selectedTable.entries, ({ high, low }: any) =>
        sortedUniq([+low, ...range(+low, +high), +high]).includes(+num)
      );
      if (selectedEntryIndex) {
        commit('setSelectedEntryIndex', { index: selectedEntryIndex });
      }
    }
  }
}
