const slideInLeftElements = document.querySelectorAll('.slide-in-left');

const options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 1.0, // Trigger when 50% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active'); // Remova a classe ativa se o elemento não estiver visível
    }
  });
}, options);

slideInLeftElements.forEach((element) => {
  observer.observe(element);
});
