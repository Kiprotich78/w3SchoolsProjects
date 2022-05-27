var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
  }
};
xhttp.open("GET", "/domNavigation/file.xml", true);
xhttp.send();

function myFunction(xml) {
  var xmlDoc = xml.responseXML;
 var x = get_firstChild(xmlDoc.getElementsByTagName("book")[0]);
  document.querySelector(".xmlReturn").innerHTML = x.nodeName;
}

//check if the first node is an element node
function get_firstChild(n) {
  var y = n.firstChild;
  while (y.nodeType != 1) {
    console.log(y.nextSibling);
    y = y.nextSibling;
  }
  return y;
}
