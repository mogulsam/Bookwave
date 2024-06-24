//COPY MENU FOR MOBILE


function copyMenu(){

    //Copy inside dpt-cat to departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav

    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;


//copy header top wrapper to the top nav

var topNav = document.querySelector('.header-top');
var topPlace = document.querySelector('.off-canvas .thetop-nav');
topPlace.innerHTML = topNav.innerHTML;


}
copyMenu();

//show mobile menu

const menuButton = document.querySelector('.trigger');
      closeButton = document.querySelector('.t-close');
      addClass = document.querySelector('.site');

menuButton.addEventListener('click', function(){
    addClass.classList.toggle('showmenu')
})

closeButton.addEventListener('click', function(){
      addClass.classList.remove('showmenu')
})








//show mobile submenu

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}













//show dpt menu 

const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');

dptButton.addEventListener('click', function(){
    dptClass.classList.toggle('showdpt')
})
    


    

//SHOW CART ON CLICK

const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if(!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
        }
    }, 250)
})

//close by click outside

document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divtoShow);
    if(!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show')
    }
})



//show modal load

window.onload = function() {
    document.querySelector('.site').classList.toggle('showmodal')
}
document.querySelector('.modalclose').addEventListener('click', function() {
    document.querySelector('.site').classList.remove('showmodal')
})