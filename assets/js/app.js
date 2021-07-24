window.onload = () => {
  // navigation link
  const navigationLinks = document.querySelectorAll(
    "[data-role='navigation-link']"
  );

  navigationLinks.forEach((navigationLink) => {
    navigationLink.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = navigationLink
        .getAttribute("data-href")
        .replace("#", "");
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });

  // contact form
  const contactForm = document.querySelector('form[name="contact"]');
  const successMessageEl = document.getElementById(
    "contact-form-success-message"
  );
  const errorMessageEl = document.getElementById("contact-form-error-message");
  const formSubmitButton = contactForm.querySelector("button");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    successMessageEl.style.display = "none";
    errorMessageEl.style.display = "none";
    formSubmitButton.setAttribute("disabled", "true");

    const formData = new FormData(contactForm);

    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("message")
    ) {
      errorMessageEl.style.display = "block";
      errorMessageEl.textContent = "Please fill the form inputs";
      formSubmitButton.removeAttribute("disabled");
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        contactForm.querySelector("input[name='name']").value = "";
        contactForm.querySelector("input[name='email']").value = "";
        contactForm.querySelector("textarea").value = "";
        successMessageEl.style.display = "block";
        formSubmitButton.removeAttribute("disabled");
      })
      .catch((error) => {
        formSubmitButton.removeAttribute("disabled");
        errorMessageEl.style.display = "block";
        errorMessageEl.textContent = error.message;
      });
  });
};
