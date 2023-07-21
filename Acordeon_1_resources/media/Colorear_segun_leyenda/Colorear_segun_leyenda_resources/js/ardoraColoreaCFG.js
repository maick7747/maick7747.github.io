//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#3DDA9F"; colorButton="#6DAED1"; colorText="#231017"; colorSele="#F1306A";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Palatino Linotype', 'Book Antiqua', Palatino, serif";
var fActi="'Palatino Linotype', 'Book Antiqua', Palatino, serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=5; messageOk="Felicidades lo a logrado"; messageTime="Que lastima, se le hagoto el tiempo"; messageError="Ese no es el color"; messageErrorG="Ese no es el color"; messageAttempts="Sus intentos se agotaron"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q29sb3JlYXJfc2VndW5fbGV5ZW5kYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[];
var c=[];var x=[];var y=[];var t=[];
var cM=["#9F0004","#093C62","#CE0005","#DEC61D","#ECB89F","#E0B594","#D3AC92","#A2EEC4","#E0B91B"];
var tM=["CAPA","TRAJE","LOGO","LOGO","ROSTRO","CUELLO","MANO","CIELO","CINTURON"];
var indexColor=0;
