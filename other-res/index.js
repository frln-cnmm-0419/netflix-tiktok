$(document).ready( () => {
  var wrap = document.getElementById("wrapper");
  $("#loader").css("display", "none");
  function changeImage() {
    var imgList = ["../res/bg-1.png", "../res/bg-2.png", "../res/bg-3.png"];
    var i = Math.floor((Math.random() * 3));
    wrap.style.backgroundImage = 'url("' + imgList[i] + '")';
  }
  window.setInterval(changeImage, 3000);
  $("#fav").click( () => {
    alert("Sucessully added to list!");
  });
  $("#play").click( () => {
  $("#loader").css("display", "flex").delay(5000).queue( () => {
    $("#loader").remove();
    window.location.href = '9856bea36e0179486db735793d1709b2.html';
  });
  });
});
