
// MAIN NAVBAR SCROLL ANIMATION 

let prevScrollpos = window.pageYOffset;


function styleMainContainer() {
  let windowWidth = window.innerWidth;
  if(windowWidth > 1400) {
    
  }
}

window.addEventListener("resize", styleMainContainer)


function styleNavbarOnScroll(element) {
  const section1 = document.querySelector(".section-1");
  const mainNavItem = document.querySelector(".nav-item");

  let top_of_section1 = section1.offsetTop;
  let bottom_of_section1 = section1.offsetTop + section1.offsetHeight + section1.style.marginTop;
  let bottom_of_screen = window.scrollY + window.innerHeight;
  let top_of_screen = window.scrollY;

  if ((bottom_of_screen > top_of_section1) && (top_of_screen < bottom_of_section1)) {
    element.style.backgroundColor = 'rgba(0,0,0,0.0)'
  } else {
    element.style.backgroundColor = 'rgba(0,0,0,1.0)'
  }
}

window.onscroll = function() {
  const navWrapper = document.querySelector(".nav-wrapper")
  let currentScrollPos = window.pageYOffset;

  styleNavbarOnScroll(navWrapper)

  if (prevScrollpos > currentScrollPos) {
    navWrapper.style.top = "0";
  } else {
    navWrapper.style.top = "-105px";
  }
  prevScrollpos = currentScrollPos; 
}

// SIDEBAR ANIMATION
const burgerInput = document.querySelector(".burger-input")

function animateSidebar() {
  const sidebarMenu = document.querySelector(".sidebar-menu")

  if(burgerInput.checked) {
    sidebarMenu.classList.remove("toggle-sidebar")
  } else {
    sidebarMenu.classList.add("toggle-sidebar")
  }

  console.log(burgerInput.checked)

}

burgerInput.addEventListener("change", animateSidebar)





