document.addEventListener("DOMContentLoaded", () => {

  /* ---------- SOCIAL BUTTONS (WORK EVERYWHERE) ---------- */

  const googleBtn = document.querySelector(".google");
  if (googleBtn) {
    googleBtn.addEventListener("click", () => {
      alert("Google clicked");
    });
  }

  const facebookBtn = document.querySelector(".facebook");
  if (facebookBtn) {
    facebookBtn.addEventListener("click", () => {
      alert("Facebook clicked");
    });
  }

  const appleBtn = document.querySelector(".apple");
  if (appleBtn) {
    appleBtn.addEventListener("click", () => {
      alert("Apple clicked");
    });
  }

  /* ---------- EMAIL / LOGIN BUTTON ---------- */

  const emailBtn = document.querySelector(".email-btn");
  if (!emailBtn) return;

  emailBtn.addEventListener("click", () => {

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const email = emailInput ? emailInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value.trim() : "";

    // SIGN IN PAGE (email + password)
    if (passwordInput) {
      if (email === "" && password === "") {
        alert("Please fill Email and Password");
        return;
      }
      if (email === "") {
        alert("Email field is empty");
        return;
      }
      if (password === "") {
        alert("Password field is empty");
        return;
      }
    }

    // SIGN UP PAGE (email only)
    if (!passwordInput) {
      if (email === "") {
        alert("Please enter email");
        return;
      }
    }

    // EMAIL FORMAT CHECK
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid email address");
      return;
    }

    alert("Form submitted successfully (demo)");
  });

});
