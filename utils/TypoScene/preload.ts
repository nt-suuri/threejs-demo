const gsap = require('gsap');

const tll = gsap.timeline({
    paused: true, // wrap 'true' in quotes to fix a TypeScript error
});
tll.to('#percent, #bar', {
    duration: 0.2,
    opacity: 0,
    zIndex: -1,
});
tll.to('#preloader', {
    duration: 0.8,
    width: '0%',
});
tll.from(
    '.container',
    {
        duration: 1.5,
        y: '-150%',
    },
    '-=.2'
);
tll.to('.container h1', {
    opacity: 1,
    textShadow: '12px 20px rgba(255,255,255,0.23)',
    skewY: 10,
    y: '10%',
    stagger: {
        amount: 0.4,
    },
});

let width = 1;
const bar = document.getElementById('barconfrm');
let id: NodeJS.Timeout;

function move() {
    id = setInterval(frame, 10);
}

function frame() {
    if (width >= 100) {
        clearInterval(id);
        tll.play();
    } else {
        width++;
        if (bar) { // check if bar is not null or undefined
            bar.style.width = width + '%';
        }
        const percent = document.getElementById('percent');
        if (percent) { // check if percent is not null or undefined
            percent.innerHTML = width + '%';
        }
    }
}

export {
    move,
};