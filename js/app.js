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

// Luna claramente reconocible: disco lunar, cráteres visibles y halo nocturno.
const moonStyle=document.createElement('style');
moonStyle.textContent=`
.sun{
  position:absolute!important;right:14%!important;top:8%!important;z-index:24!important;
  width:190px!important;height:190px!important;border-radius:50%!important;
  background:
    radial-gradient(circle at 28% 28%,#ffffff 0 3%,transparent 4%),
    radial-gradient(circle at 68% 24%,#aaa994 0 7%,transparent 8%),
    radial-gradient(circle at 38% 62%,#b7b49c 0 10%,transparent 11%),
    radial-gradient(circle at 69% 67%,#9e9d8e 0 5%,transparent 6%),
    radial-gradient(circle at 54% 42%,#c8c5aa 0 12%,transparent 13%),
    radial-gradient(circle at 35% 43%,#f4f0d4 0 22%,#ddd9bb 58%,#b6b39c 82%,#85889a 100%)!important;
  box-shadow:0 0 0 2px #f4edc955,0 0 28px #f8edbb99,0 0 75px #d8cfa066,0 0 150px #7867a455!important;
  filter:none!important;
}
.sun:before{
  content:''!important;position:absolute!important;inset:-13px!important;border-radius:50%!important;
  border:1px solid #f0dc8d66!important;box-shadow:0 0 28px #c7aee766,0 0 60px #8068a344!important;
}
.sun:after{
  content:''!important;position:absolute!important;inset:0!important;border-radius:50%!important;
  background:radial-gradient(circle at 30% 70%,transparent 0 100%)!important;
  box-shadow:inset -16px -10px 22px #65657b44,inset 10px 10px 18px #fffde033!important;
}
@media(max-width:700px){.sun{width:120px!important;height:120px!important;right:8%!important;top:9%!important}}
`;
document.head.appendChild(moonStyle);

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
