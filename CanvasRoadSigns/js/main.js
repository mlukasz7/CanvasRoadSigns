window.onload = start;

function start()
{
  // ============================================= Znak 1
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext("2d");
  var width = 180;
  var height = 180;
  var padding = 20;

  // Tworzenie białego tła
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 60;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'white';
  context.fill();

  // Czerwona obwódka
  context.lineWidth = 15;
  context.strokeStyle = 'red';
  var gradient = context.createLinearGradient(0,0,0,height);
  gradient.addColorStop(0.5, '#ff0000');
  gradient.addColorStop(1, '#ff6600');
  context.strokeStyle = gradient;
  context.stroke();

  // Tworzenie gradientu na białym tle
  var gradient2 = context.createRadialGradient(width/2+padding, height/2-padding, 0, height/2+padding, width/2-padding, height);
  gradient2.addColorStop(0.1, '#fff');
  gradient2.addColorStop(1, '#555');
  // Wypełnienie tarczy gradientem
  context.fillStyle = gradient2;
  context.fill();

  context.font = 'italic 40pt Calibri';
  context.fillStyle = "#333";
  context.fillText('120', width/2-padding-10, height/2+padding+5);

  // ============================================= Znak 2
  var canvas2 = document.getElementById('myCanvas2');
  var context2 = canvas2.getContext("2d");

  // Wymiary znaku jak w powyższym znaku
  radius2 = 65;

  // Rysowanie niebieskiego tła
  context2.beginPath();
  context2.arc(centerX, centerY, radius2, 0, 2 * Math.PI, false);
  context2.fillStyle = '#0071C4';
  context2.fill();

  // Tworzenie gradientu
  var gradient3 = context2.createLinearGradient(0,0,0,height);
  gradient3.addColorStop(0.2, '#0071C4');
  gradient3.addColorStop(1, '#104063');
  // Wypełnienie tarczy gradientem
  context2.fillStyle = gradient3;
  context2.fill();

  // Tworzenie białej strzałki
  context2.beginPath();
  context2.moveTo(50, 110);
  context2.lineTo(110, 110);
  context2.lineTo(110, 140);
  context2.lineTo(155, 100);
  context2.lineTo(110, 60);
  context2.lineTo(110, 90);
  context2.lineTo(50, 90);
  context2.lineTo(50, 110);
  context.closePath();
  context2.lineWidth = 2;
  context2.strokeStyle = 'white';
  context2.stroke();
  context2.fillStyle = 'white';
  context2.fill();

  // ============================================= Znak 3
  var canvas3 = document.getElementById('myCanvas3');
  var context3 = canvas3.getContext("2d");
  context3.beginPath();
  context3.moveTo(100, 160);
  context3.lineTo(160, 40);
  context3.lineTo(40, 40);
  context3.lineTo(100, 160);
  context3.closePath();
  context3.lineWidth = 7;
  context3.strokeStyle = 'yellow';
  context3.stroke();
  var gradient4 = context3.createLinearGradient(0,0,0,height);
  gradient4.addColorStop(0.2, '#ffff00');
  gradient4.addColorStop(1, '#ddaa00');
  // Wypełnienie tarczy gradientem
  context3.fillStyle = gradient4;
  context3.fill();
  // Czerwona obwódka
  context.lineWidth = 25;
  context.strokeStyle = 'red';
  var gradient5 = context.createLinearGradient(0,0,0,height);
  gradient5.addColorStop(0.5, '#ff0000');
  gradient5.addColorStop(1, '#ff6600');
  context3.strokeStyle = gradient5;
  context3.stroke();
}