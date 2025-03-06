const formattedPrice = (price: Number, locale = "fa-IR") => {
  return price.toLocaleString(locale);
};

export { formattedPrice };
