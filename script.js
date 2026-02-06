/* ===============================
   SLIDER INFINITO WM ACESOCELL
================================ */

const sliderTrack = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
const slideCount = slides.length;
let autoSlide;

/* ===== CLONAR PRIMER SLIDE ===== */
const firstClone = slides[0].cloneNode(true);
sliderTrack.appendChild(firstClone);

/* ===== ACTUALIZAR SLIDER ===== */
function updateSlider(animate = true) {
  sliderTrack.style.transition = animate ? "transform 0.6s ease-in-out" : "none";
  sliderTrack.style.transform = `translateX(-${index * 100}%)`;
}

/* ===== SIGUIENTE ===== */
function nextSlide() {
  index++;
  updateSlider(true);

  if (index === slideCount) {
    setTimeout(() => {
      index = 0;
      updateSlider(false);
    }, 600);
  }
}

/* ===== ANTERIOR ===== */
function prevSlide() {
  if (index === 0) {
    index = slideCount;
    updateSlider(false);
  }

  setTimeout(() => {
    index--;
    updateSlider(true);
  }, 20);
}

/* ===== AUTO SLIDE ===== */
function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

/* ===== EVENTOS ===== */
nextBtn.addEventListener("click", () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});

sliderTrack.addEventListener("mouseenter", stopAutoSlide);
sliderTrack.addEventListener("mouseleave", startAutoSlide);

/* ===== INICIAR ===== */
updateSlider(false);
startAutoSlide();

/* ===== LOG ===== */
console.log("Slider infinito WM Acesocell activo");


// const whatsappBtn = document.querySelector('.whatsapp-float');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 200) {
//     whatsappBtn.style.opacity = '1';
//     whatsappBtn.style.transform = 'scale(1)';
//   } else {
//     whatsappBtn.style.opacity = '0.7';
//     whatsappBtn.style.transform = 'scale(0.9)';
//   }
// });

/* ===========================
   WHATSAPP FLOTANTE
=========================== */

const floatBtn = document.querySelector('.whatsapp-float');

if (floatBtn) {
  const phoneNumber = '573103647963'; // número WhatsApp
  const message = 'Hola, estoy interesado adquirir un producto.';

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  floatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}
floatBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let message = 'Hola, quiero más información.';
  if (window.location.pathname.includes('productos')) {
    message = 'Hola, quiero información sobre sus productos.';
  }

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});

