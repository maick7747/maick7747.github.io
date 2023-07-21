//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=90; timeIni=90; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=2;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
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
var timeOnMessage=3; messageOk="FELICIDADES LO LOGRASTE"; messageTime="SE AGOTÓ TU TIEMPO"; messageError=""; messageErrorG=""; messageAttempts="VUELVE A INTENTARLO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["Vml2acOzIGEgZmluYWxlcyBkZWwgcGVyw61vZG8gQ3JldMOhY2ljbywgaGFjZSBhcHJveGltYWRhbWVudGUgZW50cmUgNjggeSA2NiBtaWxsb25lcyBkZSBhw7Fvcy4=","RXMgdW4gZ8OpbmVybyBjb24gZG9zIGVzcGVjaWVzIGNvbm9jaWRhcyBkZSBkaW5vc2F1cmlvcyBjZXJhdG9wc2lhbm9zIGNlcmF0w7Nwc2lkb3MsIHF1ZSB2aXZpZXJvbiBhIGZpbmFsZXMgZGVsIHBlcsOtb2RvIENyZXTDoWNpY28u","Vml2acOzIGR1cmFudGUgZWwgSnVyw6FzaWNvIFN1cGVyaW9yLCBoYWNlIGFwcm94aW1hZGFtZW50ZSAxNTQgYSAxNTMgbWlsbG9uZXMgZGUgYcOxb3MsIGVuIGxvIHF1ZSBlcyBob3kgTm9ydGVhbcOpcmljYS4=","RXMgdW4gZ8OpbmVybyBjb24gMywgcHJvYmFibGVtZW50ZSA0LCBlc3BlY2llcyBjb25vY2lkYXMgZGUgZGlub3NhdXJpb3MgdGlyZcOzZm9yb3MgZXN0ZWdvc8OhdXJpZG9zLCBxdWUgdml2aWVyb24gYSBmaW5hbGVzIGRlbCBwZXLDrW9kbyBKdXLDoXNpY28u","RXMgdW4gZ8OpbmVybyBjb24gZG9zIGVzcGVjaWVzIGNvbm9jaWRhcyBkZSBkaW5vc2F1cmlvcyB0ZXLDs3BvZG9zIGRyb21lb3PDoXVyaWRvcyBxdWUgdml2aWVyb24gaGFjaWEgZmluYWxlcyBkZWwgcGVyw61vZG8gQ3JldMOhY2ljby4=","RXMgdW4gZ8OpbmVybyBleHRpbnRvIGNvbiBjdWF0cm8gZXNwZWNpZXMgdsOhbGlkYXMgeSB2YXJpYXMgb3RyYXMgcG9zaWJsZXMgZGUgZGlub3NhdXJpb3MgdGVyw7Nwb2RvcyBhbG9zw6F1cmlkb3MsIHF1ZSB2aXZpZXJvbiBhIGZpbmFsZXMgZGVsIHBlcsOtb2RvIEp1csOhc2ljby4="];
var img_G=["i_Tyrannosauros_Rex_esqueleto.jpeg","i_Triceratops_esqueleto.jpeg","i_Brachiosaurus_esqueleto.jpg","i_Estegosaurus_esqueleto.jpg","i_Velociraptor_esqueleto.jpg","i_Allosaurus_esqueleto.jpg"];
var mp3_G=["","","","","",""];
var ogg_G=["","","","","",""];
var n_G=["Mg==","MQ==","Mw==","NA==","NQ==","Ng=="];
var e_G=["","","","","",""];
var mp4_G=["","","","","",""];
var ogv_G=["","","","","",""];
var alt_G=["","","","","",""];
var txtGr=["Triceratops","Tyrannosaurus Rex","Brachiosaurus","Estegosaurio","Velociraptor","Allosaurus"];
var imgGr=["0_Triceratops.jpeg","0_Tyrannosauros_Rex.jpeg","0_Brachiosaurus.jpg","0_Estegosaurio.jpg","0_Velociraptor.jpg","0_Allosaurus.jpg"];
var mp3Gr=["","","","","",""];
var oggGr=["","","","","",""];
var altGr=["","","","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1];
var messageErrorG="";
var dirMedia="Clasificar_sem_11_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="Q2xhc2lmaWNhcl9zZW1fMTE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
