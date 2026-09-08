import magic from "./magic.json";
import melee from "./melee.json";
import ranged from "./ranged.json";
import unarmed from "./unarmed.json";

export interface RollTableEntry {
  title: string;
  effect: string;
  low: number;
  high: number;
}

export interface RollTable {
  id: string;
  name: string;
  dieSize: string;
  entries: RollTableEntry[];
}

export const tables: RollTable[] = [
  {
    id: "19b5710c-e3e4-4ece-aead-dd73ec01d628",
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
];

/** Finds the entry whose inclusive low..high range contains the roll. */
export function findEntryForRoll(
  entries: RollTableEntry[],
  roll: number,
): RollTableEntry | undefined {
  return entries.find(({ low, high }) => roll >= low && roll <= high);
}
