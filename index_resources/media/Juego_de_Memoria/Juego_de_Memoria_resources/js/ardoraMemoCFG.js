//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360;timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=2;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#DAC73D"; colorButton="#6DAED1"; colorText="#6D47AD"; colorSele="#47DABC";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Palatino Linotype', 'Book Antiqua', Palatino, serif";
var fActi="'Palatino Linotype', 'Book Antiqua', Palatino, serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitación, ganaste"; messageTime="Su tiempo a acabado"; messageError=""; messageErrorG=""; messageAttempts="Sus intetos se acabaron"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="SnVlZ29fZGVfTWVtb3JpYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["Superman","Mujer Maravilla","Linterna Verde","Flash","Batman","","",""];im1=["MQBQXTIYGRAR7N2ZQCHSDQG6PA.jpg","locornoqloca_w4jf.jpg","cdaaafbd805109157cb93a2ccfef2390--green-lantern-corps-green-lanterns.jpg","3226157.jpg","png-clipart-batman-flash-stuffed-animals-cuddly-toys-superman-plush-batman-toy-comics-superhero.png","","",""];mp31=["","","","","","","",""];alt1=["","","","","","","",""];
var wo2=["","Superman","","Mujer Maravilla","Linterna Verde","Flash","Batman",""];im2=["","","","","","","",""];mp32=["","","","","","","",""];alt2=["","","","","","","",""];
var cols=5; rows=2; items=5; itp=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="]; pos=["MjE=","MjM=","MjQ=","MjU=","MjY=","LTE=","LTE=","LTE="];
var boardGame=[["","","","",""],["","","","",""]]; dirMedia="Juego_de_Memoria_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
