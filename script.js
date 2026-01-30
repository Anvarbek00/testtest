const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("[data-section-panel]");
const imageInputs = document.querySelectorAll("input[type='file'][data-preview]");

const showSection = (targetId) => {
  sections.forEach((section) => {
    section.hidden = section.id !== targetId;
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    showSection(link.dataset.section);
  });
});

showSection("plant-care");

imageInputs.forEach((input) => {
  input.addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }

    const previewId = event.target.dataset.preview;
    const targetImage = document.getElementById(previewId);
    if (!targetImage) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      targetImage.src = reader.result;
    });
    reader.readAsDataURL(file);
  });
});
