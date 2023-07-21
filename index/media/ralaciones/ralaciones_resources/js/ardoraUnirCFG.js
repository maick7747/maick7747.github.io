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
var colorBack="#79CEC4"; colorButton="#EEC546"; colorText="#6D47AD"; colorSele="#88B348";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Palatino Linotype', 'Book Antiqua', Palatino, serif";
var fActi="'Palatino Linotype', 'Book Antiqua', Palatino, serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Felicidades por tu logro! Ha demostrado su dedicación y esfuerzo."; messageTime="No te desanimes por los límites de tiempo, porque lo importante es el progreso que ha hecho."; messageError="Aunque a veces las cosas no salen como esperamos, recuerda que cada falla es una oportunidad para aprender y crecer. "; messageErrorG="Aunque a veces las cosas no salen como esperamos, recuerda que cada falla es una oportunidad para aprender y crecer. "; messageAttempts="Si alguna vez pierdes, recuerda que el verdadero valor está en levantarte y seguir adelante. ¡Sigue persiguiendo tus sueños y alcanzarás el éxito!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="cmFsYWNpb25lcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[];
var c=[];
var con1=["Mascara","Héroe","Escudo","Identidad","Volar","Salvar","Arma","Justicia","Invisibilidad","Origen"];
var con2=["Capa","Villano","Barrera","Secreto","Correr","Peligro","Superpoderes","Salvación","Sigilo","Destino"];
var con3=["Antifas","Antihéroe","Protección","Alter ego","Nadar","Rescate","Lucha","Triunfo","Camuflaje","Camino"];
var sel1=""; join1=[]; join2=[];
