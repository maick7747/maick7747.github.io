//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
$("input:text").keyup(function(){if ($(this).val().length>0){if ($(this).val().localeCompare("-")!=0){
if (!$.isNumeric($(this).val())){$(this).val("0");}}}});
if ($(".sol").length !=0) {var color2="#DFEBFF";var color1=colorBack;
$(".sol").css("background","-webkit-radial-gradient(center, ellipse, "+color1+","+color2+")");
$(".sol").css("background","-moz-radial-gradient(center,ellipse, "+color1+", "+color2+")");
$(".sol").css("background","-ms-radial-gradient(center, ellipse, "+color1+", "+color2+")");
$(".sol").css("background","-o-radial-gradient(center, ellipse, "+color1+", "+color2+")");
$(".sol").css("background","radial-gradient(ellipse at center, "+color1+", "+color2+")");
$(".sol").css("filter","progid:DXImageTransform.Microsoft.gradient(startColorstr='"+color1+"', endColorstr='"+color2+"')");}
}
function randomSort(){
}
function isCorrect(){
var matrix = [];var matrix2=[];var correct=true;for (var i=0;i<numCol;i++){matrix[i]=[];matrix2[i]=[];for (var j=0;j<numCol;j++){matrix[i][j] = undefined;matrix2[i][j] = undefined;}}
for (i=0;i<numCol;i++){$("#tableNG tr").eq(i).each(function (){$(this).find("td").each(function (){if (this.id.substring(0, 1).localeCompare("c")==0){var n = this.id.substring(1, 10).split("_");matrix[parseInt(n[0])][parseInt(n[1])] = document.getElementById("ic" + this.id.substring(1, 10)).value;
} else{if (this.id.substring(0, 3).localeCompare("sel")==0){var n=this.id.substring(3, 10).split("_");matrix[parseInt(n[0])][parseInt(n[1])] = document.getElementById("selc" + this.id.substring(3, 10)).value;
} else {if (this.id.substring(0,1).localeCompare("s")==0){var n=this.id.substring(1, 10).split("_");matrix[parseInt(n[0])][parseInt(n[1])] = $(this).text();} else {
if (this.id.substring(0, 1).localeCompare("r") == 0) {var n=this.id.substring(1, 10).split("_");matrix[parseInt(n[0])][parseInt(n[1])] = $(this).text();
}else{if (this.id.substring(0, 1).localeCompare("b")==0){var n = this.id.substring(1, 10).split("_");matrix[parseInt(n[0])][parseInt(n[1])] = "#";
}}}}}})})}
for (var i=0;i<numCol;i++) {for (var j=0;j<numCol;j++) {if (!matrix[i][j]) {correct=false;}else{matrix2[i][j]=matrix[i][j];}}}
if (correct) {for (i=0;i<numCol;i+=2) {for (j=0;j<numCol-1;j++) {if (matrix[j][i].localeCompare("^") == 0) {matrix[j][i] = "*";
if (parseInt(matrix[j+1][i]) > 1) {if (parseInt(matrix[j-1][i])==0) {matrix[j+1][i]="0";matrix[j-1][i]="0";}else{var matrixRes="";for (z = 0; z < parseInt(matrix[j + 1][i]); z++) {matrixRes = matrixRes + matrix[j - 1][i] + "*";}matrix[j + 1][i] = matrixRes + "1";matrix[j - 1][i] = "1";}}
else{if (parseInt(matrix[j+1][i])==0) {matrix[j+1][i]="1";matrix[j-1][i]="1";}if (parseInt(matrix[j+1][i])<0){
var matrixRes="";for (z=0;z<parseInt(matrix[j+1][i])*(-1);z++) {matrixRes=matrixRes+"1/"+matrix[j-1][i]+"*";}matrix[j+1][i]=matrixRes+"1";matrix[j-1][i]="1";}}}}}
for (i=0;i<numCol;i+=2) {var resF="";for (j=0;j<numCol-1;j++) {resF=resF+matrix[j][i];}if (eval(resF) != parseInt(matrix[numCol - 1][i])) {correct=false;}}
for (var i=0; i<numCol;i++) {for (var j = 0; j<numCol;j++) {matrix[i][j] = matrix2[i][j];}}
for (i=0; i<numCol;i+=2) {for (j=0; j<numCol-1;j++) {if (matrix[i][j].localeCompare("^")==0) {matrix[i][j]="*";
if (parseInt(matrix[i][j+1])>1) {if (parseInt(matrix[i][j-1])==0) {matrix[i][j+1]="0";matrix[i][j-1]="0";}else{var matrixRes="";for (z=0; z<parseInt(matrix[i][j+1]);z++) {matrixRes=matrixRes+matrix[i][j-1]+"*";}matrix[i][j+1]=matrixRes+"1";matrix[i][j-1]="1";}}
else{if (parseInt(matrix[i][j+1])==0) {matrix[i][j+1]="1";matrix[i][j-1]="1";}if (parseInt(matrix[i][j+1])<0) {
var matrixRes="";for (z=0; z<parseInt(matrix[i][j+1])*(-1); z++) {matrixRes=matrixRes+"1/"+matrix[i][j-1]+"*";}matrix[i][j+1]=matrixRes+"1";matrix[i][j-1]="1";}}}}}
for (i=0;i<numCol;i+=2) {var resC="";for (j=0;j<numCol-1;j++) {resC=resC+matrix[i][j];}if (eval(resC)!=parseInt(matrix[i][numCol-1])){correct=false;}}
if (correct){score=score+scoreInc;timeAct=timeAct+timeBon;successes++;showMessage("Ok");} else {attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}}
else {attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts>attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function numGraWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
