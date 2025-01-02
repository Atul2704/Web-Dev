var crsr = document.querySelector(".cursor");

document.addEventListener("mousemove", function (dets) {
    crsr.style.transform = `translate(${dets.x}px, ${dets.y}px) scale(1,1)`
})

const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
});

var video = document.querySelector(".card1 video");

video.addEventListener("mousemove", () => {
    video.play();
})

video.addEventListener("mouseout", () => {
    video.pause();
    video.currentTime = 0;
})


var video3 = document.querySelector(".card2 video");

video3.addEventListener("mousemove", () => {
    video3.play();
})

video3.addEventListener("mouseout", () => {
    video3.pause();
    video3.currentTime = 0;
})

var videos3 = document.querySelectorAll(".card3 video");

videos3.forEach((video) => {
    video.addEventListener("mousemove", () => {
        video.play();
    });

    video.addEventListener("mouseout", () => {
        video.pause();
        video.currentTime = 0;
    });
});

var videos4 = document.querySelectorAll(".card4 video");

videos4.forEach((video) => {
    video.addEventListener("mousemove", () => {
        video.play();
    });

    video.addEventListener("mouseout", () => {
        video.pause();
        video.currentTime = 0;
    });
});