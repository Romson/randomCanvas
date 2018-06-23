var canvas = document.getElementById('demoCanvas');
var context = canvas.getContext('2d');

context.fillStyle = '#a9b0b3';
context.strokeStyle = '#746c73';
context.lineWidth = 5;

context.moveTo(0, 0);
context.lineTo(700, 350);
context.stroke();

context.beginPath();
context.arc(160, 80, 70, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.moveTo(650, 345, );
context.lineTo(700, 350);
context.lineTo(665, 315);
context.stroke();

context.fillStyle = '#20293f';
context.font = '38px Segoe UI';
context.shadowColor = 'black';
context.shadowBlur = 17;
context.fillText('Hello from the other side', 140, 200);
context.fillText('I must\'ve called a thousand times', 140, 250);
