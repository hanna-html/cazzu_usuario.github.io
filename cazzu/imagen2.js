const img = document.getElementById('imagen');
let scale = 1;
let originX = 0;
let originY = 0;
let isDragging = false;
let startX, startY;

const updateTransform = () => {
  img.style.transform = `translate(${originX}px, ${originY}px) scale(${scale})`;
};

// Zoom con rueda del mouse
img.addEventListener('wheel', (e) => {
  e.preventDefault();
  const zoomFactor = 0.1;
  if (e.deltaY < 0) {
    scale += zoomFactor;
  } else {
    scale = Math.max(0.1, scale - zoomFactor);
  }
  updateTransform();
});

// Arrastrar imagen
img.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - originX;
  startY = e.clientY - originY;
  img.parentElement.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  img.parentElement.style.cursor = 'grab';
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  originX = e.clientX - startX;
  originY = e.clientY - startY;
  updateTransform();
});
