$(document).ready(function() {
$('html').mousedown(function(event){
    switch (event.which) {
        case 3:
            alert('Right mouse button pressed\n\nEn construction..\nMenu\nAccueil\nAbout\nService\nProduits\nTemplate (PortFolio)\nSnippets\nRéférences\nDownload\nClient login()\nFile\nEdit\nSave\nView\nParam\nConfig');
            break;
        default:
           break;
    }
});
});