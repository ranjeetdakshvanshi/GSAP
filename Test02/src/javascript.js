gsap.from("#page1 #box",{
    y:-100,
    opacity:0,
    duration:1,
    x:-100,
    delay:1,
    repeat:-1,
    scale:0.3,
    yoyo:0.1
   })
gsap.from("#page3 #box",{
    rotate:360,
    
    scrollTrigger:{
        scroll:"#page3",
        trigger:"body",
        scrub:2,
        scale:0.3,

    }

})
gsap.to("#page2 h1",{
    paddingLeft:"50px",
    transform:"translate(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroll:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }

})