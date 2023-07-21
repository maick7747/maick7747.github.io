//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var itemSel=1;var timeWrite;var aniPoint = 0;timeWrite = setInterval("paintLinePoint()", 100);
var txtSel; function initAct(){
if ((tiTime) && (tiButtonTime)){paintButtonTime();}for (i = 0; i < answers.length ; i++) {var nameDiv = "inputTxt" + (i + 1).toString();document.getElementById(nameDiv).value="";}if (tiAval){parent.iniciaActividade()}
$(":input").attr("autocomplete","off");$(":input").attr("spellcheck",false);
$(".txtCell_input").attr("tabindex","0");$(".txtCell_input").focus(function(e){if (e.which!=9){var num=parseInt($(this).attr("id").substring(8));itemSel=num;paintLinePoint();}})
$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
}
function randomSort() {   for (i = 0; i < doneB.length; i++) { doneB[i] = window.btoa(i)}}
function paintPoints(){var canvas = document.getElementById("ardoraActCanvasAnim");canvas.style["visibility"]="visible";canvas.width=canvas.width;var contexto=canvas.getContext("2d");
for (i=0;i<doneA.length;i++){contexto.beginPath();contexto.fillStyle = colorButton;contexto.arc(parseInt(panelWords(coorx[i])), parseInt(panelWords(coory[i])),4, 0, 2 * Math.PI, false);
contexto.fill();contexto.strokeStyle=colorSele;contexto.lineWidth=2;var x=parseInt(posX[i]);var y=parseInt(posY[i]);contexto.stroke();
}}
function paintLinePoint(){paintPoints();var canvas = document.getElementById("ardoraActCanvasAnim");var contexto = canvas.getContext("2d");var colorB;var colorL;aniPoint++;
if (aniPoint>3){aniPoint=0};if (aniPoint==0) { colorB=colorSele; colorL=colorBack;}
if (aniPoint==1) { colorB=colorButton; colorL=colorSele;}
if (aniPoint==2) { colorB=colorText; colorL=colorButton;} if (aniPoint==3) { colorB=colorBack; colorL=colorText;}
var orY=parseInt($("#txt"+itemSel).css("top"))+6+5;var orX=parseInt($("#txt"+itemSel).css("left"));var poS=atob(doneB[itemSel-1]);
var deX=parseInt(panelWords(coorx[poS]));var deY=parseInt(panelWords(coory[poS]));contexto.strokeStyle = colorB;contexto.lineCap= "round";contexto.lineWidth = 1;drawDashedLine(contexto, orX, orY, deX ,deY,[10,4]);
contexto.beginPath();contexto.fillStyle = colorB;contexto.arc(deX, deY,4,0,2 * Math.PI, false);contexto.fill();contexto.strokeStyle = colorL;contexto.lineWidth = 2;contexto.stroke();}
function drawDashedLine(context, fromX, fromY, toX, toY, dashPattern) {context.beginPath();var dx = toX - fromX;var dy = toY - fromY;
var angle = Math.atan2(dy, dx);var x = fromX;var y = fromY;context.moveTo(fromX, fromY);var idx = 0;var draw = true;
while (!((dx < 0 ? x <= toX : x >= toX) && (dy < 0 ? y <= toY : y >= toY))) {var dashLength = dashPattern[idx++ % dashPattern.length];var nx = x + (Math.cos(angle) * dashLength);x = dx < 0 ? Math.max(toX, nx) : Math.min(toX, nx);
var ny = y + (Math.sin(angle) * dashLength);y = dy < 0 ? Math.max(toY, ny) : Math.min(toY, ny);
if (draw) {context.lineTo(x, y);} else {context.moveTo(x, y);}draw = !draw;}context.closePath();context.stroke();};
function isCorrect(cell) {score=0;successes=0;var correct=false;for (i=0;i<answers.length;i++) {var isDone=false;if ($("#txt"+String(i+1)).hasClass("txtCellOk")){isDone=true;}
if (isDone){successes++;}else{var nameDiv="inputTxt"+(i+1).toString();var respu=$.trim(document.getElementById(nameDiv).value);var solu=$.trim(answers[atob(doneB[i])]).replace("&#39;", "'");
correct = true;if (tiUD) {respu=respu.toUpperCase();solu=solu.toUpperCase();
al1[atob(doneB[i])] = al1[atob(doneB[i])].toUpperCase();al2[atob(doneB[i])] = al2[atob(doneB[i])].toUpperCase();al3[atob(doneB[i])] = al3[atob(doneB[i])].toUpperCase();al4[atob(doneB[i])] = al4[atob(doneB[i])].toUpperCase();}
if (al1[atob(doneB[i])].length==0) {al1[atob(doneB[i])]=solu;}if (al2[atob(doneB[i])].length==0) {al2[atob(doneB[i])]=solu;}if (al3[atob(doneB[i])].length==0) {al3[atob(doneB[i])]=solu;}if (al4[atob(doneB[i])].length==0) {al4[atob(doneB[i])]=solu;}
if (respu != solu && respu != $.trim(al1[atob(doneB[i])]).replace("&#39;", "'") && respu != $.trim(al2[atob(doneB[i])]).replace("&#39;", "'") && respu != $.trim(al3[atob(doneB[i])]).replace("&#39;", "'") && respu != $.trim(al4[atob(doneB[i])]).replace("&#39;", "'")) {correct = false;};
if (correct) {timeAct=timeAct+timeBon;score=score+scoreInc;successes++;doneA[atob(doneB[i])]="%&%%";} else {score=score-scoreDec;doneA[atob(doneB[i])]="0";itemSel=i+1;}}}
if (successes==answers.length) {clearInterval(timeWrite);paintPoints();$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();} else {attempts++;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){for (i = 0; i < doneA.length; i++) {doneA[i] = answers[i];$("#inputTxt"+String(i+1)).val(doneA[i]);clearInterval(timeInterval);}paintPoints(); }
function paintBack(){}
function panelWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
