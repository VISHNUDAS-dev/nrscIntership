window.addEventListener('scroll',function(){
    let nav=document.querySelector('nav');
    nav.classList.toggle('scrolling-active', window.scrollY>0);
});
document.getElementById('ac').addEventListener('click',function(){
    document.querySelector('.modalbg').style.display="flex";
    document.querySelector('body').style.overflow="hidden";
    
});
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.modalbg').style.display="none";
    document.querySelector('body').style.overflow="visible";
    
});
