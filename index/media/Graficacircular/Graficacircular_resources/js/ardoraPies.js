//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
$(".bColor").mousedown(function() {indexColor=parseInt($(this).attr("id").substring(1,3));seleColor();});seleColor();
drawArcs();
}
var Arc = function () {this.x=0;this.y=0;this.ini=0;this.end=0;};
function seleColor() {
for (var i = 0; i < 12; i++) {if ($("#c" + i.toString()).length) {if (i == indexColor) {$("#c" + i.toString()).removeClass("bColor");
$("#c" + i.toString()).addClass("bColorSele");$("#p" + i.toString()).css("color", colors[i]);} else {
$("#c" + i.toString()).addClass("bColor");$("#c" + i.toString()).removeClass("bColorSele");$("#p" + i.toString()).css("color", colorText);}}}
}
function windowToCanvas(e) {var x = e.x || e.clientX,y = e.y || e.clientY,bbox = canvas.getBoundingClientRect();return { x: x - bbox.left * (canvas.width  / bbox.width),y: y - bbox.top  * (canvas.height / bbox.height)};};
function drawArcs() {canvas.width = canvas.width; for (var i = 0; i < this.arcCenterX.length; ++i) {drawA(i);}}
function drawA(i) {context.beginPath();context.fillStyle = arcFillStyles[i];context.strokeStyle = this.arcs[i].stroke;context.moveTo(this.arcs[i].x, this.arcs[i].y);
context.arc(this.arcs[i].x, this.arcs[i].y, radius, this.arcs[i].ini, this.arcs[i].end);context.lineTo(this.arcs[i].x, this.arcs[i].y);context.fill();context.stroke();context.closePath();}
canvas.onmousedown = function (e) {var location=windowToCanvas(e);arcs.forEach( function (arc) {var i=arcs.indexOf(arc);
if (isInsideSector(location,this.arcs[i].x,this.arcs[i].y, radius,this.arcs[i].ini, this.arcs[i].end)){
arcFillStyles[arcs.indexOf(arc)]=colors[indexColor];drawArcs();
}});}
canvas.onmousemove = function(e) {canvas.width=canvas.width;var indexInside=-1;var location=windowToCanvas(e);arcs.forEach(function(arc) {
var i = arcs.indexOf(arc);if (isInsideSector(location, this.arcs[i].x, this.arcs[i].y, radius, this.arcs[i].ini, this.arcs[i].end)) {arcs[i].stroke = colorSele;
indexInside=i;} else {arcs[i].stroke = colorText;}});drawArcs();
if (indexInside>-1){$("#ardoraCanvasPie").css("cursor","pointer");drawA(indexInside);}else{$("#ardoraCanvasPie").css("cursor","default");}}
canvas.onmouseup=function (e) {}
function isInsideSector(point, centerX,centerY, radius, angle1, angle2) {function areClockwise(centerX,centerY, radius, angle, point2) {
var point1 = {x:(centerX+radius)*Math.cos(angle),y:(centerY+radius)*Math.sin(angle)};
return -point1.x*point2.y + point1.y*point2.x > 0;}var relPoint={x:point.x-centerX,y:point.y-centerY};
return !areClockwise(centerX,centerY,radius,angle1,relPoint) && areClockwise(centerX,centerY,radius,angle2,relPoint) && (relPoint.x*relPoint.x + relPoint.y*relPoint.y <= radius * radius);}
for (var i=0; i < arcCenterX.length; ++i) {var arcNew = new Arc();arcNew.x=arcCenterX[i];arcNew.y=arcCenterY[i];arcNew.ini=arcIni[i];arcNew.end=arcEnd[i];arcNew.stroke=arcStrokeStyles[i];arcNew.fill=arcFillStyles[i];arcs.push(arcNew);}
function randomSort(){
}
function isCorrect(){
var correct = true;
for (var j=0; j<colors.length;++j){var tot=0;for (var i=0; i<arcCenterX.length; ++i) {
if (arcFillStyles[i].localeCompare(colors[j])==0){tot=tot+uniVal;}} var cV=piesWords(a[j]);if (tot.toString().localeCompare(cV)!=0){correct=false;}}
 if (correct) {score=score+scoreInc;successes++;timeAct=timeAct+timeBon;showMessage("Ok");} else {
attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function piesWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
