var colors = ['#FF0000','#800000','#FFFF00','#808000','#00FF00','#008000','#00FFFF','#008080','#0000FF','#000080','#FF00FF','#800080'];
// var colors = ['000000','#000033','#000066','#000099','#0000CC','#0000FF','#003300','#003333','#003366','#003399','#0033CC','#0033FF','#006600','#006633','#006666','#006699','#0066CC','#0066FF','#009900','#009933','#009966','#009999','#0099CC','#0099FF','#00CC00','#00CC33','#00CC66','#00CC99','#00CCCC','#00CCFF','#00FF00','#00FF33','#00FF66','#00FF99','#00FFCC','#00FFFF','#330000','#330033','#330066','#330099','#3300CC','#3300FF','#333300','#333333','#333366','#333399','#3333CC','#3333FF','#336600','#336633','#336666','#336699','#3366CC','#3366FF','#339900','#339933','#339966','#339999','#3399CC','#3399FF','#33CC00','#33CC33','#33CC66','#33CC99','#33CCCC','#33CCFF','#33FF00','#33FF33','#33FF66','#33FF99','#33FFCC','#33FFFF','#660000','#660033','#660066','#660099','#6600CC','#6600FF','#663300','#663333','#663366','#663399','#6633CC','#6633FF','#666600','#666633','#666666','#666699','#6666CC','#6666FF','#669900','#669933','#669966','#669999','#6699CC','#6699FF','#66CC00','#66CC33','#66CC66','#66CC99','#66CCCC','#66CCFF','#66FF00','#66FF33','#66FF66','#66FF99','#66FFCC','#66FFFF','#990000','#990033','#990066','#990099','#9900CC','#9900FF','#993300','#993333','#993366','#993399','#9933CC','#9933FF','#996600','#996633','#996666','#996699','#9966CC','#9966FF','#999900','#999933','#999966','#999999','#9999CC','#9999FF','#99CC00','#99CC33','#99CC66','#99CC99','#99CCCC','#99CCFF','#99FF00','#99FF33','#99FF66','#99FF99','#99FFCC','#99FFFF','#CC0000','#CC0033','#CC0066','#CC0099','#CC00CC','#CC00FF','#CC3300','#CC3333','#CC3366','#CC3399','#CC33CC','#CC33FF','#CC6600','#CC6633','#CC6666','#CC6699','#CC66CC','#CC66FF','#CC9900','#CC9933','#CC9966','#CC9999','#CC99CC','#CC99FF','#CCCC00','#CCCC33','#CCCC66','#CCCC99','#CCCCCC','#CCCCFF','#CCFF00','#CCFF33','#CCFF66','#CCFF99','#CCFFCC','#CCFFFF','#FF0000','#FF0033','#FF0066','#FF0099','#FF00CC','#FF00FF','#FF3300','#FF3333','#FF3366','#FF3399','#FF33CC','#FF33FF','#FF6600','#FF6633','#FF6666','#FF6699','#FF66CC','#FF66FF','#FF9900','#FF9933','#FF9966','#FF9999','#FF99CC','#FF99FF','#FFCC00','#FFCC33','#FFCC66','#FFCC99','#FFCCCC','#FFCCFF','#FFFF00','#FFFF33','#FFFF66','#FFFF99','#FFFFCC','#FFFFFF'];
var base = document.getElementById("base");
var context = base.getContext("2d");
var statusL = document.getElementById("status").style;
var statusLdir = 0;

var rideY, rideX;
var timeBetweenDraws = 100, timeLock, shapeSize = 20, replayString='';
var apikey = "482eb53700e867a37c1ed9ee47b75882";

window.addEventListener( "keypress", makeStuffHappen, false );

context.canvas.width  = window.innerWidth-4;
context.canvas.height = window.innerHeight-4-51;

document.addEventListener("DOMContentLoaded", function (){
  rideX = Math.floor(Math.random() * ((context.canvas.width - 40) - (40) + 1)) + 40;
  rideY = Math.floor(Math.random() * ((context.canvas.height - 40) - (40) + 1)) + 40;
});

document.getElementById("tweet").onclick = function (){
  // var img = base.toDataURL("image/png");

  var xhr = new XMLHttpRequest(), postData, shortLink;

  xhr.open("POST", "https://www.googleapis.com/urlshortener/v1/url", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4 || xhr.status !== 200)
      return;

    shortLink = JSON.parse(xhr.responseText).id;
    console.log(shortLink);
    // document.getElementById("tweet").setAttribute("target","_blank");
    // document.getElementById("tweet").setAttribute("href","https://twitter.com/intent/tweet?hashtags=DevArt,FigureRide&text=Checkout%20my%20awesome%20art%20"+shortLink);

    window.open("https://twitter.com/intent/tweet?hashtags=DevArt,FigureRide&text=Checkout%20my%20awesome%20figure%20art!%20"+shortLink, 'Tweet Art','left=20,top=20,width=500,height=500,toolbar=0,resizable=0');
  };

  xhr.setRequestHeader("Content-type","application/json");

  // Chop a trailing # off
  var shl = window.location.href;
  if (shl.substring(shl.length - 1, shl.length) === '#') {
    var tempp = shl.substring(0, shl.length - 1);
    postData = {"longUrl": tempp+"#"+replayString};
  } else {
    postData = {"longUrl": window.location+"#"+replayString};
  }
  xhr.send(JSON.stringify(postData));

  // console.log(replayString);
  // if (replayString.length>0){
  // var sharelink = window.location+"#"+replayString;

    // return true;
  // }
  // window.location = window.location+"#"+replayString;
  // var r = new XMLHttpRequest();
  // r.open("POST", "https://api.imgur.com/3/image", true);
  // r.onreadystatechange = function () {
  //   if (r.readyState != 4 || r.status != 200) return;
  //   alert("Success: " + r.responseText);
  // };
  // r.send("banana=yellow");
  // $.ajax({
  //     url: 'https://api.imgur.com/3/image',
  //     headers: {
  //         'Authorization': 'Client-ID YOUR_CLIENT_ID'
  //     },
  //     type: 'POST',
  //     data: {
  //         'image': 'helloworld.jpg'
  //     },
  //     success: function() { console.log('cool'); }
  // });
};

function lockTime(){
  timeLock = true;
  setTimeout(function (){
    timeLock = false;
  },timeBetweenDraws);
}

function makeStuffHappen (e) {
  console.log(e.keyCode);

  if (timeLock)
    return;

  lockTime();

  var jumpSize = 30;
  var rideMove = false;
  // a
  if (e.keyCode === 97) {
    if ((rideX-jumpSize) >=0 ) { rideX -= jumpSize; rideMove = true;}
  }

  // s
  if (e.keyCode === 115) {
    if ((rideY+jumpSize+shapeSize) <= base.height) { rideY += jumpSize; rideMove = true;}
  }

  // d
  if (e.keyCode === 100) {
    if ((rideX+jumpSize+shapeSize) <= base.width) { rideX += jumpSize; rideMove = true;}
  }

  // w
  if (e.keyCode === 119) {
    if ((rideY-jumpSize) >= 0) { rideY -= jumpSize; rideMove = true;}
  }

  if (rideMove)
    drawRide(rideX,rideY);

  // r
  if ( e.keyCode === 114){
    clearCanvas();
  }
}

function makeRect(context,x,y,color) {
  var s = 20;
  context.beginPath();
  context.moveTo(x,y);
  context.lineTo(x,y+s);
  context.lineTo(x+s,y+s);
  context.lineTo(x+s,y);
  context.lineTo(x,y);
  context.closePath();
  context.strokeStyle = color;
  context.stroke();
}

function makeTriangle(context,x,y,color) {
  var s = 20;
  x = x+s/2;
  // y = y+s/2;
  context.beginPath();
  context.moveTo(x,y);
  context.lineTo(x-(s/2),y+s);
  context.lineTo(x+(s/2),y+s);
  context.lineTo(x,y);
  context.closePath();
  context.strokeStyle = color;
  context.stroke();
}

function makeCircle(context,x,y,color) {
  var s = 10;
  context.beginPath();
  context.arc((x+s),(y+s),s,0,2*Math.PI);
  context.closePath();
  context.strokeStyle = color;
  context.stroke();
}

function drawRide(x,y) {
  var fig = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  var figColor = Math.floor(Math.random() * (colors.length - 0 + 1)) + 0;

  if (fig === 0) {
    makeCircle(context,x,y,colors[figColor]);
    replayString += fig+':'+x+':'+y+':'+figColor+';';
  }

  if (fig === 1) {
    makeRect(context,x,y,colors[figColor]);
    replayString += fig+':'+x+':'+y+':'+figColor+';';
  }

  if (fig === 2) {
    makeTriangle(context,x,y,colors[figColor]);
    replayString += fig+':'+x+':'+y+':'+figColor+';';
  }
}

function clearCanvas() {
  base.width = base.width;
  context.fillRect(0, 0, base.width, base.height);
}

function pulseStatus() {

}

var parts ='';
function replayArt (arg) {
  console.log('replaying');
  parts = arg.split(';');
  clearCanvas();
  // statusL.visibility = "visible";
  // statusL.opacity = 1;
  // (function fade(){(statusL.opacity-=.1)<0?statusL.display="none":setTimeout(fade,40)})();
  pulseStatus();
  paintReplay();
}

function paintReplay() {
  var pony = parts.shift().split(':');
  // console.log(pony);
  if (pony[0] === '0') {
    makeCircle(context,parseInt(pony[1]),parseInt(pony[2]),colors[pony[3]]);
  }

  if (pony[0] === '1') {
    makeRect(context,parseInt(pony[1]),parseInt(pony[2]),colors[pony[3]]);
  }

  if (pony[0] === '2') {
    makeTriangle(context,parseInt(pony[1]),parseInt(pony[2]),colors[pony[3]]);
  }
  if (parts.length>0)
    setTimeout(paintReplay,timeBetweenDraws);
}

clearCanvas();
console.log(window.location.hash);
if (window.location.hash.split('#')[1]){
  console.log('incomming: '+window.location.hash.split('#')[1]);
  replayArt(window.location.hash.split('#')[1]);
}

// makeRect(context,40,40,color);

for (var i = colors.length - 1; i >= 0; i--) {
  // makeRect(context,40+(i*10),40+(i*10),colors[i]);
  // console.log('color: '+ colors[i]);
}

for (var i = colors.length - 1; i >= 0; i--) {
  // makeTriangle(context,200+(i*10),50+(i*10),colors[i]);
}

for (var i = colors.length - 1; i >= 0; i--) {
  // makeCircle(context,400+(i*15),50+(i*15),colors[i]);
}
