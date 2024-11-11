
//--------------------------ANIMATIONS------------------------------------------------

// gsap.to(".second-wrapper-items",{
//     transform:"translateX(-810%)",
//     scrollTrigger:{
//         trigger:".second-wrapper-container",
//         scroller:"body",
//         // markers:true,
//         start:"top 0%",
//         // end:"-100%",
//         pin:true,
//         scrub:2,
//     }
// })

gsap.from(".carousel-title-container",{
    y:1,
    duration:0.8,
    delay:2,
    opacity:0,
})
  
gsap.to(".second-wrapper-items", {
    x: "-820%", 
    scrollTrigger: {
        trigger: ".second-wrapper-container",
        scroller: "body", 
        start: "top top", // Animation starts when the trigger hits the top of the viewport
        end: "+=3000", // Adjust the end based on how long you want the scroll to affect the animation
        pin: true, 
        scrub: 1, 
        // markers: true,
    }
});


gsap.from(".fourth-wrapper-container",{
    y:170,
    opacity:0,
    duration:1,
    // delay:2,
    scrollTrigger:{
        trigger:".fourth-wrapper-container",
        scroller:"body",
        // start:"top 110%",
        // markers:true
    }
})

gsap.from(".fifth-wrapper-container",{
    y:170,
    opacity:0,
    duration:1,
    // delay:2,
    scrollTrigger:{
        trigger:".fifth-wrapper-container",
        scroller:"body",
        // start:"top 110%",
        // markers:true
    }
})
// gsap.from(".first-wrapper-container",{
//     y:170,
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:"first-wrapper-container",
//         scroller:"body",
//         markers:true
//     }
// })

//-----------------------------COMPONENTS---------------------------------------

var fourthWrapperState=[
    {
        src:"https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/2ROcA1uYykQbU2tM7v66qy/acb2d5eddb4b77c5a4df6c0e19f72709/A11160_24Q3_Lounger_Lift_Stony_Cream_Natural_White_PDP_LEFT-2000x2000.png",
        h3:"Women's Lounger Lift",
        h4:"Stony Cream",
        price:"$105"
    },
    {
        src:"https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/4PZe5eFRZyPOtgClDfNNaE/42942165a9325d001947ec9f5934d548/A11053_24Q3_Tree_Dasher_Relay_Deep_Navy_Deep_Navy_PDP_LEFT-2000x2000.png",
        h3:"Mens's Tree Dasher Relay",
        h4:"Deep Navy",
        price:"$130"
    },
    {
        src:"https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/25kaBcqrF20cfR3D2EVJh7/2a70011de8a9b7a09a9ca4db30061962/A10967_24Q2_Tree_Runner_Go_Thunder_Red_Natural_White_PDP_LEFT-2000x2000.png",
        h3:"Womens's Tree Runner Go",
        h4:"Thunder Red",
        price:"$120"
    },
    {
        src:"https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/4Z8F1HXuA4YULfGpqJDyCg/5d62a8b67fd7d678680ff46016dec100/TR2MNNT_SHOE_LEFT_GLOBAL_MENS_TREE_RUNNER_NAVY_NIGHT_DARK_NAVY.png",
        h3:"Mens's Tree Runners",
        h4:"Navy Night",
        price:"$100"
    },
    {
        src:"https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/1vQDHzOoMjC0EQm6a1HYry/3e33d6b9f1eec007aaa149588ef1b388/A10962_24Q4_Tree_Runner_Go_Stony_Cream_Stony_Cream_PDP_LEFT-2000x2000.png",
        h3:"Mens's Tree Runner Go",
        h4:"Stony Cream",
        price:"$120"
    },
    {
        src:"https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/6AxKaFvzBSsPX2orFJBOvs/bbb3a6b9eafa24e8d000d725422ee1a5/TB1WNNT_SHOE_LEFT_GLOBAL_WOMENS_TREE_BREEZERS_NAVY_NIGHT_DARK_NAVY.png",
        h3:"Women's Tree Breezers",
        h4:"Navy Night",
        price:"$100"
    },
    {
        src:"https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/LF5mw2OqGGbPKGlIGiM2r/d72e3d6ede36f865382272b2ea6f09c0/A11074_24Q3_Tree_Glider_Blizzard_Basin_Pink_Blizzard_PDP_LEFT-2000x2000.png",
        h3:"Womens's Tree GLider",
        h4:"Blizzars/Basin Pink",
        price:"$135"
    },
]
var fourthWrapperContainer=document.querySelector(".fourth-wrapper-items-container")
function fourthWrapperStateRender(){
    for(let i=0;i<fourthWrapperState.length;i++){
        const element=document.createElement("div")
        element.innerHTML=`<div class="fourth-wrapper-items">
                <div class="fourth-wrapper-items-img-container">
                    <img src="${fourthWrapperState[i].src}">
                </div>
                <div class="fourth-wrapper-items-desc-container">
                    <h3>${fourthWrapperState[i].h3}</h3>
                    <h4>${fourthWrapperState[i].h4}</h4>
                    <p>${fourthWrapperState[i].price}</p>
                </div>
            </div>`
        fourthWrapperContainer.appendChild(element)
    }
}
fourthWrapperStateRender()


const fifthWrapperState=[
    {
        srcNoHover:"https://www.riccardoricci.co/cdn/shop/files/variant-image-color-light-blue-5_a0f672e9-0064-48bb-b9cb-1d6dd02cae68.jpg?v=1726835313&width=900",
        srcHover:"https://www.riccardoricci.co/cdn/shop/files/S2779b81f0d92441d83f4519285d5ea1fH_687fdc41-2e52-4639-aacd-dfe01b2be169.webp?v=1726835313&width=540",
        h3:"OSCAR - WARM CASHMIRE SWEATER"
    },
    {
        srcNoHover:"https://www.riccardoricci.co/cdn/shop/files/35_0b566944-46e2-4831-be16-91dfc09f8fd6.png?v=1726651901&width=1800",
        srcHover:"https://www.riccardoricci.co/cdn/shop/files/37_39f23b63-e8f2-4cd0-9d36-e6ead2121eeb.png?v=1726651900&width=1800",
        h3:"JACK - PETROS ZIP SWEATER"
    },
    {
        srcNoHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot2024-06-02at4.47.22PM.png?v=1725251523&width=1800",
        srcHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot2024-06-02at4.48.44PM.png?v=1717321828&width=1800",
        h3:"ALESSANDRO - CLASSIC QUARTER-ZIP"
    },
    {
        srcNoHover:"https://www.riccardoricci.co/cdn/shop/files/1_9e320c47-239f-43ad-bbd8-97e4a0682713.png?v=1727278911&width=1800",
        srcHover:"https://www.riccardoricci.co/cdn/shop/files/4_e2fcee2b-6349-4ec0-8765-cd6a4973870b.png?v=1727278911&width=1800",
        h3:"ALEXANDER - SOVEREIGN WOOL SWEATER"
    },
    {
        srcNoHover:"https://www.riccardoricci.co/cdn/shop/files/2_1800x1800_1800x1800_17da97f6-a181-4122-98bb-abb92895d9a9.jpg?v=1726387956&width=1800",
        srcHover:"https://www.riccardoricci.co/cdn/shop/files/3_1800x1800_1800x1800_a5fd2f8c-e629-4d97-82cf-6953267197fd.jpg?v=1726387956&width=1800",
        h3:"JEAN - ELEGANT TRENCHCOAT"
    },
    {
        srcNoHover:"https://www.riccardoricci.co/cdn/shop/files/LP1.webp?v=1725248007&width=1800",
        srcHover:"https://www.riccardoricci.co/cdn/shop/files/LP2_f904ef3e-1d94-4331-8428-d123dc0337e7.webp?v=1725248007&width=1800",
        h3:"LORENZO - LINEN PANTS"
    },
    {
        srcNoHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot2024-10-09at5.13.09PM.png?v=1728468936&width=1800",
        srcHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot2024-10-09at5.13.52PM.png?v=1728468936&width=1800",
        h3:"ALDO - LINEN SHIRT"
    },
    {
        srcNoHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot_2024-09-02_at_11.12.00_AM.png?v=1725250430&width=1800",
        srcHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot_2024-09-02_at_11.12.26_AM.png?v=1725250431&width=1800",
        h3:"MARCO - PLEATED TROUSERS"
    },
    {
        srcNoHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot2024-06-02at4.46.42PM.png?v=1725251523&width=1800",
        srcHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot2024-06-02at4.46.52PM.png?v=1725251523&width=1800",
        h3:"SAM - COMFORT JACKET"
    },
    {
        srcNoHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot2024-10-09at7.53.41PM.png?v=1728478741&width=1800",
        srcHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot2024-10-09at7.54.10PM.png?v=1728478741&width=1800",
        h3:"CLAUDIO - CABLE KNIT QUARTER-ZIP"
    },
    {
        srcNoHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot2024-06-02at6.36.14PM.png?v=1717328264&width=1800",
        srcHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot2024-06-02at6.36.27PM.png?v=1717328264&width=1800",
        h3:"PIERRE - SHORT SLEEVE SHIRT"
    },
    {
        srcNoHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot2024-09-02at11.21.38AM.png?v=1725251025&width=1800",
        srcHover:"https://www.riccardoricci.co/cdn/shop/files/Screenshot2024-09-02at11.21.48AM.png?v=1725251025&width=1800",
        h3:"SANTONI - COLLARED T-SHIRT"
    },
]
var fifthWrapperContainer=document.querySelector(".fifth-wrapper-items-container")
function fifthWrapperStateRender(){
    for(let i=0;i<fifthWrapperState.length;i++){
        const element=document.createElement("div")
        element.innerHTML=`<div class="fifth-wrapper-items">
                <div class="fifth-wrapper-items-img-container">
                    <img class="fifth-wrapper-items-img-without-hover"
                        src="${fifthWrapperState[i].srcNoHover}"
                        alt="">
                    <img class="fifth-wrapper-items-img-on-hover"
                        src="${fifthWrapperState[i].srcHover}"
                        alt="">
                </div>
                <div class="fifth-wrapper-items-desc-container">
                    <h3>${fifthWrapperState[i].h3}</h3>
                </div>
            </div>`
        fifthWrapperContainer.appendChild(element)
    }
}
fifthWrapperStateRender()

//-------------------------swiper--------------------------
const swiper = new Swiper('.swiper', {
    loop: true, 
    spaceBetween:20,
    slidesPerView: 'auto', 

    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets:true,
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    
    }
  });