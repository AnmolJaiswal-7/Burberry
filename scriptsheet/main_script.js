var hp_tl = gsap.timeline({scrollTrigger:{
    trigger:"#home",
    scrub:true,
    start: "30% 20%" ,
    end: "90% 20%"
  }})

  hp_tl.to("#home", {
    x:"100%",
    opacity:0,
    duration:2
  })

  var men_tl  = gsap.timeline({scrollTrigger:{
    trigger:"#men_page",
    scrub:true,
    start: "10% 75%" ,
    end: "90% 30%"
  }})

  var women_tl  = gsap.timeline({scrollTrigger:{
    trigger:"#women_page",
    scrub:true,
    start: "10% 60%" ,
    end: "90% 30%"
  }})
  
  var child_tl  = gsap.timeline({scrollTrigger:{
    trigger:"#children_page",
    scrub:true,
    start: "10% 60%" ,
    end: "90% 30%"
  }})

  var access_tl  = gsap.timeline({scrollTrigger:{
    trigger:"#accessories_page",
    scrub:true,
    start: "10% 60%" ,
    end: "90% 30%"
  }})

  var story_tl  = gsap.timeline({scrollTrigger:{
    trigger:"#stories",
    scrub:true,
    start: "10% 60%" ,
    end: "90% 80%"
  }})

  var footer_tl  = gsap.timeline({scrollTrigger:{
    trigger:".footer-section",
    scrub:true,
    start: "10% 60%" ,
    end: "90% 80%"
  }})

men_tl.from(".men_page", {
    opacity:0,
    duration:3,
    y:"100%"
  })
 men_tl.from(".men_showcase", {
    y:400,
    opacity:0,
    duration:1.5,
    stagger:0.5
  })
  men_tl.to(".men_page", {
    opacity:0,
    x:"-100%",
    duration:5,
    delay:2
  })

women_tl.from(".women_page", {
    opacity:0,
    duration:3,
    y:"100%"
  })
women_tl.from(".women_showcase", {
    y:400,
    opacity:0,
    duration:1.5,
    stagger:0.5
  })
  women_tl.to(".women_page", {
    opacity:0,
    x:"100%",
    duration:6,
    delay:2
  })

child_tl.from(".children_page", {
    opacity:0,
    duration:3,
    y:"100%"
  })
child_tl.from(".children_showcase", {
    y:400,
    opacity:0,
    duration:1.5,
    stagger:0.5
  })

child_tl.to(".children_page", {
    opacity:0,
    x:"-100%",
    duration:6,
    delay:2
  })

access_tl.from(".accessory_page", {
    opacity:0,
    duration:3,
    y:"100%"
  })
access_tl.from(".accessories_showcase", {
    y:400,
    opacity:0,
    duration:1.5,
    stagger:0.5
  })

  access_tl.to(".accessory_page", {
    opacity:0,
    x: "100%",
    duration:6,
    delay:2
  })

  story_tl.from(".videos", {
    opacity:0,
    duration:1
  })

  footer_tl.from(".container", {
    opacity:0,
    duration:2
  })

  var stories = gsap.timeline();

  stories.to(".stories_heading h2:nth-child(1)", {
    fontSize: "3vw",
    duration:1,
    repeat:-1,
    yoyo:true,
  }, "same_heading")

  stories.to(".stories_heading h2:nth-child(2)", {
    fontSize: "4.5vw",
    duration:1,
    repeat:-1,
    yoyo:true,
  }, "same_heading")

  stories.to(".stories_heading h2:nth-child(3)", {
    fontSize: "6vw",
    duration:1,
    repeat:-1,
    yoyo:true,
  }, "same_heading")

  stories.from(".stories_main_heading", {
    duration:1,
    opacity:0,
    repeat:-1,
    yoyo:true,
  }, "same_heading")
