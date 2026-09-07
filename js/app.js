const fireflies=document.getElementById('fireflies');
for(let i=0;i<24;i++){const f=document.createElement('span');f.className='firefly';f.style.left=`${5+Math.random()*90}%`;f.style.top=`${8+Math.random()*84}%`;f.style.animationDelay=`${Math.random()*4}s`;f.style.animationDuration=`${3+Math.random()*4}s`;fireflies.appendChild(f)}

document.querySelector('.newsletter form')?.addEventListener('submit',e=>{e.preventDefault();const btn=e.currentTarget.querySelector('button');btn.textContent='✨ ¡Ya sos parte del bosque!';e.currentTarget.querySelector('input').value='';setTimeout(()=>btn.textContent='Suscribirme ✦',3500)});
document.querySelectorAll('.heart').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.toggle('active');btn.textContent=btn.classList.contains('active')?'♥':'♡'}));
document.querySelectorAll('.adopt').forEach(btn=>btn.addEventListener('click',()=>{const bag=document.querySelector('.bag i');bag.textContent=String(Number(bag.textContent)+1);btn.textContent='✓ Agregado'}));
document.querySelector('[data-action="search"]')?.addEventListener('click',()=>{document.getElementById('habitantes')?.scrollIntoView({behavior:'smooth'})});
