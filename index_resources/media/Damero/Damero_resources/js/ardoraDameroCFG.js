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
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#91B00F"; colorButton="#A3390C"; colorText="#30475A"; colorSele="#F1306A";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Palatino Linotype', 'Book Antiqua', Palatino, serif";
var fActi="'Palatino Linotype', 'Book Antiqua', Palatino, serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="GANASTE MIS FELICITACIONES"; messageTime="EL TIEMPO SE LE A HAGOTADO"; messageError="A FALLADO, INTENTE OTRA VEZ"; messageErrorG="A FALLADO, INTENTE OTRA VEZ"; messageAttempts="YA NO CUENTA CON MAS INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var xCell=["Uw==","QQ==","TA==","Vg==","QQ==","Ug==","IA==","RQ==","TA==","IA==","TQ==","VQ==","Tg==","RA==","Tw==","IA==","RQ==","Uw==","VA==","QQ==","IA==","RQ==","Tg==","IA==","VA==","VQ==","Uw==","IA==","TQ==","QQ==","Tg==","Tw==","Uw==","IA==","Tg==","Tw==","IA==","RA==","RQ==","Sg==","RQ==","Uw==","IA==","RA==","RQ==","IA==","TA==","VQ==","Qw==","SA==","QQ==","Ug==","IA==","Tg==","SQ==","IA==","Qg==","Ug==","SQ==","TA==","TA==","QQ==","Ug=="];
var que=["Es conocido como el hombre de hacero","Lucha contra el crimen, inteligente, habilidades de combate.","Trepa paredes, reflejos rápidos, dispara telarañas.","Amazona, fuerza sobrehumana, lazo de la verdad.","Super soldado, fuerza mejorada, escudo indestructible.","Inventor genio, armadura tecnológica, vuelo.","Corre a velocidades supersónicas, viaja en el tiempo."];
var yCell=["U1VQRVJNQU4=","QkFUTUFO","SE9NQlJFIEFSQcORQQ==","TVVKRVIgTUFSQVZJTExB","Q0FQSVRBTiBBTUVSSUNB","SVJPTiBNQU4=","RkxBU0g="];
var pos=[["1","12","0","8","6","11","2","13"],["57","5","19","29","20","23"],["50","15","0","0","52","17","7","30","58","51","0","62"],["0","26","40","22","0","10","0","0","0","0","4","55","3","9","0"],["49","0","0","59","25","0","31","16","0","0","39","0","0","0","0"],["0","0","32","35","21","0","0","54"],["0","47","0","18","0"]];
var upos=[["","","","","","","",""],["","","","","",""],["","","","","","","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","",""],["","","","",""]];
var uCell=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var colCount=16;
var showE=false;
var typeD=0;var tiCor=false;
var colDef=0; col=1; row=1; inQue=0; colorError="#E21D1D";
var wordsGame="RGFtZXJv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
