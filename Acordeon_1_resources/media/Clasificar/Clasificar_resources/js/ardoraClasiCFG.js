//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=26; attempts=0; attemptsMax=1;
var score=0; scoreMax=26; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Excelente trabajo"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["TWFlc3Rybw","QWx1bW5v","UGl6YXJy824","U2Fs824","Q2FuY2hh","SGFiaXRhY2nzbg","QmHxbw","UGF0aW8","U2FsYQ","Q29tZWRvcg","UHJlZGljYWRv","Tm90aWNpYQ","VmVyYm9z","TmFycmFjafNu","VGV4dG9z","RWRhZCBtZWRpYQ","UHJlaGlzdG9yaWE","SG9t7W5pZG9z","TWFwYXM","U2lnbG9z","TO1uZWEgZGVsIHRpZW1wbw","UmVzdGE","RGl2aXNp824","Rm9ybXVsYXM","wXJlYXM","Vm9sdW1lbg"];
var img_G=["","","","","","","","","","","","","","","","","","","","","","","","","",""];
var mp3_G=["","","","","","","","","","","","","","","","","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","","","","","","","","","","","","","","","","",""];
var n_G=["Mg","Mg","Mg","Mg","Mg","Mw","Mw","Mw","Mw","Mw","NA","NA","NA","NA","NA","NQ","NQ","NQ","NQ","NQ","NQ","Ng","Ng","Ng","Ng","Ng"];
var e_G=["","","","","","","","","","","","","","","","","","","","","","","","","",""];
var txtGr=["Naturaleza","Escuela","Casa","Español","Historia","Matemáticas"];
var imgGr=["CN4.jpg","ESCUELA2.jpg","CASA-COCINA3.jpg","ESPAÑOL2.jpg","H3.jpg","MATEMATICAS2.jpg"];
var mp3Gr=["","","","","",""];
var oggGr=["","","","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="";
var dirMedia="Clasificar_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="Q2xhc2lmaWNhcg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#FF0033";colorBack="#FFFFFF";colorSele="#FFC8C3";goURLNext=true;
fMenssage="'Arial Black', Gadget, sans-serif";fActi="'Arial Black', Gadget, sans-serif";fEnun="'Arial Black', Gadget, sans-serif";
