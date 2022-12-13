var pTitle=document.getElementsByTagName('title')[0];
var ht=document.getElementsByTagName('h1')[0];
mainContent=document.getElementById('wrapped');
//
jsObj;jsObjet;jsObjets;
//
function getContent(clicked){
if (clicked == "Accueil"){
pTitle.innerHTML='McCormier.github.io';
ht.innerHTML='McCormier';
mainContent.innerHTML='para';
} else {
pTitle.innerHTML=clicked+' | McCormier';
ht.innerHTML=clicked;
mainContent.innerHTML='para';
}
}