const tll = gsap.timeline({
    paused: 'true',
})
tll.to('#percent, #bar', {
    duration: 0.2,
    opacity: 0,
    zIndex: -1,
})
tll.to('#preloader', {
    duration: 0.8,
    width: '0%',
})
tll.from(
    '.container',
    {
        duration: 1.5,
        y: '-150%',
    },
    '-=.2',
)
tll.to('.container h1', {
    opacity: 1,
    textShadow: '12px 20px rgba(255,255,255,0.23)',
    skewY: 10,
    y: '10%',
    stagger: {
        amount: 0.4,
    },
})
var width = 1
var bar = document.getElementById('barconfrm')
var id
function move() {
    id = setInterval(frame, 10)
}
function frame() {
    if (width >= 100) {
        clearInterval(id)
        tll.play()
    } else {
        width++
        bar.style.width = width + '%'
        document.getElementById('percent').innerHTML = width + '%'
    }
}