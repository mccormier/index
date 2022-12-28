lastModif=document.lastModified;
year=new Date().getFullYear();
footer=document.getElementsByTagName('footer')[0];
/* TeamViewer */
/*
img = document.createElement('img');
img.setAttribute('src', '/index/IMG/teamViewer.png');
img.setAttribute('alt', 'teamViewer');
img.setAttribute('class', 'teamViewerImgLink');
img.setAttribute('onclick', "window.location.href='https://www.teamviewer.com/fr-ca/telecharger/windows/'");
footer.appendChild(img);
*/
time=new Date();
/* time.toLocaleString(); //returns date and time (e.g. "9/12/2015, 6:08:25 PM") */
img=document.createElement('img');
img.src='/index/img/mailto.png';
img.alt='mailto'
img.setAttribute('onclick', "location.href='mailto:marccormierpro@gmail.com'");
img.setAttribute('class', 'mailto');
footer.appendChild(img);
rCopy=document.createElement('p');
rCopy.setAttribute('style', 'font-size:13px;');
footer.appendChild(rCopy);
rCopy.innerHTML='<a href="https://www.javascript.com/">JavaScript</a>, '+
'<a href="https://www.w3.org/TR/WD-DOM/introduction.html">DOM</a>, '+
'<a href="https://www.json.org/json-en.html">JSON</a>, '+
'<a href="https://jquery.com/">jQuery</a>, '+
'<a href="http://www.bootstrap.com/">Bootstrap</a>, '+
'<a href="https://www.w3.org/Style/CSS/Overview.en.html">CSS3</a>, '+
'et <a href="https://html.spec.whatwg.org/multipage/">HTML</a> '+
'<a href="https://dev.w3.org/html5/spec-LC/">5</a>. '+
'<a id="obj" onclick="showLS()"><b>&#xFFFC; </b></a>'+
'<br/>&#169 '+year+'&nbsp réalisation <a href="#">McCormier.</a>'+
/* '<br/><i style="font-size:9px;">'+lastModif+"</i>"; */
//
'<br/><i style="font-size:9px;">'+time.toLocaleString()+"</i>";