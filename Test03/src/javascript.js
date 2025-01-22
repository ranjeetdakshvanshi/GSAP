var path='M 0 100 Q 500 100 990 100';
var finalPath='M 0 100 Q 500 100 990 100';
var page2=document.querySelector("#page2");
page2.addEventListener("mousemove",function(dets){
    path=`M 0 100 Q ${dets.x} ${dets.y} 990 100`
      gsap.to("svg path",{
        attr:{d:path},
        ease: "elastic.out(1,0.1)",
             })
    })
 page2.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath}
      })
 })