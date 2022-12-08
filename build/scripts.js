var bgColor=prompt('background color?', 'white');
if (bgColor != null) {  
document.body.style.backgroundColor=bgColor;
}
/* getting user coord */
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(saveData);
  } else { 
    alert('Geolocation is not supported by this browser.');
  }
}
function saveData(position) {
      if (localStorage.visitor) {
    localStorage.visitor = Number(localStorage.visitor)+1;
  } else {
    localStorage.visitor = 1;
  }
  var visitor = localStorage.visitor;
  localStorage.setItem(visitor+"Latitude", "Latitude &nbsp "+position.coords.latitude);
  localStorage.setItem(visitor+"Longitude", "Longitude &nbsp "+position.coords.longitude);
}
/* getting user coord */
/* CountDown */
var countDownDate = new Date("Aug 03, 2025 12:21:13").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countDown").innerHTML = "<br/>"+ days + "j " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}, 1000);
/* CountDown */
/* GREETING */
const time = new Date().getHours();
var greeting;
function greeting(){
	if (time < 10) {
		greeting = "Good morning, &nbsp"; 
	} else if (time < 20) {
		greeting = "Good day, &nbsp"; 
	} else {
		greeting = "Good evening, &nbsp"; 
	} 
	document.getElementById("greeting").innerHTML = greeting+
	"{User.fName};."; 
}
/* GREETING */
/* MENU */
div = document.getElementById('mySidenav');
newlink = document.createElement('a');
newlink.setAttribute('class', 'closebtn');
newlink.setAttribute('href', 'javascript:void(0)');
newlink.setAttribute('onclick', 'closeNav()');
newlink.innerHTML='&times;';
div.appendChild(newlink);
//
/* INDEX */
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/');
newlink.innerHTML='Accueil';
div.appendChild(newlink);
//
/* ABOUT */
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/About');
newlink.innerHTML='À Propos';
div.appendChild(newlink);
//
/* IRC CHANNEL */
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/MCBrady');
newlink.innerHTML='IRC Channel';
div.appendChild(newlink);
//
subNav=document.createElement('div');
subNav.setAttribute('class', 'dropdown');
div.appendChild(subNav);
/* MEMBRE */
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/Membre');
newlink.innerHTML='Membre(s)';
subNav.appendChild(newlink);
//
subNavCont=document.createElement('div');
subNavCont.setAttribute('class', 'dropdown-content');
subNav.appendChild(subNavCont);
/* MEMBRE - ADMIN */
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/Membre/Admin');
newlink.setAttribute('class', 'dropdown-content');
newlink.innerHTML='Admin(s)';
subNavCont.appendChild(newlink);
//
/* MEMBRE - USER */
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/Membre/User');
newlink.setAttribute('class', 'dropdown-content');
newlink.innerHTML='Utilisateur(s)';
subNavCont.appendChild(newlink);
//
/* MEMBRE - CLIENTS */
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/Membre/Client');
newlink.setAttribute('class', 'dropdown-content');
newlink.innerHTML='Client(s)';
subNavCont.appendChild(newlink);
//
/* MEMBRE - FORUM */
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/Membre/Forum');
newlink.setAttribute('class', 'dropdown-content');
newlink.innerHTML='Forum';
subNavCont.appendChild(newlink);
//
subNav=document.createElement('div');
subNav.setAttribute('class', 'dropdown');
div.appendChild(subNav);
/* SERVICE */
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/Service');
newlink.innerHTML='Service';
subNav.appendChild(newlink);
//
subNavCont=document.createElement('div');
subNavCont.setAttribute('class', 'dropdown-content');
subNav.appendChild(subNavCont);
/* SERVICE - Informatique */
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/srv/info');
newlink.setAttribute('class', 'dropdown-content');
newlink.innerHTML='Informatique';
subNavCont.appendChild(newlink);
//
/* SERVICE - Outils */
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/srv/ref/tools');
newlink.setAttribute('class', 'dropdown-content');
newlink.innerHTML='Outils';
subNavCont.appendChild(newlink);
//
/* SERVICE - Références */
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/srv/ref');
newlink.setAttribute('class', 'dropdown-content');
newlink.innerHTML='Références';
subNavCont.appendChild(newlink);
//
/* Movie List */
/*
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/list/movies');
newlink.innerHTML='Movies';
div.appendChild(newlink);
*/
//
/* Navigator Properties */
newlink = document.createElement('a');
newlink.setAttribute('href', '/index/navigator.Properties');
newlink.innerHTML='Nav.Properties';
div.appendChild(newlink);
//
/* GO BACK */
newlink = document.createElement('a');
newlink.setAttribute('onclick', 'window.history.back()');
newlink.setAttribute('id', 'backBtn');
newlink.innerHTML='Go Back';
div.appendChild(newlink);
//
function openNav() {document.getElementById("mySidenav").style.width = "250px";}
function closeNav() {document.getElementById("mySidenav").style.width = "0";}
/* MENU */
/* SandBox - Run */
  var a='<!DOCTYPE html> <html> <head> <meta charset="utf-8" /><style type="text/css">';
  var b='</style> </head> <body>';
  var c='<script type="text/javascript">';
var d='</ script></body></html>';
  function run(){
      var html=document.getElementById('html').value;
      var css=document.getElementById('css').value;
      var js=document.getElementById('js').value;
      var code=a+css+b+html+c+js+d;
    var e=document.getElementById('result').innerHTML=code;
  }
/* SandBox - Run*/
/* TOP BTN */
var mybutton = document.getElementById("topBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* TOP BTN */
/* Navigator Properties */
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("cursor").innerHTML = coor;
}
function clearCoor() {
  document.getElementById("cursor").innerHTML = "";
}
  function navigateur(){
    var caracteristiquesNavigateur = "";
    caracteristiquesNavigateur = "Code du navigateur : "
    + navigator.appCodeName + "<br>";
    caracteristiquesNavigateur += "Nom du navigateur : "
    + navigator.appName + "<br>";
    caracteristiquesNavigateur += "Version : "
    + navigator.appVersion + "<br>";
    caracteristiquesNavigateur += "Support des cookies : "
    + navigator.cookieEnabled + "</p>";
    caracteristiquesNavigateur += "Systeme d'exploitation : "
    + navigator.platform + "<br>";
    caracteristiquesNavigateur += "User-agent header: "
    + navigator.userAgent + "<br>";
    caracteristiquesNavigateur += "User-agent language: "
    + navigator.systemLanguage + "<br>";
    //document.getElementById("navInfo").innerHTML = caracteristiquesNavigateur;
    var myWindow = window.open("", "MsgWindow", "width=512,height=300");
  myWindow.document.write(caracteristiquesNavigateur);
}
/* Navigator Properties */
/* FOOTER */
	var lastModif=document.lastModified;
	var year=new Date().getFullYear();
	var footer=document.getElementById('footer');
	//
  /* TeamViewer */
img = document.createElement('img');
img.setAttribute('src', '/index/IMG/teamViewer.png');
img.setAttribute('alt', 'teamViewer');
img.setAttribute('class', 'teamViewerImgLink');
img.setAttribute('onclick', "window.location.href='https://www.teamviewer.com/fr-ca/telecharger/windows/'");
footer.appendChild(img);
//
  /* SOCIAL MEDIA LINKS */
img=document.createElement('img');
img.src='/index/IMG/linkTree.png';
img.setAttribute('onclick', "location.href='https://www.linktr.ee/mcormier'");
img.setAttribute('class', 'socialLink');
img.setAttribute('id', 'linkTree');
img.setAttribute('alt', 'linkTr.ee');
footer.appendChild(img);
//
/*
img=document.createElement('img');
img.src='/index/IMG/FBlogo.png';
img.setAttribute('onclick', "location.href='https://www.facebook.com/cormiermac'");
img.setAttribute('class', 'socialLink');
img.setAttribute('id', 'fbLink');
footer.appendChild(img);
*/
//
img=document.createElement('img');
img.src='/index/IMG/mailto.png';
img.setAttribute('onclick', "location.href='mailto:marccormierpro@gmail.com'");
img.setAttribute('class', 'socialLink');
img.setAttribute('id', 'mailtoLink');
footer.appendChild(img);
/* SOCIAL MEDIA LINKS */
	//
	rCopy=document.createElement('p');
	footer.appendChild(rCopy);
	rCopy.innerHTML="document.lastModified; &nbsp "+lastModif+
	"<br/>Créer avec JSON, JavaScript, jQuery, DOM, CSS3, et HTML5."+
	"<br/>&#169 "+year+"&nbsp par Marc Cormier .";
/* FOOTER */