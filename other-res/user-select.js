$(document).ready(() => {
  var mouse = document.getElementById("clickSound");
  $("#loader").css("display", "none");
  $("#label-2, #image-2, profile-2").click( () => {
    mouse.play();
    window.location.href = 'index.html';
  });
  $("#manage-acc").click( () => {
    mouse.play();
    alert("You need admin access.");
  });
  $("#add-user").click( () => {
    mouse.play();
    alert("add user isn't available right now.");
  });
  $("#profile-1").click( () => {
    mouse.play();
    alert("loh ikaw ba si gaera?🧐🧐");
  });
  $("#profile-3").click( () => {
    mouse.play();
    alert("ikaw ba si lorenzo?😡😡");
  });
  $("#profile-4").click( () => {
    mouse.play();
    alert("wala pa tayo kids!😡😡😡");
  });
});
