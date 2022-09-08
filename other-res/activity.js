$(document).ready(() => {
  var timeout;
  var space_clicked = false;
  const video = document.querySelector("#video-main");
  const playBtn = document.querySelector("#play");
  const pauseBtn = document.querySelector("#pause");
  console.log("Hello World");
  $("playBtn").click( () => {
    video.play();
  });
  $("#play").click( () =>{
    video.play();
    $("#play").css("display", "none");
    $("#pause").css("display", "block");
    $("#video-controls").css("opacity", "0");
  });
  $("#pause").click( () => {
    video.pause();
    $("#play").css("display", "block");
    $("#pause").css("display", "none");
  });
  var timer;
  var timeout = function() {
    $("#video-controls").css("opacity", "1");
  }
  timer = setTimeout(timeout, 1500);
  window.onmousemove = function() {
    clearTimeout(timer);
    timer = setTimeout(timeout, 1500);
  };
  
  $("#back-btn").click( () => {
    window.location.href = 'index.html';
  });
  
  $("#rew-btn, #for-btn").click( () => {
    alert("Sorry this button is disabled at the moment.");
  });
  
  video.onwaiting = (event) => {
    console.log('Video is waiting for more data.');
  };
  
  var time2;
  var hide = () => {
    $("#video-controls").css("opacity", "0");
  }
  time2 = setTimeout(hide, 1500);
  window.onmousemove = function() {
    clearTimeout(time2);
    time2 = setTimeout(hide, 1500);
  };
  $("#video-controls").click(() => {
    $("#video-controls").css("opacity", "1");
  });
  $(document).keydown( (event) => {
    space_clicked = true;
    if (event.keyCode == 32) {
      video.play();
      $("#play").css("display", "none");
      $("#pause").css("display", "block");
    }
  });
});
