var tl = gsap.timeline()

function createTimeLoader() {
    let randomValue = 0
    setInterval(function () {
        randomValue = randomValue + Math.floor(Math.random() * 20);
        if (randomValue < 100) {
            document.querySelector('#loader h1').innerText = randomValue + '%';
        }
        else {
            randomValue = 100;
            document.querySelector('#loader h1').innerText = randomValue + '%';
        }
    }, 150);
}


tl.to("#loader h1", {
    scale: 1.5,
    delay: 0.5,
    duration: 1,
    onStart: createTimeLoader()
})

tl.to("#loader", {
    top: "-100vh",
    delay: 0.3,
    duration: 1.5
})


gsap.to("#page1 h1", {
    transform: "translateX(-100%)",
    fontWeight: "100",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top 0",
        end: "top -200%",
        scrub: 3,
        pin: true
    }
})