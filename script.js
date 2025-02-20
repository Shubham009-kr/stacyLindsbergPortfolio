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



    
    


topTextAnim()
middleTextAnim()
bottomTextAnim()
