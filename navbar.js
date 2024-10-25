var  items = document.getElementsByClassName("navbar-items")
Array.from(items).forEach(function(dets,idx){
    dets.addEventListener("mouseenter", function () {
        // console.log(dets)
        document.querySelector(`.${dets.id}-dropdown-container`).style.display="flex"
        gsap.fromTo(`.${dets.id}-dropdown-container`, {
            y: -30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            overwrite: true,
            ease:"power2.out"
        })
    })
    dets.addEventListener("mouseleave", function () {
        gsap.to(`.${dets.id}-dropdown-container`, {
            y: 0,
            duration:0.5,
            opacity: 0,
            overwrite: true,
            onComplete: () => {
                document.querySelector(`.${dets.id}-dropdown-container`).style.display = 'none';
            }
        })
    })
})

gsap.from(".left-navbar-section",{
    opacity:0,
    duration:1,
    x:-30,
    stagger:0.1,
    delay:1
})

gsap.from(".navbar-icons",{
    opacity:0,
    duration:1,
    x:30,
    stagger:0.1,
    delay:1
})


gsap.from(".navbar-items",{
    opacity:0,
    duration:0.8,
    y:-50,
    stagger:0.1,
    delay:1
})