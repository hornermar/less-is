const delay = 10;
let x = 0;
let y = 0;
let endX = window.innerWidth / 2;
let endY = window.innerHeight / 2;
let cursorVisible = true;
let cursorEnlarged = false;
let animationFrameId;

const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-dot-outline");

// Mouse events
const mousedownListener = () => setCursorSize(true);
const mouseupListener = () => setCursorSize(false);
const mousemoveListener = (e) => {
  cursorVisible = true;
  toggleCursorVisibility();
  endX = e.pageX;
  endY = e.pageY;
  dot.style.top = `${endY}px`;
  dot.style.left = `${endX}px`;
};
const mouseenterListener = () => setCursorVisibility(true);
const mouseleaveListener = () => setCursorVisibility(false);

// Touch events
const touchstartListener = (e) => {
  cursorVisible = true;
  toggleCursorVisibility();
  endX = e.touches[0].pageX;
  endY = e.touches[0].pageY;
  dot.style.top = `${endY}px`;
  dot.style.left = `${endX}px`;
};
const touchmoveListener = (e) => {
  cursorVisible = true;
  toggleCursorVisibility();
  endX = e.touches[0].pageX;
  endY = e.touches[0].pageY;
  dot.style.top = `${endY}px`;
  dot.style.left = `${endX}px`;
};

const setupEventListeners = () => {
  document.addEventListener("mousedown", mousedownListener);
  document.addEventListener("mouseup", mouseupListener);
  document.addEventListener("mousemove", mousemoveListener);
  document.addEventListener("mouseenter", mouseenterListener);
  document.addEventListener("mouseleave", mouseleaveListener);

  document.addEventListener("touchstart", touchstartListener);
  document.addEventListener("touchmove", touchmoveListener);
};

const removeEventListeners = () => {
  document.removeEventListener("mousedown", mousedownListener);
  document.removeEventListener("mouseup", mouseupListener);
  document.removeEventListener("mousemove", mousemoveListener);
  document.removeEventListener("mouseenter", mouseenterListener);
  document.removeEventListener("mouseleave", mouseleaveListener);

  document.removeEventListener("touchstart", touchstartListener);
  document.removeEventListener("touchmove", touchmoveListener);
};

const animateDotOutline = () => {
  x += (endX - x) / delay;
  y += (endY - y) / delay;
  outline.style.top = `${y}px`;
  outline.style.left = `${x}px`;
  animationFrameId = requestAnimationFrame(animateDotOutline);
};

const setCursorSize = (enlarged) => {
  cursorEnlarged = enlarged;
  const dotTransform = cursorEnlarged
    ? "translate(-50%, -50%) scale(0.75) rotate(45deg)"
    : "translate(-50%, -50%) scale(1) rotate(45deg)";
  const outlineTransform = cursorEnlarged
    ? "translate(-50%, -50%) scale(1.5) rotate(45deg)"
    : "translate(-50%, -50%) scale(1) rotate(45deg)";
  dot.style.transform = dotTransform;
  outline.style.transform = outlineTransform;
};

const setCursorVisibility = (visible) => {
  cursorVisible = visible;
  toggleCursorVisibility();
};

const toggleCursorVisibility = () => {
  const opacity = cursorVisible ? 1 : 0;
  dot.style.opacity = opacity;
  outline.style.opacity = opacity;
};

export const initCursor = () => {
  dot.style.display = "block";
  outline.style.display = "block";
  setupEventListeners();
  animateDotOutline();
};

export const removeCursor = () => {
  removeEventListeners();
  cancelAnimationFrame(animationFrameId);
  dot.style.display = "none";
  outline.style.display = "none";
};
