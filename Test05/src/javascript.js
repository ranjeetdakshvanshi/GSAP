
var menu=document.querySelector("#nav i")
var scross=document.querySelector("#toggle i")
var tl=gsap.timeline()
tl.to("#toggle",{
  right:0,
  duration:0.3,
})
tl.from("#toggle h4",{
  x:150,
  duration:0.3,
  opacity:0,
 })
 tl.from("#toggle i",{
      opacity:0,
 })
 tl.pause()
menu.addEventListener("click",function(){
  tl.play()
})
scross.addEventListener("click",function(){
  tl.reverse()
})
