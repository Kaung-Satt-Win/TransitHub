document.addEventListener("DOMContentLoaded", () => {
  // Information Icon Alert / Modal Trigger
  const infoBtn = document.getElementById("infoBtn");
  if (infoBtn) {
    infoBtn.addEventListener("click", () => {
      alert("Guarantee details: If the service provider fails to provide transport, you will receive a 150% refund on your booked ticket price.");
    });
  }

  // Log In Button Click Handler
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      console.log("Open Login Modal");
    });
  }
});