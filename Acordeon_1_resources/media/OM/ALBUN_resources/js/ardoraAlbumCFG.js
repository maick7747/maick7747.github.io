//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=70; timeIni=70; timeBon=20;
var successes=0; successesMax=6; attempts=0; attemptsMax=2;
var score=0; scoreMax=3; scoreInc=3; scoreDec=2
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="¡A luchar con determinación!";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#C13020"; colorButton="#BCB336"; colorText="#051216"; colorSele="#A8D02D";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Arial Black', Gadget, sans-serif";
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=5; messageOk="Estas listo para convertirte en el héroe que salvará el mundo!"; messageTime="¡El tiempo se agoto, pero no te rindas! ¡Vuelve a intentarlo y asegúrate de que los malos no prevalezcan!"; messageError="\"No importa si fallas en un intento, aun esta batalla no esta perdida\""; messageAttempts="\"¡No te preocupes! Siempre hay una nueva oportunidad para volver a intentarlo. ¡Sigue perseverando y no dejes que los malos ganen!\""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_self"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var imaSel=0; texSel=0;
var board=[["ALBUN_resources/media/1.jpg","ALBUN_resources/media/2.jpg","ALBUN_resources/media/3.jpg","0"],["ALBUN_resources/media/4.jpg","ALBUN_resources/media/5.png","ALBUN_resources/media/6.jpg","0"],["0","0","0","0"],["0","0","0","0"]]; var balt=[["","","","0"],["","","","0"],["0","0","0","0"],["0","0","0","0"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[]; answers=[["Superman","Batman","Green Arrow","0"],["Robin","Catwoman","Flash","0"],["0","0","0","0"],["0","0","0","0"]]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var alt1=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var alt2=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var alt3=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var alt4=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var alt5=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var wordsGame="QUxCVU4="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
