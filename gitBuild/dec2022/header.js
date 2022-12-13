function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mainContent").style.marginLeft = "250px";
  document.body.style.backgroundColor = "#E5FFE2";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mainContent").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}