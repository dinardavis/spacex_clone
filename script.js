let prevScrollPos = window.pageYOffset

const sidebarDesktop = document.querySelector(".sidebar-desktop")
const sidebarMobile = document.querySelector(".sidebar-mobile")
const sidebarMenu = document.querySelector(".sidebar-menu")
const burgerInput = document.querySelector(".burger-input")
const mainContainer = document.querySelector(".main-container")

// FUNCTION TO STYLE MAIN NAV BACKGROUND COLOR 

function styleNavbarOnScroll(element) {
  const section1 = document.querySelector(".section-1")

  let top_of_section1 = section1.offsetTop
  let bottom_of_section1 = section1.offsetTop + section1.offsetHeight + section1.style.marginTop
  let bottom_of_screen = window.scrollY + window.innerHeight
  let top_of_screen = window.scrollY

  if ((bottom_of_screen > top_of_section1) && (top_of_screen < bottom_of_section1)) {
    element.style.backgroundColor = 'rgba(0,0,0,0.0)'
  } else {
    element.style.backgroundColor = 'rgba(0,0,0,1.0)'
  }
}

/*
EVENT LISTENER FOR WINDOW CLICK
- IF SIDEBAR IS SHOWING, HIDE SIDEBAR ON WINDOW CLICK
*/

mainContainer.addEventListener('click', () => {
  if(burgerInput.checked) {
    burgerInput.checked = false
    hideSidebarMenu()
  }
})

burgerInput.addEventListener('click', (e) => {
  e.stopPropagation()
})


/*
EVENT LISTENER FOR WINDOW SCROLL
- HIDE/SHOW TOP NAVBAR ON SCROLL
- IF SIDEBAR IS SHOWING, HIDE SIDEBAR ON SCROLL
*/

window.onscroll = function() {
  const navWrapper = document.querySelector(".nav-wrapper")
  let currentScrollPos = window.pageYOffset

  styleNavbarOnScroll(navWrapper)
  if (prevScrollPos > currentScrollPos) {
    navWrapper.style.top = "0"
    hideSidebarMenu()
    burgerInput.checked = false
  } else {
    navWrapper.style.top = "-105px"
    hideSidebarMenu()
    burgerInput.checked = false
  }
  prevScrollPos = currentScrollPos 
}

// SIDEBAR ANIMATION TOGGLE CLASS ADD/REMOVE

function showSidebarMenu() {
  sidebarDesktop.classList.remove("toggle-sidebar-sub")
  sidebarMobile.classList.remove("toggle-sidebar-sub")
  sidebarMenu.classList.remove("toggle-sidebar-menu")
}

function hideSidebarMenu() {
  sidebarDesktop.classList.add("toggle-sidebar-sub")
  sidebarMobile.classList.add("toggle-sidebar-sub")
  sidebarMenu.classList.add("toggle-sidebar-menu")
}

// ANIMATE SIDEBAR ON BURGER CLICK

function animateSidebar() {
  if(burgerInput.checked) {
    showSidebarMenu()
  } else {
    hideSidebarMenu()
  }
}

burgerInput.addEventListener("change", animateSidebar)





