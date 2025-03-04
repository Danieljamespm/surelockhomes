// SCROLL ANIMATION

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            // entry.target.classList.remove('show')
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))




const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show-2')
        } else{
            // entry.target.classList.remove('show')
        }
    })
})


const hiddenElements2 = document.querySelectorAll('.hidden-2')
hiddenElements2.forEach((el) => observer2.observe(el))


// TESTIMONIALS

let currentIndex = 0
const slides = document.querySelectorAll('.testimonial-slide')

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active')
        if(i === index){
            slide.classList.add('active')
        }
    })
}

function nextSlide() {
    currentIndex = (currentIndex + 1 ) % slides.length
    showSlide(currentIndex)
}
function prevSlide(){
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    showSlide(currentIndex)
}

setInterval(nextSlide, 6000)

showSlide(currentIndex)



