//var navBar = '';
//navBar += '<div class="navbar">';
//
//var navBar=document.getElementsByClassName('navBar');
//
// search w3 innerHTML +=
var wrapper=document.getElementsByClassName('wrapper');
var navBar=document.createElement('div');
navBar.setAttribute('class', "navBar");
wrapper.appendChild(navBar);
//
navBar.innerHTML += '<a href="/index/">Accueil</a>';
navBar.innerHTML += '<a href="https://linktr.ee/mcormier">À Propos</a>';
navBar.innerHTML += '<a href="/index/MCBrady">#MCBrady</a>';
/*
  <div class="subnav">
    <button class="subnavbtn">Produits</button>
    <div class="subnav-content">
      <a href="/index/"></a>
    </div>
  </div>
*/
navBar.innerHTML += '<div class="subnav">';
navBar.innerHTML += '<button class="subnavbtn">Produits</button>';
navBar.innerHTML += '<div class="subnav-content">';
navBar.innerHTML += '<a href="/index/QRcodeGenerator">QR Code Generator</a>';
navBar.innerHTML += '<a href="#"></a>';
navBar.innerHTML += '</div>';
navBar.innerHTML += '</div>';
navBar.innerHTML += '<div class="subnav">';
navBar.innerHTML += '<button class="subnavbtn">Services</button>';
navBar.innerHTML += '<div class="subnav-content">';
navBar.innerHTML += '<a href="/index/C/inetpub/wwwroot">Internet Information Services Manager (IISS) - (WEB)</a>';
navBar.innerHTML += '<a href="#recycle">Recyclage</a>';
navBar.innerHTML += '<a href="#maintenance">Réparation - Maintenance - Entretien</a>';
navBar.innerHTML += '<a href="#progiciel">Programmation</a>';
navBar.innerHTML += '<a href="#formations">Formation Personalisée</a>';
navBar.innerHTML += '<a href="https://goulet.ca/produits-numeriques/webformation/">Formation WEB Et Téléchargement de fichiers</a>';
navBar.innerHTML += '<a href="https://www.teamviewer.com/fr-ca/telecharger/windows/">Express (TeamViewer)</a>';
navBar.innerHTML += '</div>';
navBar.innerHTML += '</div>';
navBar.innerHTML += '<div class="subnav">';
navBar.innerHTML += '<button class="subnavbtn">Références</button>';
navBar.innerHTML += '<div class="subnav-content">';
navBar.innerHTML += '<a href="#lang">Languages</a>';
navBar.innerHTML += '<a href="#Snips">Snippets</a>';
navBar.innerHTML += '<a href="#Templates">PortFolio</a>';
navBar.innerHTML += '<a href="#modules">Modules</a>';
navBar.innerHTML += '<a href="#package">Package</a>';
navBar.innerHTML += '</div>';
navBar.innerHTML += '</div>';
navBar.innerHTML += '<div class="subnav">';
navBar.innerHTML += '<button class="subnavbtn">Tools</button>';
navBar.innerHTML += '<div class="subnav-content">';
navBar.innerHTML += '<a href="https://tools.pdf24.org/fr/">Production de document PDF</a>';
navBar.innerHTML += '</div>';
navBar.innerHTML += '</div>';
navBar.innerHTML += '<a href="/index/pageEnConstruction.htm">SandBox</a>';
navBar.innerHTML += '<div class="subnav" style="float:right;">';
navBar.innerHTML += '<button class="subnavbtn">Client(s)</button>';
navBar.innerHTML += '<div class="subnav-content">';
navBar.innerHTML += '<a href="#login" style="float:right;">Inscription / Connexion</a>';
navBar.innerHTML += '<a href="#client-form" style="float:right;">Formulaire</a>';
navBar.innerHTML += '<a href="#footer" style="float:right;">Contact</a>';
navBar.innerHTML += '</div>';
navBar.innerHTML += '</div>';
navBar.innerHTML += '</div>';
/*
https://stackoverflow.com/questions/31954089/how-can-i-reuse-a-navigation-bar-on-multiple-pages
*/