/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Fullstack Developer', 'AI Enthusiast', 'Food Lover'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// get elements
const readMoreButton = document.querySelector('.about .btn');
const modalContainer = document.querySelector('.modal-container');
const closeModalButton = document.querySelector('.close-modal');

// ...

// Add event listeners to the "Read More" buttons
document.querySelectorAll(".read-more").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const dataId = btn.getAttribute("data-id");
    
        let modalTitle = "";
        let modalContent = "";
    
        switch (dataId) {
            case "1":
                modalTitle = "Web Development";
                modalContent =
                    "Some detailed information about Web Development goes here...";
                break;
            case "2":
                modalTitle = "Back-end Development";
                modalContent =
                    "Some detailed information about Back-end Development goes here...";
                break;
            case "3":
                modalTitle = "Teamwork & Growth";
                modalContent =
                    "Some detailed information about Teamwork & Growth goes here...";
                break;
        }
    
        document.querySelector(".modal-header h3").innerHTML = modalTitle;
        document.querySelector(".modal-content p").innerHTML = modalContent;
    
        modalContainer.classList.add("show"); // Add the 'show' class to display the modal
    });
});

// Close the modal when the close button is clicked
closeModalButton.addEventListener('click', function () {
    modalContainer.classList.remove("show");
});

// Hide the modal when the user clicks outside of it
window.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
        modalContainer.classList.remove("show");
    }
});




// iFrame Fetch game function
function onGameOver() {
    document.getElementById('fetch-game-iframe').style.display = 'none';
    document.getElementById('portfolio-content').style.display = 'block';
    stopAllAudio();
  }
  

  
  window.addEventListener('message', function (event) {
    // Check for the 'gameEnded' message
    if (event.data === 'gameOver') {
      let iframe = document.getElementById('game-iframe');
      if (iframe) {
        iframe.style.display = 'none';
        iframe.contentWindow.postMessage('stopAllAudio', '*');
      }
  
      let overlay = document.getElementById('game-overlay');
      if (overlay) {
        overlay.style.display = 'none';
      }
  
      let portfolioContent = document.getElementById('portfolio-content');
      if (portfolioContent) {
        portfolioContent.style.display = 'block';
        void portfolioContent.offsetHeight;
        window.dispatchEvent(new Event('resize'));
      }
    }
  }, false);
  
  
  document.getElementById('start-game-button').addEventListener('click', function () {
    let overlay = document.getElementById('game-overlay');
    if (overlay) {
      overlay.style.display = 'none';
    }
  });
  
  
  