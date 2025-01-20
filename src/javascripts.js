let t1=gsap.timeline();
t1.from("h2",{
    y:-30,
    opacity:0,
    duration:0.3,
    })
t1.from("h4",{
    y:-20,
    opacity:0,
    duration:0.3,
    stagger:0.3
       })
t1.from("button",{
    y:-20,
    opacity:0,
    duration:0.3
})
