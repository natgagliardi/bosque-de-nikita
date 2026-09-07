const fireflies=document.getElementById('fireflies');

for(let i=0;i<95;i++){
  const f=document.createElement('span');
  f.className='firefly'+(i%13===0?' big':'')+(i%17===0?' blue':'');
  f.style.left=`${2+Math.random()*96}%`;
  f.style.top=`${4+Math.random()*92}%`;
  f.style.animationDelay=`${Math.random()*7}s`;
  f.style.animationDuration=`${3.6+Math.random()*5.8}s`;
  f.style.opacity=`${.35+Math.random()*.65}`;
  fireflies.appendChild(f);
}

for(let i=0;i<14;i++){
  const glow=document.createElement('span');
  glow.className='lantern-glow';
  glow.style.left=`${4+Math.random()*92}%`;
  glow.style.top=`${10+Math.random()*80}%`;
  glow.style.animationDelay=`${Math.random()*5}s`;
  glow.style.transform=`scale(${.6+Math.random()*1.2})`;
  fireflies.appendChild(glow);
}

const hero=document.querySelector('.hero');
const brand=document.querySelector('.brand-overlay');
if(hero&&brand&&matchMedia('(pointer:fine)').matches){
  hero.addEventListener('mousemove',e=>{
    const r=hero.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    brand.style.transform=`translateX(-50%) translate(${x*8}px,${y*5}px)`;
  });
  hero.addEventListener('mouseleave',()=>brand.style.transform='translateX(-50%)');
}

const reveal=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');reveal.unobserve(entry.target)}
  });
},{threshold:.12});

document.querySelectorAll('.story,.shop,footer').forEach(el=>reveal.observe(el));
