//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=20;
var successes=0; successesMax=25; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=4; scoreDec=2
var typeGame=1;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#E6D831"; colorButton="#6DAED1"; colorText="#6D47AD"; colorSele="#F1306A";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Palatino Linotype', 'Book Antiqua', Palatino, serif";
var fActi="";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Usted lo a logrado, felicidades"; messageTime="El tiempo se le a terminado, puede volver a imtentarlo"; messageError="Que lastima, acaba de perder"; messageAttempts="Sus intentos se acabaron"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"]]; var imaSel=0; texSel=0;
var whiteCell="Puzle_Superman_resources/media/0.jpg";
var original="Puzle_Superman_resources/media/original.jpg";
var board=[["Puzle_Superman_resources/media/cGllY2UxXzE=.jpg","Puzle_Superman_resources/media/cGllY2UyXzE=.jpg","Puzle_Superman_resources/media/cGllY2UzXzE=.jpg","Puzle_Superman_resources/media/cGllY2U0XzE=.jpg","Puzle_Superman_resources/media/cGllY2U1XzE=.jpg"],["Puzle_Superman_resources/media/cGllY2UxXzI=.jpg","Puzle_Superman_resources/media/cGllY2UyXzI=.jpg","Puzle_Superman_resources/media/cGllY2UzXzI=.jpg","Puzle_Superman_resources/media/cGllY2U0XzI=.jpg","Puzle_Superman_resources/media/cGllY2U1XzI=.jpg"],["Puzle_Superman_resources/media/cGllY2UxXzM=.jpg","Puzle_Superman_resources/media/cGllY2UyXzM=.jpg","Puzle_Superman_resources/media/cGllY2UzXzM=.jpg","Puzle_Superman_resources/media/cGllY2U0XzM=.jpg","Puzle_Superman_resources/media/cGllY2U1XzM=.jpg"],["Puzle_Superman_resources/media/cGllY2UxXzQ=.jpg","Puzle_Superman_resources/media/cGllY2UyXzQ=.jpg","Puzle_Superman_resources/media/cGllY2UzXzQ=.jpg","Puzle_Superman_resources/media/cGllY2U0XzQ=.jpg","Puzle_Superman_resources/media/cGllY2U1XzQ=.jpg"],["Puzle_Superman_resources/media/cGllY2UxXzU=.jpg","Puzle_Superman_resources/media/cGllY2UyXzU=.jpg","Puzle_Superman_resources/media/cGllY2UzXzU=.jpg","Puzle_Superman_resources/media/cGllY2U0XzU=.jpg","Puzle_Superman_resources/media/cGllY2U1XzU=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UHV6bGVfU3VwZXJtYW4="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
