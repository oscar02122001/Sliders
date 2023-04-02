const intro = document.querySelector('.intro')
const types = document.querySelector('.types')
const navInn = document.querySelector('.nav__inner')
types.addEventListener('click', () => {
    navInn.classList.toggle('active')
})

const innerSlider = document.querySelectorAll('.inner__item')
const allContent = document.querySelectorAll('.content')
innerSlider.forEach(slide => {
    slide.addEventListener('click', (e) => {
        let id = e.target.getAttribute('data-id')
        allContent.forEach(con => con.classList.remove('show'))
        let content = document.querySelector(`.content--${id}`)
        content.classList.add('show')
    })
})



const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slides')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const count = document.querySelector('.slideNum')

let sSize = slides.length
let currentSlide = 0;

const goToSlide = function (slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i-slide)}%)`)

    count.innerHTML = `${sSize}/${currentSlide+1}`
}
goToSlide(0)

const goNext = function () {
    if (currentSlide === sSize - 1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    goToSlide(currentSlide)
}
const goPrev = function () {
    if (currentSlide === 0) {
        currentSlide = sSize - 1
    } else {
        currentSlide--
    }
    goToSlide(currentSlide)
}
next.addEventListener('click', goNext)
prev.addEventListener('click', goPrev)