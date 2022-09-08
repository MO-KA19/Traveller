// Fade up effect on sections
function FadeUp(section, posY) {
    let selection = document.querySelector(section);

    if (this.scrollY > posY) {
        selection.style.setProperty("visibility", "visible")
        selection.style.setProperty('animation-duration', '2s')
        selection.style.setProperty('animation-name', 'fadeInUp')
    }    
}


function getPosY(section) {
    let selection = document.querySelector(section);
    let pos = selection.offsetTop;
    return pos - 500
}


let sections = [".about",".slider",".features", ".contact"]
window.onscroll = () => {
    for (let i=0; i < sections.length; i++) {
        FadeUp(sections[i], getPosY(sections[i]))
    }
}





// Creating slider
function slider (className) {
    $(className).owlCarousel({
        items:5,
        loop:true,
        dots: false,
        nav: true,
        margin: 12,
        lazyLoad: true,
        responsiveClass:true,
        responsive: {
            450:{
                items:1,
                loop:true,
                dots:false,
                nav:true
            },

            1200:{
                items:5,
                loop:true,
                dots: false,
                nav: true,
                margin: 12,
                lazyLoad: true,
            }
        }
    });
};
jQuery(document).ready(slider(".swiper"));





// Copyright Year
let html = document.querySelector("#year");
let date = new Date();
let currentYear = date.getFullYear();
html.innerHTML = currentYear;