
//Menu toggle
function toggleMenu() {
    const nav = document.querySelector('.containers nav');
    nav.classList.toggle('show');
}

function toggleMenu() {
    const nav = document.querySelector('.containers nav');
    const overlay = document.querySelector('.overlay');
    nav.classList.toggle('show');
    overlay.classList.toggle('show');
}

// Close the nav if clicked outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.containers nav');
    const overlay = document.querySelector('.overlay');
    const menuIcon = document.querySelector('.containers .menu-icon');

    if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
        nav.classList.remove('show');
        overlay.classList.remove('show');
    }
});





//SPINNER

document.getElementById('modal-download').addEventListener('click', function() {
    const downloadLink = document.createElement('a');
    downloadLink.href = currentBook.download; // Ensure this points to the current book's download URL
    downloadLink.download = currentBook.title;
    document.body.appendChild(downloadLink);
    
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'block'; // Show spinner

    downloadLink.click();
    
    // Hide spinner after a short delay to simulate download process. 
    // Adjust this delay as needed based on your requirements.
    setTimeout(function() {
        loadingSpinner.style.display = 'none';
        document.body.removeChild(downloadLink);
    }, 3000);
});






















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





//SEARCH POP UP




document.addEventListener('DOMContentLoaded', function() {
    const searchLink = document.querySelector('.t-search');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');

    searchLink.addEventListener('click', function(e) {
        e.preventDefault();
        searchOverlay.style.display = 'flex';
    });

    closeSearch.addEventListener('click', function() {
        searchOverlay.style.display = 'none';
    });

    
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
            searchOverlay.style.display = 'none';
        }
    });

    // Prevent form submission
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Perform search logic 
        let searchTerm = document.getElementById('searchInput').value;
        console.log('Searching for:', searchTerm);
        // Implement  search functionality
       
    });
});





//review page



const books = [
    { title: "Harry Potter and the Philosopher's Stone" },
    { title: "The Hobbit" },
    { title: "Game of Thrones" },
    { title: "The Name of the Wind" },
    { title: "Mistborn" }
];

const searchInput = document.getElementById('searchInput');
const bookList = document.getElementById('bookList');
const reviewContainer = document.getElementById('reviewContainer');
const bookTitle = document.getElementById('bookTitle');
const reviewForm = document.getElementById('reviewForm');
const reviewsList = document.getElementById('reviewsList');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    bookList.innerHTML = '';
    books.filter(book => book.title.toLowerCase().includes(query)).forEach(book => {
        const li = document.createElement('li');
        li.textContent = book.title;
        li.addEventListener('click', () => {
            displayReviewSection(book.title);
        });
        bookList.appendChild(li);
    });
});

function displayReviewSection(title) {
    bookTitle.textContent = title;
    reviewContainer.style.display = 'block';
    displayReviews(title);
}

reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const reviewText = document.getElementById('reviewText').value;
    const rating = document.getElementById('rating').value;
    const bookTitle = document.getElementById('bookTitle').textContent;
    
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (!reviews[bookTitle]) {
        reviews[bookTitle] = [];
    }
    reviews[bookTitle].push({ review: reviewText, rating: rating });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    displayReviews(bookTitle);
    reviewForm.reset();
});

function displayReviews(title) {
    reviewsList.innerHTML = '';
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (reviews[title]) {
        reviews[title].forEach(review => {
            const li = document.createElement('li');
            li.textContent = `Rating: ${review.rating} - ${review.review}`;
            reviewsList.appendChild(li);
        });
    }
}






































document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName('close')[0];
    var downloadButton = document.getElementById('modal-download');
    var checkoutButton = document.getElementById('modal-checkout');
    var bookLinks = document.querySelectorAll('.book-link');

    bookLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('modal-image').src = this.dataset.image;
            document.getElementById('modal-title').textContent = this.dataset.title;
            document.getElementById('modal-author').textContent = this.dataset.author;
            document.getElementById('modal-price').textContent = this.dataset.price;
            document.getElementById('modal-rating').textContent = this.dataset.rating;
            document.getElementById('modal-downloads').textContent = this.dataset.downloads;
            document.getElementById('modal-description').textContent = this.dataset.description;
            downloadButton.href = this.dataset.download;
            downloadButton.setAttribute('download', this.dataset.title + ".pdf");
            checkoutButton.href = this.dataset.amazon;
            modal.style.display = 'block';
        });
    });

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("myModal");
    const modalContent = modal.querySelector(".modal-content");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalAuthor = document.getElementById("modal-author");
    const modalPrice = document.getElementById("modal-price");
    const modalRating = document.getElementById("modal-rating");
    const modalDownloads = document.getElementById("modal-downloads");
    const modalDescription = document.getElementById("modal-description");
    const modalDownload = document.getElementById("modal-download");
    const modalCheckout = document.getElementById("modal-checkout");
    const loadingOverlay = document.getElementById('loading-overlay');
    const successMessage = document.getElementById('success-message');
    let currentBook = {};

    // Hide overlay and success message on load
    loadingOverlay.style.display = 'none';
    successMessage.style.display = 'none';

    document.querySelectorAll('.book-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            currentBook = {
                title: link.getAttribute('data-title'),
                author: link.getAttribute('data-author'),
                price: link.getAttribute('data-price'),
                rating: link.getAttribute('data-rating'),
                downloads: link.getAttribute('data-downloads'),
                description: link.getAttribute('data-description'),
                image: link.getAttribute('data-image'),
                download: link.getAttribute('data-download'),
                amazon: link.getAttribute('data-amazon')
            };

            modalImage.src = currentBook.image;
            modalTitle.textContent = currentBook.title;
            modalAuthor.textContent = currentBook.author;
            modalPrice.textContent = currentBook.price;
            modalRating.textContent = currentBook.rating;
            modalDownloads.textContent = currentBook.downloads;
            modalDescription.textContent = currentBook.description;
            modalCheckout.href = currentBook.amazon;

            modal.style.display = "block";
        });
    });

    document.querySelector('.close').addEventListener('click', function() {
        modal.style.display = "none";
    });

    modalDownload.addEventListener('click', function() {
        const downloadLink = document.createElement('a');
        downloadLink.href = currentBook.download;
        downloadLink.download = currentBook.title;
        document.body.appendChild(downloadLink);

        loadingOverlay.style.display = 'flex'; // Show loading overlay
        modalContent.classList.add('blur'); // Blur modal content

        downloadLink.click();

        // Remove the loader and show success message after a set timeout
        setTimeout(function() {
            loadingOverlay.style.display = 'none'; // Hide loading overlay
            modalContent.classList.remove('blur'); // Remove blur from modal content
            successMessage.style.display = 'block'; // Show success message

            setTimeout(function() {
                successMessage.style.display = 'none'; // Hide success message after 2 seconds
            }, 2000);
        }, 1000); // Adjust this timeout to the expected download duration

        // Clean up the link after download starts
        setTimeout(function() {
            document.body.removeChild(downloadLink);
        }, 1000);
    });

    // Close the modal if user clicks anywhere outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const searchLink = document.querySelector('.t-search');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');

    searchLink.addEventListener('click', function(e) {
        e.preventDefault();
        searchOverlay.style.display = 'flex';
    });

    closeSearch.addEventListener('click', function() {
        searchOverlay.style.display = 'none';
    });

    
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
            searchOverlay.style.display = 'none';
        }
    });

    // Prevent form submission (just for demonstration)
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        //search logic here
        let searchTerm = document.getElementById('searchInput').value;
        console.log('Searching for:', searchTerm);
        // Implement  search functionality
        
    });
});





 //library book adding


 document.addEventListener('DOMContentLoaded', () => {
    // Function to display popup message
    function showPopup(message) {
        const popup = document.getElementById('popupMessage');
        popup.textContent = message;
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 800); // Hide after 3 seconds
    }

    // Check if user is logged in
    const isLoggedIn = () => localStorage.getItem('loggedIn') === 'true';

    // Add event listener to login modal close button
    const closeModalButton = document.querySelector('.close-login-modal');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            document.getElementById('loginModal').style.display = 'none';
        });
    }

    // Add event listener to login form
    const loginForm = document.querySelector('#loginModal form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = event.target.username.value;
            const password = event.target.password.value;
            if (username === 'user' && password === 'password') {
                localStorage.setItem('loggedIn', 'true');
                document.getElementById('loginModal').style.display = 'none';
            } else {
                alert('Invalid credentials');
            }
        });
    }

    // Add event listener to heart icons
    const heartIcons = document.querySelectorAll('.add-to-library');
    heartIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.preventDefault();
            if (!isLoggedIn()) {
                document.getElementById('loginModal').style.display = 'block';
                return;
            }
            const bookLink = icon.closest('.item').querySelector('.book-link');
            const book = {
                title: bookLink.getAttribute('data-title'),
                author: bookLink.getAttribute('data-author'),
                price: bookLink.getAttribute('data-price'),
                rating: bookLink.getAttribute('data-rating'),
                downloads: bookLink.getAttribute('data-downloads'),
                discount: bookLink.getAttribute('data-discount'),
                description: bookLink.getAttribute('data-description'),
                image: bookLink.getAttribute('data-image')
            };
            addToLibrary(book);
        });
    });

    // Function to add book to library
    function addToLibrary(book) {
        let library = JSON.parse(localStorage.getItem('library')) || [];
        if (!library.some(b => b.title === book.title)) {
            library.push(book);
            localStorage.setItem('library', JSON.stringify(library));
            showPopup('Book added to library');
        } else {
            showPopup('Book already in library');
        }
    }

    // Display books in the library
    const libraryContainer = document.querySelector('.library-container');
    if (libraryContainer) {
        let library = JSON.parse(localStorage.getItem('library')) || [];
        if (library.length === 0) {
            libraryContainer.innerHTML = '<p>Your library is empty. Books added to your library will appear here.</p>';
        } else {
            library.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.classList.add('item');
                bookItem.innerHTML = `
                    <div class="media">
                        <div class="thumbnail object-cover">
                            <img src="${book.image}" alt="${book.title}">
                        </div>
                        <div class="hoverable">
                            <ul>
                                <li class="active"><a href="#" class="add-to-library"><i class="ri-heart-line"></i></a></li>
                                <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                            </ul>
                        </div>
                        <div class="discount circle flexcenter"><span>${book.discount}</span></div>
                    </div>
                    <div class="content">
                        <h3 class="main-links">${book.title}</h3>
                        <div class="rating">
                            <div class="stars"></div>
                            <span class="mini-text">(${book.rating})</span>
                        </div>
                        <div class="price">
                            <span class="current">${book.price}</span>
                            <span class="normal mini-text">Ksh 1500</span>
                        </div>
                        <div class="mini-text">
                            <p>${book.downloads} downloads</p>
                            <p>${book.author}</p>
                        </div>
                    </div>
                `;
                libraryContainer.appendChild(bookItem);
            });
        }
    }
});

