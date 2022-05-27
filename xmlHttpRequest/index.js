var xhr = new XMLHttpRequest();
var response;
xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        response = this.responseText;
        document.querySelector('p').innerHTML = this.responseText;
        
    };
};
xhr.open('GET', '/xmlHttpRequest/file.txt', true);
xhr.send();

