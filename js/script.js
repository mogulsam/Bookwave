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





//MODAL



// Get the modal
var modal = document.getElementById("myModal");
    
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get all book links
var bookLinks = document.querySelectorAll('.book-link');

bookLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        var title = this.getAttribute('data-title');
        var author = this.getAttribute('data-author');
        var price = this.getAttribute('data-price');
        var rating = this.getAttribute('data-rating');
        var sold = this.getAttribute('data-sold');
        var discount = this.getAttribute('data-discount');
        var image = this.getAttribute('data-image');

        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-author').textContent = author;
        document.getElementById('modal-price').textContent = price;
        document.getElementById('modal-rating').textContent = rating;
        document.getElementById('modal-sold').textContent = sold;
        document.getElementById('modal-discount').textContent = discount;
        document.getElementById('modal-image').src = image;

        // Set download, checkout, and preview links dynamically
        document.getElementById('modal-download').onclick = function() {
            alert('Downloading ' + title);
        };
        document.getElementById('modal-checkout').href = 'checkout.html?book=' + encodeURIComponent(title);
        document.getElementById('modal-preview').href = 'preview.html?book=' + encodeURIComponent(title);

        modal.style.display = "block";
    });
});