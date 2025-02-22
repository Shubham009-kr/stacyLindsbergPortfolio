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
            markers:"true"
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
            markers:"true"
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
            markers:"true"
        }
    })

    tl.to(".digitalDesign",{
        backgroundColor:"#212121",
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

    




    


topTextAnim()
middleTextAnim()
bottomTextAnim()
aboutPageAnim()
digitalDesignAnim()
