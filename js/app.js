const fireflies=document.getElementById('fireflies');
if(fireflies){
  fireflies.innerHTML='';
  for(let i=0;i<72;i++){
    const f=document.createElement('span');
    f.className='firefly'+(i%13===0?' blue':'');
    f.style.left=`${2+Math.random()*96}%`;
    f.style.top=`${3+Math.random()*92}%`;
    f.style.animationDelay=`${-Math.random()*7}s`;
    f.style.animationDuration=`${4+Math.random()*5}s`;
    f.style.opacity=(0.35+Math.random()*0.65).toFixed(2);
    fireflies.appendChild(f);
  }
}

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const id=a.getAttribute('href');
  const el=id&&id.length>1?document.querySelector(id):null;
  if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
}));
