export const formattedPrice = (price: number, locale = "fa-IR") => {
  return price.toLocaleString(locale);
};

export const getDate = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("fa-IR", options);

  const parts = formattedDate.split(" ");
  const correctedFormat =
    `${parts[3]} ${parts[2]} ${parts[1]} ${parts[0]}`.replace(",", "");

  return correctedFormat;
};

export const setToLocalStorage = (key: string, value: any) => {
  if (key.length && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getFromLocalStorage = (key: string) => {
  const value = JSON.parse(localStorage.getItem(key));
  return value ? value : null;
};
