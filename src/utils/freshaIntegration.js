// Fresha booking integration utilities

export const FRESHA_BOOKING_URL = 'https://www.fresha.com'; // Replace with actual Fresha booking URL

export const openFreshaBooking = (serviceId = null) => {
    // If a specific service is provided, you can append it to the URL
    // Example: https://www.fresha.com/book-now/sava-beauty?service=nails
    const url = serviceId
        ? `${FRESHA_BOOKING_URL}?service=${serviceId}`
        : FRESHA_BOOKING_URL;

    window.location.href = url;
};

export const embedFreshaWidget = (containerId) => {
    // This function can be used to embed the Fresha widget
    // You'll need to replace this with actual Fresha embed code
    const container = document.getElementById(containerId);
    if (!container) return;

    // Placeholder for Fresha widget embed code
    // Replace with actual Fresha script provided by Fresha
    console.log('Fresha widget would be embedded here');
};
