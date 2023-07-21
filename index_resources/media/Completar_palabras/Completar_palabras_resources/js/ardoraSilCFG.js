//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#D14568"; colorButton="#6DAED1"; colorText="#6D47AD"; colorSele="#91C55C";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Palatino Linotype', 'Book Antiqua', Palatino, serif";
var fActi="'Palatino Linotype', 'Book Antiqua', Palatino, serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitación a ganado"; messageTime="El limite de teimpo le logro alcanzar"; messageError="A fallado"; messageErrorG="A fallado"; messageAttempts="Limites de intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wGame=["-AR","-LOZ","-RZA","-NCIA","-ELO","-EGO"];
var wIma=["superman volando.jpg","flash coriiendo.jpg","HOLCK.jpg","INTELIGENCIA.jpg","HIELO+.jpg","FUEGO.jpg"];
var audio=["","","","","",""];
var wAlt=["","","","","",""];
var w0=["Vk9M","VkU=","RlVF","SU5URUxJR0U=","SEk=","RlU="];
var w1=["Q0FS","Tg==","SEpV","REVNRQ==","UA==","TUVO"];
var w2=["VEFBUg==","UlRB","VUtP","Q0FSRQ==","UEVS","R1U="];
var w3=["VU1FTg==","Tk9U","TE9Q","UElUTw==","Q0hFUg==","UEU="];
var c=[3,2,3,8,2,2];
var wW=["","","","","",""];
var dirMedia="Completar_palabras_resources/media/";
var wordsGame="Q29tcGxldGFyX3BhbGFicmFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var ram_G=["-1","-1","-1","-1","-1","-1"]; var indexGame=0; var tiAudio=false;
