//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=3;
var successes=0; successesMax=5; attempts=0; attemptsMax=2;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#34D1BA"; colorButton="#91962F"; colorText="#000000"; colorSele="#47A4B8";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELCIDADES LO LOGRASTE "; messageTime="SE AGOTÓ TU TIEMPO "; messageError=""; messageErrorG=""; messageAttempts="VUELVE A INTENTARLO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UHVudG9zX2ltYWdlbl8y"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var points=[["45","18","0","0"],["307","103","1","1"],["245","155","2","2"],["265","323","3","3"],["214","393","4","4"]];
var backSrc="Puntos_imagen_2_resources/media/Mapa del Perú 2.jpg";
var Shape = function () {this.x=undefined;this.y=undefined;};
Shape.prototype={fill:function(context){context.save();context.fillStyle=this.fillStyle;this.createPath(context);context.fill();context.restore();},
stroke:function(context){context.save();this.createPath(context);context.stroke();context.restore();},
isPointInPath:function(context,x,y){this.createPath(context);return context.isPointInPath(x, y);},};
var Polygon=function(){this.points = [];this.numInd=0;};Polygon.prototype=new Shape();Polygon.prototype.addPoint=function(x,y){this.points.push(new Point(x,y));};
Polygon.prototype.createPath=function (context) {if (this.points.length === 0)return;context.beginPath();
context.moveTo(this.points[0].x,this.points[0].y);for (var i=0; i < this.points.length; ++i) {context.lineTo(this.points[i].x,this.points[i].y);}context.closePath();};
var Point=function(x,y){this.x=x;this.y=y;};var shapes=[];
var polygonPoints=[[new Point(45,18)],[new Point(307,103)],[new Point(245,155)],[new Point(265,323)],[new Point(214,393)]];
var game=[];indexGame=0;
var area=["0","1","2","3","4"];
var areaSolved=["N","N","N","N","N"];
var areaWord=["ECUADOR","COLOMBIA","BRASIL","BOLIVIA","CHILE"];
var areaHelp=["Dólar estadounidense","Peso","Real","Boliviano","Peso Ch"];
var areaWrong=["","","","",""];
var initMessageError="";
var wordPointX=["45","200","245","265","214"];
var wordPointY=["18","12","155","323","393"];
var areaColor=["#80FF00","#800040","#008000","#FF8000","#800000"];
var pathMedia="Puntos_imagen_2_resources/media/"
var auMP3=["","","","",""];
var auOGG=["","","","",""];
var colorWord="#000000";
