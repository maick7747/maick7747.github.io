var timeAct=90; timeIni=90; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=2;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#73D7B9"; colorButton="#91962F"; colorText="#000000"; colorSele="#31CE80";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES ERES UN(A) CAMPEÓN"; messageTime="SE AGOTÓ EL TIEMPO "; messageError=""; messageErrorG=""; messageAttempts="VUELVE A INTENTARLO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T3JkZW5hcl9mcmFzZXNfTQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Tm8gaGF5IHF1ZSBpciBwYXJhIGF0csOhcyBuaSBwYXJhIGRhcnNlIGltcHVsc28=","SGF6IGVsIGFtb3IgeSBubyBsYSBndWVycmE=","QXByZW5kZSBhIHZpdmlyIHkgc2FicsOhcyBtb3JpciBiaWVu","TGEgbWVkaWRhIGRlbCBhbW9yIGVzIGFtYXIgc2luIG1lZGlkYQ==","Vml2aXIgc29sYSBlcyBjb21vIGVzdGFyIGVuIHVuYSBmaWVzdGEgZG9uZGUgbmFkaWUgdGUgaGFjZSBjYXNv"];imaW=["Lao_tse.jpg","John_Lennon.jpeg","Confuci.png","Sant_Agostino.jpg","Marilyn_Monroe.jpg"];queW=["","","","",""];altW=["","","","",""];c=[46,26,35,37,63];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="Ordenar_frases_M_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
