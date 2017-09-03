var pg = 0
var count = 0
  var ee = [];
var arr = [];
var tr = document.getElementById("ere")
var cc = document.getElementById("cc")
var desc = document.getElementById("desc")
var temp = document.getElementById("temp")
var ext = document.getElementById("ext")
tr.addEventListener("click", function() {

  var de = document.createElement("button");
  de.innerHTML = "°C";
  de.className = "style"
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var iui = position.coords.latitude
      var iui2 = position.coords.longitude
      var myreq = new XMLHttpRequest();
      myreq.open('GET', 'https://fcc-weather-api.glitch.me/api/current?lat=' + iui + '&lon=' + iui2)
      myreq.onload = function() {
        var uy = JSON.parse(myreq.responseText)
var a1 = uy.name + ", " + uy.sys.country ;
var a2 = uy.weather[0].description

var a3 = uy.main.temp ;


cc.innerHTML = a1;
var desc1 = a2;
var myArr = desc1.toLowerCase().split(" ")
for (var i = 0; i < myArr.length; i++){
arr.push(myArr[i][0].toUpperCase().concat(myArr[i].slice(1)))

}
desc1 = arr.join(" ")
        desc.innerHTML = desc1;
temp.innerHTML= a3;



temp.appendChild(de);
 if (de.innerHTML = "°C") {
          de.addEventListener("click", function() {
            count = count + 1;
            temp.removeChild(de);
            temp.innerHTML = 9 / 5 * (Number(temp.innerHTML)) + 32;
            de.innerHTML = "°F";
            temp.appendChild(de);

if (count !== 0 && count % 2 === 0) {
temp.removeChild(de)
temp.innerHTML = uy.main.temp
de.innerHTML = "°C"
temp.appendChild(de)
} 
          })

        }


      }
      myreq.send();
      pg++;
      if (pg = 1) {
        tr.classList.add("hide-me")
      }

    });
  }
})
