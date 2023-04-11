/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*==================== sticky navbar ====================*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: ["Fullstack Developer", "AI Enthusiast", "Food Lover"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// get elements
const readMoreButton = document.querySelector(".about .btn");
const modalContainer = document.querySelector(".modal-container");
const closeModalButton = document.querySelector(".close-modal");

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
closeModalButton.addEventListener("click", function () {
  modalContainer.classList.remove("show");
});

// Hide the modal when the user clicks outside of it
window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.classList.remove("show");
  }
});

// iFrame Fetch game function
function onGameOver() {
  document.getElementById("fetch-game-iframe").style.display = "none";
  document.getElementById("portfolio-content").style.display = "block";
  stopAllAudio();
}

window.addEventListener(
  "message",
  function (event) {
    // Check for the 'gameEnded' message
    if (event.data === "gameOver") {
      let iframe = document.getElementById("game-iframe");
      if (iframe) {
        iframe.style.display = "none";
        iframe.contentWindow.postMessage("stopAllAudio", "*");
      }

      let overlay = document.getElementById("game-overlay");
      if (overlay) {
        overlay.style.display = "none";
      }

      let portfolioContent = document.getElementById("portfolio-content");
      if (portfolioContent) {
        portfolioContent.style.display = "block";
        void portfolioContent.offsetHeight;
        window.dispatchEvent(new Event("resize"));
      }
    }
  },
  false
);

document
  .getElementById("start-game-button")
  .addEventListener("click", function () {
    let overlay = document.getElementById("game-overlay");
    if (overlay) {
      overlay.style.display = "none";
    }
  });

//Testimonial Data
const testimonials = [
  {
    name: "Daniel Earp",
    job: "Full Stack Web Developer, Daniealearp.co.uk",
    image: "https://media.licdn.com/dms/image/D4D35AQGllv5JYUhDAQ/profile-framedphoto-shrink_800_800/0/1678554520051?e=1681851600&v=beta&t=S2tqpLhodkPGg8gjFyfC6jyD3IItHLvdZjruBGZ-1L4",
    testimonial:
      "Olaf, first of all congratulations on completing the Full stack course. You have put so much time & effort into not only your own work but that of your fellow students. You deserve all the opportunities and success that is no doubt coming your way. You've shown a huge willingness to learn and improve your own skills and made a huge impact on those around you. During our brief time working on a project together, you were able to communicate and express your ideas and opinions in a very clear way which made our time working together a pleasure. I hope we get the opportunity to work together in the near future!",
  },
  {
    name: "Akbar Rakhimov",
    job: "Full Stack Web Developer",
    image: "https://media.licdn.com/dms/image/D4D35AQHtKhyW0shTog/profile-framedphoto-shrink_800_800/0/1670411940996?e=1681851600&v=beta&t=MSL7hUmhqckwwak0ksO5q-Q4JkmRlYsn7rSxVfSBq-U",
    testimonial:
      "I had the pleasure of working with Olaf during his time in the Epicode Bootcamp. His dedication to learning the intricacies of web development was impressive, and his grasp of JavaScript, CSS, and React was particularly strong. He also demonstrated proficiency in using ExpressJS and MongoDB to create powerful backends that could handle large amounts of data. Olaf was a great collaborator and was always eager to take on new challenges. I highly recommend Olaf to any employer looking for a skilled and motivated full-stack developer.",
  },
  {
    name: "Courtney Hampton-Thomas",
    job: "Web Developer",
    image: "https://media.licdn.com/dms/image/D4E03AQHiKLR5VP9YhQ/profile-displayphoto-shrink_100_100/0/1672648982701?e=1686787200&v=beta&t=vXNlDyuTPeP9S4IBt3kQMEBWIQa03ewOoLp-wu2aOto",
    testimonial:
      "I had the pleasure of working with Olaf. He is a wonderful team player who has a sense of humor that is sure to keep up team morale. In addition, He really knows his way around coding and was exemplary when it came to troubleshooting and problem solving. During our time at Epicode, Olaf demonstrated a natural ability to lead and truly explain the difficult concepts to struggling team members. All of his projects were always above, beyond, and on time. I highly recommend him for any full-stack position or project. He would make an excellent asset to any team or company. Feel free to contact me if you have additional questions about Olaf or his qualifications.",
  },
  {
    name: "Alexander Spomer",
    job: "Executive Search Advisor, Step Advisors GmbH",
    image: "https://media.licdn.com/dms/image/C4D03AQFcogNjkhyXVA/profile-displayphoto-shrink_100_100/0/1644932908066?e=1686787200&v=beta&t=8D9qGpwTNFThNTSkZkj7AlTIvXy5vqGlq8Ts7KEiwzg",
    testimonial:
      "I highly recommend Olaf as a full stack developer. He has excellent team player and communication skills, and always maintained a positive and can-do attitude even in the most challenging times, including dealing with very complicated tasks. Olaf is also dedicated to his personal well-being and motivated me to prioritize fitness, which helped us maintain clear minds during late night project work. He is organized and detail-oriented, making him an asset to any team.",
  },  
  {
    name: "Aneesah Khan",
    job: "Full-Stack Developer",
    image: "https://media.licdn.com/dms/image/D4E03AQEO0kG3ka22wQ/profile-displayphoto-shrink_100_100/0/1669119752377?e=1686787200&v=beta&t=ZNxwL7xbwmiIXeNe3rchKZCXj7ysgryJ7DSRQJryt2k",
    testimonial:
      "I had the pleasure of working with during my time at Epicode. Olaf was an absolute pleasure to work with, and his positive attitude and dependability made a significant impact on our team's success. Olaf's upbeat and energetic personality truly livened up the atmosphere, especially during times of stress and difficulty. His unwavering dedication to the project and task at hand, and willingness to go above and beyond to ensure its success never went unnoticed. Beyond his impressive work ethic, Olaf also possesses exceptional communication skills. He was always approachable and easy to work with, making collaboration a breeze. Olaf's ability to communicate effectively ensured that our team was always on the same page, and any issues were promptly addressed and resolved. In conclusion, I cannot recommend Olaf highly enough. His positive attitude, dependability, and exceptional work ethic make him an invaluable asset to any team. Anyone would be lucky to work with Olaf, and I have no doubt that he will continue to achieve great things in his future endeavors.",
  },  
  {
    name: "Catriona Ferguson",
    job: "Junior Software Developer, BEng computer Systems & Networks",
    image: "https://media.licdn.com/dms/image/D4E03AQHyH20WF0tsTQ/profile-displayphoto-shrink_100_100/0/1666597669330?e=1686787200&v=beta&t=Z-xdQJfWKA0XG0CDdOz3WHmtdkHUZWJP6_aVLg97TzM",
    testimonial:
      "Olaf, It was a real pleasure to study alongside you at EPICODE during our Full Stack Developer Bootcamp! During our time together, you showed an exceptional ability to bring people together. Your communication skills and positive attitude will make you a valuable member of any future team. You possess strong problem-solving skills, and are not afraid to ask for assistance when you need it. You demonstrate great knowledge of all the topics we covered throughout the course, especially in regards to Front End Development, and show a great keenness to expand your knowledge on all subject matters. I have no doubt that you'd make a great Full Stack Developer and would be delighted to have you on my team!",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

// Create indicators
let indicatorsContainer = document.getElementById("indicators");

testimonials.forEach((testimonial, index) => {
  let indicator = document.createElement("span");
  indicator.addEventListener("click", () => {
    i = index;
    displayTestimonial();
  });
  indicatorsContainer.appendChild(indicator);
});

// Set the active indicator
let setActiveIndicator = () => {
  let indicators = document.querySelectorAll(".indicators span");
  indicators.forEach((indicator, index) => {
    if (index === i) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
};

// Update the displayTestimonial function
let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
  setActiveIndicator(); // Call the setActiveIndicator function
};

window.onload = displayTestimonial;


