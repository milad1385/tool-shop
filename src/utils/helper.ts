const formattedPrice = (price: number, locale = "fa-IR") => {
  return price.toLocaleString(locale);
};

export { formattedPrice };
