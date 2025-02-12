
window.addEventListener("load",function(){

  document.getElementById("Alerta").hidden = true;
  document.getElementById("Factor_Potencia").hidden = true;

  document.getElementById("movil-menu").hidden = true;

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


// Calculo Corriente
UnidadPotencia_corriente.addEventListener("change",function(){

  var Potencia = document.getElementById("UnidadPotencia_corriente");
  let PotenciaSeleccionada = Potencia.options[Potencia.selectedIndex].value;

    if (PotenciaSeleccionada =="W" || PotenciaSeleccionada =="KW" || PotenciaSeleccionada =="HP"){
      document.getElementById("Factor_Potencia").hidden=false;
    } else {
      document.getElementById("Factor_Potencia").hidden=true; 
    }

    var TipoCalculo = document.getElementById("TipoCorriente");
    let TipoCorriente = TipoCalculo.options[TipoCalculo.selectedIndex].value;

    if (TipoCorriente == "Continua"){
      document.getElementById("Factor_Potencia").hidden=true;
    } 

});


TipoCorriente.addEventListener("change",function(){

  var Potencia = document.getElementById("UnidadPotencia_corriente");
  let UnidadesPotencia = Potencia.options[Potencia.selectedIndex].value;

  var TipoCalculo = document.getElementById("TipoCorriente");
  let TipoCorriente = TipoCalculo.options[TipoCalculo.selectedIndex].value;

  if (TipoCorriente !== "Continua") {
    if ( UnidadesPotencia == "KW" || UnidadesPotencia == "W" || UnidadesPotencia == "HP"){ 
      document.getElementById("Factor_Potencia").hidden=false;
    } 
  } else {      document.getElementById("Factor_Potencia").hidden=true;  }

});


BotonCalcular.addEventListener("click",function(){

  var TipoCalculo = document.getElementById("TipoCorriente");
  var Voltaje = document.getElementById("Voltaje").value;
  var Potencia = document.getElementById("Potencia").value;
  var UnidadesPotencia = document.getElementById("UnidadPotencia_corriente").value;
  var FP = document.getElementById("FactorPotencia").value;

  document.getElementById("Alerta").hidden=true;

  let TipoCorriente = TipoCalculo.options[TipoCalculo.selectedIndex].value;

  // Validacion Datos
  var Confirmacion = true;

  if (Potencia == 0 ){ 
    Confirmacion = false;
    document.getElementById("Alerta").hidden=false;
    document.getElementById("Alerta").innerHTML = "<strong><center> Debe introducir el valor de la Potencia!</center></strong>";

    setTimeout(() => {
      document.getElementById("Alerta").hidden = true;
    }, 2000);
 
  }

  if (Voltaje == 0 ){ 
    Confirmacion = false;
    document.getElementById("Alerta").hidden=false;
    document.getElementById("Alerta").innerHTML = "<strong><center> Debe introducir el valor de Voltaje! </center></strong>";

    setTimeout(() => {
      document.getElementById("Alerta").hidden = true;
    }, 2000);
 
  }

  if (UnidadesPotencia =="W" || UnidadesPotencia =="KW" || UnidadesPotencia == "HP" ){

    if (TipoCorriente == "Continua"){
    } else  {
      if (FP <= 0){
        Confirmacion = false;
        document.getElementById("Alerta").hidden=false;
        document.getElementById("Alerta").innerHTML = "<strong><center>0 ≤ Fp ≤ 1</center></strong>";

        setTimeout(() => {
          document.getElementById("Alerta").hidden = true;
        }, 2000);
    
      } 

      if (FP > 1){
        Confirmacion = false;
        document.getElementById("Alerta").hidden=false;
        document.getElementById("Alerta").innerHTML = "<strong><center>0 ≤ Fp ≤ 1</center></strong>";

        setTimeout(() => {
          document.getElementById("Alerta").hidden = true;
        }, 2000);
    
      }   
    }
  }

  // Fin Validacion Datos

  // Inicio Calculos
  if ( Confirmacion == true ){

    var Multiplo = Power(UnidadesPotencia);

      if (TipoCorriente == "Continua"){
        var Tipo_Corriente = "Continua";
        var Icalculada = Multiplo*Potencia/(Voltaje);
        var IFinal     = Math.round(100*Icalculada)/100;
      } 


      if (TipoCorriente == "AlternaMonofasica" ){
        var Tipo_Corriente = "Monofasica";
        if ( UnidadesPotencia == "KVA" || UnidadesPotencia == "VA" ){ 
          var Icalculada = Multiplo*Potencia/(Voltaje);
          var IFinal     = Math.round(100*Icalculada)/100;
        } 
     
         if ( UnidadesPotencia == "KW" || UnidadesPotencia == "W" || UnidadesPotencia == "HP"){ 
          var Icalculada = Multiplo*Potencia/(Voltaje *FP);
          var IFinal     = Math.round(100*Icalculada)/100;
        } 
    
      }
   

      if (TipoCorriente == "AlternaTrifasica"){
        var Tipo_Corriente = "Trifasica";
        if ( UnidadesPotencia == "KVA" || UnidadesPotencia == "VA" ){ 
          var Icalculada = Multiplo*Potencia/(Math.sqrt(3)*Voltaje);
          var IFinal     = Math.round(100*Icalculada)/100;
        } 
     
        if ( UnidadesPotencia == "KW" || UnidadesPotencia == "W" || UnidadesPotencia == "HP"){ 
          var Icalculada = Multiplo*Potencia/(Math.sqrt(3)*Voltaje *FP);
          var IFinal     = Math.round(100*Icalculada)/100;
        } 

      }

      document.getElementById("Resultado1" ).innerHTML = "<center><strong> Corriente Carga Cálculada <br>" +Tipo_Corriente+ "</strong></center>";
      document.getElementById("Resultado2").innerHTML = "<center><strong>" + IFinal + " Amp </strong></center>";
      document.getElementById("Resultado2").style.color = "blue";
      document.getElementById("Resultado3").innerHTML = "";
      mostrarPopup();
  }
  // Fin Calculos
       
});

// Fin Calculo Corriente 


function mostrarPopup() {
  document.getElementById('popupContainer').style.display = 'flex';
}

function cerrarPopup() {
  document.getElementById('popupContainer').style.display = 'none';
}
// Fin Botones Calculos 


// Funcion Calculo Corriente 
Power = function (Unidad) {  
  if ( Unidad == "KVA" ){ return 1000;  } 
  if ( Unidad == "VA"  ){ return 1;     } 
  if ( Unidad == "KW"  ){ return 1000;  } 
  if ( Unidad == "W"   ){ return 1;     } 
  if ( Unidad == "HP"  ){ return 745.7; } 
};
// Fin Funcion Calculo Corriente 


