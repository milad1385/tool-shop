export const DAY_NAMES: Record<number, string> = {
  0: "شنبه",
  1: "یکشنبه",
  2: "دوشنبه",
  3: "سه‌شنبه",
  4: "چهارشنبه",
  5: "پنج‌شنبه",
  6: "جمعه",
};

export const DAY_NAMES_SHORT: Record<number, string> = {
  0: "ش",
  1: "ی",
  2: "د",
  3: "س",
  4: "چ",
  5: "پ",
  6: "ج",
};

export const WEEK_DAYS = [0, 1, 2, 3, 4, 5, 6];

export const iranianDayToJs = (iranianDay: number): number => {
  return (iranianDay + 6) % 7;
};

export const jsDayToIranian = (jsDay: number): number => {
  return (jsDay + 1) % 7;
};
