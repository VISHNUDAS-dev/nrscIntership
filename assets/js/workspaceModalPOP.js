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
    document.getElementById('cat').value="";

    
});
let input=document.getElementById('cat');
let button=document.getElementById('newcat');
button.disabled=true;
input.addEventListener("keyup",stateHandle);
function stateHandle()
{
    if(document.getElementById('cat').value===""){
        button.disabled=true;
    }else
    {
        button.disabled=false;
    }
}

let textinput=document.getElementById('tarea');
let gbutton=document.getElementById('ttsbtn');
gbutton.disabled=false;
textinput.addEventListener("keyup",stateHandler);
function stateHandler()
{
    if(document.getElementById('tarea').value===""){
        gbutton.disabled=true;
    }else
    {
        gbutton.disabled=false;
    }
}

let fpsinput=document.getElementById('loop');
let fpsbutton=document.getElementById('makevideo');
fpsbutton.disabled=true;
fpsinput.addEventListener("keyup",stateHandler);
function stateHandler()
{
    if(document.getElementById('loop').value==="" || document.getElementById('loop').value<1 ){
        fpsbutton.disabled=true;
    }else
    {
        fpsbutton.disabled=false;
    }
}



