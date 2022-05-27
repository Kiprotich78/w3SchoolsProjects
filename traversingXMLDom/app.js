var xmlDoc, parser, htmlString;
let x;

const xmlDom = document.querySelector(".xmlDom");

let response;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    response = xhttp.responseText;

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(response, "text/xml");
    htmlString = xmlDoc.getElementsByTagName("book")[0].childNodes;
    for (let i = 0; i < htmlString.length; i++) {
      let p = document.createElement("p");
      p.textContent =
        htmlString[i].nodeName + ": " + htmlString[i].childNodes[0].nodeValue;
      xmlDom.appendChild(p);
    }
  }
};
xhttp.open("GET", "/traversingXMLDom/text.xml", true);
xhttp.send();
