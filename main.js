let bars = document.querySelector(".fa-barss")
let responsiveNav = document.querySelector(".responsive-bar")
let show = false

bars.addEventListener("click",()=>{

    if(!show){
        responsiveNav.style.top = 0+"px"
        show = !
        bars.classList.remove("fa-bars")
        bars.classList.add("fa-x")
        
        
    }
    else{
        responsiveNav.style.top = -1000+"px"
        show = !show
        bars.classList.remove("fa-x")
        bars.classList.add("fa-bars")
    }
    
})