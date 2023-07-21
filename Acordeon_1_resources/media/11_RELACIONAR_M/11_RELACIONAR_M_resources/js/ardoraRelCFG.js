//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=240; timeIni=240; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#B8E065"; colorButton="#513C51"; colorText="#000000"; colorSele="#5F5BA4";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime="SE TERMINO TU TIEMPO"; messageError="FALLO"; messageErrorG="FALLO"; messageAttempts="INTENTE  NUEVAMENTE"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTFfUkVMQUNJT05BUl9N"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>¡Qué hay de nuevo, viejo?</p>","<p>¡Yo sé que tú, tú me quieres!</p>","<p>¡Yo no soy un juguete, soy un cerdo con estilo!</p>","<p>\"Hakuna Matata, vive y sé feliz\"</p>","<p>¡Rugido de la selva!</p>","<p>¡A comer!</p>","<p>¡Ahí está!</p>","<p>¡Yo quiero miel!</p>"];
var iL=["","","","","","","",""];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Bugs Bunny</p>","<p>Alex</p>","<p>Garfield</p>","<p>Remy</p>","<p>Winnie the Pooh</p>","<p>Dory</p>","<p>Hamm</p>","<p>Timón y Pumba</p>"]; ansRL=["MA==","NQ==","Ng==","Nw==","MQ==","Mg==","Mw==","NA=="];
var iR=["<div  align='center'><img alt='' src='11_RELACIONAR_M_resources/media/11_bb.jpg'></div>","<div  align='center'><img alt='' src='11_RELACIONAR_M_resources/media/11_alex_le.jpg'></div>","<div  align='center'><img alt='' src='11_RELACIONAR_M_resources/media/11_garfie.jpg'></div>","<div  align='center'><img alt='' src='11_RELACIONAR_M_resources/media/11_remmy_rata.jpg'></div>","<div  align='center'><img alt='' src='11_RELACIONAR_M_resources/media/11_win_poo.jpg'></div>","<div  align='center'><img alt='' src='11_RELACIONAR_M_resources/media/11_dori.jpg'></div>","<div  align='center'><img alt='' src='11_RELACIONAR_M_resources/media/11_ham_cerd.jpg'></div>","<div  align='center'><img alt='' src='11_RELACIONAR_M_resources/media/11_timon.jpg'></div>"];
var auR=[1,5,6,7,8,2,3,4];
