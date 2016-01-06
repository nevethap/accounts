(function () {

myHTMLInclude();

function myHTMLInclude() {
  var z, i, a, file, xhttp;

  function setInnerHTML() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      a.removeAttribute("w3-include-html");
      a.innerHTML = xhttp.responseText;
      z[i].parentNode.replaceChild(a, z[i]);
      myHTMLInclude();
    }
  }
  
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("w3-include-html")) {
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("w3-include-html");
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = setInnerHTML;
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

})();
