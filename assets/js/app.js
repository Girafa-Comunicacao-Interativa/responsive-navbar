const header = document.querySelector('.header')
const navbar = document.querySelector('.navbar')
const button = document.querySelector('.toggle-mobile')
const transition = +getComputedStyle(navbar).transitionDuration.split('s')[0] * 1000

class Navbar {
  constructor(header, navbar, transition = 0) {
    this.header = header
    this.navbar = navbar
    this.transition = transition
    this.timeout
  }

  _openMenu() {
    this.header.classList.add('display')
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.header.classList.add('show')
    }, 1)
  }

  _closeMenu() {
    this.header.classList.remove('show')
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.header.classList.remove('display')
    }, this.transition)
  }

  toggleMenu() {
    console.log(this.header.classList.contains('display'))
    this.header.classList.contains('display') && this.header.classList.contains('show') ? this._closeMenu() : this._openMenu()
  }
}

const menu = new Navbar(header, navbar, transition)

button.addEventListener('click', function () {
  menu.toggleMenu()
})