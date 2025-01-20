gsap.to("#page1 h1",{
    transform:"tranlateX(-150%)",
    scrollTrigger:{
    trigger:"#page1",
    scroll:"body",
    markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:2,
    pin:true,
    }
})