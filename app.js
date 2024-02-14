//on button click, change the classlist, rotate the carousel

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');
let  redirectButton = document.getElementById('goback');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
        goback.style.opacity= "0";
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
    goback.style.opacity= "1";
   
}

//go to the portfolio page
document.addEventListener('DOMContentLoaded', function () {
    const redirectButton = document.getElementById('goback');
   
    redirectButton.addEventListener('click', function () {
      // Specify the desired href
      const targetHref = 'index.html#projects';
  
      // Redirect to the specified href
      window.location.href = targetHref;
    });
  });

  // go to the link 
  function redirectTo(url) {
    window.open(url, '_blank');
    }