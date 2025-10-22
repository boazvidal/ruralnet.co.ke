function showForm(formId) {
    document.querySelectorAll(".form-box").forEach(form => formId.classList("active"));
    document.getElementById(formId).classList.add("active")
}

  function closeBox() {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("closing");

    // Wait for animation to finish (400ms), then hide the overlay
    setTimeout(() => {
      overlay.style.display = "none";
    }, 400);
  }

  const counters = document.querySelectorAll('.counter');
  const speed = 200; // Adjust speed (lower = faster)

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace(/,/g, '');
      const increment = target / speed;

      if (count < target) {
        const newCount = Math.ceil(count + increment);
        counter.innerText = newCount.toLocaleString();
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCount();
  });