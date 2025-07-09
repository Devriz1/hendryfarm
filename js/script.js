const track = document.getElementById('sliderTrack');
const slider= track.querySelectorAll('img');
let index=0;
function moveSlide(){
    index++;
    if(index >= slider.length){
        index=0;
    }
    track.style.transform = `translateX(-${index * 700}px)`;
}

setInterval(moveSlide,  3000);