var goURLNext=false; goURLRepeat=false;tiAval=false;
var colorBack="#FFFDFD";colorText="#793E5C";colorSele="#FF8000";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var itemHelp=["TRUCHA","ALPACA","PATO","GALLINA","VACA","CERDO","CONEJO","CABRA","CUY","CARNERO"];
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fileIma=["i_28__TRUCHA.jpg","i_28__ALPACA.jpg","i_28__PATO.jpg","i_28__GALLINS.jpg","i_28__VACA.jpg","i_28__CERDO.jpg","i_28__CONEJO.jpg","i_28__CABRA.jpg","i_28__CUY.jpg","i_28__CARERO.jpg"];
var altIma=["","","","","","","","","",""];
var fileX=["600","600","600","600","600","600","600","600","600","600"];
var fileY=["400","400","400","400","400","400","400","400","400","400"];
var txt=["Es un pez de agua dulce perteneciente a la familia de los salmónidos, reconocido por su cuerpo alargado, piel cubierta de escamas y su habilidad para nadar en ríos y lagos.","Es un mamífero herbívoro domesticado de la familia de los camélidos, valorado por su lana suave y resistente, y criado principalmente en las regiones de los Andes. Posee un cuerpo robusto, cuello largo y es conocida por su temperamento tranquilo.","Es un ave acuática de tamaño mediano, reconocida por su pico ancho y plano, patas palmadas y la habilidad de nadar en el agua.","Es un ave domesticada de tamaño mediano, criada principalmente por sus huevos y carne, caracterizada por tener plumas, pico y patas.","Es un mamífero rumiante de gran tamaño, domesticado por su utilidad en la producción de leche, carne y cuero, caracterizada por tener un cuerpo robusto y cuernos","Es un mamífero omnívoro de granja, criado por su carne y productos derivados como el tocino y el jamón, reconocido por su cuerpo rechoncho y hocico prominente.","Es un pequeño mamífero herbívoro, caracterizado por sus largas orejas, patas traseras fuertes y capacidad para saltar. Se crían como mascotas o para la producción de carne y piel.","Es un mamífero rumiante de tamaño mediano, domesticado por su utilidad en la producción de leche, carne y fibra, reconocido por sus cuernos y capacidad de adaptarse a diferentes tipos de terrenos.","Es un roedor de pequeño tamaño originario de Sudamérica, apreciado como mascota y consumido en algunas culturas por su carne. Se caracteriza por su cuerpo redondeado, orejas cortas y suave pelaje.","Es un mamífero herbívoro perteneciente a la familia de los bóvidos, caracterizado por tener cuernos curvados hacia atrás y ser utilizado tanto para la producción de carne como de lana."];
var fileMP3=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var fileOgg=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var conType=["","","","","","","","","",""];
var conLink=["","","","","","","","","",""];
