document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("roomModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const closeModal = document.querySelector(".modal-close");

  function t(key, fallback) {
    if (window.translations && window.currentLang) {
      return window.translations[window.currentLang][key] || fallback;
    }
    return fallback;
  }

  const roomDetails = {
    standard: {
      titleKey: "room_room1_title",
      detailsKey: "room_room1_modal",
      title: "Standard Room",
      details:
        "Our bright and thoughtfully furnished standard rooms offer everything you need for a comfortable stay, whether you are visiting for business or leisure. Highlights include air conditioning, orthopedic mattress, flat-screen satellite TV, work desk, telephone, free Wi-Fi and a private bathroom with bathtub, WC, hairdryer and magnifying mirror.",
    },

    superior: {
      titleKey: "room_room2_title",
      detailsKey: "room_room2_modal",
      title: "Superior Room",
      details:
        "Our superior rooms offer additional comfort and space, perfect for guests who want a little extra after a day of sightseeing or meetings. Amenities include air conditioning, orthopedic mattress, flat-screen satellite TV, work desk, telephone, free Wi-Fi, private bathroom with bathtub, WC, hairdryer and magnifying mirror, plus tea and coffee making facilities.",
    },

    family: {
      titleKey: "room_room3_title",
      detailsKey: "room_room3_modal",
      title: "Family Room",
      details:
        "Our family rooms provide plenty of space for parents and children. They include a spacious layout, air conditioning, orthopedic mattresses, flat-screen satellite TV, free Wi-Fi and a private bathroom with bathtub, WC and hairdryer. Children’s cots are available on request.",
    },
  };

  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.room;
      const room = roomDetails[key];

      if (!room) return;

      modalTitle.textContent = t(room.titleKey, room.title);
      modalDetails.textContent = t(room.detailsKey, room.details);
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

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      const filter = btn.dataset.filter;

      document.querySelectorAll(".room-card").forEach((card) => {
        if (filter === "all" || card.dataset.type === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  const animated = document.querySelectorAll("[data-animate]");

  if (animated.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    animated.forEach((el) => observer.observe(el));
  }
});