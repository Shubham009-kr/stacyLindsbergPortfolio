function topTextAnim(){
    var topLeftTextHtml = document.querySelector(".tleft")
    var topLeftText = document.querySelector(".tleft").textContent.split("");
    var clutter = ""
    topLeftText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })

    topLeftTextHtml.innerHTML = clutter

    var topRightTextHtml = document.querySelector(".tright")
    var topRightText = document.querySelector(".tright").textContent.split("");
    var clutterTwo = ""
    topRightText.forEach(function(e){
        clutterTwo += `<span>${e}</span>`
    })

    topRightTextHtml.innerHTML = clutterTwo

    gsap.from(".top-box h1 span",{
        y:-70,
        opacity:0,
        duration:.5,
        stagger:0.15
    })

    document.querySelector(".tright").addEventListener("mouseenter", function(){
        var initialText = document.querySelector(".tright").textContent;
        gsap.to(".tright",{
            text: "Versatile | Expressive | Visionary | Imaginative | Limitless",
            duration:.5,
            ease: "power2.out"
        })
    })

    document.querySelector(".tright").addEventListener("mouseleave", function(){
        // var initialText = document.querySelector(".tright").textContent;
        gsap.to(".tright",{
            text: "Visionary.",
            duration:.3,
            ease: "power2.out"
        })
    })

}

function bottomTextAnim(){
    var topLeftTextHtml = document.querySelector(".place")
    var topLeftText = document.querySelector(".place").textContent.split("");
    var clutter = ""
    topLeftText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })

    topLeftTextHtml.innerHTML = clutter

    var topRightTextHtml = document.querySelector(".scroll")
    var topRightText = document.querySelector(".scroll").textContent.split("");
    var clutterTwo = ""
    topRightText.forEach(function(e){
        clutterTwo += `<span>${e}</span>`
    })

    topRightTextHtml.innerHTML = clutterTwo

    gsap.from("#place h3 span, #place h4 span",{
        y:70,
        opacity:0,
        duration:.5,
        stagger:0.15
    })

}

function middleTextAnim(){
    gsap.from(".icons",{
        x:-70,
        duration:1,
        opacity:0,
        ease:"power2.out"
    })

    var topRightTextHtml = document.querySelector(".name")
    var topRightText = document.querySelector(".name").textContent.split(" ");
    var clutterTwo = ""
    topRightText.forEach(function(e){
        clutterTwo += `<span>${e}&nbsp;</span>`
    })

    topRightTextHtml.innerHTML = clutterTwo

    var topRightTextHtml = document.querySelector(".role")
    var topRightText = document.querySelector(".role").textContent.split(" ");
    var clutterTwo = ""
    topRightText.forEach(function(e){
        clutterTwo += `<span>${e}&nbsp;</span>`
    })

    topRightTextHtml.innerHTML = clutterTwo

    gsap.from(".middle h1 span",{
        x:-70,
        opacity:0,
        duration:1,
        stagger:0.45
    })

    document.querySelector(".expand").addEventListener("click", function(){
        gsap.to(".shrink",{
            opacity:1,
            duration:.8,
            ease:"power2.out"
        })
        gsap.to(".expand",{
            opacity:0,
            duration:.8,
            ease:"power2.out"
        })
        gsap.to(".role",{
            text: "Digital Design | Architect Design | Interaction Design | Motion Design | Photography",
            duration:.8,
            fontSize:"3rem",
            ease: "power2.out"
        })
    })

    document.querySelector(".shrink").addEventListener("click", function(){
        gsap.to(".shrink",{
            opacity:0,
            duration:.8,
            ease:"power2.out"
        })
        gsap.to(".expand",{
            opacity:1,
            duration:.8,
            ease:"power2.out"
        })
        gsap.to(".role",{
            text: "DIGITAL Designer.",
            duration:.5,
            fontSize:"6rem",
            ease: "power2.out"
        })
    })

    var topRightTextHtml = document.querySelector(".quo")
    var topRightText = document.querySelector(".quo").textContent.split(" ");
    var clutterTwo = ""
    topRightText.forEach(function(e){
        clutterTwo += `<span>${e}&nbsp;</span>`
    })

    topRightTextHtml.innerHTML = clutterTwo

    gsap.from(".quote h1 span",{
        y:70,
        opacity:0,
        duration:.5,
        stagger:0.15
    })
}


document.addEventListener("DOMContentLoaded", () => {
    const slideshow = document.querySelector(".img-gallery");
    let slides = Array.from(document.querySelectorAll(".image"));

    // Set initial z-index to stack images
    slides.forEach((slide, index) => {
        slide.style.zIndex = slides.length - index;
    });

    function moveToNextSlide() {
        let topSlide = slides[0]; // Get the topmost image

        gsap.to(topSlide, {
            scale: 0.1,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
                // Reset and move the image to the back
                topSlide.style.opacity = 1;
                topSlide.style.transform = "scale(1)";
                slideshow.appendChild(topSlide); // Moves it to the last position

                // Update the slides array order dynamically
                slides = Array.from(document.querySelectorAll(".image"));

                // Reset z-index for correct stacking order
                slides.forEach((slide, index) => {
                    slide.style.zIndex = slides.length - index;
                });
            }
        });
    }

    // Click event to transition images
    slideshow.addEventListener("click", moveToNextSlide);

    // Auto slideshow every 3 seconds
    // setInterval(moveToNextSlide, 3000);
});

var initialPath = "M 100 90 Q 750 90 1400 90";
var finalPath = "M 100 50 Q 750 50 1400 50";
var string = document.querySelector(".top-line")
string.addEventListener("mousemove", function(dets){
    path = `M 100 50 Q ${dets.x} ${dets.y} 1400 50`
    gsap.to(".svg1 .path1", {
        attr: {d:path},
        duration: 0.2,
        ease: "power3.out",
    })
})
string.addEventListener("mouseleave", function(dets){
    gsap.to(".svg1 .path1", {
        attr: {d:finalPath},
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
    })
})

var string = document.querySelector(".top-line2")
string.addEventListener("mousemove", function(dets){
    path = `M 100 50 Q ${dets.x} ${dets.y} 1400 50`
    gsap.to(".svg2 .path2", {
        attr: {d:path},
        duration: 0.2,
        ease: "power3.out",
    })
})
string.addEventListener("mouseleave", function(dets){
    gsap.to(".svg2 .path2", {
        attr: {d:finalPath},
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
    })
})

var string = document.querySelector(".top-line3")
string.addEventListener("mousemove", function(dets){
    path = `M 100 50 Q ${dets.x} ${dets.y} 1400 50`
    gsap.to(".svg4 .path4", {
        attr: {d:path},
        duration: 0.2,
        ease: "power3.out",
    })
})
string.addEventListener("mouseleave", function(dets){
    gsap.to(".svg4 .path4", {
        attr: {d:finalPath},
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
    })
})

// var string = document.querySelector(".top-line4")
string.addEventListener("mousemove", function(dets){
    path = `M 100 50 Q ${dets.x} ${dets.y} 1400 50`
    gsap.to(".svg4 .path4", {
        attr: {d:path},
        duration: 0.2,
        ease: "power3.out",
    })
})
string.addEventListener("mouseleave", function(dets){
    gsap.to(".svg4 .path4", {
        attr: {d:finalPath},
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
    })
})

var string = document.querySelector(".top-line5")
string.addEventListener("mousemove", function(dets){
    path = `M 100 50 Q ${dets.x} ${dets.y} 1400 50`
    gsap.to(".svg7 .path7", {
        attr: {d:path},
        duration: 0.2,
        ease: "power3.out",
    })
})
string.addEventListener("mouseleave", function(dets){
    gsap.to(".svg7 .path7", {
        attr: {d:finalPath},
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
    })
})

var finalPathBelow = "M 20 50 Q 750 50 800 50"
var string = document.querySelector(".top-line4")
string.addEventListener("mousemove", function(dets){
    path = `M 10 50 Q ${dets.x} ${dets.y} 800 50`
    gsap.to(".svg6 .path6", {
        attr: {d:path},
        duration: 0.2,
        ease: "power3.out",
    })
})
string.addEventListener("mouseleave", function(dets){
    gsap.to(".svg6 .path6", {
        attr: {d:finalPathBelow},
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
    })
})

var finalPathSvg3 = "M 100 0 Q 100 10 100 760"
var string = document.querySelector(".svg3")
string.addEventListener("mousemove", function(dets){
    path = `M 100 0 Q ${dets.y} ${dets.x} 100 760`
    gsap.to(".svg3 .path3", {
        attr: {d:path},
        duration: 0.2,
        ease: "power3.out",
    })
})
string.addEventListener("mouseleave", function(dets){
    gsap.to(".svg3 .path3", {
        attr: {d:finalPathSvg3},
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
    })
})

var string = document.querySelector(".svg5")
string.addEventListener("mousemove", function(dets){
    path = `M 100 0 Q ${dets.y} ${dets.x} 100 760`
    gsap.to(".svg5 .path5", {
        attr: {d:path},
        duration: 0.2,
        ease: "power3.out",
    })
})
string.addEventListener("mouseleave", function(dets){
    gsap.to(".svg5 .path5", {
        attr: {d:finalPathSvg3},
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
    })
})

function aboutPageAnim(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#about",
            scroller:"body",
            start:"top 40%",
            end:"top 10%",
            scrub:2,
        }
    })  

    tl.from("#about .boldText",{
        x:500,
        y:500,
        scale:.2,
        opacity:0,
        duration:1,
    })

    tl.from("#about .svg3",{
        x:100,
        y:500,
        scale:.2,
        opacity:0,
        duration:1,
    })

    tl.from("#about #about-part2",{
        x:-500,
        y:500,
        scale:.2,
        opacity:0,
        duration:1,
        stagger:.2,
    })
}

var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#work",
            scroller:"body",
            start:"top 70%",
            end:"top 20%",
            scrub:2,
        }
    })  

    tl.from("#work #work1",{
        x:500,
        y:500,
        scale:.2,
        opacity:0,
        duration:1,
    })

    tl.from("#work .svg5",{
        scale:.2,
        opacity:0,
        duration:1,
    })

    tl.from("#work #work2",{
        x:-500,
        y:500,
        scale:.2,
        opacity:0,
        duration:1,
    })

function digitalDesignAnim(){
     var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".digitalDesign",
            scroller:"body",
            start:"top 70%",
            end:"top -20%",
            scrub:2,
        }
    })

    tl.to(".digitalDesign",{
        backgroundColor:"#0d0d0d",
        duration:1,

    })

    tl.from(".digitalDesign .headingDD",{
        x:500,
        scale:0.2,
        duration:3,
        opacity:0,
    })

    tl.from(".row1 #image1",{
        y:500,
        opacity:0,
        duration:1,
    })

    tl.from(".row1 #image2",{
        y:500,
        opacity:0,
        duration:1,
        delay:0.3,
    })

    tl.from(".row1 #image3",{
        y:500,
        opacity:0,
        duration:1,
        delay:0.4,
    })

    tl.from(".row1 #image4",{
        y:500,
        opacity:0,
        duration:1,
        delay:0.2,
    })

    tl.from(".row2 #image5",{
        y:500,
        opacity:0,
        duration:1,
    })

    tl.from(".row2 #image6",{
        y:500,
        opacity:0,
        duration:1,
        delay:0.3,
    })

    tl.from(".row2 #image7",{
        y:500,
        opacity:0,
        duration:1,
        delay:0.2,
    })

    tl.from(".row2 #image8",{
        y:500,
        opacity:0,
        duration:1,
        delay:0.5,
    })

    tl.from(".row3 #image9",{
        y:500,
        opacity:0,
        duration:1,
    })

    tl.from(".row3 #image10",{
        y:500,
        opacity:0,
        duration:1,
        delay:0.3,
    })

    tl.from(".row3 #image11",{
        y:500,
        opacity:0,
        duration:1,
        delay:0.2,
    })

    tl.from(".row3 #image12",{
        y:500,
        opacity:0,
        duration:1,
        delay:0.5,
    })

    document.querySelector("#image1 img").addEventListener("mouseenter", function() {
        this.style.filter = "none";
    });

    document.querySelector("#image1 img").addEventListener("mouseleave", function() {
        this.style.filter = "grayscale(100%)";
    });

    document.querySelector("#image2 img").addEventListener("mouseenter", function() {
        this.style.filter = "none";
    });

    document.querySelector("#image2 img").addEventListener("mouseleave", function() {
        this.style.filter = "grayscale(100%)";
    });

    document.querySelector("#image3 img").addEventListener("mouseenter", function() {
        this.style.filter = "none";
    });

    document.querySelector("#image3 img").addEventListener("mouseleave", function() {
        this.style.filter = "grayscale(100%)";
    });

    document.querySelector("#image4 img").addEventListener("mouseenter", function() {
        this.style.filter = "none";
    });

    document.querySelector("#image4 img").addEventListener("mouseleave", function() {
        this.style.filter = "grayscale(100%)";
    });

    document.querySelector("#image5 img").addEventListener("mouseenter", function() {
        this.style.filter = "none";
    });

    document.querySelector("#image5 img").addEventListener("mouseleave", function() {
        this.style.filter = "grayscale(100%)";
    });

    document.querySelector("#image6 img").addEventListener("mouseenter", function() {
        this.style.filter = "none";
    });

    document.querySelector("#image6 img").addEventListener("mouseleave", function() {
        this.style.filter = "grayscale(100%)";
    });

    document.querySelector("#image7 img").addEventListener("mouseenter", function() {
        this.style.filter = "none";
    });

    document.querySelector("#image7 img").addEventListener("mouseleave", function() {
        this.style.filter = "grayscale(100%)";
    });

    document.querySelector("#image8 img").addEventListener("mouseenter", function() {
        this.style.filter = "none";
    });

    document.querySelector("#image8 img").addEventListener("mouseleave", function() {
        this.style.filter = "grayscale(100%)";
    });

    document.querySelector("#image9 img").addEventListener("mouseenter", function() {
        this.style.filter = "none";
    });

    document.querySelector("#image9 img").addEventListener("mouseleave", function() {
        this.style.filter = "grayscale(100%)";
    });

    document.querySelector("#image10 img").addEventListener("mouseenter", function() {
        this.style.filter = "none";
    });

    document.querySelector("#image10 img").addEventListener("mouseleave", function() {
        this.style.filter = "grayscale(100%)";
    });

    document.querySelector("#image11 img").addEventListener("mouseenter", function() {
        this.style.filter = "none";
    });

    document.querySelector("#image11 img").addEventListener("mouseleave", function() {
        this.style.filter = "grayscale(100%)";
    });

    document.querySelector("#image12 img").addEventListener("mouseenter", function() {
        this.style.filter = "none";
    });

    document.querySelector("#image12 img").addEventListener("mouseleave", function() {
        this.style.filter = "grayscale(100%)";
    });
}

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".photoshoot",
            scroller:"body",
            start:"top 70%",
            end:"top 20%",
            scrub:2,
        }
    })  

ScrollTrigger.create({
    trigger: ".photoshoot",
    scroller: "body",
    start: "top 70%", 
    onEnter: () => {
        setTimeout(() => {
            photoshootTriggerAnim();
        }, 100); // Small delay ensures proper execution
    }
});

function photoshootTriggerAnim(){

    const positions = [
    { top: "0%", left: "0%" },
    { top: "0%", left: "10%" },
    { top: "0%", left: "60%" },
    { top: "16%", left: "15%" },
    { top: "16%", left: "40%" },
    { top: "32%", left: "50%" },
    { top: "48%", left: "0%" },
    { top: "64%", left: "90%" },
    { top: "80%", left: "20%" },
    { top: "80%", left: "70%" },
    { top: "65%", left: "62%" },
    { top: "50%", left: "40%" },
    { top: "42%", left: "68%" },
    { top: "70%", left: "78%" },
    { top: "35%", left: "90%" },
]
    const imges = document.querySelectorAll(".imges");
gsap.set(".imges",{
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)",
})

gsap.from(".text-demo p", {
    y:40,
    ease:"power4.inOut",
    duration:1,
    stagger:{
        amount:0.15,
    },
    delay:0.5,
})

gsap.to(".imges",{
    scale:1,
    width:"300px",
    height:"400px",
    stagger:0.15,
    duration:0.75,
    ease:"power2.out",
    delay:1,
    onComplete: scatterAndShrink,
})

gsap.to(".text-demo p",{
    top:"40px",
    ease:"power4.inOut",
    duration:1,
    stagger:{
        amount:0.15,
    },
    delay:3,
})

function scatterAndShrink(){
    gsap.to(".imges",{
        top:(i) => positions[i].top,
        left:(i) => positions[i].left,
        transform:"none",
        width:"75px",
        height:"100px",
        stagger:0.075,
        duration:0.75,
        ease:"power2.out",
    })
}

function applyBlurEffect(){
    const elementsToBlur = document.querySelectorAll('.text-demo, .imges:not([data-enlarged="true"])');
    gsap.to(elementsToBlur,{
        filter:'blur(20px)',
        duration:0.75,
        ease:"power2.out"
    });
}

function removeBlurEffect(){
    const elementsToBlur = document.querySelectorAll('.text-demo, .imges:not([data-enlarged="true"])');
    gsap.to(elementsToBlur,{
        filter:'blur(0px)',
        duration:1,
        ease:"power2.out"
    });
}

function toggleImageSize(event){
    const img = event.currentTarget;
    const isEnlarged = img.getAttribute('data-enlarged') === 'true';
    const originalPosition = JSON.parse(img.getAttribute('data-original-position'));
    const viewPortWidth = window.innerWidth;
    const viewPortHeight = window.innerHeight;

    if(!isEnlarged){
        const enlargedWidth = 500;
        const enlargedHeight = 600;
        const centeredLeft = (viewPortWidth - enlargedWidth) / 2;
        const centeredTop = (viewPortHeight - enlargedHeight) / 2;
        const topCorrection = 75;
        const correctedTop = centeredTop - topCorrection;

        gsap.to(img,{
            zIndex: 1000,
            top: centeredTop + 'px',
            left: centeredLeft + 'px',
            width: enlargedWidth + 'px',
            height: enlargedHeight + 'px',
            ease:"power4.out",
            duration:1,
        });

        img.setAttribute('data-enlarged', 'true');
        applyBlurEffect();
    }else{
        setTimeout(()=>removeBlurEffect(), 100);

        gsap.to(img,{
            zIndex: 1,
            top: originalPosition.top,
            left: originalPosition.left,
            width: '75px',
            height: '100px',
            ease:"power4.out",
            duration:1,
        });     
        img.setAttribute('data-enlarged', 'false');   
    }
}

imges.forEach((img, i) => {
    img.setAttribute('data-original-position', JSON.stringify(positions[i]));
    img.setAttribute('data-enlarged', 'false');
    img.addEventListener('click', toggleImageSize);
})
    
}

function architectDesignAnim(){
    const galleryContainer = document.querySelector(".gallr");
const galleryItem = galleryContainer.querySelectorAll(".gallr-item");
const indicat = document.querySelector(".indicator");

const defalutItemFlex = "0 1 20px";
const hoverItemFlex = "1 1 400px";

const updateGalleryItems = () => {
    galleryItem.forEach((item) =>{
        let flex = defalutItemFlex;
        
        if(item.isHovered){
            flex = hoverItemFlex;
        }

        item.style.flex = flex;
    });
};

galleryItem[0].isHovered = true;
updateGalleryItems();

galleryItem.forEach((item) => {
    item.addEventListener("mouseenter", ()=>{
        galleryItem.forEach((otherItem)=>{
            otherItem.isHovered = otherItem === item;
        });

        updateGalleryItems();
    });
});

galleryContainer.addEventListener("mousemove", (e)=>{
    indicat.style.left = `${
        e.clientX - galleryContainer.getBoundingClientRect().left
    }px`;
})

var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".architectDesign",
            scroller:"body",
            start:"top 70%",
            end:"top 50%",
            scrub:2,
        }
    })

    tl.to(".architectDesign",{
        backgroundColor:"#0d0d0d",
        duration:1,
    })
}

function interactionDesignAnim(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".interactionDesign",
            scroller:"body",
            start:"top 70%",
            end:"top 50%",
            scrub:2,
        }
    })

    tl.from(".interaction",{
        x:-200,
        duration:1,
        delay:0.5,
        opacity:0
    })

    tl.from(".motion",{
        x:200,
        duration:1,
        delay:0.5,
        opacity:0
    })

    tl.from(".itr-vid",{
        x:-200,
        duration:1,
        delay:0.5,
        opacity:0
    })

    tl.from(".mtn-vid",{
        x:200,
        duration:1,
        delay:0.5,
        opacity:0
    })


}

function testimonialAnim(){
    let currentScroll = 0;
let isScrollDown = true;
let arrows = document.querySelectorAll(".marquee-part i");
let tween = gsap.to(".marquee-part",{
    xPercent:-100,
    repeat:-1,
    duration:5,
    ease:"linear",
}).totalProgress(-1);

gsap.set(".marquee-inner",{ xPercent:-50 });

window.addEventListener("scroll", function(){
    if(this.window.scrollY > currentScroll){
        isScrollDown = true;
    }else{
        isScrollDown = false;
    }

    gsap.to(tween, {
        timeScale: isScrollDown ? 1:-1,
    });

    arrows.forEach((arrow) => {
        if(isScrollDown){
            arrow.classList.remove("active");
        }else{
            arrow.classList.add("active");
        }
    });

    currentScroll = this.window.scrollY;
})

let testi = document.querySelectorAll(".p-one");
let testiHead = document.querySelector(".testi-head");

testi.forEach((test) => {
    test.addEventListener("mouseenter", function(){
        gsap.to(test,{
            backgroundColor:"#0d0d0d",
            color:"white",
            duration:.5,
            scaleX:1.05,
            borderRadius:"0px 100px 0px 100px",
        })
    })

    test.addEventListener("mouseleave", function(){
        gsap.to(test,{
            backgroundColor:"white",
            color:"#0d0d0d",
            duration:.5,
            scaleX:1,
            borderRadius:"0px 0px 0px 0px",
        })
    })
})

testiHead.addEventListener("mouseenter", function(){
    gsap.to(".underline",{
        opacity:1,
        width:"430px",
        duration:.8,
    })
})

testiHead.addEventListener("mouseleave", function(){
    gsap.to(".underline",{
        opacity:0,
        width:"0px",
        duration:.8,
    })
})


}

function footerAnim(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"footer",
            scroller:"body",
            start:"top 60%",
            end:"top 10%",
            scrub:2,
        }
    })

    tl.from(".card-body",{
        backgroundColor:"#0d0d0d",
        duration:1,
        delay:0.5,
        opacity:0
    })

    tl.from(".first-cate",{
        x:-200,
        duration:1,
        delay:0.5,
        opacity:0
    })

    tl.from(".second-cate",{
        y:200,
        duration:1,
        delay:0.5,
        opacity:0
    })

    tl.from(".third-cate",{
        x:200,
        duration:1,
        delay:0.5,
        opacity:0
    })

    tl.from(".left-text h1",{
        x:-200,
        duration:1,
        delay:0.5,
        opacity:0,
        fontStyle:"none",
    })

    tl.from(".left-text h2",{
        x:-200,
        duration:1,
        delay:0.5,
        opacity:0,
        fontStyle:"italic",
    })

    tl.from(".top-sec h3",{
        y:40,
        duration:1.2,
        delay:0.5,
        opacity:0,
        stagger:0.2,
    })

    tl.from(".bottom-sec h2, .bottom-sec h3",{
        y:40,
        duration:1.2,
        delay:0.5,
        opacity:0,
        stagger:0.2,
    })

    tl.from(".lowestBText",{
        y:200,
        duration:.5,
        delay:0.5,
        opacity:0,
    })

    var lowestBText = document.querySelector(".lowestBText");
    lowestBText.addEventListener("mouseenter", function(){
        gsap.to(lowestBText, {
            y:20,
            duration:.5,
            delay:0.2,
            opacity:1,
            letterSpacing:0,
            left:"25%",
        })
    })
    lowestBText.addEventListener("mouseleave", function(){
        gsap.to(lowestBText, {
            y:0,
            duration:.5,
            opacity:.5,
            letterSpacing:"80px",
            left:"13%"
        })
    })
}

topTextAnim()
middleTextAnim()
bottomTextAnim()
aboutPageAnim()
digitalDesignAnim()
architectDesignAnim()
interactionDesignAnim()
testimonialAnim()
footerAnim()
// photoshootTriggerAnim()
