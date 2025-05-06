const formattedPrice = (price: number, locale = "fa-IR") => {
  return price.toLocaleString(locale);
};

const getDate = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("fa-IR", options as any);

  // جداسازی اجزای تاریخ و تغییر ترتیب آنها
  const parts = formattedDate.split(" ");
  const correctedFormat =
    `${parts[3]} ${parts[2]} ${parts[1]}  ${parts[0]}`.replace(",", "");

  return correctedFormat;
};
export { formattedPrice, getDate };
