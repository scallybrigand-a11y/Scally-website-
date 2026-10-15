
/* SCALLY WEBSITE */

// Preview a product photo selected from your phone
function previewProductPhoto(input, imageId) {
  const file = input.files && input.files[0];

  if (!file) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    alert("Please choose an image file.");
    return;
  }

  const image = document.getElementById(imageId);

  if (!image) {
    alert("Product image area not found.");
    return;
  }

  if (image.dataset.previewUrl) {
    URL.revokeObjectURL(image.dataset.previewUrl);
  }

  const previewUrl = URL.createObjectURL(file);

  image.dataset.previewUrl = previewUrl;
  image.src = previewUrl;
  image.hidden = false;
}

// Open WhatsApp to place a product order
function orderProduct(product, price) {
  const phone = "254759595802";

  const message =
    "Hello SCALLY! I want to order:\n\n" +
    "Product: " + product + "\n" +
    "Price: KSh " + price + "\n\n" +
    "Please confirm available sizes and delivery.";

  const link =
    "https://wa.me/" + phone +
    "?text=" + encodeURIComponent(message);

  window.open(link, "_blank");
}

