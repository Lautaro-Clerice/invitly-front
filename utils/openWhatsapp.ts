export const openWhatsApp = (message: string) => {
  const phoneNumber = "5491112345678";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};
