gsap.from(".inner-container-1 .inner-container-left-section",{
    y:-200,
    opacity:0,
    duration:1,
    // delay:2,
    ease: "back.out",

})
gsap.from(".inner-container-1 .inner-container-right-section",{
    y:200,
    opacity:0,
    duration:1,
    // delay:2,
    ease: "back.out",

})


gsap.from(".inner-container-2 .inner-container-right-section",{
    x:-170,
    opacity:0,
    duration:1,
    // delay:2,
    scrollTrigger:{
        trigger:".inner-container-2",
        scroller:"body",
        start:"top 90%",
        // markers:true,
        scrub:1,
    }
})
gsap.from(".inner-container-2 .inner-container-left-section",{
    x:170,
    opacity:0,
    duration:1,
    // delay:2,
    scrollTrigger:{
        trigger:".inner-container-2",
        scroller:"body",
        start:"top 90%",
        // markers:true,
        scrub:1,
    }
})




gsap.from(".inner-container-3 .inner-container-left-section",{
    x:-170,
    opacity:0,
    duration:1,
    // delay:2,
    scrollTrigger:{
        trigger:".inner-container-3",
        scroller:"body",
        start:"top 90%",
        // markers:true,
        scrub:1,
    }
})
gsap.from(".inner-container-3 .inner-container-right-section",{
    x:170,
    opacity:0,
    duration:1,
    // delay:2,
    scrollTrigger:{
        trigger:".inner-container-3",
        scroller:"body",
        start:"top 90%",
        // markers:true,
        scrub:1,
    }
})




gsap.from(".inner-container-4 .inner-container-right-section",{
    x:-170,
    opacity:0,
    duration:1,
    // delay:2,
    scrollTrigger:{
        trigger:".inner-container-4",
        scroller:"body",
        start:"top 90%",
        // markers:true,
        scrub:1,
    }
})
gsap.from(".inner-container-4 .inner-container-left-section",{
    x:170,
    opacity:0,
    duration:1,
    // delay:2,
    scrollTrigger:{
        trigger:".inner-container-4",
        scroller:"body",
        start:"top 90%",
        // markers:true,
        scrub:1,
    }
})
