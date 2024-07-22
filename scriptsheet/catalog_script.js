const men = document.getElementById("men"); 
const women = document.getElementById("women");
const children = document.getElementById("children");
const access = document.getElementById("accessories");
const hoverImg = document.getElementById("hover_img");
const hoveringImg = document.querySelector(".hovering_img");
const catalog_elem = document.querySelectorAll(".category")

const catalog_tl = gsap.timeline({paused:true});

// catalog_tl.to(category, {
//     duration:0.5,
//     scale:1.1,
// })


// let currentlyClicked = null;

// // Set the background color of the first element to #161833
// gsap.to(catalog_elem[0], {
//     duration: 0,
//     scale: 1.1,
//     backgroundColor: "#a67d5de3",
//     ease: "power2.inOut"
// });

// currentlyClicked = catalog_elem[0]; // Set the first element as the currently clicked element

// catalog_elem.forEach((category) => {
//   category.addEventListener('click', () => {
//     if (currentlyClicked === category) {
//       // Do nothing if the same element is clicked again
//     } else {
//       // If another element is clicked, reset the previous one
//       if (currentlyClicked) {
//         gsap.to(currentlyClicked, {
//           duration: 0.5,
//           scale: 1,
//           backgroundColor: "#161833",
//           ease: "power2.inOut"
//         });
//       }
//       // Animate the newly clicked element
//       gsap.to(category, {
//         duration: 0.5,
//         scale: 1.1,
//         backgroundColor: "#a67d5de3",
//         ease: "power2.inOut"
//       });
//       currentlyClicked = category;
//     }
//   });

//   category.addEventListener('mouseenter', () => {
//     if (currentlyClicked!== category) {
//       gsap.to(category, {
//         duration: 0.5,
//         scale: 1.1,
//         backgroundColor: "#a67d5de3",
//         ease: "power2.inOut"
//       });
//     }
//   });

//   category.addEventListener('mouseleave', () => {
//     if (currentlyClicked!== category) {
//       gsap.to(category, {
//         duration: 0.5,
//         scale: 1,
//         backgroundColor: "#161833",
//         ease: "power2.inOut"
//       });
//     }
//   });
// });

let currentlyClicked = null;

// Set the background color of the first element to #161833
gsap.to(catalog_elem[0], {
  duration: 0,
  scale: 1.1,
  backgroundColor: "#a67d5de3",
  ease: "power2.inOut"
});

currentlyClicked = catalog_elem[0]; // Set the first element as the currently clicked element

// Animate the display and opacity of the first element's corresponding HTML element
gsap.to(`#${currentlyClicked.id}_swiper`, {
  duration: 0.5,
  display: "block",
  opacity: 1
});

catalog_elem.forEach((category) => {
  category.addEventListener('click', () => {
    if (currentlyClicked === category) {
      // Do nothing if the same element is clicked again
    } else {
      // If another element is clicked, reset the previous one
      if (currentlyClicked) {
        gsap.to(currentlyClicked, {
          duration: 0.5,
          scale: 1,
          backgroundColor: "#161833",
          ease: "power2.inOut"
        });
        // Hide the previous element's corresponding HTML element
        gsap.to(`#${currentlyClicked.id}_swiper`, {
          duration: 0.3,
          display: "none",
          opacity: 0
        });
      }
      // Animate the newly clicked element
      gsap.to(category, {
        duration: 0.5,
        scale: 1.1,
        backgroundColor: "#a67d5de3",
        ease: "power2.inOut"
      });
      // Show the newly clicked element's corresponding HTML element
      gsap.to(`#${category.id}_swiper`, {
        duration: 0.3,
        display: "block",
        opacity: 1
      });
      currentlyClicked = category;
    }
  });

  category.addEventListener('mouseenter', () => {
    if (currentlyClicked!== category) {
      gsap.to(category, {
        duration: 0.5,
        scale: 1.1,
        backgroundColor: "#a67d5de3",
        ease: "power2.inOut"
      });
    }
  });

  category.addEventListener('mouseleave', () => {
    if (currentlyClicked!== category) {
      gsap.to(category, {
        duration: 0.5,
        scale: 1,
        backgroundColor: "#161833",
        ease: "power2.inOut"
      });
    }
  });
});





