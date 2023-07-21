//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFFFF"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades excelente trabajo"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y3J1Y2k"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["UA","Og","VA","Ug","QQ","Uw","TA","QQ","Qw","SQ","Tw","Tg","Og","Og","Og"],["Ug","Og","Og","Rw","QQ","TA","QQ","WA","SQ","QQ","Uw","Og","Og","Og","Og"],["Tw","Og","TQ","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og"],["WQ","Og","RQ","Og","Og","Og","Rw","RQ","Tw","SQ","RA","RQ","Og","Og","Og"],["RQ","Og","Ug","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og"],["Qw","Og","SQ","Og","Og","Og","Og","Og","RQ","Uw","Qw","QQ","TA","QQ","Og"],["Qw","Og","RA","Og","Og","VA","RQ","Qw","VA","Tw","Tg","SQ","Qw","QQ","Uw"],["SQ","Og","SQ","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og","Og"],["Tw","Og","QQ","Og","TQ","Og","Og","Ug","Og","Og","Og","Uw","Og","Og","Og"],["Tg","Og","Tg","Og","QQ","Og","Og","RQ","Og","Og","Og","SQ","Og","Og","Og"],["RQ","Og","Tw","Og","Ug","Og","Og","TA","Og","Og","Og","Uw","Og","Og","Og"],["Uw","Og","Uw","Og","RQ","Og","Og","SQ","Og","Og","Og","TQ","Og","Og","Og"],["Og","Og","Og","Og","QQ","Og","Og","RQ","Og","Og","Og","Tw","Og","Og","Og"],["Og","Og","Og","Og","Uw","Og","Og","Vg","Og","Og","Og","Uw","Og","Og","Og"],["Og","Og","Og","Og","Og","Og","Og","RQ","Og","Og","Og","Og","Og","Og","Og"]];
var x1=[3,4,7,9,6,1,4,5,6,7,8,9,10,11,3,9,10,11,12,13,14,5,8,12];
var y1=[1,2,4,6,7,1,1,1,1,1,1,1,1,1,3,6,6,6,6,6,6,9,9,9];
var x2=[12,11,12,14,15,1,4,5,6,7,8,9,10,11,3,9,10,11,12,13,14,5,8,12];
var y2=[1,2,4,6,7,12,2,2,2,2,2,2,2,2,12,7,7,7,7,7,7,14,15,14];
var imaCW=["","","","","","","","","","","","","","","","","","","","","","","",""];
var audioCW=["","","","","","","","","","","","","","","","","","","","","","","",""];
var defCW=["Movimiento de la tierra que tarda 365 días","Se componen de estrellas, nubes de gas, polvo cósmico y planetas","Representación de la tierra más parecida a la forma real de la tierra","Elemento de los mapas que relaciona el tamaño real de la superficie y el tamaño representado en el mapa.","Placas que se deslizan sobre la superficie de la litosfera","Formas de representar la tierra","","","","","","","","","Son líneas imaginarias que dividen la tierra, paralelos y","","","","","","","Ascenso y descenso periódico del mar","Las montañas, mesetas, llanuras, depresiones y valles forman parte del","Desplazamientos de las placas tectónicas o movimientos bruscos en la corteza terrestre."];
var colNum=15;
var rowNum=15;
colorText="#000000";colorButton="#FF0033";colorBack="#FFFFFF";colorSele="#FFC8C3";goURLNext=true;
fMenssage="'Arial Black', Gadget, sans-serif";fActi="'Arial Black', Gadget, sans-serif";fEnun="'Arial Black', Gadget, sans-serif";
