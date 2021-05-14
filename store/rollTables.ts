import magic from "../data/magic.json";
import melee from "../data/melee.json";
import ranged from "../data/ranged.json";
import unarmed from "../data/unarmed.json";
import { range, findIndex } from "lodash";
import { uniq, sortedUniq, find } from "lodash";

const magicTableId = "19b5710c-e3e4-4ece-aead-dd73ec01d628";

interface RollTableEntry {
  title: string;
  effect: string;
  high: number;
  low: number;
}

interface RollTableStub {
  id: string;
  name: string;
  dieSize: string;
  entries: RollTableEntry[];
}

interface RoleTablesState {
  selectedTableId: string;
  selectedEntryIndex: 0;
  tables: RollTableStub[];
  tableName: string;
  tableEntries: RollTableEntry[];
}

export const state = (): RoleTablesState => ({
  selectedTableId: magicTableId,
  selectedEntryIndex: 0,
  tables: [
    {
      id: magicTableId,
      name: "Magic",
      dieSize: "1D100",
      entries: magic,
    },
    {
      id: "bcdd5c1c-5f10-449c-b608-8b930f38f997",
      name: "Melee",
      dieSize: "1D100",
      entries: melee,
    },
    {
      id: "df8d0413-8345-4d9d-8267-c6920117a80d",
      name: "Ranged",
      dieSize: "1D100",
      entries: ranged,
    },
    {
      id: "5bcbed63-23b9-44f2-bf29-ad02e5d5f852",
      name: "Unarmed",
      dieSize: "1D100",
      entries: unarmed,
    },
  ],
  tableName: "Magic Fumnle Chart",
  tableEntries: [],
});

export const mutations = {
  setTableName(state: RoleTablesState, { name }: any) {
    state.tableName = name;
  },
  setTableEntries(state: RoleTablesState, { entries }: any) {
    state.tableEntries = entries;
  },
  setSelectedTableId(state: RoleTablesState, { id }: any) {
    state.selectedTableId = id;
  },
  setSelectedEntryIndex(state: RoleTablesState, { index }: any) {
    state.selectedEntryIndex = index;
  },
};

export const actions = {
  async findSelectedTable({
    commit,
    state: { selectedTableId, tables },
  }: {
    state: RoleTablesState;
    commit: any;
  }) {
    const { id, name, entries, dieSize } =
      tables.find(({ id: tableId }) => tableId === selectedTableId) ||
      tables[0];
    commit("setTableName", { name: `${name} Fumble Chart` });
    commit("setTableEntries", { entries: entries ?? [] });
    return { id, name, entries, dieSize };
  },
  async findSelectedEntryIndex(
    {
      dispatch,
      commit,
      state: { selectedTableId, tables },
    }: { state: RoleTablesState; dispatch: any; commit: any },
    num: number
  ) {
    const { entries } = await dispatch("findSelectedTable");
    if (entries) {
      const selectedEntryIndex = findIndex(entries, ({ high, low }: any) =>
        sortedUniq([+low, ...range(+low, +high), +high]).includes(+num)
      );
      if (selectedEntryIndex) {
        commit("setSelectedEntryIndex", { index: selectedEntryIndex });
      }
    }
  },
};
