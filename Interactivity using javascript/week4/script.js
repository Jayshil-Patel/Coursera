function billingFunction() {
  if (document.getElementById("same").checked) {
    document.getElementById("billingName").value =
      document.getElementById("shippingName").value;
    document.getElementById("billingZip").value =
      document.getElementById("shippingZip").value;
      console.log("I am Jayshil");
  } else {
    document.getElementById("billingName").value = null;
    document.getElementById("billingZip").value = null;
  }
}
