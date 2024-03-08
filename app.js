function cursorEffect(){
    let page1Content = document.querySelector("#page1-content");
let cursor = document.querySelector("#cursor");
page1Content.addEventListener("mousemove", function (dits) {
    // cursor.style.left = dits.x+"px"
    // cursor.style.top = dits.y+"px"

    //  code of gsap 
    gsap.to("#cursor", {
     x:dits.x,
     y:dits.y
    })
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:1
    })
})
}
cursorEffect();
