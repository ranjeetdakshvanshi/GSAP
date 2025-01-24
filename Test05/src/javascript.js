var main=document.querySelector("#main");
var cursor=document.querySelector("#cursor");
var imgDiv=document.querySelector("#image")
main.addEventListener("mousemove", function(dets){
                  gsap.to(cursor,{
                   x:dets.x,
                   y:dets.y,
                                    
            })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

})
imgDiv.addEventListener("mouseenter", function(){
  cursor.innerHTML="View More"
    gsap.to(cursor,{
     scale:6 
   
})
})
imgDiv.addEventListener("mouseleave", function(){
  cursor.innerHTML=""
  gsap.to(cursor,{
     scale:1
   
})
})