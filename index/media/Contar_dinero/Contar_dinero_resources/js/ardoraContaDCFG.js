//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES LO LOGRASTE"; messageTime="SE AGOTÓ TU TIEMPO"; messageError=""; messageErrorG=""; messageAttempts="VUELVE A INTENTARLO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q29udGFyX2RpbmVybw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var m=["cns000001","cns000005","cns000010","cns000020","cns000050","cns000100","cns000200","cns000500","cns001000","cns002000","cns005000","cns010000","cns020000"];
var values=[10,50,100,200,500,1000,2000,5000,10000,20000,50000,100000,200000];
var tiC=[10,10,10,10,10,10,10,10,10,10,10,10,10];
var imaH=[0,0,0,0,0,0,0];
var totEuros=0;var totCent=0;var nameEuro="€";var nameCent="Cént.";
var te=["Diez soles","Cinco soles","Dos soles","Tres soles con cincuenta centimos","Siete soloes con treinta centimos","Un sol","Cuatro soles"];var im=["","","","","","",""];var a1=["","","","","","",""];var imalt=["","","","","","",""];
var indexGame=0;var totCentFixed=0; var totEurosFixed=0; var avaiCoins=[];var correct=[];
var ce=[00,00,00,50,30,00,00];var eu=[10000,5000,2000,3000,7000,1000,4000];var ram_G=[-1,-1,-1,-1,-1,-1,-1];
