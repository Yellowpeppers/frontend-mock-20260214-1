document.querySelectorAll('button').forEach(b=>b.addEventListener('mouseenter',()=>b.style.transform='translateY(-1px)'));
document.querySelectorAll('button').forEach(b=>b.addEventListener('mouseleave',()=>b.style.transform='translateY(0)'));
