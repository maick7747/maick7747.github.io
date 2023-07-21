//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=4; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#BBF156"; colorButton="#1B29AB"; colorText="#000000"; colorSele="#9D628E";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime="SE TERMINO TU TIEMPO"; messageError="FALLO"; messageErrorG="FALLO"; messageAttempts="INTENTE  NUEVAMENTE"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[0,0,0,0,0,0],[0,1,1,1,1,1],[0,1,1,1,1,1]];
var vCell=[["0","0","0","0","0","0"],["0","2","2","2","2","2"],["0","2","2","2","2","2"]];
var a0Cell=[["Mg==","R0FUTw==","UEVSUk8=","UEFMT01B","QUxQQUNB","Q09DT0RSSUxP"],["RE9NRVNUSUNP","MQ==","MQ==","MA==","MA==","MA=="],["U0lMVkVTVFJF","MA==","MA==","MQ==","MQ==","MQ=="]];
var c=[[0,4,5,6,6,9],[9,1,1,1,1,1],[9,1,1,1,1,1]];
var c1=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var c2=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var c3=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var a1Cell=[["","R0FUTw==","UEVSUk8=","UEFMT01B","QUxQQUNB","Q09DT0RSSUxP"],["RE9NRVNUSUNP","MQ==","MQ==","MA==","MA==","MA=="],["U0lMVkVTVFJF","MA==","MA==","MQ==","MQ==","MQ=="]];
var a2Cell=[["","R0FUTw==","UEVSUk8=","UEFMT01B","QUxQQUNB","Q09DT0RSSUxP"],["RE9NRVNUSUNP","MQ==","MQ==","MA==","MA==","MA=="],["U0lMVkVTVFJF","MA==","MA==","MQ==","MQ==","MQ=="]];
var a3Cell=[["","R0FUTw==","UEVSUk8=","UEFMT01B","QUxQQUNB","Q09DT0RSSUxP"],["RE9NRVNUSUNP","MQ==","MQ==","MA==","MA==","MA=="],["U0lMVkVTVFJF","MA==","MA==","MQ==","MQ==","MQ=="]];
var wordsGame="MTVfQ09NUExFVEFSX20="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=3; var rows=6;var showC=true;
