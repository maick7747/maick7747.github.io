//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=2;
var score=0; scoreMax=24; scoreInc=3; scoreDec=1
var typeGame=2;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FBD1BD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="ERES LOS MÁXIMO SIGUE ASÍ "; messageTime="QUE PENA, NO SIRVES PARA ESTO"; messageError="NO TE DISTRIGAS"; messageAttempts="NI TU EX TE ESPERA TANTO "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0"];
var doneB=["-1","-1","-1","-1","-1","-1","-1","-1"];
var posX=[181,10,-5,142,261,393,445,477]; var posY=[235,231,81,26,68,226,45,163];
var coorx=["MjM2", "MTU1", "MTc1", "MjY5", "MzI4", "Mzk4", "NDQ4", "NDcy"]; var coory=["MTc2", "MTY5", "MTYz", "MTY1", "MTU3", "MTY2", "MTUx", "MTYz"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", ""]; answers=["Tierra", "Mercurio", "Venus", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UGFuZWxfR3JhZmljbw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=true;
