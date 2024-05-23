// nav bar----------------
let body = document.body;
let menuIcon = document.querySelector(".menuIcon");
let menuList = document.querySelector(".menuBar");
let line_1 = document.querySelector(".first-line")
let line_2 = document.querySelector(".sec-line");
let line_3 = document.querySelector(".third-line");

function cross() {
    line_2.classList.add("d-none");
    // line_1.classList.add("transform-origin-center-center");
    line_1.classList.add("position-relative");
    line_1.style.top = "12px";
    line_1.style.left = "2px";
    line_1.style.transform = "rotate(45deg)"
    line_3.classList.add("position-relative");
    line_3.style.top = "-12px";
    line_3.style.transform = "rotate(-45deg)";
    line_1.classList.add("transition");
    line_3.classList.add("transition");

}
function line() {
    line_2.classList.remove("d-none");
    line_1.classList.remove("position-relative");
    line_1.style.transform = "rotate(0deg)"
    line_3.classList.remove("position-relative");
    line_3.style.transform = "rotate(0deg)";
}


// add show class in nav links--------------
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    if (menuList.classList.contains("show")) {
        cross();
        body.style.overflow = "hidden";
    } else {
        line();
        body.style.overflow = "auto";
    }
});



// navlinks hidden show class----------
let navLinks = document.querySelectorAll(".nav_links")

navLinks.forEach(links => {
    links.addEventListener("click", () => {
        menuList.classList.remove("show");
        line();
        body.style.overflow = "auto";
    });
});



// // scroll to top-----------------

// let scroll_top = document.querySelector(".scroll_to_top");
// let scrol_pt = 200;
// scroll_top.style.display = "none";
// window.addEventListener("scroll", () => {
//     if (window.scrollY > scrol_pt) {
//         scroll_top.style.display = "block"
//     } else {
//         scroll_top.style.display = "none";
//     }
// });

// scroll_top.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0, behaviour: "smooth",
//     })
// });

// services slick slider================
$('.slider_1').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.services_prev_arrow',
    nextArrow: '.services_next_arrow',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// review slick slider====================
$('.reviews_slider_itm').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.review_prev_arrow',
    nextArrow: '.review_next_arrow',
    centerMode: true,
    centerPadding: "20%",
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// in the news slider===================
$('.news_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '.news_prev_arrow',
    nextArrow: '.news_next_arrow',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


// client slider===============
$('.client_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '.client_prev_arrow',
    nextArrow: '.client_next_arrow',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// portfalio slick slider====================
$('.portflio_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    variableWidth: true,
    slidesToScroll: 1,
    prevArrow: '.portflio_prev_arrow',
    nextArrow: '.portflio_next_arrow',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


// preloader---------------------
let preloader = document.querySelector(".preloader");
preloader.classList.add("d-flex");
setTimeout(() => {
    preloader.classList.add("d-none");
}, 3000);