window.addEventListener('scroll',function(){
    let nav=document.querySelector('nav');
    nav.classList.toggle('scrolling-active', window.scrollY>0);
});
document.getElementById('upimg').addEventListener('click',function(){
    document.querySelector('.modalbg').style.display="flex";
});