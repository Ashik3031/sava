// Fresha booking integration utilities

export const FRESHA_BOOKING_URL =
  "https://www.fresha.com/book-now/ymichshan-gmail-com-wbb0xaa2/all-offer?share=true&pId=2713941";

export const openFreshaBooking = (serviceId = null) => {
  const separator = FRESHA_BOOKING_URL.includes("?") ? "&" : "?";

  const url = serviceId
    ? `${FRESHA_BOOKING_URL}${separator}service=${encodeURIComponent(serviceId)}`
    : FRESHA_BOOKING_URL;

  window.open(url, "_blank", "noopener,noreferrer");
};

export const embedFreshaWidget = (containerId) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  console.log("Fresha widget would be embedded here");
};