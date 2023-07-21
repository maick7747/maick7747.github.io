//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
calcMaxWidth();paintbGame();
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
}
function calcMaxWidth() {$("#ardoraAct").css("width", actMaxWidth + "px");$("#ardoraAct").css("height",actMaxHeight + "px");
var canWidth = $("#ardoraAct").css("width").replace("px", "");var canHeight = $("#ardoraAct").css("height").replace("px", "");
$("#ardoraActCanvas").attr({"width": (parseInt(canWidth) + 20).toString(),"height": canHeight});}
function paintbGame() {var iW = [];for (i = 0; i < wordsG.length; i++) {iW.push("");}for (i = 0; i < iW.length; i++) {
var ind = Math.floor(Math.random() * iW.length);while (iW[ind].localeCompare("") != 0) {ind++;if (ind == iW.length) {ind = 0;}}
iW[ind]=$.trim(oimaWords(wordsG[i]));var pos=iW[ind].indexOf(".");iW[ind]=iW[ind].substring(0,pos+4);}
var newHtml = "<ul id='sortable'>";for (i = 0; i < iW.length; i++) {newHtml=newHtml+"<li id='cellG" + i.toString() + "' class='bGame'><img src='"+dirMedia+iW[i]+"'/></li>";
}newHtml = newHtml + "</ul>";$("#ardoraActSort").html(newHtml);$("#sortable").sortable({revert: true});$("ul, li").disableSelection();
$(".bGame").mouseenter(function () {$(this).css({background: colorSele,color: colorText,borderColor: colorButton});
var color2 = colorSele;var color1 = colorBack;
$(this).css("background", "-webkit-radial-gradient(center, ellipse, " + color1 + "," + color2 + ")");
$(this).css("background", "-moz-radial-gradient(center,ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "-ms-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "-o-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "radial-gradient(ellipse at center, " + color1 + ", " + color2 + ")");
$(this).css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr='"+color1+"', endColorstr='"+color2+"')");
});
$(".bGame").mouseleave(function () {$(this).css({background: colorButton,color: colorBack,borderColor: colorBack});});}
function randomSort() {var iW=[];for (i=0; i < words.length; i++){iW.push(words[i]);wordsG.push("");}for (i=0; i<iW.length; i++) {
var ind = Math.floor(Math.random()*iW.length);while (wordsG[ind].localeCompare("") != 0) {ind++;if (ind==iW.length){ind = 0;}}wordsG[ind]=iW[i];}}
function isCorrect(){
successes=0;var correct = true;var i=0;$("ul li").each(function (ind, e) {var eId="#"+$(e).attr("id")+" img";var fileI=$(eId).attr("src").replace(dirMedia,"");
if (fileI.localeCompare(oimaWords(words[i]))!=0){correct=false;}else{successes++;}i++;});if (correct) {score=score+scoreInc;timeAct=timeAct+timeBon;showMessage("Ok");} else {
attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {
showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
var iW = [];for (i = 0; i < words.length; i++) {iW.push($.trim(oimaWords(words[i])));var pos = iW[i].indexOf(".");iW[i] = iW[i].substring(0, pos + 4);
}var i = 0;$("ul li").each(function (ind, e) {$(e).html("<img src='" + dirMedia + iW[i] + "'/>");i++;});
}
function paintBack(){}
function oimaWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
