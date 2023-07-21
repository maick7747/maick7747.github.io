//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
calcMaxWidth();paintQuest();paintbGame();
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
$(".bGame").css({background: colorButton,color: colorBack,borderColor: colorBack});}
function calcMaxWidth() {$("#ardoraAct").css("width", actMaxWidth + "px");$("#ardoraAct").css("height",actMaxHeight + "px");
var canWidth = $("#ardoraAct").css("width").replace("px", "");var canHeight = $("#ardoraAct").css("height").replace("px", "");
$("#ardoraActCanvas").attr({"width": (parseInt(canWidth) + 20).toString(),"height": canHeight});}
function paintQuest() {var vHtml="";$("#ardoraQuest").html("");if (audioW[indexG].localeCompare("") == 0) {$("#ardoraQuest").html("<p>" + questionW[indexG] + "</p>");
} else {$("#ardoraQuest").html(vHtml+"<img alt='Play' id='playSound' class='imaLeft' src='Ordenar_frases_M_resources/media/' alt='Sound' align='left'>"+ "<p>" + questionW[indexG] + "</p>");
$("#playSound").attr("tabindex","0");$("#playSound").keydown(function(e) {if (e.which!=9){var au="audio"+audioW[indexG];document.getElementById(au).play();}});
$("#playSound").bind("click", function (e) {var au = "audio" + audioW[indexG];document.getElementById(au).play();});}
profG = parseInt($("#ardoraQuest").css("height").replace("px", ""));
$("#ardoraImage").html("");if (imageW[indexG].localeCompare("") != 0) {$("#ardoraImage").html("<img alt='"+alterW[indexG]+"' src='" + dirMedia + imageW[indexG] + "'/>");}}
function paintbGame() {var iW=[];var iWS=[];var oW="";for (i = 0; i < $.trim(ordenaWords(wordsG[indexG])).length; i++) {
if (ordenaWords(wordsG[indexG]).substr(i,1).localeCompare(" ") != 0) {oW=oW+ordenaWords(wordsG[indexG]).substr(i,1);}else{
if ($.trim(oW).length>0){iWS.push($.trim(oW));iW.push("");oW="";}}}if ($.trim(oW).length>0){iWS.push($.trim(oW));iW.push("");}
for (i = 0; i < iW.length; i++) {var ind=Math.floor(Math.random() * iW.length);
while (iW[ind].localeCompare("") != 0) {ind++;if (ind == iW.length) {ind = 0;}}iW[ind] = iWS[i];}
var newHtml = "<ul id='sortable'>";for (i=0; i<iW.length; i++) {newHtml = newHtml + "<li tabindex='0' id='cellG" + i.toString() + "' class='bGame'><p>" + iW[i] + "</p></li>";
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
$(".bGame").mouseleave(function () {$(this).css({background: colorButton,color: colorBack,borderColor: colorBack});});
$(".bGame").focus(function() {$(this).css({background: colorSele,color: colorText,borderColor: colorButton});var color2=colorSele;var color1=colorBack;$(this).css("background", "-webkit-radial-gradient(center, ellipse, " + color1 + "," + color2 + ")");
$(this).css("background", "-moz-radial-gradient(center,ellipse, " + color1 + ", " + color2 + ")");$(this).css("background", "-ms-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");$(this).css("background", "-o-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "radial-gradient(ellipse at center, " + color1 + ", " + color2 + ")");$(this).css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + color1 + "', endColorstr='" + color2 + "')");});
$(".bGame").blur(function() {$(this).css({background: colorButton,color: colorBack,borderColor: colorBack});});
$(".bGame").keydown(function(event){if(event.which == 37 || event.which == 38) {$(this).insertBefore($(this).prev());}
if(event.which == 39 || event.which == 40) {$(this).insertAfter($(this).next());} if (event.which == 84 || event.which == 33) {$(this).parent().prepend($(this));}
if (event.which == 66 || event.which == 34) {$(this).parent().append($(this));} if(event.which == 82) {var p = $(this).parent();p.children().each(function(){p.prepend($(this))})}
if(event.which == 83) {var p = $(this).parent();p.children().each(function(){if(Math.random()<.5){p.prepend($(this));} else {p.append($(this));}})};$(this).focus();});
$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
}
function randomSort() {var iW=[];var iWc=[];for (i = 0; i < words.length; i++) {if (words[i].localeCompare("") != 0) {iW.push(words[i]);iWc.push(c[i]);wordsG.push("");cG.push(0);imageW.push("");questionW.push("");audioW.push("");alterW.push("");}}
for (i = 0; i < iW.length; i++) {var ind=Math.floor(Math.random()*iW.length);while (wordsG[ind].localeCompare("") != 0) {ind++;if (ind == iW.length) {ind=0;}}
wordsG[ind] = iW[i];cG[ind]=iWc[i];imageW[ind] = imaW[i];questionW[ind] = queW[i];audioW[ind] = auW[i];alterW[ind]=altW[i];}}
function isCorrect(){
var ans = "";$("ul li").each(function (ind, e) {ans=ans+$(e).text();});var correct=false;var aW=cleartags(ordenaWords(wordsG[indexG]).substring(0,cG[indexG]).replace(/\s/g, ""));
if (aW.localeCompare(ans)==0){
score = score + scoreInc;timeAct = timeAct + timeBon;successes++;correct = true;}
if (correct){indexG++;if (indexG == wordsG.length) {$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();} else {
paintQuest();paintbGame();$(".bGame").css("backgroundColor", colorButton);$(".bGame").css("color", colorBack);
}} else {
attempts++;score = score - scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
var iWS = [];var oW = "";for (i = 0; i < $.trim(ordenaWords(wordsG[indexG])).length; i++){if (ordenaWords(wordsG[indexG]).substr(i, 1).localeCompare(" ") != 0) {
oW = oW + ordenaWords(wordsG[indexG]).substr(i, 1);}else{if ($.trim(oW).length > 0) {iWS.push($.trim(oW));oW = "";}}}
if ($.trim(oW).length > 0) {iWS.push($.trim(oW));}var i=0;$("ul li").each(function (ind, e) {$(e).html("<p>"+iWS[i]+ "</p>");i++;});
}
function cleartags(str) {while (str.indexOf("<sup>")>-1){str = str.replace("<sup>", "");}while (str.indexOf("</sup>")>-1){str = str.replace("</sup>", "");}while (str.indexOf("<sub>")>-1){str = str.replace("<sub>", "");}while (str.indexOf("</sub>")>-1){str = str.replace("</sub>", "");}
while (str.indexOf("<b>")>-1){str = str.replace("<b>", "");}while (str.indexOf("</b>")>-1){str = str.replace("</b>", "");}while (str.indexOf("<strong>")>-1){str = str.replace("<strong>", "");}while (str.indexOf("</strong>")>-1){str = str.replace("</strong>", "");}
while (str.indexOf("<i>")>-1){str = str.replace("<i>", "");}while (str.indexOf("</i>")>-1){str = str.replace("</i>", "");}while (str.indexOf("<em>")>-1){str = str.replace("<em>", "");}while (str.indexOf("</em>")>-1){str = str.replace("</em>", "");}
while (str.indexOf("<small>")>-1){str = str.replace("<small>", "");}while (str.indexOf("</small>")>-1){str = str.replace("</small>", "");}while (str.indexOf("<mark>")>-1){str = str.replace("<mark>", "");}while (str.indexOf("</mark>")>-1){str = str.replace("</mark>", "");}
while (str.indexOf("<del>")>-1){str = str.replace("<del>", "");}while (str.indexOf("</del>")>-1){str = str.replace("</del>", "");}while (str.indexOf("<ins>")>-1){str = str.replace("<ins>", "");}while (str.indexOf("</ins>")>-1){str = str.replace("</ins>", "");}return str;}
function paintBack(){}
function ordenaWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
