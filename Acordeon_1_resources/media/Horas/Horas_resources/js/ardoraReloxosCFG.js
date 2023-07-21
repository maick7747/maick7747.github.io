//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=10; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";var messageNext="Siguiente";
var timeOnMessage=5; messageOk="Lo hicieron muy bien"; messageTime=""; messageError="Intentelo nuevamente"; messageErrorG="Intentelo nuevamente"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#FF00FF"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var tiAudio=false;var wordsGame="SG9yYXM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var d=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];var indexE=0;var rad=300;var c=[20,40,20,25,35,55,0,15,10,5];var a=["Marca las doce con veinte minutos","Marca las diez con veinte minutos","Marca las seis con veinte minutos","Marca las trece horas con veinticinco minutos","Marca las nueve y treinta y cinco minutos","Marca las ocho con cincuenta y cinco minutos","Marca las veintiun horas","Marca las cinco y quince minutos","Marca las tres y diez minutos","Marca las cuatro y cinco minutos"];var b=[12,10,6,13,9,8,21,5,3,4];
var canvasRB; var canvasR; var contextRB; var contextR;var canvasDB; var canvasD; var contextDB; var contextD;
var posM=0;var posH=0;var posMD=0;var posHD=0;
var colorM="#008000";var colorH="#FF0000";var rad=300;
var mp3S=["","","","","","","","","",""];var ogg3S=["","","","","","","","","",""];
colorText="#000000";colorButton="#FF0033";colorBack="#FFFFFF";colorSele="#FFC8C3";goURLNext=true;
fMenssage="'Arial Black', Gadget, sans-serif";fActi="'Arial Black', Gadget, sans-serif";fEnun="'Arial Black', Gadget, sans-serif";
