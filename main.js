
window.setInterval(figureTime,1000);

function figureTime() {

  var newDate = new Date;
  var hexTime = null;
  var hexSec = null;
  var hexMin = null;
  var hexHour = null;

  h = newDate.getHours();
  m = newDate.getMinutes();
  s = newDate.getSeconds();

  hexHour = Number(h);
  hexMin = Number(m);
  hexSec = Number(s);
  hexHour = hexHour.toString(16);
  hexMin = hexMin.toString(16);
  hexSec = hexSec.toString(16);

hexSec = checkTens(hexSec);
hexMin = checkTens(hexMin);
hexHour = checkTens(hexHour);

function checkTens(timer) {
    if (timer < 10 || timer == "a" || timer == "b" || timer == "c" || timer == "d"
  || timer == "e" || timer == "f"){
      timer = "0" + timer;
      var newVar = Date.now();
      var hexNewVar = newVar.toString(16);
      var subHexVar = hexNewVar.substr(5,20);
      document.getElementById( "pageContainer" ).style.backgroundColor= "#" + subHexVar;
  };
      var newVar = Date.now();
      var hexNewVar = newVar.toString(16);
      var subHexVar = hexNewVar.substr(5,20);
      document.getElementById( "pageContainer" ).style.backgroundColor= "#" + subHexVar;
      return timer;
};
  document.getElementById("clockField1").innerHTML = "#" + hexHour + hexMin + hexSec;
};
