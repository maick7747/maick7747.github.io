//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
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
var timeOnMessage=5; messageOk="Excelente"; messageTime=""; messageError="Intentalo nuevamente"; messageErrorG="Intentalo nuevamente"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var uniVal=10;
var a=["NDA","MzA","NTA","MTA","MjA"];
var wordsGame="R3JhZmljYWNpcmN1bGFy"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var canvas = document.getElementById("ardoraCanvasPie");var context = canvas.getContext("2d");
var radius=240;var arcs=[];
var arcCenterX=[250,250,250,250,250,250,250,250,250,250,250,250,250,250,250];var arcCenterY=[250,250,250,250,250,250,250,250,250,250,250,250,250,250,250];
var arcStrokeStyles=[colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText];var arcFillStyles=[colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack];
var arcIni=[0,0.418879020478639,0.837758040957278,1.25663706143592,1.67551608191456,2.0943951023932,2.51327412287183,2.93215314335047,3.35103216382911,3.76991118430775,4.18879020478639,4.60766922526503,5.02654824574367,5.44542726622231,5.86430628670095];var arcEnd=[0.418879020478639,0.837758040957278,1.25663706143592,1.67551608191456,2.0943951023932,2.51327412287183,2.93215314335047,3.35103216382911,3.76991118430775,4.18879020478639,4.60766922526503,5.02654824574367,5.44542726622231,5.86430628670095,6.28318530717959];
var indexColor=0;var colors=["#FFFF00","#3399FF","#FF9933","#78C85A","#97A5FF"];
colorText="#000000";colorButton="#FF0033";colorBack="#FFFFFF";colorSele="#FFC8C3";goURLNext=true;
fMenssage="'Arial Black', Gadget, sans-serif";fActi="'Arial Black', Gadget, sans-serif";fEnun="'Arial Black', Gadget, sans-serif";
