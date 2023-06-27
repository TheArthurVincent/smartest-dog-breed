const links = document.querySelectorAll('.ul-nav li');
const sections = document.querySelectorAll('section');
const vocLink = document.getElementById('voc-link');
const textLink = document.getElementById('txt');
const navigation = document.querySelector('.navigation');
const arvin = document.getElementById('arvin');
const textarea = document.getElementById('notes');

vocLink.addEventListener('click', () => {
  navigation.classList.remove('hidden');
});
textLink.addEventListener('click', () => {
  navigation.classList.add('hidden');
});

links.forEach((a, b) => {
  a.addEventListener('click', () => {
    links.forEach((a, c) => {
      if (c === b) {
        a.classList.add('selected');
      } else {
        a.classList.remove('selected');
      }
    });

    sections.forEach((a, c) => {
      if (c === b) {
        a.classList.remove('hidden');
      } else {
        a.classList.add('hidden');
      }
    });
  });
});

const navLinks = document.querySelectorAll('.navigation a');
navLinks.forEach((a) => {
  a.addEventListener('click', (b) => {
    b.preventDefault();
    const c = a.getAttribute('href');
    const d = document.querySelector(c);
    if (d) {
      const targetOffset = d.offsetTop;
      window.scrollTo({ top: targetOffset, behavior: 'smooth' });
    }
  });
});

arvin.addEventListener('dblclick', () => {
  textarea.classList.toggle('hidden');
});

const notes = document.querySelector('.notes');
let drag = false;
let offset = { x: 0, y: 0 };

notes.addEventListener('mousedown', (a) => {
  drag = true;
  offset = {
    x: a.clientX - notes.offsetLeft,
    y: a.clientY - notes.offsetTop,
  };
});

document.addEventListener('mouseup', () => {
  drag = false;
});

document.addEventListener('mousemove', (a) => {
  if (drag) {
    notes.style.left = `${a.clientX - offset.x}px`;
    notes.style.top = `${a.clientY - offset.y}px`;
  }
});
