//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=90; timeIni=90; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=2;
var score=0; scoreMax=3; scoreInc=3; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#6D82E0"; colorButton="#91962F"; colorText="#000000"; colorSele="#D82727";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fPreg="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES LO LOGRASTE "; messageTime="SE AGOTÓ TU TIEMPO ";messageError="";messageErrorG=""; messageAttempts="VUELVE A INTENTARLO "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var actMaxWidth="600"; actMaxHeight="";indexQ=0;dirMedia="Imagen_sonido_resources/media/";
var quest=[["Pokemones","",""]];
var altQuest=[""];
var media=[["MQ==","Q2hhcm1hbmRlcg==","0_Charmander.png","X"],["Mg==","U3F1aXJ0bGU=","0_Squirtle.png","X"],["Mw==","V2VyZGxl","0_Weedle.png","X"],["NA==","UGlkZ2VvdHRv","0_Pidgeotto.png","X"],["NQ==","UGlrYWNodQ==","0_Pikachu.png","X"]];
var alt=["","","","",""];
var dat=[["MQ==","MQ==","MA==","MQ==","MQ==","MQ=="],["MQ==","Mg==","MA==","MQ==","MQ==","MQ=="],["MQ==","Mw==","MA==","MQ==","MQ==","MQ=="],["MQ==","NA==","MA==","MQ==","MQ==","MQ=="],["MQ==","NQ==","MA==","MQ==","MQ==","MQ=="]];
var actualBoard=[];actualState=[];indexGame=1;tiAudio=false;
var wordsGame="SW1hZ2VuX3Nvbmlkbw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actorder=[1];var in_act=0;
