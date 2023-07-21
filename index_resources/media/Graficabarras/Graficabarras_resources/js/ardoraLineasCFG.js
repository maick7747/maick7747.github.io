//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
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
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bien hecho"; messageTime=""; messageError="Intentalo nuevamente"; messageErrorG="Intentalo nuevamente"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="R3JhZmljYWJhcnJhcw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var graph;var axes;var dPoints=[];var dPointsState=[];var stateMouse=-1;var mouseX=0;var mouseY=0;
var yStep=50;var xPadding=0;var yPadding = 30;var hFont=14;var iniAxe=0;
var yStepDiv=10;
var maxY=500;
var data={ values:[{X:"Enero",Y:230},{X:"Febrero",Y:450},{X:"Marzo",Y:300},{X:"Abril",Y:350},{X:"Mayo",Y:150},{X:"Junio",Y:150},{X:"Julio",Y:130},{X:"Agosto",Y:140},{X:"Septiembre",Y:450},]};
var data2={ values:[{X:"Enero",Y:270},{X:"Febrero",Y:450},{X:"Marzo",Y:150},{X:"Abril",Y:120},{X:"Mayo",Y:200},{X:"Junio",Y:130},{X:"Julio",Y:110},{X:"Agosto",Y:100},{X:"Septiembre",Y:450},]};
var dPoints2=[];var dPoints2State=[];
var data3={ values:[{X:"Enero",Y:450},{X:"Febrero",Y:450},{X:"Marzo",Y:450},{X:"Abril",Y:450},{X:"Mayo",Y:450},{X:"Junio",Y:200},{X:"Julio",Y:130},{X:"Agosto",Y:140},{X:"Septiembre",Y:450},]};
var dPoints3=[];var dPoints3State=[];
var wBar=0;var nBar=3;
var selectedG=0;
colorText="#000000";colorButton="#FF0033";colorBack="#FFFFFF";colorSele="#FFC8C3";goURLNext=true;
fMenssage="'Arial Black', Gadget, sans-serif";fActi="'Arial Black', Gadget, sans-serif";fEnun="'Arial Black', Gadget, sans-serif";
