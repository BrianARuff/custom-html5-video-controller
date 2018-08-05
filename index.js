// video element selector
const video = select('#video');

// default playback rate
let speed = video.defaultPlaybackRate;

let timer1, timer2;

// querySelector shorthand
function select(selector){
  return document.querySelector(selector);
}

// inital speed text
select('#speedText').innerText = video.playbackRate.toFixed(2);
select('#speedText2').innerText = video.playbackRate.toFixed(2);

// initial volume
select('#volume-text').innerText = video.volume;

// ***PLAY***
select('#play').addEventListener('click', () => video.paused ? video.play() : video.pause());

// ***STOP***
select('#stop').addEventListener('click', () => video.paused ? video.play() : video.pause());

// ***MUTE***
select('#mute').addEventListener('click', () => {
  video.muted = !video.muted;
  if(video.muted){
    select('#video').style.cssText = "opacity: 0.7";
  } else {
    select('#video').style.cssText = "opacity: 1";
  }
});


// ***INCREASE SPEED***
select('#speedUp').addEventListener('click', () => {
  speed += 0.10;
  video.playbackRate = speed;
  select('#speedText').innerText = speed.toFixed(2);
  select('#speedText2').innerText = speed.toFixed(2);
  console.log(speed);
});

// ***DECREASE SPEED***
select('#slowDown').addEventListener('click', () => {
  if(speed > 0.10){
    speed -= 0.10;
    video.playbackRate = speed;
    select('#speedText').innerText = speed.toFixed(2);
    select('#speedText2').innerText = speed.toFixed(2);
    console.log(speed);
  }
});

// ***RESET SPEED TO 1***
select('#reset').addEventListener('click', () => {
    speed = 1;
    video.playbackRate = speed;
    select('#speedText').innerText = speed.toFixed(2);
    select('#speedText2').innerText = speed.toFixed(2);
    console.log(speed);
});


// ***VOLUME UP***
select('#volume-up').addEventListener('click', () => {
  video.volume += 0.1;
  select('#volume-text').innerText = (video.volume).toFixed(2);
  select('#volume-down-text').innerText = (video.volume).toFixed(2);
  select('#volume-down').style.cssText = "background-color: #fff";
  console.log(video.volume);
  if (video.volume === 1){
    select('#volume-up').style.cssText = "background-color: red";
    setTimeout(() => {
      select('#volume-up').style.cssText = "background-color: #fff";
    }, 1000)
  }
});

// ***LOOP*** video
select('#loop').addEventListener('click', () => {
  video.loop = !video.loop;
  if(video.loop){
    select('#loopingText').innerText = "Looping";
  } else {
    select('#loopingText').innerText = "";
  }
});

// ***VOLUME DOWN***
select('#volume-down').addEventListener('click', () => {
  video.volume -= 0.1;
  select('#volume-text').innerText = (video.volume).toFixed(2);
  select('#volume-down-text').innerText = (video.volume).toFixed(2);
  select('#volume-up').style.cssText = "background-color: #fff";
  if(video.volume < 0.1){
    select('#volume-down').style.cssText = "background-color: yellow";
    setTimeout(() => {
      select('#volume-down').style.cssText = "background-color: #fff";
    }, 1000)
  }
  console.log(video.volume);
});

// ***FORWARD***
select('#forward').addEventListener('click', () => {
  video.currentTime += 5;
  console.log(video.currentTime);
});

// ***BACKWARD***
select('#backward').addEventListener('click', () => {
  video.currentTime -= 5;
  console.log(video.currentTime);
});

// ***SLOW FRAME FORWARD***
select('#frame-by-frame-forward').addEventListener('mousedown', () => {
    timer1 = setInterval(() => {
      video.pause();
      video.currentTime += (1/30);
    }, 300);
});

// ***CLEAR SLOW FRAME FOWARD***
select('#frame-by-frame-forward').addEventListener('mouseup', () => {
  clearInterval(timer1);
});

// *** SLOW FRAME BACKWARD***
select('#frame-by-frame-backward').addEventListener('mousedown', () => {
  timer2 = setInterval(() => {
    video.pause();
    video.currentTime -= (1/30);
  }, 300);
});

// ***CLEAR SLOW FRAME BACKWARD***
select('#frame-by-frame-backward').addEventListener('mouseup', () => {
  clearInterval(timer2);
});


// set ***PAUSED*** ---Text---
const togglePlayPausedText = setInterval(() => {
  if(video.paused && (video.currentTime > 0)){
    select('#pausedText').classList.remove('hide');
  } else {
    select('#pausedText').classList.add('hide');
  }
  if(video.ended){
    clearInterval(togglePlayPausedText);
  }
}, 0);


// TODO
// increase playback speed holding mouse down after 1 second
// add volume


// *******DISCOURAGED*******
// ***AUTO PLAY***
// document.querySelector('#video').autoplay = true;