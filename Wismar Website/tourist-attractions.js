document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("attractionModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const closeModal = document.querySelector(".modal-close");

  function t(key, fallback) {
    if (window.translations && window.currentLang) {
      return window.translations[window.currentLang][key] || fallback;
    }
    return fallback;
  }

  const attractionDetails = {
    wismar: {
      titleKey: "ta_wismar_title",
      detailsKey: "ta_wismar_modal",
      title: "Wismar – UNESCO World Heritage City",
      details:
        "The historic Hanseatic city of Wismar, just 6 km from the hotel, is one of the most beautiful cities in northern Germany. Explore its medieval architecture, charming market square, impressive churches and lively harbor.",
    },

    beaches: {
      titleKey: "ta_beaches_title",
      detailsKey: "ta_beaches_modal",
      title: "Baltic Sea Beaches",
      details:
        "The nearest Baltic Sea beach is just 4 km from the hotel, ideal for a spontaneous swim or a relaxed walk along the shore. Boltenhagen seaside resort is approximately 19 km away and offers wide sandy beaches and a lively promenade.",
    },

    schwerin: {
      titleKey: "ta_schwerin_title",
      detailsKey: "ta_schwerin_modal",
      title: "Schwerin – City of Palaces",
      details:
        "Schwerin is known for its spectacular fairytale castle set on an island in Schwerin Lake, as well as its charming old town, museums and state theater. It is a perfect day trip from Sunday Hotel Wismar.",
    },

    phantechnikum: {
      titleKey: "ta_phantechnikum_title",
      detailsKey: "ta_phantechnikum_modal",
      title: "phanTechnikum Wismar",
      details:
        "The phanTechnikum in Wismar is an interactive science and technology museum with hands-on exhibitions for all ages, making it a popular destination for families and curious minds.",
    },

    cycling: {
      titleKey: "ta_cycling_title",
      detailsKey: "ta_cycling_modal",
      title: "Cycling & Hiking",
      details:
        "The area around Wismar and the Mecklenburg coast is ideal for cyclists and hikers. Well-marked trails lead through forests, along the coast and past picturesque villages.",
    },
  };

  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.attraction;
      const item = attractionDetails[key];

      if (!item) return;

      modalTitle.textContent = t(item.titleKey, item.title);
      modalDetails.textContent = t(item.detailsKey, item.details);

      modal.classList.add("active");
    });
  });

  if (closeModal) {
    closeModal.onclick = () => modal.classList.remove("active");
  }

  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    };
  }
});