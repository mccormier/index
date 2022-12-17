const nav=document.getElementById('mySidenav');
navLink=document.createElement('a');
navLink.setAttribute('href', '/index/');
navLink.innerHTML="Accueil";
nav.appendChild(navLink);
document.body.appendChild(nav);