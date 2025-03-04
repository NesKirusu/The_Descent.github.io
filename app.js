document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    let loop = gsap.timeline({repeat: -1, yoyo: false})
    loop.to(".hydroflask__img", {
        yPercent: 5,
        duration: 2,
        ease: "power1.inOut"
    })
    loop.to(".hydroflask__img", {
        yPercent: 0,
        duration: 2,
        ease: "power1.inOut"
    })
    let tl = gsap.timeline()
    tl.to(".hydroflask__img",{
        y:"100vh",
        x:"-55vw",
        rotation: "-10deg",
        duration: 1,
        ease:"none",
        scrollTrigger:{
            trigger: ".hydro",
            start: "top center",
            end: "center bottom",
            scrub: 6,
            markers: 1,
            onStart: () =>{
                loop.pause()
            },
            onComplete: () =>{
                loop.play()
            }
        }
    })
    tl.to(".shadow",{
        y:"100vh",
        x:"-55vw",
        duration: 1,
        ease:"none",
        scrollTrigger:{
            trigger: ".hydro",
            start: "top center",
            end: "center bottom",
            scrub: 6,
            markers: 1,
            onStart: () =>{
                loop.pause()
            },
            onComplete: () =>{
                loop.play()
            }
        }
    })
    tl.from(".bluranimation",{
        scale: 0,
        filter: "blur(20px)",
        stagger: 1,
        duration: 5,
        scrollTrigger:{
            trigger: ".hydro",
            start: "+=200px center",
            end: "center bottom",
            scrub: 5,
            markers: 1
        }
    }, "<0.5")
})
