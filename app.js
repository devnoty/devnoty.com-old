window.onload = () => {
  const navigationLinks = document.querySelectorAll("header nav a");

  navigationLinks.forEach((navigationLink) => {
    navigationLink.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = navigationLink.getAttribute("href").replace("#", "");
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
};
