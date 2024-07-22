let menu = document.getElementById('menu');
let close_menu = document.getElementById('cross');

let menu_elem = document.querySelectorAll(".menubar_content a")

let menu_tl = gsap.timeline({paused:true});

menu_tl.to(".menu_anime", {
    display:"block"
})
menu_tl.from(".menu_anime", {
    opacity:0,
    duration:0.5
})
menu_tl.from(".desing_line_first", {
    y: "-100%",
    duration:0.3,
    stagger:0.1
}, "desing_line")


menu_tl.from(".design_left_pattern", {
    opacity:0,
    duration:0.3
}, "desing_line")


menu_tl.from(".desing_line_second", {
    y: "100%",
    duration:0.3,
    stagger:0.1
}, "desing_line")

menu_tl.from(".design_right_pattern", {
    opacity:0,
    duration:0.3
}, "desing_line")

menu_tl.from(".design_upper_line", {
    duration:0.3,
    x:"100%",
    stagger:0.2

}, "desing_line_hr")

menu_tl.from(".design_bottom_line", {
    duration:0.3,
    x:"-100%",
    stagger:0.2

}, "desing_line_hr")

menu_tl.from(".middle_desing_line_1", {
    duration:0.3,
    y:"100%",

}, "desing_line_middle")

menu_tl.from(".middle_desing_line_2", {
    duration:0.3,
    y:"-100%",

}, "desing_line_middle")


menu_tl.from(".center_menubar", {
    duration: 0.2,
    opacity:0,
})

menu_tl.from(".menubar_content h1", {
    x: 50,
    duration: 0.4,
    opacity:0,
    stagger:0.2
})

menu_tl.from("#cross", {
    duration:0.2,
    opacity:0
})

function menu_show() {
    menu_tl.play();
}
function menu_close() {
    menu_tl.reverse();
}

menu.addEventListener('click', menu_show)

close_menu.addEventListener('click', menu_close)

menu_elem.forEach((elem) => {
    elem.addEventListener('click', menu_close)
})