//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=15; scoreInc=3; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#269360"; colorButton="#1793DD"; colorText="#000000"; colorSele="#3AFAC6";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Palatino Linotype', 'Book Antiqua', Palatino, serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicitación lo lograste"; messageTime="Limite de Tiempo"; messageError="Error"; messageErrorG="Error"; messageAttempts="Limite de Intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWhvcmNhZG8="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["U1VQRVJNQU4=","R1JFRU4gTEFOVEVS","TVVKRVIgTUFSQVZJTExB","RkhBU0g=","QkFUTUFO","","","","",""];imaW=["0_MQBQXTIYGRAR7N2ZQCHSDQG6PA.jpg","0_cdaaafbd805109157cb93a2ccfef2390--green-lantern-corps-green-lanterns.jpg","0_locornoqloca_w4jf.jpg","0_3226157.jpg","0_png-clipart-batman-flash-stuffed-animals-cuddly-toys-superman-plush-batman-toy-comics-superhero.png","","","","",""];queW=["No es un ave, no es un avion","OBTINE SUS PODERES DE LA VOLUNTAD","GUERRERA AMAZONA","EL HOMBRE MAS RAPIDO DEL MUNDO","GUERRERO DE LA NOCHE","","","","",""];var wordsL=[8,12,15,5,6,"","","","",""];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="ahorcado_resources/media/"; textBNext="Siguiente";
