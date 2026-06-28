document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  const courseModal = document.getElementById("courseModal");
  if (courseModal) {
    courseModal.addEventListener("show.bs.modal", (event) => {
      const trigger = event.relatedTarget;
      if (!trigger) return;

      const courseTitle = trigger.getAttribute("data-course-title");
      const courseText = trigger.getAttribute("data-course-text");
      const courseDuration = trigger.getAttribute("data-course-duration");
      const modalTitle = courseModal.querySelector(".modal-title");
      const modalBody = courseModal.querySelector(".modal-body");

      modalTitle.textContent = courseTitle;
      modalBody.innerHTML = `<p class="mb-2">${courseText}</p><p class="mb-0 fw-semibold">Duracion estimada: ${courseDuration}</p>`;
    });
  }

  const blogForm = document.getElementById("blogSubscribeForm");
  if (blogForm) {
    blogForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInput = document.getElementById("blogEmail");
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        emailInput.classList.add("is-invalid");
        return;
      }

      emailInput.classList.remove("is-invalid");
      const subscriptionModal = new bootstrap.Modal(document.getElementById("subscriptionModal"));
      subscriptionModal.show();
      blogForm.reset();
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        event.stopPropagation();
        contactForm.classList.add("was-validated");
        return;
      }

      const toastEl = document.getElementById("contactToast");
      if (toastEl) {
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
      }
      contactForm.reset();
      contactForm.classList.remove("was-validated");
    });
  }
});
