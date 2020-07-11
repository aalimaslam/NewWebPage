const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('ul');
hamburger.addEventListener('click',()=>{
  
    nav.classList.toggle('open');
})
