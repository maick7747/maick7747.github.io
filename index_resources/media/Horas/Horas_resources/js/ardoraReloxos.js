//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
 canvas=document.getElementById("ardoraActCanvas");context=canvas.getContext("2d");
canvas.width=rad+25;
canvas.height=rad+25+rad/8;
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();document.getElementById("ardoraActCanvas").style.zIndex=50;}; showTime();
var radius=rad/2;var isIn=false;canvasRB=document.getElementById("ardoraRelBack");contextRB=canvasRB.getContext("2d");canvasR=document.getElementById("ardoraRel");
contextR=canvasR.getContext("2d");canvasRB.width=rad+25;canvasRB.height=rad+25+radius/4;canvasR.width=canvasRB.width;canvasR.height=canvasRB.height;
$("#ardoraAct").css("width",rad+25);
var centerX=canvasRB.width/2;var centerY=canvasRB.width/2;var a=radius/2;var b=0.866*radius;
drawAnalogic();drawButtLeftAn(false);drawButtRightAn(false);drawEyesAn(false);paintClockwise();
$("#ardoraRel").hover(function(e) {isIn=true;drawEyesAn(isIn);}, function() {isIn=false;drawEyesAn(isIn);});
$("#ardoraRel").mousemove(function(e){if (isIn){var d4=(radius/5-radius/12)/4;var d2=(radius/5-radius/12)/2;var offset=$(this).offset();var pX=e.pageX-offset.left;var pY=e.pageY-offset.top;
contextRB.beginPath();contextRB.arc(centerX-radius/4,centerY-radius/3,radius/6,0,2*Math.PI,false);contextRB.fillStyle=colorBack;contextRB.fill();contextRB.beginPath();contextRB.arc(centerX+radius/4,centerY-radius/3,radius/6,0,2*Math.PI,false);contextRB.fill();
if (pX>centerX && pY<canvasRB.height/3){contextRB.beginPath();contextRB.arc(centerX-radius/4+d2, centerY-radius/3-d4, radius/12, 0, 2 * Math.PI, false);contextRB.fillStyle=colorText;contextRB.fill();contextRB.beginPath();contextRB.arc(centerX+radius/4+d2,centerY-radius/3-d4,radius/12,0,2*Math.PI,false);contextRB.fill();}
if (pX>centerX && pY>canvasRB.height/3 && pY<2*canvasRB.height/3){contextRB.beginPath();contextRB.arc(centerX-radius/4+d2,centerY-radius/3,radius/12,0,2*Math.PI,false);contextRB.fillStyle=colorText;contextRB.fill();contextRB.beginPath();contextRB.arc(centerX+radius/4+d2,centerY-radius/3,radius/12,0,2*Math.PI,false);contextRB.fill();}
if (pX>centerX && pY>2*canvasRB.height/3){contextRB.beginPath();contextRB.arc(centerX-radius/4+d2,centerY-radius/3+d4,radius/12,0,2*Math.PI,false);contextRB.fillStyle=colorText;contextRB.fill();contextRB.beginPath();contextRB.arc(centerX+radius/4+d2,centerY-radius/3+d4,radius/12,0,2*Math.PI,false);contextRB.fill();}
if (pX<centerX && pY<canvasRB.height/3){contextRB.beginPath();contextRB.arc(centerX-radius/4-d2,centerY-radius/3-d4,radius/12,0,2*Math.PI,false);contextRB.fillStyle=colorText;contextRB.fill();contextRB.beginPath();contextRB.arc(centerX+radius/4-d2,centerY-radius/3-d4,radius/12,0,2*Math.PI,false);contextRB.fill();}
if (pX<centerX && pY>canvasRB.height/3 && pY<2*canvasRB.height/3){contextRB.beginPath();contextRB.arc(centerX-radius/4-d2,centerY-radius/3,radius/12,0,2*Math.PI,false);contextRB.fillStyle=colorText;contextRB.fill();contextRB.beginPath();contextRB.arc(centerX+radius/4-d2,centerY-radius/3,radius/12,0,2*Math.PI,false);contextRB.fill();}
if (pX<centerX && pY>2*canvasRB.height/3){contextRB.beginPath();contextRB.arc(centerX-radius/4-d2,centerY-radius/3+d4,radius/12,0,2*Math.PI,false);contextRB.fillStyle=colorText;contextRB.fill();contextRB.beginPath();contextRB.arc(centerX+radius/4-d2,centerY-radius/3+d4,radius/12,0,2*Math.PI,false);contextRB.fill();}
if (Math.abs(pX-(centerX+a+radius/4))<radius/4 && Math.abs(pY-(centerY+b+radius/5))<radius/8){drawButtRightAn(true);}else{
if (Math.abs(pX-(centerX-a-radius/4))<radius/4 && Math.abs(pY-(centerY+b+radius/5))<radius/8){drawButtLeftAn(true);}else{$("#ardoraRel").css("cursor","default");drawButtLeftAn(false);drawButtRightAn(false);}}}})
$("#ardoraRel").click(function(e) {var offset=$(this).offset();var pX=e.pageX-offset.left;var pY=e.pageY-offset.top;
if (Math.abs(pX-(centerX+a+radius/4))<radius/4 && Math.abs(pY-(centerY+b+radius/5))<radius/8){posM=posM+5;posH=posH+1;if (posM>55){posM=0;};if (posH>143){posH=0;};paintClockwise();}
if (Math.abs(pX-(centerX-a-radius/4))<radius/4 && Math.abs(pY-(centerY+b+radius/5))<radius/8){posM=posM-5;posH=posH-1;if (posM<0){posM=55;}; if (posH<0){posH=143;}; paintClockwise();}});
}
function drawAnalogic(){var centerX=canvasRB.width/2; var centerY=canvasRB.width/2;var radius=rad/2;var a=radius/2;var b=0.866*radius;
contextRB.beginPath();contextRB.arc(centerX,centerY,radius,0,2*Math.PI,false);contextRB.shadowColor="#999";contextRB.shadowBlur=4;contextRB.shadowOffsetX=8;contextRB.shadowOffsetY=6;contextRB.fillStyle=colorBack;contextRB.fill();
contextRB.shadowBlur=0;contextRB.shadowOffsetX=0;contextRB.shadowOffsetY=0;
contextRB.strokeStyle=colorText;contextRB.lineWidth=3;
contextRB.beginPath();contextRB.moveTo(centerX,centerY-radius+8);contextRB.lineTo(centerX,centerY);contextRB.stroke();
contextRB.beginPath();contextRB.moveTo(centerX+radius-8,centerY);contextRB.lineTo(centerX,centerY);contextRB.stroke();
contextRB.beginPath();contextRB.moveTo(centerX,centerY+radius-8);contextRB.lineTo(centerX,centerY);contextRB.stroke();
contextRB.beginPath();contextRB.moveTo(centerX-radius+8,centerY);contextRB.lineTo(centerX,centerY);contextRB.stroke();
contextRB.lineWidth=1;contextRB.beginPath();contextRB.moveTo(centerX+a,centerY-b);contextRB.lineTo(centerX,centerY);contextRB.stroke();
contextRB.beginPath();contextRB.moveTo(centerX+b,centerY-a);contextRB.lineTo(centerX,centerY);contextRB.stroke();
contextRB.beginPath();contextRB.moveTo(centerX-a,centerY-b);contextRB.lineTo(centerX,centerY);contextRB.stroke();
contextRB.beginPath();contextRB.moveTo(centerX-b,centerY-a);contextRB.lineTo(centerX,centerY);contextRB.stroke();
contextRB.beginPath();contextRB.moveTo(centerX+b,centerY+a);contextRB.lineTo(centerX,centerY);contextRB.stroke();
contextRB.beginPath();contextRB.moveTo(centerX+a,centerY+b);contextRB.lineTo(centerX,centerY);contextRB.stroke();
contextRB.beginPath();contextRB.moveTo(centerX-b,centerY+a);contextRB.lineTo(centerX,centerY);contextRB.stroke();
contextRB.beginPath();contextRB.moveTo(centerX-a,centerY+b);contextRB.lineTo(centerX,centerY);contextRB.stroke();var a=radius/2;
contextRB.beginPath();contextRB.arc(centerX,centerY,radius,0,2*Math.PI,false);contextRB.lineWidth=10;contextRB.strokeStyle=colorSele;contextRB.stroke();
contextRB.beginPath();contextRB.lineWidth=1;contextRB.strokeStyle=colorText;contextRB.arc(centerX,centerY,radius+5,0,2*Math.PI,false);contextRB.arc(centerX,centerY,radius-5,0,2*Math.PI,false);contextRB.stroke();
contextRB.beginPath();contextRB.arc(centerX,centerY,radius-15,0,2*Math.PI,false);contextRB.fillStyle=colorBack;contextRB.fill();
contextRB.fillStyle=colorText;contextRB.font="16pt Verdana";
contextRB.fillText("12",centerX-12,centerY-radius+32);
contextRB.fillText("3",centerX+radius-8-20,centerY+6);
contextRB.fillText("6",centerX-6,centerY+radius-8-10);
contextRB.fillText("9",centerX-radius+8+10,centerY+6);
contextRB.font="12pt Verdana";contextRB.fillText("1",centerX+a-12-2,centerY-b+24+2);contextRB.fillText("2",centerX+b-24,centerY-a+18+2);contextRB.fillText("4",centerX+b-24,centerY+a-2);
contextRB.fillText("5",centerX+a-12-2,centerY+b-12-3);contextRB.fillText("7",centerX-a+6,centerY+b-12-2);contextRB.fillText("8",centerX-b+12+2,centerY+a-4);
contextRB.fillText("10",centerX-b+12,centerY-a+18+2);contextRB.fillText("11",centerX-a+2,centerY-b+24+2);
}
function drawButtLeftAn(isHover){var centerX=canvasRB.width/2; var centerY=canvasRB.width/2;var radius=rad/2;var a=radius/2;var b=0.866*radius;
if (isHover){$("#ardoraRel").css("cursor","pointer");contextRB.beginPath();contextRB.fillStyle=colorBack;contextRB.strokeStyle=colorBack;contextRB.lineWidth=12;drawEllipseByCenter(contextRB,centerX-a-radius/4,centerY+b+radius/5,radius/2,radius/4);contextRB.fill();contextRB.stroke();
contextRB.beginPath();contextRB.strokeStyle=colorSele;contextRB.lineWidth=10;drawEllipseByCenter(contextRB,centerX-a-radius/4,centerY+b+radius/5,radius/2,radius/4);contextRB.stroke();contextRB.lineWidth=1;contextRB.strokeStyle=colorText;
contextRB.beginPath();drawEllipseByCenter(contextRB,centerX-a-radius/4,centerY+b+radius/5,radius/2+10,radius/4+10);contextRB.stroke();contextRB.beginPath();drawEllipseByCenter(contextRB,centerX-a-radius/4,centerY+b+radius/5,radius/2-10,radius/4-10);contextRB.stroke();
contextRB.beginPath();contextRB.fillStyle=colorButton;contextRB.font="bold 12pt Verdana";contextRB.fillText(String.fromCharCode("8634",16).substr(0,1),centerX-a-radius/4-5,centerY+b+radius/5+4);
}else{
$("#ardoraRel").css("cursor","default");contextRB.beginPath();contextRB.fillStyle=colorBack;contextRB.strokeStyle=colorBack;contextRB.lineWidth=12;drawEllipseByCenter(contextRB,centerX-a-radius/4,centerY+b+radius/5,radius/2,radius/4);contextRB.fill();contextRB.stroke();
contextRB.beginPath();contextRB.strokeStyle=colorButton;contextRB.lineWidth=10;drawEllipseByCenter(contextRB,centerX-a-radius/4,centerY+b+radius/5,radius/2,radius/4);contextRB.stroke();
contextRB.lineWidth=1;contextRB.strokeStyle=colorText;contextRB.beginPath();drawEllipseByCenter(contextRB,centerX-a-radius/4,centerY+b+radius/5,radius/2+10,radius/4+10);contextRB.stroke();
contextRB.beginPath();drawEllipseByCenter(contextRB,centerX-a-radius/4,centerY+b+radius/5,radius/2-10,radius/4-10);contextRB.stroke();
contextRB.beginPath();contextRB.fillStyle=colorText;contextRB.font="bold 12pt Verdana";contextRB.fillText(String.fromCharCode("8634",16).substr(0,1),centerX-a-radius/4-5,centerY+b+radius/5+4);
}}
function drawButtRightAn(isHover){var centerX=canvasRB.width/2; var centerY=canvasRB.width/2;var radius=rad/2;var a=radius/2;var b=0.866*radius;if (isHover){$("#ardoraRel").css("cursor","pointer");
contextRB.beginPath();contextRB.fillStyle=colorBack;contextRB.strokeStyle=colorBack;contextRB.lineWidth=12;drawEllipseByCenter(contextRB,centerX+a+radius/4,centerY+b+radius/5,radius/2,radius/4);contextRB.fill();contextRB.stroke();
contextRB.beginPath();contextRB.strokeStyle=colorSele;contextRB.lineWidth=10;drawEllipseByCenter(contextRB,centerX+a+radius/4,centerY+b+radius/5,radius/2,radius/4);contextRB.stroke();contextRB.lineWidth=1;contextRB.strokeStyle=colorText;
contextRB.beginPath();drawEllipseByCenter(contextRB,centerX+a+radius/4,centerY+b+radius/5,radius/2+10,radius/4+10);contextRB.stroke();contextRB.beginPath();drawEllipseByCenter(contextRB,centerX+a+radius/4,centerY+b+radius/5,radius/2-10,radius/4-10);contextRB.stroke();
contextRB.beginPath();contextRB.fillStyle=colorButton;contextRB.font="bold 12pt Verdana";contextRB.fillText(String.fromCharCode("8635",16).substr(0,1),centerX+a+radius/4-5,centerY+b+radius/5+4);
}else{
$("#ardoraRel").css("cursor","default");contextRB.beginPath();contextRB.fillStyle=colorBack;contextRB.strokeStyle=colorBack;contextRB.lineWidth=12;drawEllipseByCenter(contextRB,centerX+a+radius/4,centerY+b+radius/5,radius/2,radius/4);contextRB.fill();contextRB.stroke();
contextRB.beginPath();contextRB.strokeStyle=colorButton;contextRB.lineWidth=10;drawEllipseByCenter(contextRB,centerX+a+radius/4,centerY+b+radius/5,radius/2,radius/4);contextRB.stroke();contextRB.lineWidth=1;contextRB.strokeStyle=colorText;
contextRB.beginPath();drawEllipseByCenter(contextRB,centerX+a+radius/4,centerY+b+radius/5,radius/2+10,radius/4+10);contextRB.stroke();
contextRB.beginPath();drawEllipseByCenter(contextRB,centerX+a+radius/4,centerY+b+radius/5,radius/2-10,radius/4-10);contextRB.stroke();
contextRB.beginPath();contextRB.fillStyle=colorText;contextRB.font="bold 12pt Verdana";contextRB.fillText(String.fromCharCode("8635",16).substr(0,1),centerX+a+radius/4-5,centerY+b+radius/5+4);
}}
function drawEyesAn(isHover){var centerX=canvasRB.width/2; var centerY=canvasRB.width/2;var radius=rad/2;var a=radius/2;var b=0.866*radius;
contextRB.beginPath();contextRB.lineWidth=5;contextRB.strokeStyle=colorBack;contextRB.fillStyle=colorBack;contextRB.arc(centerX-radius/4,centerY-radius/3,radius/5,0,2*Math.PI,false);contextRB.arc(centerX+radius/4,centerY-radius/3,radius/5,0,2*Math.PI,false);contextRB.stroke();contextRB.fill();
contextRB.beginPath();contextRB.lineWidth=1;contextRB.strokeStyle=colorText;contextRB.arc(centerX-radius/4,centerY-radius/3,radius/5,0,2*Math.PI,false);contextRB.stroke();
contextRB.beginPath();contextRB.arc(centerX+radius/4,centerY-radius/3,radius/5,0,2*Math.PI,false);contextRB.stroke();
if (isHover) {contextRB.beginPath();contextRB.lineWidth=2;contextRB.strokeStyle=colorBack;contextRB.fillStyle=colorBack;contextRB.arc(centerX,centerY+radius/3,radius/4,0,2*Math.PI,false);contextRB.fill();
contextRB.beginPath();contextRB.lineWidth=1;contextRB.strokeStyle=colorText;contextRB.arc(centerX,centerY+radius/3,radius/5,0,Math.PI,false);contextRB.stroke();
}else {
contextRB.beginPath();contextRB.lineWidth=2;contextRB.strokeStyle=colorBack;contextRB.fillStyle=colorBack;contextRB.arc(centerX,centerY+radius/3,radius/4,0,2*Math.PI,false);contextRB.fill();
contextRB.beginPath();contextRB.lineWidth=1;contextRB.strokeStyle=colorText;contextRB.arc(centerX,centerY+radius/3,radius/5,Math.PI,0,false);contextRB.stroke();
contextRB.beginPath();contextRB.arc(centerX-radius/4,centerY-radius/3,radius/6,0,2*Math.PI,false);contextRB.fillStyle=colorBack;contextRB.fill();
contextRB.beginPath();contextRB.arc(centerX+radius/4,centerY-radius/3,radius/6,0,2*Math.PI,false);contextRB.fill();
contextRB.beginPath();contextRB.arc(centerX-radius/4,centerY-radius/3,radius/12,0,2*Math.PI,false);contextRB.fillStyle=colorText;contextRB.fill();
contextRB.beginPath();contextRB.arc(centerX+radius/4,centerY-radius/3,radius/12,0,2*Math.PI,false);contextRB.fill();
}
}
function paintClockwise(){canvasR.width=canvasR.width;var centerX=canvasR.width/2;var centerY=canvasR.width/2;var radius=rad/2;var valMx=0;var valMy=0;
var a=(radius-20)*Math.sin(posM*Math.PI/30);var b=(radius-20)*Math.cos(posM*Math.PI/30);valMx=centerX+a;valMy=centerY-b;var valHx=0;var valHy=0;
var c=(radius-40)*Math.sin(posH*Math.PI/72);var d=(radius-40)*Math.cos(posH*Math.PI/72);valHx=centerX+c;valHy=centerY-d;
contextR.beginPath();contextR.lineCap="round";contextR.lineWidth=4;contextR.strokeStyle=colorM;contextR.moveTo(valMx,valMy);contextR.lineTo(centerX,centerY);contextR.stroke();
contextR.beginPath();contextR.lineCap="round";contextR.lineWidth=4;contextR.strokeStyle=colorH;contextR.moveTo(valHx,valHy);contextR.lineTo(centerX,centerY);contextR.stroke();
contextR.beginPath();contextR.fillStyle=colorButton;contextR.arc(centerX,centerY,radius/10,0,2*Math.PI,false);contextR.fill();}
function drawEllipseByCenter(ctx, cx, cy, w, h) {drawEllipse(ctx,cx-w/2.0,cy-h/2.0,w,h);}
function drawEllipse(ctx, x, y, w, h) {var kappa=.5522848,ox=(w/2)*kappa,oy=(h/2)*kappa,xe=x+w,ye=y+h,xm=x+w/2,ym=y+h/2;
ctx.beginPath();ctx.moveTo(x,ym);ctx.bezierCurveTo(x,ym-oy,xm-ox,y,xm,y);ctx.bezierCurveTo(xm+ox,y,xe,ym-oy,xe,ym);ctx.bezierCurveTo(xe,ym+oy,xm+ox,ye,xm,ye);ctx.bezierCurveTo(xm-ox,ye,x,ym+oy,x,ym);ctx.stroke();}
function showTime() {$("#textClock").text(a[d[indexE]]);}
function randomSort(){
var rand=0;for (i=0;i<a.length;i++) {rand = Math.floor(Math.random() * (a.length-1));if (d[rand]==-1){d[rand]=i;}
else{var j=rand;while (d[j]!=-1){j++;if (j>a.length-1){j=0;}} d[j]=i;}}
}
function isCorrect(){
var correct=true;
var d12=b[d[indexE]];
if (b[d[indexE]]==12){var d12=0;}
if (b[d[indexE]]>11){var h12=b[d[indexE]]-12;} else{var h12=b[d[indexE]];}
if (Math.trunc(posH/12)!=h12){correct=false;}if (posM!=c[d[indexE]]){ correct=false;}
if (correct) {score=score+scoreInc;timeAct=timeAct+timeBon;successes++;indexE++;if (indexE<a.length){showMessage("Next"); showTime();} else{showMessage("Ok");}
} else {attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function ReloxosWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
