//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var isPlayEnu=false;
function initAct(){
paintBoard();
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){calcCan();paintButtonTime();}
}
function paintQuestion() {$("#ardoraQuest").css("opacity",0);var newHtml = "";if (img_G[ram_G[indexGame]]){newHtml=newHtml+"<img src='"+dirMedia+img_G[ram_G[indexGame]]+ "'/>"}
newHtml=newHtml+"<p>";newHtml = newHtml+clasiWords(txt_G[ram_G[indexGame]])+"</p>";
$("#ardoraQuest").html(newHtml);
if (mp3_G[ram_G[indexGame]] || ogg_G[ram_G[indexGame]]){silenceAll();document.getElementById("audioQuest"+ram_G[indexGame].toString()).play(); tiAudio=true;
$("#ardoraQuest").css("cursor","pointer");$("#ardoraQuest").click(function () {silenceAll();
document.getElementById("audioQuest"+ram_G[indexGame].toString()).play();
tiAudio=true;});}else{$("#ardoraQuest").css("cursor","default");}
$("#ardoraQuest").animate({opacity: 1}, {queue: true,duration: 3000,complete: function () {}});
calcCan();}
function silenceAll(){if (tiAudio){$("audio").each(function(ind, e) {$(e)[0].pause();$(e)[0].currentTime=0;});tiAudio=false;}}
function paintBoard(){var newHtml = "<ul>";for (i = 0; i < txtGr.length; i++) {newHtml=newHtml+"<li id='cellG" + i.toString() + "' class='bGame'>";
newHtml=newHtml+"<div class='backbGame'><p>"+txtGr[i]+"</p></div>";newHtml=newHtml+"</li>";}newHtml = newHtml + "</ul>";
$("#ardoraBoard").html(newHtml);$(".bGame").css("border-color", colorButton);for (i=0; i<txtGr.length;i++) {
if (imgGr[i]){var bckIma = "url('"+dirMedia+imgGr[i]+"')";$("#cellG" + i.toString()).css("background-image", bckIma);}
$("#cellG" + i.toString()).click(function () {
$(this).css("box-shadow","inset 4px 4px 4px rgba(50,50,50,0.5)");
$(this).css("border-color", colorSele);
$(this).css("border-style", "solid");
var idNum=this.id.substring(this.id.length-1,this.id.length);isCorrect(idNum);});}
for (j=0; j<txtGr.length;j++) {if (mp3Gr[j] || oggGr[j]){$("#cellG" + j.toString()).mouseenter(function (){
silenceAll();idAudio="audio"+$(this).attr("id").replace("cellG","");document.getElementById(idAudio).play(); tiAudio=true;});}}
$(".bGame").mouseenter(function () {$(this).css("border-color", colorSele);$(this).css("border-style", "solid");});
$(".bGame").mouseleave(function () {$(this).css("border-color", colorButton);
$(this).css("box-shadow","4px 4px 4px rgba(50,50,50,0.5)");
$(this).css({borderColor: colorButton,borderStyle: "dashed"});});
$(".backbGame").css("background-color", colorBack);$(".backbGame p").css("color", colorText);paintQuestion();}
function randomSort() {for (i=0;i<ram_G.length;i++) {var ind=Math.floor(Math.random()*ram_G.length);
while (ram_G[ind]>-1){ind++;if (ind>=ram_G.length){ind=0;}}ram_G[ind]=i;}}
function calcCan(){var canWidth=$("#ardoraAct").css("width").replace("px", "");
var canHeight=$("#ardoraAct").css("height").replace("px", "");$("#ardoraActCanvas").attr({"width": canWidth,"height":canHeight});}
function isCorrect(num) {calcCan();if (parseInt(clasiWords(n_G[ram_G[indexGame]]))==parseInt(num)+1){score=score+scoreInc;timeAct=timeAct+timeBon;
successes++;indexGame++;if (indexGame >=ram_G.length) {showMessage("Ok");} else {paintBoard();}}
else{attempts++;score=score-scoreDec;if (e_G[ram_G[indexGame]]){messageError=e_G[ram_G[indexGame]];}
else{messageError=messageErrorG;}if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function clasiWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
