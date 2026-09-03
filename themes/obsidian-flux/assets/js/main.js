document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");

  const setOpen = (open) => {
    menu.classList.toggle("hidden", !open);
    menuBtn.setAttribute("aria-expanded", String(open));
    if (iconOpen) iconOpen.classList.toggle("hidden", open);
    if (iconClose) iconClose.classList.toggle("hidden", !open);
  };

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      setOpen(menu.classList.contains("hidden"));
    });
    menu.querySelectorAll("[data-close-menu]").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".glass-card").forEach((card) => {
    card.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-8");
    observer.observe(card);
  });
});
