window.onload = getLanguage()

function setLanguage(language) {
    var file = 'src/manifestos/' + language + '.html' 
    var req = new XMLHttpRequest();
    req.open('GET', file, true);
    req.onreadystatechange = function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling we want
        document.getElementById('manifesto').innerHTML= this.responseText;
        document.getElementById(language).style.fontSize = "25px"; 
    };
    req.send();
}

function getLanguage() {
    var result = null;
    var tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === "language") result = decodeURIComponent(tmp[1]);
        });
    switch (result) {
        case "cz":
            break;
        case "de":
            break;
        case "en":
            break;
        case "zh":
            break;
        case "fr":
            break;
        case "gr":
            break;
        default:
            window.location.href = "manifesto.html?language=cz";
            return;
    }
    setLanguage(result)
}