
window.addEventListener("load",function(){

  document.getElementById("movil-menu").hidden = true;

  document.getElementById("Voltaje_Ohm"    ).disabled = true;
  document.getElementById("Corriente_Ohm"  ).disabled = false;
  document.getElementById("Resistencia_Ohm").disabled = false;

  document.getElementById("Voltaje_Ohm"    ).style.background.color ="gray";
  document.getElementById("Corriente_Ohm"  ).style.background.color ="gray";
  document.getElementById("Resistencia_Ohm").style.background.color ="gray";

  document.getElementById("Voltaje_pot"    ).disabled = false;
  document.getElementById("Corriente_pot"  ).disabled = false;
  document.getElementById("Resistencia_pot").disabled = true;
  document.getElementById("potencia_pot"   ).disabled = true;

  document.getElementById("Voltaje_pot"    ).style.background.color ="white";
  document.getElementById("Corriente_pot"  ).style.background.color ="white";
  document.getElementById("Resistencia_pot").style.background.color ="gray";
  document.getElementById("potencia_pot"   ).style.background.color ="gray";


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

variable_electrica.addEventListener("change",function(){

  const Select = document.getElementById("variable_electrica").value;

  if (Select == "Voltaje"){
    document.getElementById("Voltaje_Ohm"    ).disabled = true;
    document.getElementById("Corriente_Ohm"  ).disabled = false;
    document.getElementById("Resistencia_Ohm").disabled = false;
    document.getElementById("Voltaje_Ohm"    ).style.background.color ="gray";
    document.getElementById("Corriente_Ohm"  ).style.background.color ="white";
    document.getElementById("Resistencia_Ohm").style.background.color ="white";
    document.getElementById("Voltaje_Ohm"    ).value = "";
    document.getElementById("Corriente_Ohm"  ).value = "";    
    document.getElementById("Resistencia_Ohm").value = "";    
    document.getElementById("Resultado_ohm").innerHTML = "";    
    return;
  }

  if (Select == "Corriente"){
    document.getElementById("Voltaje_Ohm"    ).disabled = false;
    document.getElementById("Corriente_Ohm"  ).disabled = true;
    document.getElementById("Resistencia_Ohm").disabled = false;
    document.getElementById("Voltaje_Ohm"    ).style.background.color ="white";
    document.getElementById("Corriente_Ohm"  ).style.background.color ="gray";
    document.getElementById("Resistencia_Ohm").style.background.color ="white";
    document.getElementById("Voltaje_Ohm"    ).value = "";
    document.getElementById("Corriente_Ohm"  ).value = "";    
    document.getElementById("Resistencia_Ohm").value = "";    
    document.getElementById("Resultado_ohm").innerHTML = "";    
    return;
  }

  if (Select == "Resistencia"){
    document.getElementById("Voltaje_Ohm"    ).disabled = false;
    document.getElementById("Corriente_Ohm"  ).disabled = false;
    document.getElementById("Resistencia_Ohm").disabled = true;
    document.getElementById("Resistencia_Ohm").value ="";
    document.getElementById("Voltaje_Ohm"    ).style.background.color ="white";
    document.getElementById("Corriente_Ohm"  ).style.background.color ="white";
    document.getElementById("Resistencia_Ohm").style.background.color ="gray";
    document.getElementById("Voltaje_Ohm"    ).value = "";
    document.getElementById("Corriente_Ohm"  ).value = "";    
    document.getElementById("Resistencia_Ohm").value = "";    
    document.getElementById("Resultado_ohm").innerHTML = "";    
    return;
  }


}); 

variable_electrica_pot.addEventListener("change",function(){

  const Select = document.getElementById("variable_electrica_pot").value;

  if (Select == "Pot_V_I"){
    document.getElementById("Voltaje_pot"    ).disabled = false;
    document.getElementById("Corriente_pot"  ).disabled = false;
    document.getElementById("Resistencia_pot").disabled = true;
    document.getElementById("potencia_pot"   ).disabled = true;
    document.getElementById("Voltaje_pot"    ).style.background.color ="white";
    document.getElementById("Corriente_pot"  ).style.background.color ="white";
    document.getElementById("Resistencia_pot").style.background.color ="gray";
    document.getElementById("potencia_pot"   ).style.background.color ="gray";
    document.getElementById("Voltaje_pot"    ).value = "";
    document.getElementById("Corriente_pot"  ).value = "";    
    document.getElementById("Resistencia_pot").value = "";    
    document.getElementById("potencia_pot"   ).value = "";
    document.getElementById("Resultado_pot").innerHTML = "";    
    return;
  }

  if (Select == "Pot_V_R"){
    document.getElementById("Voltaje_pot"    ).disabled = false;
    document.getElementById("Corriente_pot"  ).disabled = true;
    document.getElementById("Resistencia_pot").disabled = false;
    document.getElementById("potencia_pot"   ).disabled = true;
    document.getElementById("Voltaje_pot"    ).style.background.color ="white";
    document.getElementById("Corriente_pot"  ).style.background.color ="gray";
    document.getElementById("Resistencia_pot").style.background.color ="white";
    document.getElementById("potencia_pot"   ).style.background.color ="gray";
    document.getElementById("Voltaje_pot"    ).value = "";
    document.getElementById("Corriente_pot"  ).value = "";    
    document.getElementById("Resistencia_pot").value = "";    
    document.getElementById("potencia_pot"   ).value = "";
    document.getElementById("Resultado_pot").innerHTML = "";    
    return;
  }

  if (Select == "Pot_I_R"){
    document.getElementById("Voltaje_pot"    ).disabled = true;
    document.getElementById("Corriente_pot"  ).disabled = false;
    document.getElementById("Resistencia_pot").disabled = false;
    document.getElementById("potencia_pot"   ).disabled = true;
    document.getElementById("Voltaje_pot"    ).style.background.color ="gray";
    document.getElementById("Corriente_pot"  ).style.background.color ="white";
    document.getElementById("Resistencia_pot").style.background.color ="white";
    document.getElementById("potencia_pot"   ).style.background.color ="gray";
    document.getElementById("Voltaje_pot"    ).value = "";
    document.getElementById("Corriente_pot"  ).value = "";    
    document.getElementById("Resistencia_pot").value = "";    
    document.getElementById("potencia_pot"   ).value = "";
    document.getElementById("Resultado_pot").innerHTML = "";    
    return;
  }

  if (Select == "Vol_P_I"){
    document.getElementById("Voltaje_pot"    ).disabled = true;
    document.getElementById("Corriente_pot"  ).disabled = false;
    document.getElementById("Resistencia_pot").disabled = true;
    document.getElementById("potencia_pot"   ).disabled = false;
    document.getElementById("Voltaje_pot"    ).style.background.color ="gray";
    document.getElementById("Corriente_pot"  ).style.background.color ="white";
    document.getElementById("Resistencia_pot").style.background.color ="gray";
    document.getElementById("potencia_pot"   ).style.background.color ="white";
    document.getElementById("Voltaje_pot"    ).value = "";
    document.getElementById("Corriente_pot"  ).value = "";    
    document.getElementById("Resistencia_pot").value = "";    
    document.getElementById("potencia_pot"   ).value = "";
    document.getElementById("Resultado_pot").innerHTML = "";    
    return;
  }

  if (Select == "Vol_P_R"){
    document.getElementById("Voltaje_pot"    ).disabled = true;
    document.getElementById("Corriente_pot"  ).disabled = true;
    document.getElementById("Resistencia_pot").disabled = false;
    document.getElementById("potencia_pot"   ).disabled = false;
    document.getElementById("Voltaje_pot"    ).style.background.color ="gray";
    document.getElementById("Corriente_pot"  ).style.background.color ="gray";
    document.getElementById("Resistencia_pot").style.background.color ="white";
    document.getElementById("potencia_pot"   ).style.background.color ="white";
    document.getElementById("Voltaje_pot"    ).value = "";
    document.getElementById("Corriente_pot"  ).value = "";    
    document.getElementById("Resistencia_pot").value = "";    
    document.getElementById("potencia_pot"   ).value = "";
    document.getElementById("Resultado_pot").innerHTML = "";    
    return;
  }

  if (Select == "Corr_P_V"){
    document.getElementById("Voltaje_pot"    ).disabled = false;
    document.getElementById("Corriente_pot"  ).disabled = true;
    document.getElementById("Resistencia_pot").disabled = true;
    document.getElementById("potencia_pot"   ).disabled = false;
    document.getElementById("Voltaje_pot"    ).style.background.color ="white";
    document.getElementById("Corriente_pot"  ).style.background.color ="gray";
    document.getElementById("Resistencia_pot").style.background.color ="gray";
    document.getElementById("potencia_pot"   ).style.background.color ="white";
    document.getElementById("Voltaje_pot"    ).value = "";
    document.getElementById("Corriente_pot"  ).value = "";    
    document.getElementById("Resistencia_pot").value = "";    
    document.getElementById("potencia_pot"   ).value = "";
    document.getElementById("Resultado_pot").innerHTML = "";    
    return;
  }
  
  if (Select == "Corr_P_R"){
    document.getElementById("Voltaje_pot"    ).disabled = true;
    document.getElementById("Corriente_pot"  ).disabled = true;
    document.getElementById("Resistencia_pot").disabled = false;
    document.getElementById("potencia_pot"   ).disabled = false;
    document.getElementById("Voltaje_pot"    ).style.background.color ="gray";
    document.getElementById("Corriente_pot"  ).style.background.color ="gray";
    document.getElementById("Resistencia_pot").style.background.color ="white";
    document.getElementById("potencia_pot"   ).style.background.color ="white";
    document.getElementById("Voltaje_pot"    ).value = "";
    document.getElementById("Corriente_pot"  ).value = "";    
    document.getElementById("Resistencia_pot").value = "";    
    document.getElementById("potencia_pot"   ).value = "";
    document.getElementById("Resultado_pot").innerHTML = "";    
    return;
  }

  if (Select == "Res_P_V"){
    document.getElementById("Voltaje_pot"    ).disabled = false;
    document.getElementById("Corriente_pot"  ).disabled = true;
    document.getElementById("Resistencia_pot").disabled = true;
    document.getElementById("potencia_pot"   ).disabled = false;
    document.getElementById("Voltaje_pot"    ).style.background.color ="white";
    document.getElementById("Corriente_pot"  ).style.background.color ="gray";
    document.getElementById("Resistencia_pot").style.background.color ="gray";
    document.getElementById("potencia_pot"   ).style.background.color ="white";
    document.getElementById("Voltaje_pot"    ).value = "";
    document.getElementById("Corriente_pot"  ).value = "";    
    document.getElementById("Resistencia_pot").value = "";    
    document.getElementById("potencia_pot"   ).value = "";
    document.getElementById("Resultado_pot").innerHTML = "";    
    return;
  }

  if (Select == "Res_P_I"){
    document.getElementById("Voltaje_pot"    ).disabled = true;
    document.getElementById("Corriente_pot"  ).disabled = false;
    document.getElementById("Resistencia_pot").disabled = true;
    document.getElementById("potencia_pot"   ).disabled = false;
    document.getElementById("Voltaje_pot"    ).style.background.color ="gray";
    document.getElementById("Corriente_pot"  ).style.background.color ="white";
    document.getElementById("Resistencia_pot").style.background.color ="gray";
    document.getElementById("potencia_pot"   ).style.background.color ="white";
    document.getElementById("Voltaje_pot"    ).value = "";
    document.getElementById("Corriente_pot"  ).value = "";    
    document.getElementById("Resistencia_pot").value = "";    
    document.getElementById("potencia_pot"   ).value = "";
    document.getElementById("Resultado_pot").innerHTML = "";    
    return;
  }

}); 

Calcular_ohm.addEventListener("click",function(){

  const V = document.getElementById("Voltaje_Ohm"    ).value;
  const I = document.getElementById("Corriente_Ohm"  ).value;
  const R = document.getElementById("Resistencia_Ohm").value;
  const Select = document.getElementById("variable_electrica").value;


  if (Select == "Voltaje"){
    let Resultado = I*R;
    var label = Resultado + " " + "Voltios";
  }

  if (Select == "Corriente"){
    let Calculo = V/R;
    let Resultado = prefijo(Select, Calculo);
    var label = Resultado + " " +"Amp";
  }

  if (Select == "Resistencia"){
    let Calculo = V/I;
    let Resultado = prefijo(Select, Calculo);
    var label = Resultado + " "+ "Ω";
  }

  document.getElementById("Resultado_ohm").innerHTML = "<strong>"+label+"</strong>";

}); 


Calcular_pot.addEventListener("click",function(){

  const V = document.getElementById("Voltaje_pot"    ).value;
  const I = document.getElementById("Corriente_pot"  ).value;
  const R = document.getElementById("Resistencia_pot").value;
  const P = document.getElementById("potencia_pot"   ).value;

  const Select = document.getElementById("variable_electrica_pot").value;

  if (Select == "Pot_V_I"){
    let Resultado = V*I;
    var label = Resultado + " " + "Watts";
  }

  if (Select == "Pot_V_R"){
    let Resultado = V*V/R;
    var label = Resultado + " "+ "Watts";
  }

  if (Select == "Pot_I_R"){
    let Resultado = I*I*R;
    var label = Resultado + " "+ "Watts";
  }

  if (Select == "Vol_P_I"){
    let Resultado = P/I;
    var label = Resultado + " "+ "Voltios";
  }

  if (Select == "Vol_P_R"){
    let Resultado = Math.sqrt(P*R);
    var label = Resultado + " "+ "Voltios";
  }

  if (Select == "Corr_P_V"){
    let Resultado = P/V;
    var label = Resultado + " "+ "Amp";
  }
  
  if (Select == "Corr_P_R"){
    let Resultado = Math.sqrt(P/R);
    var label = Resultado + " "+ "Amp";
  }

  if (Select == "Res_P_V"){
    let Resultado = V*V/P;
    var label = Resultado + " "+ "Ω";
  }

  if (Select == "Res_P_I"){
    let Resultado =P/(I*I);
    var label = Resultado + " "+ "Ω";
  }

  document.getElementById("Resultado_pot").innerHTML = "<strong>"+ label +"</strong>";

}); 



function prefijo(variable, valor){

  if (variable == "Corriente"){
    if (valor < 0.09 ){ var resultado = (valor*1000) +" m"; }
    else { var resultado = valor; } 
  }

  if (variable == "Resistencia"){
  
    if (valor < 1000 ){
      var resultado = valor; 
    } 

    if (valor >= 1000 ){
      var resultado = (valor/1000) +" K"; 
    } 

    if (valor >= 1000000 ){
      var resultado = (valor/1000000) +" M"; 
    } 
  } 

  return resultado;
};


R_serie.addEventListener("click",function(){

  let tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];

  if ( tabla.rows.length < 5) {
    let newFila = tabla.insertRow();
    let Fila = newFila.rowIndex + 1;
  
    const Resistencia = newFila.insertCell(0);
    const Valor       = newFila.insertCell(1);
    const Unidad      = newFila.insertCell(2);
  
    Resistencia.innerHTML   ='<center>R' + Fila + ' ' +'</center>';
    Valor.innerHTML         ='<center><input id=R' + Fila +' type="number" class="form-control text-center" ></center>';
    Unidad.innerHTML        ='<center>Ω</center>';
  }

}); 


R_paralelo.addEventListener("click",function(){

  let tabla = document.getElementById("tabla1").getElementsByTagName('tbody')[0];

  if ( tabla.rows.length < 5) {
    let newFila = tabla.insertRow();
    let Fila = newFila.rowIndex + 1;
  
    const Resistencia = newFila.insertCell(0);
    const Valor       = newFila.insertCell(1);
    const Unidad      = newFila.insertCell(2);
  
    Resistencia.innerHTML   ='<center>R' + Fila + ' ' +'</center>';
    Valor.innerHTML         ='<center><input id=Rp' + Fila +' type="number" class="form-control text-center" ></center>';
    Unidad.innerHTML        ='<center>Ω</center>';
  }

}); 


Resistencia_Serie.addEventListener("click",function(){

  let tabla = document.getElementById("tabla");
  let total = 0;


  // Recorre las filas desde la segunda (índice 1) para evitar el encabezado
  for (let i = 1; i <= tabla.rows.length; i++) {
    let id_Resistencia ="R" + i;
    let Valor = parseFloat(document.getElementById(id_Resistencia).value)|| 0;
    total += Valor;   
  }

  let Serie_total = prefijo("Resistencia", total);

  document.getElementById("Resultado_serie").innerHTML ="Req = "+ Serie_total  +" Ω";

}); 


Resistencia_Paralelas.addEventListener("click",function(){

  let tabla = document.getElementById("tabla1");
  let total = 0;


  // Recorre las filas desde la segunda (índice 1) para evitar el encabezado
  for (let i = 1; i <= tabla.rows.length; i++) {
    let id_Resistencia ="Rp" + i;
    let Valor = parseFloat(document.getElementById(id_Resistencia).value)|| 0;

    if (Valor == 0) {
      document.getElementById("Resultado_paralelo").innerHTML ="Debe introducir un valor diferente a cero.";
      return;
    }
  

    total += (1/Valor);   
  }

  let Inverso_total = (1/total);

  let paralelo_total = prefijo("Resistencia", Inverso_total);

  document.getElementById("Resultado_paralelo").innerHTML ="Req = "+ paralelo_total  +" Ω";


}); 
