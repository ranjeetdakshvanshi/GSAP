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
gsap.to("#page3 #box",{
    opacity:0,
    scrollTrigger:{
        scroll:"#page3 #box",
        trigger:"body",
        start:"top 100%",
        scrub:2

    }

})