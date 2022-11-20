const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

$( function() {
  $( "#accordion" ).accordion();
} );
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  navText: [ '', '' ],
  autoplay: false,
  autoplayTimeout:2000,
  items:1,
  // responsive:{
  //     0:{
  //         items:1
  //     },

  //     1000:{
  //         items:5
  //     }
  // }
});