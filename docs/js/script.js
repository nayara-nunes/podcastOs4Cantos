let list = document.querySelectorAll('.list');
    function setActiveClass(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');

}
    list.forEach((item)=> item.addEventListener('mouseover' ,setActiveClass) )



    //Banner /

let time = 2000,
currentImageIndex = 0,
images =document.querySelectorAll("#slider img")

max= images.length;


function nextImage(){
    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++

    if(currentImageIndex >=max){
        currentImageIndex=0
    }
    images[currentImageIndex].classList.add("selected")
}

function start(){
    setInterval(()=>{
        //troca de imagem
        nextImage()
        console.log("rodando")

    }, time)


}

window.addEventListener("load", start);

//menu

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


 const debounce = function(func, wait, immediate){
   let timeout;
   return function (...args){
     const context = this;
     const later = function(){
       timeout = null;
       if(!immediate) func.apply(context, args);

     };
     const callNow = immediate && !timeout;
     clearTimeout(timeout);
     timeout = setTimeout(latter, wait);
     if(callNow) func.apply(context, args);
   };
 }
// animação 

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

 function animeScroll(){
  const windowTop = window.pageYOffset + (window.innerHeight*3)/4;
  target.forEach(function(element){
       if((windowTop) > element.offsetTop){
         element.classList.add(animationClass);
       } else{
        element.classList.remove(animationClass);
       }
  })
 }
 animeScroll();
if(target.length){
 window.addEventListener('scroll', function(){
   animeScroll();

 });
}