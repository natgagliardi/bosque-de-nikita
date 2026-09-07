// PORTADA EXACTA A LA IMAGEN DE REFERENCIA
// La escena completa (fondo, luna, bosque, carteles y personajes) está embebida
// como imagen en .hero. Este script elimina cualquier capa HTML que pudiera
// taparla o modificarla para que la página se vea exactamente como la referencia.

(() => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  document.querySelectorAll('body > :not(main), main > :not(.hero)').forEach(el => {
    el.style.setProperty('display', 'none', 'important');
  });

  document.querySelectorAll('.hero > *').forEach(el => {
    el.style.setProperty('display', 'none', 'important');
  });

  hero.style.setProperty('display', 'block', 'important');
  hero.style.setProperty('position', 'relative', 'important');
  hero.style.setProperty('width', '100vw', 'important');
  hero.style.setProperty('max-width', 'none', 'important');
  hero.style.setProperty('height', 'auto', 'important');
  hero.style.setProperty('min-height', '0', 'important');
  hero.style.setProperty('aspect-ratio', '3 / 2', 'important');
  hero.style.setProperty('margin', '0', 'important');
  hero.style.setProperty('padding', '0', 'important');
  hero.style.setProperty('overflow', 'hidden', 'important');
  hero.style.setProperty('background-size', '100% 100%', 'important');
  hero.style.setProperty('background-position', 'center top', 'important');
  hero.style.setProperty('background-repeat', 'no-repeat', 'important');
  hero.style.setProperty('background-color', '#020713', 'important');

  document.body.style.setProperty('margin', '0', 'important');
  document.body.style.setProperty('padding', '0', 'important');
  document.body.style.setProperty('background', '#020713', 'important');
})();
