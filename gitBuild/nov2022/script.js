/* MENU */
nav=document.createElement('div');
nav.setAttribute('id', "mySidenav");
nav.setAttribute('class', "sidenav");
document.body.appendChild(nav);
sidenav = document.getElementById('mySidenav');
newLink = document.createElement('a');
newLink.setAttribute('class', 'closebtn');
newLink.setAttribute('href', 'javascript:void(0)');
newLink.setAttribute('onclick', 'closeNav()');
newLink.innerHTML='&times;';
sidenav.appendChild(newLink);
//
/* INDEX */
newLink = document.createElement('a');
newLink.setAttribute('href', '/index/');
newLink.innerHTML='Accueil';
sidenav.appendChild(newLink);
//
/* ABOUT */
newLink = document.createElement('a');
newLink.setAttribute('href', '/index/About');
newLink.innerHTML='À Propos';
sidenav.appendChild(newLink);
//
/* References */
newLink = document.createElement('a');
newLink.setAttribute('href', '/index/References');
newLink.innerHTML='Références';
sidenav.appendChild(newLink);
//
/* Service */
newLink = document.createElement('a');
newLink.setAttribute('href', '#');
newLink.innerHTML='Service';
sidenav.appendChild(newLink);
//
/* IRC CHANNEL */
newLink = document.createElement('a');
newLink.setAttribute('href', '/index/MCBrady.htm');
newLink.innerHTML='IRC Channel';
sidenav.appendChild(newLink);
//
/* Bottom Menu Links */
/* SandBox */
newLink = document.createElement('a');
newLink.setAttribute('href', '/index/sandBox');
newLink.innerHTML='SandBox';
sidenav.appendChild(newLink);
//
/* Tetris */
newLink = document.createElement('a');
newLink.setAttribute('href', '/index/tetrisGame');
newLink.innerHTML='Tetris';
sidenav.appendChild(newLink);
//
/* GO BACK */
newLink = document.createElement('a');
newLink.setAttribute('onclick', 'window.history.go-(1)');
newLink.setAttribute('id', 'backBtn');
newLink.innerHTML='Go Back';
sidenav.appendChild(newLink);
//
function openNav() {document.getElementById("mySidenav").style.width = "250px";}
function closeNav() {document.getElementById("mySidenav").style.width = "0";}
/* MENU */