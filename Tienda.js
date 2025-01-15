window.addEventListener("load",function(){
  
  document.getElementById("movil-menu").hidden = true;
  document.getElementById("Herramientas-Manuales"  ).hidden = true;
  document.getElementById("Herramientas-Electricas").hidden = false;
  document.getElementById("Herramientas-Medicion"  ).hidden = true;

}); 


hamburguesa.addEventListener("click",function(){

var Visible = document.getElementById("movil-menu").hidden;
var intro = document.getElementById('movil-menu');


if (Visible == true){
  document.getElementById("movil-menu").hidden = false;
  intro.className = 'movil-menu';
} else {
  document.getElementById("movil-menu").hidden = true;
  intro.className = 'menu-oculto';
}

}); 


Herramienta.addEventListener("change",function(){

TipoHerramienta = document.getElementById("Herramienta").value;

if (TipoHerramienta == "Manuales"){
  document.getElementById("Herramientas-Manuales"  ).hidden = false;
  document.getElementById("Herramientas-Electricas").hidden = true;
  document.getElementById("Herramientas-Medicion"  ).hidden = true;
}

if (TipoHerramienta == "Eléctricas"){
  document.getElementById("Herramientas-Manuales"  ).hidden = true;
  document.getElementById("Herramientas-Electricas").hidden = false;
  document.getElementById("Herramientas-Medicion"  ).hidden = true;
}

if (TipoHerramienta == "Medición"){
  document.getElementById("Herramientas-Manuales"  ).hidden = true;
  document.getElementById("Herramientas-Electricas").hidden = true;
  document.getElementById("Herramientas-Medicion"  ).hidden = false;
}



}); 
