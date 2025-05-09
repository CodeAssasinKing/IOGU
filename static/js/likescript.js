
  document.addEventListener("DOMContentLoaded", function () {
    const heartButtons = document.querySelectorAll(".heart-btn");

    heartButtons.forEach(button => {
      button.addEventListener("click", function () {
        const icon = this.querySelector("i");
        icon.classList.toggle("bi-heart");
        icon.classList.toggle("bi-heart-fill");
        this.classList.toggle("text-danger");
        this.classList.toggle("text-white");
      });
    });
  });

