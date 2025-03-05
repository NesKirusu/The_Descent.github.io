document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    let boolean = false
    let loop = gsap.timeline({repeat: -1})
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
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".site",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            markers: boolean
        }
    })
    .add('start')
    tl.to(".hydroflask__img",{
        y:"100vh",
        x:"-55vw",
        duration: 1,
        rotation: "-10deg",
        ease:"none"
    }, "start").to(".hydroflask__img",{
        y: "100vh",
        x: "-40vw",
        rotation: "0deg",
        scale: 0.5,
        ease:"none",
        opacity: 0
    }).to(".shadow",{
        y:"100vh",
        x:"-55vw",
        ease:"none"
    }, "start")
    .to(".shadow",{
        scale: 0.5,
        ease:"none",
        opacity: 0
    }, "end")
    tl.from(".bluranimation",{
        scale: 0,
        filter: "blur(20px)",
        stagger: {
            each: 0.5,
            from: "center"
        },
        duration: 5,
        scrollTrigger:{
            trigger: ".hydro",
            start: "+=200px center",
            end: "center bottom",
            scrub: 1,
            markers: boolean
        }
    }, "<0.5")
    tl.from(".bluranimation2",{
        scale: 0,
        filter: "blur(20px)",
        stagger: {
            each: 0.5,
            from: "center"
        },
        duration: 1,
        scrollTrigger:{
            trigger: ".container",
            start: "top center",
            end: "center bottom",
            scrub: 2,
            markers: boolean
        }
    }, "<0.5")
    tl.from(".navigation__bar .wrapper", {
        backgroundColor: "#000000",
        scrollTrigger:{
            trigger: ".hydro",
            start: "top 20%",
            end: "bottom bottom",
            toggleAction: "play none none play",
            scrub: 1,
            markers: boolean
        }
    })
})
