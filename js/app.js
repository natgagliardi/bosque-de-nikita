const fireflies=document.getElementById('fireflies');

// Muchas luces cálidas y algunas azuladas, como un bosque nocturno lleno de vida.
for(let i=0;i<58;i++){
  const f=document.createElement('span');
  f.className='firefly'+(i%11===0?' big':'')+(i%17===0?' blue':'');
  f.style.left=`${3+Math.random()*94}%`;
  f.style.top=`${8+Math.random()*82}%`;
  f.style.animationDelay=`${Math.random()*6}s`;
  f.style.animationDuration=`${3.5+Math.random()*5}s`;
  fireflies.appendChild(f);
}

// Halos de luz suaves para romper el fondo plano.
for(let i=0;i<7;i++){
  const glow=document.createElement('span');
  glow.className='lantern-glow';
  glow.style.left=`${8+Math.random()*84}%`;
  glow.style.top=`${12+Math.random()*68}%`;
  glow.style.animationDelay=`${Math.random()*4}s`;
  fireflies.appendChild(glow);
}

document.querySelector('.newsletter form')?.addEventListener('submit',e=>{
  e.preventDefault();
  const btn=e.currentTarget.querySelector('button');
  btn.textContent='✨ ¡Ya sos parte de la montaña!';
  e.currentTarget.querySelector('input').value='';
  setTimeout(()=>btn.textContent='Entrar al pueblo ✦',3500);
});

document.querySelectorAll('.heart').forEach(btn=>btn.addEventListener('click',()=>{
  btn.classList.toggle('active');
  btn.textContent=btn.classList.contains('active')?'♥':'♡';
}));

document.querySelectorAll('.adopt').forEach(btn=>btn.addEventListener('click',()=>{
  const bag=document.querySelector('.bag i');
  bag.textContent=String(Number(bag.textContent)+1);
  btn.textContent='✓ Agregado';
  setTimeout(()=>btn.textContent='Ver pieza ♡',1800);
}));

document.querySelector('[data-action="search"]')?.addEventListener('click',()=>{
  document.getElementById('coleccion')?.scrollIntoView({behavior:'smooth'});
});
