document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("facilityModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const closeModal = document.querySelector(".modal-close");

  function t(key, fallback) {
    if (window.translations && window.currentLang) {
      return window.translations[window.currentLang][key] || fallback;
    }
    return fallback;
  }

  const facilityDetails = {
    indoor: {
      key: "pool_indoor_modal",
      details:
        "The spacious indoor pool is ideal for refreshing lengths, gentle swimming or simply floating and unwinding, regardless of the weather outside.",
    },
    family: {
      key: "pool_family_modal",
      details:
        "Children will love the indoor pool at Sunday Hotel Wismar. It is a highlight of every family stay and offers space for splashing, playing and relaxing together.",
    },
    wellness: {
      key: "pool_wellness_modal",
      details:
        "The pool is part of the Wissemare wellness area, where guests can also enjoy the sauna area, steam bath, jacuzzis, rooftop terrace and fitness studio.",
    },
    relax: {
      key: "pool_relax_modal",
      details:
        "After exploring the Baltic coast or the charming streets of Wismar, the pool offers a calm place to recharge body, mind and soul.",
    },
  };

  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const facility = btn.dataset.facility;

      modalTitle.textContent = btn.parentElement.querySelector("h3").textContent;

      const item = facilityDetails[facility];

      modalDetails.textContent = item ? t(item.key, item.details) : "";

      modal.classList.add("active");
    });
  });

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }

  const animatedElements = document.querySelectorAll("[data-animate]");

  if (animatedElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 },
  );

  animatedElements.forEach((el) => observer.observe(el));
});