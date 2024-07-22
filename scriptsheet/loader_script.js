
let burberry = document.querySelector(".burberry_head");
let heritage = document.querySelector(".heritage");

let burberry_text = burberry.textContent;
let heritage_text = heritage.textContent;

let b_text = burberry_text.split("");
let h_text = heritage_text.split("");

let clutter_b = "";
let clutter_h = "";

b_text.forEach( function(elem) {
    clutter_b += `<span>${elem}</span>`
})

h_text.forEach( function(elem) {
    clutter_h += `<span>${elem}</span>`
})

burberry.innerHTML = clutter_b;
heritage.innerHTML = clutter_h;

const home_tl = gsap.timeline();

home_tl.from(".burberry_head", {
    opacity:0,
    duration: 0.3,
})

home_tl.from(".burberry_head span", {
    y:15,
    opacity:0,
    duration: 0.9,
    stagger:0.11
})
home_tl.from(".heritage span", {
    x:5,
    opacity:0,
    duration: 0.9,
    stagger:0.04
})

home_tl.to(".loader", {
    y:"-100%",
    duration:0.7,
})
home_tl.to(".loader", {
    display: "none"
}, "promo")

home_tl.from(".promote h2", {
    opacity:0,
    duration:0.4
}, "promo")

home_tl.from(".nav_gsap", {
    opacity:0,
    y:-30,
    duration:0.4,
    stagger:0.1 
})

home_tl.from(".line1", {
    y:-100,
    opacity:0,
    duration:0.5
}, "social_line")

home_tl.from(".line2", {
    y:100,
    opacity:0,
    duration:0.5
}, "social_line")

home_tl.from(".icon_div", {
    x:-40,
    opacity:0,
    duration:0.2,
    stagger:0.1,
})

home_tl.from(".img_container", {
    opacity:0,
    duration:0.5,
})

home_tl.from(".img_container img", {
    opacity:0,
    duration:0.4,
    
}, "home_img")

home_tl.from(".category", {
    stagger:0.1,
    duration:0.2,
    opacity:0
})

home_tl.from(".hover_img_efffect", {
    opacity:0,
    duration:0.4,
    
}, "home_img")


