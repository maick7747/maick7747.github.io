//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()} paintBoard();initGame();if ((tiTime) && (tiButtonTime)){paintButtonTime();}
}
function initGame(){var canLeft=document.getElementById("ardoraAct").offsetLeft;var canTop=document.getElementById("ardoraAct").offsetTop;
$("#ardoraCanvasGrid").mousemove(function(e){posXEnd=e.pageX-canLeft;posYEnd=e.pageY-canTop;$(this).css("cursor","default");for (i=0;i<butState.length;i++){butState[i]=0}
if (posXEnd>wC*(dimGrid+3)&& posXEnd<wC*(dimGrid+3)+(wC*6+5*wC/2) && posYEnd>wC*(dimGrid+1)+wC/2){if (posXEnd<wC*(dimGrid+4)){butState[0]=1;}posB=wC*(dimGrid+4)+wC/2;
if (posXEnd>posB && posXEnd<posB+wC){butState[1]=1;}posB=posB+wC+wC/2;if (posXEnd>posB && posXEnd<posB+wC){butState[2]=1;}posB=posB+wC+wC/2;
if (posXEnd>posB && posXEnd<posB+wC){butState[3]=1;}posB=posB+wC+wC/2;if (posXEnd>posB && posXEnd<posB+wC){butState[4]=1;}posB=posB+wC+wC/2;if (posXEnd>posB && posXEnd<posB+wC){butState[5]=1;}}
var posX=wC*(dimGrid+3)+wC*dimGrid+wC/2;var posY=wC*(dimGrid+1);if (posXEnd>posX && posXEnd<posX+wC && posYEnd<posY){if (colorPalete.length>1){
for (i=0; i<colorPalete.length;i++){if (posYEnd<posY && posYEnd>posY-wC+wC/4){$(this).css("cursor","pointer");}posY=posY-wC;}}}
var posX=wC*(dimGrid+3)+wC*dimGrid+wC/2;var posY=wC*(dimGrid);if (posXEnd>wC*(dimGrid+3) && posXEnd<wC*(2*dimGrid+3) && posYEnd>wC && posYEnd<wC*(dimGrid+1)){$(this).css("cursor","pointer");}
for (i=0;i<butState.length;i++){if(butState[i]==1){$(this).css("cursor","pointer");}}drawButtons();});
$("#ardoraCanvasGrid").mousedown(function (e) {posXEnd=e.pageX-canLeft;posYEnd=e.pageY-canTop;if (posXEnd>wC*(dimGrid+3)&& posXEnd<wC*(dimGrid+3)+(wC*6+5*wC/2) && posYEnd>wC*(dimGrid+1)+wC/2){
if (posXEnd<wC*(dimGrid+4)){actualFig=0;}posB=wC*(dimGrid+4)+wC/2;if (posXEnd>posB && posXEnd<posB+wC){actualFig=1;}posB=posB+wC+wC/2;
if (posXEnd>posB && posXEnd<posB+wC){actualFig=2;}posB=posB+wC+wC/2;if (posXEnd>posB && posXEnd<posB+wC){actualFig=3;}posB=posB+wC+wC/2;if (posXEnd>posB && posXEnd<posB+wC){actualFig=4;}posB=posB+wC+wC/2;
if (posXEnd>posB && posXEnd<posB+wC){actualFig=5;}drawActualFig();}var posX=wC*(dimGrid+3)+wC*dimGrid+wC/2;var posY=wC*(dimGrid+1);var indexC=0;
if (posXEnd>posX && posXEnd<posX+wC && posYEnd<posY){if (colorPalete.length>1){for (i=0; i<colorPalete.length;i++){if (posYEnd<posY && posYEnd>posY-wC+wC/4){actualColor=indexC;drawActualFig();}posY=posY-wC;indexC++;}}}
var posX=wC*(dimGrid+3);var posY=wC;if (posXEnd>wC*(dimGrid+3) && posXEnd<wC*(2*dimGrid+3) && posYEnd>wC && posYEnd<wC*(dimGrid+1)){for (i=0;i<dimGrid;i++){
for (j=0;j<dimGrid;j++){if (posXEnd>posX && posXEnd<posX+wC && posYEnd>posY && posYEnd<posY+wC){refreshCell(j,i);}posX=posX+wC;}posX=wC*(dimGrid+3);posY=posY+wC;}}});
drawActualFig();drawColorButtons();}
function refreshCell(i,j){if (actualFig==0){grF2[i][j]="C"}if (actualFig==1){grF2[i][j]="T1"}if (actualFig==2){grF2[i][j]="T2"}if (actualFig==3){grF2[i][j]="T3"}
if (actualFig==4){grF2[i][j]="T4"}if (actualFig==5){grF2[i][j]="0"}grC2[i][j]=colorPalete[actualColor];drawAnswer();}
function drawAnswer(){var canvas = document.getElementById("ardoraCanvasGrid");var context = canvas.getContext("2d");
var posX=wC*(dimGrid+3);var posY=wC;for (i=0;i<dimGrid;i++){for (j=0;j<dimGrid;j++){context.beginPath();context.rect(posX,posY,wC,wC);context.fillStyle=colorBack;context.fill();
context.stroke();posX=posX+wC;}posX=wC*(dimGrid+3);posY=posY+wC;}
var posX=wC*(dimGrid+3);var posY=wC;for (i=0;i<dimGrid;i++){for (j=0;j<dimGrid;j++){context.beginPath();if (grF2[j][i].localeCompare("C")==0){context.rect(posX,posY,wC,wC);
context.fillStyle="rgb("+grC2[j][i].replace("/",",").replace("/",",");context.fill();}if (grF2[j][i].localeCompare("T1")==0){context.moveTo(posX+wC,posY);context.lineTo(posX+wC,posY+wC);
context.lineTo(posX,posY+wC);context.lineTo(posX+wC,posY);context.fillStyle="rgb("+grC2[j][i].replace("/",",").replace("/",",");context.fill();}
if (grF2[j][i].localeCompare("T2")==0){context.moveTo(posX,posY);context.lineTo(posX+wC,posY);context.lineTo(posX+wC,posY+wC);context.lineTo(posX,posY);context.fillStyle="rgb("+grC2[j][i].replace("/",",").replace("/",",");context.fill();}
if (grF2[j][i].localeCompare("T3")==0){context.moveTo(posX,posY);context.lineTo(posX+wC,posY);context.lineTo(posX,posY+wC);context.lineTo(posX,posY);context.fillStyle="rgb("+grC2[j][i].replace("/",",").replace("/",",");context.fill();}
if (grF2[j][i].localeCompare("T4")==0){context.moveTo(posX,posY);context.lineTo(posX+wC,posY+wC);context.lineTo(posX,posY+wC);context.lineTo(posX,posY);context.fillStyle="rgb("+grC2[j][i].replace("/",",").replace("/",",");context.fill();}
posX=posX+wC;}posX=wC*(dimGrid+3);posY=posY+wC;}
}
function paintBoard(){var canWidth = $("#ardoraAct").css("width").replace("px", "");var canHeight = $("#ardoraAct").css("height").replace("px", "");
$("#ardoraActCanvas").attr({"width": canWidth,"height": canHeight});var canvas=document.getElementById("ardoraCanvasGrid");var context=canvas.getContext("2d");
var posX=wC;var posY=wC;context.beginPath();for (i=0;i<dimGrid;i++){for (j=0;j<dimGrid;j++){context.rect(posX,posY,wC,wC);posX=posX+wC;}posX=wC;posY=posY+wC;}
context.moveTo(wC*(dimGrid+2),wC);context.lineTo(wC*(dimGrid+2),wC+(wC*dimGrid));posX=wC*(dimGrid+3);posY=wC;
for (i=0;i<dimGrid;i++){for (j=0;j<dimGrid;j++){context.rect(posX,posY,wC,wC);posX=posX+wC;}posX=wC*(dimGrid+3);posY=posY+wC;}
context.lineWidth =0.5;context.strokeStyle=colorText;context.stroke();posX=wC;posY=wC;
for (i=0;i<dimGrid;i++){for (j=0;j<dimGrid;j++){
context.beginPath();if (grF[j][i].localeCompare("C")==0){context.rect(posX,posY,wC,wC);context.fillStyle="rgb("+grC[j][i].replace("/",",").replace("/",",");
context.fill();}if (grF[j][i].localeCompare("T1")==0){context.moveTo(posX+wC,posY);context.lineTo(posX+wC,posY+wC);context.lineTo(posX,posY+wC);
context.lineTo(posX+wC,posY);context.fillStyle="rgb("+grC[j][i].replace("/",",").replace("/",",");context.fill();}
if (grF[j][i].localeCompare("T2")==0){context.moveTo(posX,posY);context.lineTo(posX+wC,posY);context.lineTo(posX+wC,posY+wC);context.lineTo(posX,posY);
context.fillStyle="rgb("+grC[j][i].replace("/",",").replace("/",",");context.fill();}if (grF[j][i].localeCompare("T3")==0){context.moveTo(posX,posY);
context.lineTo(posX+wC,posY);context.lineTo(posX,posY+wC);context.lineTo(posX,posY);context.fillStyle="rgb("+grC[j][i].replace("/",",").replace("/",",");context.fill();}
if (grF[j][i].localeCompare("T4")==0){context.moveTo(posX,posY);context.lineTo(posX+wC,posY+wC);context.lineTo(posX,posY+wC);context.lineTo(posX,posY);context.fillStyle="rgb("+grC[j][i].replace("/",",").replace("/",",");
context.fill();}posX=posX+wC;}posX=wC;posY=posY+wC;}context.beginPath();context.moveTo(wC*(dimGrid+2),wC);context.lineTo(wC*(dimGrid+2),wC+(wC*dimGrid));
context.lineWidth =0.5;context.strokeStyle=colorText;context.stroke();drawButtons();
}
function drawAxes(){var canvas = document.getElementById("ardoraCanvasGrid");var context = canvas.getContext("2d");
context.beginPath();context.moveTo(wC*(1+dimGrid/2),wC);context.lineTo(wC*(1+dimGrid/2),wC+(wC*dimGrid));context.lineWidth =2;context.strokeStyle=colorText;context.stroke();
context.beginPath();context.moveTo(wC,wC+wC*(dimGrid/2));context.lineTo(wC*(dimGrid+1),wC+wC*(dimGrid/2));context.lineWidth =2;context.strokeStyle=colorText;context.stroke();
context.beginPath();context.moveTo(wC*(dimGrid+3+dimGrid/2),wC);context.lineTo(wC*(dimGrid+3+dimGrid/2),wC+(wC*dimGrid));context.lineWidth=2;context.strokeStyle=colorText;context.stroke();
context.beginPath();context.moveTo(wC*(dimGrid+3),wC+wC*(dimGrid/2));context.lineTo(wC*(dimGrid+3)+wC*dimGrid,wC+wC*(dimGrid/2));context.lineWidth =2;context.strokeStyle=colorText;context.stroke();}
function drawButtons(){var canvas = document.getElementById("ardoraCanvasGrid");var context = canvas.getContext("2d");var posX=wC*(dimGrid+3);var posY=wC*(dimGrid+1)+wC/2;
context.beginPath();context.rect(posX,posY,wC,wC);if (butState[0]==0){context.fillStyle=colorButton;}else{context.fillStyle=colorSele;}context.fill();context.stroke();posX=posX+wC+wC/2;
context.beginPath();context.moveTo(posX+wC,posY);context.lineTo(posX+wC,posY+wC);context.lineTo(posX,posY+wC);context.lineTo(posX+wC,posY);
if (butState[1]==0){context.fillStyle=colorButton;}else{context.fillStyle=colorSele;}context.fill();context.stroke();posX=posX+wC+wC/2;
context.beginPath();context.moveTo(posX,posY);context.lineTo(posX+wC,posY);context.lineTo(posX+wC,posY+wC);context.lineTo(posX,posY);
if (butState[2]==0){context.fillStyle=colorButton;}else{context.fillStyle=colorSele;}context.fill();context.stroke();posX=posX+wC+wC/2;
context.beginPath();context.moveTo(posX,posY);context.lineTo(posX+wC,posY);context.lineTo(posX,posY+wC);context.lineTo(posX,posY);
if (butState[3]==0){context.fillStyle=colorButton;}else{context.fillStyle=colorSele;}context.fill();context.stroke();posX=posX+wC+wC/2;
context.beginPath();context.moveTo(posX,posY);context.lineTo(posX+wC,posY+wC);context.lineTo(posX,posY+wC);context.lineTo(posX,posY);
if (butState[4]==0){context.fillStyle=colorButton;}else{context.fillStyle=colorSele;}context.fill();context.stroke();
posX=posX+wC+wC/2;if (butState[5]==0){context.lineWidth =1;}else{context.lineWidth =2;}
context.beginPath();context.rect(posX,posY,wC,wC);context.fillStyle=colorBack;context.fill();context.moveTo(posX,posY);
context.lineTo(posX+wC,posY+wC);context.moveTo(posX,posY+wC);context.lineTo(posX+wC,posY);context.stroke();context.lineWidth =0.5;}
function drawActualFig(){var canvas = document.getElementById("ardoraCanvasGrid");var context = canvas.getContext("2d");var posX=wC*(dimGrid+3)+wC*dimGrid+wC/2;var posY=wC*(dimGrid+1)+wC/2;
context.lineWidth=2;context.beginPath();context.rect(posX-wC/4,posY-wC/4,wC+wC/2,wC+wC/2);context.fillStyle=colorBack;context.fill();context.stroke();context.lineWidth=0.5;
context.beginPath();context.fillStyle="rgb("+colorPalete[actualColor].replace("/",",").replace("/",",");if (actualFig==0){context.rect(posX,posY,wC,wC);}
if (actualFig==1){context.moveTo(posX+wC,posY);context.lineTo(posX+wC,posY+wC);context.lineTo(posX,posY+wC);context.lineTo(posX+wC,posY);}
if (actualFig==2){context.moveTo(posX,posY);context.lineTo(posX+wC,posY);context.lineTo(posX+wC,posY+wC);context.lineTo(posX,posY);}
if (actualFig==3){context.moveTo(posX,posY);context.lineTo(posX+wC,posY);context.lineTo(posX,posY+wC);context.lineTo(posX,posY);}
if (actualFig==4){context.moveTo(posX,posY);context.lineTo(posX+wC,posY+wC);context.lineTo(posX,posY+wC);context.lineTo(posX,posY);}
if (actualFig==5){context.rect(posX,posY,wC,wC);context.fillStyle=colorBack;context.fill();context.moveTo(posX,posY);context.lineTo(posX+wC,posY+wC);context.moveTo(posX,posY+wC);context.lineTo(posX+wC,posY);}context.fill();context.stroke();}
function drawColorButtons(){var canvas = document.getElementById("ardoraCanvasGrid");var context = canvas.getContext("2d");var posX=wC*(dimGrid+3)+wC*dimGrid+wC/2;var posY=wC*(dimGrid);
if (colorPalete.length>1){for (i=0; i<colorPalete.length;i++){context.beginPath();context.rect(posX,posY,wC-wC/4,wC-wC/4);context.fillStyle="rgb("+colorPalete[i].replace("/",",").replace("/",",");context.fill();context.stroke();posY=posY-wC;}}}
function randomSort(){
}
function isCorrect(){
var correct=true;for (i=0;i<dimGrid;i++){for (j=0;j<dimGrid;j++){if (grF1[i][j].localeCompare(grF2[i][j])!=0){correct=false;}
else{if (grF1[i][j].localeCompare("0")!=0){if (grC1[i][j].localeCompare(grC2[i][j])!=0){correct=false;}}}}}
if (correct) {score = score + scoreInc;successes++;timeAct = timeAct + timeBon;showMessage("Ok");} else {attempts++;score = score-scoreDec;
if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function SimetriaWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
