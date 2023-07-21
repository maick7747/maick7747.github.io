//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FFFF00";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="b3JkZW5hcl9wYXJyYWZvcw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="500";profG=0;dirMedia="ordenar_parrafos_resources/media/";
var indexG=0;
var words1G=["SGFiaWEgdW5hIHZleiB1bmEgbmnxYSBsbGFtYWRhIGNhcGVydWNpdGEgcm9qYSBtdXkgcXVlcmlkYSBwb3Igc3UgYWJ1ZWxpdGE","dW4gZO1hIHN1IG1hbeEgbGEgZW52afMgYSB2ZXIgYSBzdSBhYnVlbGl0YSBxdWUgc2UgZW5jb250cmFiYSBtdXkgZW5mZXJtYQ","YXRyYXZlc2FiYSBwb3IgdW4gYm9zcXVlIGN1YW5kbyBzZSBlbmNvbnRybyBjb24gdW4gbG9ibyBxdWUgbGUgcHJlZ3VudG8gaGFjaWEgZG9uZGUgc2UgZGlyaWdpYQ","ZWwgbG9ibyBzZSBsYSBxdWVyaWEgY29tZXIgeSBzZSBkaXJpZ2lvIGEgbGEgY2FzYSBkZSBsYSBhYnVlbGl0YQ","bGxlZ28gcHJpbWVybyBhIGxhIGNhc2EgZGUgbGEgYWJ1ZWxpdGEgZGUgY2FwZXJ1Y2l0YSB5IHNlIGNvbWnzIGEgbGEgYWJ1ZWxpdGE","Y3VhbmRvIGxsZWfzIGNhcGVydWNpdGEgdGFtYmnpbiBzZSBsYSBjb21p8w","dW4gY2F6YWRvciBxdWUgcGFzYWJhIHBvciBhaGkgb3nzIHVuIGdyaXRvIGRlIHVuYSBuafFh","c2luIGR1ZGFybG8gdXRpbGl6byBzdSBjdWNoaWxsbyBwYXJhIHZlciBhIHF1aWVuIHNlIGhhYmlhIGNvbWlkbyBlbCBtYWx2YWRv","c2FjbyBhIGNhcGVydWNpdGEgeSBhIHN1IGFidWVsYQ","eSBsbGVuYXJvbiBsYSBwYW56YSBkZSBwaWVkcmFzIGRlbCBsb2JvIGNvbW8gZXNjYXJtaWVudG8"];
var words2G=["THVnYXIgeSBmZWNoYQ","ZGVzdGluYXRhcmlv","c2FsdWRv","Y3VlcnBvIGRlbCB0ZXh0bw","ZGVzcGVkaWRh","ZmlybWE","cG9zZGF0YQ"];
var words3G=["UG9uZXJsZSBwYXN0YSBhbCBjZXBpbGxv","bGF2YXJzZSBsb3MgZGllbnRlcyBjb24gZWwgY2VwaWxsbw","aGFjaWVuZG8gdW4gbW92aW1pZW50byBjaXJjdWxhciB5IGRlIGFycmliYSBoYWNpYSBhYmFqbw","ZW5qdWFnYXJzZSBjb3JyZWN0YW1lbnRl","bGF2YXIgZWwgY2VwaWxsbyBhZGVjdWFkYW1lbnRlIHBhcmFxdWUgbm8gcXVlZGVuIHJlc2lkdW9zIGRlIHBhc3Rh","bGF2YXJzZSBsYXMgbWFub3MgeSBzZWNhcmxhcw"];
var c1=[74,73,94,64,77,43,54,75,31,56];
var c2=[13,12,6,16,9,5,7];
var c3=[24,34,55,24,66,28];
colorText="#000000";colorButton="#FF0033";colorBack="#FFFFFF";colorSele="#FFC8C3";goURLNext=true;
fMenssage="'Arial Black', Gadget, sans-serif";fActi="'Arial Black', Gadget, sans-serif";fEnun="'Arial Black', Gadget, sans-serif";
