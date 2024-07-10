gsap.registerPlugin(ScrollTrigger) ;

let tl =gsap.timeline()

tl.from(".navbar",{y:-50,duration:1,opacity:0});
tl.from(".icons",{x:-20,duration:0.5,opacity:0});
tl.from(".image",{x:20,duration:0.2,opacity:0});

gsap.from(".about",{
    scrollTrigger:{
        trigger:".about",
        markers:false,
        start:"top 300",
        toggleActions: "play pause resume reset"
        

 
       
    },
    x:50,
    duration:1,
    opacity:0,
    ease:"bounce.out",
});


gsap.from("#five",{
    scrollTrigger:{
        trigger:"#five",
        markers:false,
        start:"top 300", 
        toggleActions: "play pause resume reset"

 
       
    },
    x:-50,
    duration:1,
    opacity:0,
    ease:"bounce.out",
    
})

gsap.from(".listone",{
    scrollTrigger:{
        trigger:".listone",
        // markers:true,
        start:"top 500", 
        toggleActions: "play pause resume reset"

 
       
    },
    x:-50,
    duration:1,
    opacity:0,
    ease:"bounce.out",
    
});
gsap.from(".listtow",{
    scrollTrigger:{
        trigger:".listtow",
        // markers:true,
        start:"top 500", 
        toggleActions: "play pause resume reset"

 
       
    },
    x:10,
    duration:1,
    opacity:0,
    ease:"bounce.out",
    
})
gsap.from(".listthree",{
    scrollTrigger:{
        trigger:".listthree",
        // markers:true,
        start:"top 500", 
        toggleActions: "play pause resume reset"

 
       
    },
    x:50,
    duration:1,
    opacity:0,
    ease:"bounce.out",
    
})


