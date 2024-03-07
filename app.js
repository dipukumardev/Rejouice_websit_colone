let page1Content = document.querySelector("#page1-content");
let cursor = document.querySelector("#cursor");
page1Content.addEventListener("mousemove",function(dits){
    cursor.style.left = dits.x+"px"
    cursor.style.top = dits.y+"px"
})