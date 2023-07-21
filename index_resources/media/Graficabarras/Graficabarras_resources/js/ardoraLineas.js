//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
initGraph();
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
}
function initGraph(){graph=$("#ardoraGraph");axes=$("#ardoraAxes");var c=axes[0].getContext("2d");c.lineWidth=2;
c.strokeStyle="#333";
c.font="14px Verdana, Geneva, sans-serif";
c.textAlign="center";
for(var i=iniAxe;i<=maxY;i+=yStep){if (c.measureText(i).width>xPadding){xPadding=c.measureText(i).width}}
xPadding=xPadding+30;
wBar=xPadding/nBar;
for(var i=0; i<data.values.length; i++) {dPoints.push({x:getXPixel1(i), y:getYPixel(data.values[i].Y)}); dPointsState.push(0);
dPoints2.push({x:getXPixel2(i),y: getYPixel(data2.values[i].Y)});dPoints2State.push(0);
dPoints3.push({x:getXPixel3(i),y: getYPixel(data3.values[i].Y)});dPoints3State.push(0);
}
drawAxes();
}
function drawAxes(){document.getElementById("ardoraAxes").width=document.getElementById("ardoraAxes").width;var c = axes[0].getContext("2d");
c.lineWidth=2;c.strokeStyle="#333";c.font="14px Verdana, Geneva, sans-serif";c.textAlign="center";c.beginPath();c.moveTo(xPadding,0);c.lineTo(xPadding,graph.height());c.stroke();c.textAlign ="right";c.textBaseline="middle";
for(var i=iniAxe;i<=maxY;i+=yStep) {c.beginPath();c.fillText(i,xPadding-5,getYPixel(i));c.lineWidth=1;for(var t = xPadding;t<graph.width();t+=4) {if (i!=0){c.strokeStyle="gray";c.font ="8px Verdana, Geneva, sans-serif";c.fillText(".",t,getYPixel(i)-1);}}
c.font = "14px Verdana, Geneva, sans-serif";}
c.strokeStyle="black";c.moveTo(xPadding,getYPixel(iniAxe));c.lineTo(graph.width(),getYPixel(iniAxe));c.stroke();
c.fillStyle="#000000";
for(var i = 0; i < data.values.length; i ++) {
if (iniAxe>0){c.fillText(data.values[i].X, getXPixel(i)+(c.measureText(data.values[i].X).width)/2,graph.height()-yPadding+hFont+5);}else{c.fillText(data.values[i].X, getXPixel(i)+(c.measureText(data.values[i].X).width)/2,getYPixel(iniAxe)+hFont+5);}}
c.save();c.fillStyle="#000000";c.translate(10,10);c.rotate(-Math.PI/2);c.textAlign="right";c.font="14px Verdana, Geneva, sans-serif";c.fillText("Pesos",0,0);c.restore();
drawGraph();}
function drawGraph(){document.getElementById("ardoraGraph").width=document.getElementById("ardoraGraph").width;var c=graph[0].getContext("2d");
c.lineWidth=2;c.fillStyle="#FF0000";c.beginPath();
for(var i=0; i<data.values.length; i++) {c.fillRect(getXPixel1(i), getYPixel(iniAxe),wBar,getYPixel(data.values[i].Y)-getYPixel(iniAxe));} c.stroke();
for(var i=0; i< data.values.length; i ++) {c.beginPath();
c.font = (hFont-2)+"pt sans-serif";c.rect(dPoints[i].x-5, dPoints[i].y-hFont-hFont-2,c.measureText(data.values[i].Y).width+10,hFont+4);c.fillStyle=colorBack;c.globalAlpha=0.5;c.fill();c.globalAlpha=1;c.lineWidth="0.5";c.strokeStyle =colorText;c.stroke();c.beginPath();
if (dPointsState[i]==1){c.fillStyle=colorSele;} else{ c.fillStyle=colorText;} c.fillText(data.values[i].Y,dPoints[i].x, dPoints[i].y-hFont);
c.arc(dPoints[i].x, dPoints[i].y,4,0,Math.PI * 2,true);c.fill();c.fillStyle=colorText;
}
c.lineWidth=2;c.fillStyle="#008000";c.beginPath();
for(var i=0; i<data2.values.length; i++) {c.fillRect(getXPixel2(i), getYPixel(iniAxe),wBar,getYPixel(data2.values[i].Y)-getYPixel(iniAxe));} c.stroke();
for(var i=0; i< data2.values.length; i ++) {c.beginPath();
c.font = (hFont-2)+"pt sans-serif";c.rect(dPoints2[i].x-5, dPoints2[i].y-hFont-hFont-2,c.measureText(data2.values[i].Y).width+10,hFont+4);c.fillStyle=colorBack;c.globalAlpha=0.5;c.fill();c.globalAlpha=1;c.lineWidth="0.5";c.strokeStyle =colorText;c.stroke();c.beginPath();
if (dPoints2State[i]==1){c.fillStyle=colorSele;} else{ c.fillStyle=colorText;} c.fillText(data2.values[i].Y,dPoints2[i].x, dPoints2[i].y-hFont);
c.arc(dPoints2[i].x, dPoints2[i].y,4,0,Math.PI * 2,true);c.fill();c.fillStyle=colorText;
}
c.lineWidth=2;c.fillStyle="#A6CAF0";c.beginPath();
for(var i=0; i<data3.values.length; i++) {c.fillRect(getXPixel3(i), getYPixel(iniAxe),wBar,getYPixel(data3.values[i].Y)-getYPixel(iniAxe));} c.stroke();
for(var i=0; i<data3.values.length; i ++) {c.beginPath();
c.font = (hFont-2)+"pt sans-serif";c.rect(dPoints3[i].x-5, dPoints3[i].y-hFont-hFont-2,c.measureText(data3.values[i].Y).width+10,hFont+4);c.fillStyle=colorBack;c.globalAlpha=0.5;c.fill();c.globalAlpha=1;c.lineWidth="0.5";c.strokeStyle =colorText;c.stroke();c.beginPath();
if (dPoints3State[i]==1){c.fillStyle=colorSele;} else{ c.fillStyle=colorText;} c.fillText(data3.values[i].Y,dPoints3[i].x, dPoints3[i].y-hFont);
c.arc(dPoints3[i].x, dPoints3[i].y,4,0,Math.PI * 2,true);c.fill();c.fillStyle=colorText;
}
}
function getXPixel(val) {return ((graph.width() - xPadding) / data.values.length) * val + (xPadding * 1.5)+5;}
function getXPixel1(val) {return ((graph.width() - xPadding) / data.values.length) * val + (xPadding * 1.5) + 5 - xPadding/2;}
function getXPixel2(val) {return ((graph.width() - xPadding) / data.values.length) * val + (xPadding * 1.5) + 5 - xPadding/2+wBar;}
function getXPixel3(val) {return ((graph.width() - xPadding) / data.values.length) * val + (xPadding * 1.5) + 5 - xPadding/2+wBar+wBar;}
function getYPixel(val) {return (graph.height()-yPadding)-((graph.height()-yPadding)*(val-iniAxe)/(maxY-iniAxe));}
function getYValue(pix) {var yVal =maxY-(pix*(maxY-iniAxe)/(graph.height()-yPadding));return Math.round(yVal/yStepDiv)*yStepDiv;}
function randomSort(){
}
function isCorrect(){
var correct=true;
for (var i=0;i<data.values.length;i++) {if (parseInt(data.values[i].Y)!=parseInt($("#1_"+(i+1).toString()).val())){correct=false;}
else{$("#1_"+(i+1).toString()).prop("disabled","disabled");}
}
for (var i=0;i<data2.values.length;i++) {if (parseInt(data2.values[i].Y)!=parseInt($("#2_"+(i+1).toString()).val())){correct=false;}
else{$("#2_"+(i+1).toString()).prop("disabled","disabled");}
}
for (var i=0;i<data3.values.length;i++) {if (parseInt(data3.values[i].Y)!=parseInt($("#3_"+(i+1).toString()).val())){correct=false;}
else{$("#3_"+(i+1).toString()).prop("disabled","disabled");}
}
if (correct){score=score+scoreInc;successes++;timeAct=timeAct+timeBon;showMessage("Ok");
}else{attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function LineasWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
