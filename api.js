    function navProperties() {
    var caracteristiquesNavigateur = "";
    caracteristiquesNavigateur = "<b>Code du navigateur :</b> "
    + navigator.appCodeName + "<br>";
    caracteristiquesNavigateur += "<b>Nom du navigateur :</b> "
    + navigator.appName + "<br>";
    caracteristiquesNavigateur += "<b>Version :</b> "
    + navigator.appVersion + "<br>";
    caracteristiquesNavigateur += "<b>Support des cookies :</b> "
    + navigator.cookieEnabled + "<br><br>";
    caracteristiquesNavigateur += "<b>Browser language :</b> "
    + navigator.language + "<br>";    
    caracteristiquesNavigateur += "<b>Browser online :</b> "
    + navigator.onLine + "<br>";    
    caracteristiquesNavigateur += "<b>Browser engine name :</b> "
    + navigator.product + "<br>";    
    caracteristiquesNavigateur += "<b>Systeme d'exploitation :</b> "
    + navigator.platform + "<br><br>";
    caracteristiquesNavigateur += "<b>User-agent header :</b> "
    + navigator.userAgent + "<br>";
    caracteristiquesNavigateur += "<b>User-agent language :</b> "
    + navigator.systemLanguage + "<br>";
    caracteristiquesNavigateur += "<b>User location :</b> "
    + navigator.geolocation + "<br>";
    caracteristiquesNavigateur += "<b>Java enabled :</b> "
    + navigator.javaEnabled() + "<br>";
    var myWindow = window.open("", "MsgWindow", "width=1111,height=250");
  myWindow.document.write("<h1>Un exemple d'API simple</h1>"+"<h2>Ceci est un simple exemple d'API :</h2>"+caracteristiquesNavigateur+xIp);
}
  visitor = localStorage.visitor;
  if (localStorage.visitor) {
    localStorage.visitor = Number(localStorage.visitor)+1;

    const myObj = {ip: xIp};
    const myJSON = JSON.stringify(myObj);
    localStorage.setItem("visitor-"+visitor, myJSON);
  } else {
    localStorage.visitor = 1; 
  } 
  visitor = localStorage.visitor;
/*
<!--
<script type="text/javascript">
const writeFile = () => {
const link = document.createElement("a");
const content = xIp;
const file = new Blob([content], { type: 'text/plain' });
link.href = URL.createObjectURL(file);
link.download = "visitor.txt";
link.click();
URL.revokeObjectURL(link.href);
};
</script>
-->
*/
  
/*
writeFile();
*/