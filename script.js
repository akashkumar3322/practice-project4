var aa=document.querySelectorAll('.box');

aa.forEach((val)=> {
    val.addEventListener("mouseenter",()=>{
       val.childNodes[3].style.opacity=1;
    });
    val.addEventListener("mouseleave",()=>{
        val.childNodes[3].style.opacity=0;
    })
    val.addEventListener("mousemove",(nn)=>{
        val.childNodes[3].style.left=nn.x+"px";
        val.childNodes[3].style.top=nn.y+"px";
    }
)
});