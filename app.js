window.onload = () => {
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
};
