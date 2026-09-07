const overlayStyle=document.createElement('style');
overlayStyle.textContent=`
html body .hero>.hero-copy{
  display:block!important;position:absolute!important;z-index:80!important;
  left:50%!important;top:10%!important;transform:translateX(-50%)!important;
  width:min(62%,920px)!important;text-align:center!important;padding:2.2% 4% 2.7%!important;
  background:radial-gradient(ellipse at center,#050d1bd9 0%,#050d1bac 48%,transparent 76%)!important;
  backdrop-filter:blur(2px)!important;pointer-events:auto!important;color:#f1dfbd!important;
}
html body .hero>.hero-copy .welcome{display:block!important;margin:0 0 -.2em!important;font:500 clamp(18px,2.1vw,36px)/1 'Cormorant Garamond',serif!important;font-style:italic!important;color:#f2ddb9!important;text-shadow:0 3px 18px #000!important}
html body .hero>.hero-copy h1{display:block!important;margin:0!important;font:400 clamp(46px,7.4vw,118px)/.88 'Shrikhand',cursive!important;color:#ecd3a8!important;text-shadow:3px 4px 0 #35213f,0 12px 30px #000!important;letter-spacing:-.02em!important}
html body .hero>.hero-copy .hero-sub{display:block!important;margin:.65em 0 .35em!important;font:600 clamp(8px,1.05vw,16px)/1 'DM Sans',sans-serif!important;letter-spacing:.42em!important;color:#f5e8d1!important}
html body .hero>.hero-copy .gold-rule{display:block!important;color:#d8a65d!important;font-size:clamp(10px,1.2vw,18px)!important}
html body .hero>.hero-copy .hero-text{display:block!important;margin:.6em auto .9em!important;font:400 clamp(12px,1.35vw,21px)/1.25 'Cormorant Garamond',serif!important;color:#ead8b9!important;max-width:600px!important;text-shadow:0 3px 15px #000!important}
html body .hero>.hero-copy .gold-button{display:inline-flex!important;align-items:center!important;justify-content:center!important;padding:clamp(8px,.8vw,13px) clamp(15px,1.8vw,28px)!important;border-radius:999px!important;background:linear-gradient(#e6bd77,#c9954c)!important;color:#28160a!important;font:600 clamp(7px,.7vw,11px) 'DM Sans',sans-serif!important;letter-spacing:.11em!important;box-shadow:0 9px 24px #0008!important}
@media(max-width:760px){html body .hero>.hero-copy{top:7%!important;width:68%!important;padding:2% 3%!important}.hero>.hero-copy .hero-text{display:none!important}}
`;
document.head.appendChild(overlayStyle);

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
