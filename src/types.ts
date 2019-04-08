// Store
export interface State {
  fumble: Fumble;
  fumbleModalToggle: boolean;
}

// Mutation
export interface Mutations {
  setFumble: SetFumble;
}

// Fumble
export interface Fumble {
  high: number;
  low: number;
  title: string;
  effect: string;
}

export type SetFumble = (state: State, data: Fumble) => void;
