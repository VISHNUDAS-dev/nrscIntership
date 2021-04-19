window.addEventListener('scroll',function(){
    let nav=document.querySelector('nav');
    nav.classList.toggle('scrolling-active', window.scrollY>0);
});
document.getElementById('upimg').addEventListener('click',function(){
    document.querySelector('.modalbg').style.display="flex";
    document.querySelector('body').style.overflow="hidden";
    
});
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.modalbg').style.display="none";
    document.querySelector('body').style.overflow="visible";
    
});

//saving user data into the session memory
function handle_next(){

    const cat=document.getElementById('video_cat').value;
    const file=document.getElementById('filename').value;
    sessionStorage.setItem("CAT",cat);
    sessionStorage.setItem("FNAME",file);
    return;

}