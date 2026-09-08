export interface Dice {
  numberOfDice: number;
  dieSize: number;
}

const DICE_PATTERN = /^\s*(\d+)\s*[dD]\s*(\d{1,3})\s*$/;

const DEFAULT_DICE: Dice = { numberOfDice: 1, dieSize: 20 };

/**
 * Parses notation such as "1D100" into its dice count and die size.
 * Falls back to 1d20 when the notation cannot be understood.
 */
export function parseDice(notation: string): Dice {
  const matches = DICE_PATTERN.exec(notation);
  if (!matches) {
    return DEFAULT_DICE;
  }
  return { numberOfDice: Number(matches[1]), dieSize: Number(matches[2]) };
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Rolls `numberOfDice` dice of `dieSize` sides and returns the total. */
export function roll({ numberOfDice, dieSize }: Dice): number {
  return Array.from({ length: numberOfDice }, () =>
    randomInt(1, dieSize),
  ).reduce((total, value) => total + value, 0);
}
