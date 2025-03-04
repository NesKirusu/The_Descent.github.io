var text_margintop = document.getElementById('text_margintop')
window.addEventListener('scroll', ()=>{
    let value = window.scrollY
    let hydroflask_img = document.getElementById('hydroflask')
    let screen_width = window.innerWidth
    let screen_height = window.innerHeight
    text_margintop.style.marginTop = value*1.2 +'px'
    console.log(value)
    if(value < 450){
        gsap.to(hydroflask_img, {
            x:0,
            y:0,
            opacity: 1,
            rotation:0
        })
    }
    if(value > 450 && value < 1040){
        gsap.to(hydroflask_img, {
            x:screen_width*-0.6,
            y:850,
            rotation:-20,
            duration:0.5,
            opacity: 1
        })
    }
})

document.addEventListener("DOMContentLoaded", (event) => {
    let value = window.scrollY
    let hydroflask_img = document.getElementById('hydroflask')
    
    })
