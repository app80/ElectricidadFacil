
window.addEventListener("load",function(){

  document.getElementById("AlertaTuberia").hidden=true;
  document.getElementById("Calibre_MCM").disabled = true;
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


// Canalizaciones Electricas
OtraLista.addEventListener("click",function(){

  var CambiarLista = document.getElementById("OtraLista").checked;

    if (CambiarLista == true){

      document.getElementById("Calibre_MCM").disabled = false;
      document.getElementById("Calibre_AWG").disabled = true;
      
    } else {

      document.getElementById("Calibre_MCM").disabled = true;
      document.getElementById("Calibre_AWG").disabled = false;

    }
   
}); 

// Inicio Calcular
CalcularCanalizacion.addEventListener("click",function(){

console.log("Entro");

  var ListadoAWG = document.getElementById("Calibre_AWG").disabled;     
  var AWG = document.getElementById("Calibre_AWG");
  var MCM = document.getElementById("Calibre_MCM");
  var Ncond = document.getElementById("Nconductores").value;

  var Tuberia = document.getElementById("TipoTuberia");
  let TuberiaSeleccionada = Tuberia.options[Tuberia.selectedIndex].value;

  var Confirmacion = true;
  

  if (Ncond == 0) {
    document.getElementById("AlertaTuberia").hidden=false;

    setTimeout(() => {
      document.getElementById("AlertaTuberia").hidden = true;
    }, 2000);

    Confirmacion = false;
  } 

  if (Confirmacion == true) {

    if (ListadoAWG == false){

      let AWGSeleccionado = AWG.options[AWG.selectedIndex].value;
      var SeccionConductor = AreaConductores(AWGSeleccionado);
    } else {

      let MCMSeleccionado = MCM.options[MCM.selectedIndex].value;
      var SeccionConductor = AreaConductores(MCMSeleccionado);
    };

    var TablaAreaTubosSeleccionada = Array.of(12);
    TablaAreaTubosSeleccionada = AreaTuberias(TuberiaSeleccionada);

    if (Ncond == 1) { AreaMaxima =53 };
    if (Ncond == 2) { AreaMaxima =31 };
    if (Ncond  > 2) { AreaMaxima =40 };

    const CalculoSeccionOcupada  = Array.of(12);

    for ( var i=0; i<=11; i++) { 

      if (TablaAreaTubosSeleccionada[i] !=  0) {
  
        CalculoSeccionOcupada[i] = 100*Ncond*SeccionConductor /TablaAreaTubosSeleccionada[i];
 
        if (CalculoSeccionOcupada[i] < AreaMaxima) {
           var IndiceElegido = i;
           var AreaMaxima = 0;       
        } 
 
        } else { CalculoSeccionOcupada[i] = 0;}
  
    };

    var TuboElegido = DiametroComercialTuberias(IndiceElegido) ;
    var FactorTuboElegido = Math.round(100*CalculoSeccionOcupada[IndiceElegido])/100;

    document.getElementById("Resultado1").innerHTML = "<center><strong>Diametro:<br>" + TuboElegido + " pulgadas</strong></center>";
    document.getElementById("Resultado1").style.color = "blue";
    document.getElementById("Resultado2").innerHTML = "<center><strong>Area Ocupada:<br> " + FactorTuboElegido + " %</strong></center>";
    document.getElementById("Resultado2").style.color = "blue";
    document.getElementById("Resultado3").style.fontSize = "15px";
    document.getElementById("Resultado3").innerHTML = "<center><strong>Criterio Selección:<br> NCond = 1, Amáx = 53% <br> NCond = 2, Amáx = 40% <br> NCond > 2, Amáx = 31% <br> Tabla 1, Cap 9, NEC </strong></center>";
    mostrarPopup();

  } 

}); 
// Fin de Canalizaciones Electricas

function mostrarPopup() {
  document.getElementById('popupContainer').style.display = 'flex';
}

function cerrarPopup() {
  document.getElementById('popupContainer').style.display = 'none';
}
// Fin Botones Calculos 

// Inicio Funciones Canalizaciones
AreaConductores = function (CalibreCable) {
  var Area;
 
     if (CalibreCable == "#14") { Area =8.97;};
     if (CalibreCable == "#12") { Area =11.7;};
     if (CalibreCable == "#10") { Area =15.7;};
     if (CalibreCable == "#8")  { Area =28.2;};
     if (CalibreCable == "#6")  { Area =46.8;};
     if (CalibreCable == "#4")  { Area =62.8;};
     if (CalibreCable == "#2")  { Area =86;};
     if (CalibreCable == "#1")  { Area =123;};
     if (CalibreCable == "#1/0"){ Area =143;};
     if (CalibreCable == "#2/0"){ Area =169;};
     if (CalibreCable == "#3/0"){ Area =201;};
     if (CalibreCable == "#4/0"){ Area =240;};
     if (CalibreCable == "250") { Area =297;};
     if (CalibreCable == "300") { Area =341;};
     if (CalibreCable == "350") { Area =384;};
     if (CalibreCable == "400") { Area =427;};
     if (CalibreCable == "500") { Area =510;};
     if (CalibreCable == "600") { Area =628;};
  
  return Area;

};

AreaTuberias = function (TipoTuberia) {
  const Area = Array.of(12);
  if (TipoTuberia == "EMT"){
    Area[0] =196;   //1/2"
    Area[1] =343;   //3/4"
    Area[2] =556;   //1"
    Area[3] =968;   //1 1/4"
    Area[4] =1314;  //1 1/2"
    Area[5] =2165;  //2"
    Area[6] =3783;  //2 1/2"
    Area[7] =5701;  //3"
    Area[8] =7451;  //3 1/2"
    Area[9] =9521;  //4"
    Area[10] =0;    //5"
    Area[11] =0;    //6"
      
  }

  if (TipoTuberia == "IMC"){
      Area[0] =222;   //1/2"
      Area[1] =377;   //3/4"
      Area[2] =620;   //1"
      Area[3] =1064;  //1 1/4"
      Area[4] =1432;  //1 1/2"
      Area[5] =2341;  //2"
      Area[6] =3308;  //2 1/2"
      Area[7] =5115;  //3"
      Area[8] =6822;  //3 1/2"
      Area[9] =8725;  //4"
      Area[10]=0;     //5"
      Area[11]=0;     //6"
    }    
    if (TipoTuberia == "RMC"){
      Area[0] =204;   //1/2"
      Area[1] =353;   //3/4"
      Area[2] =573;   //1"
      Area[3] =984;   //1 1/4"
      Area[4] =1333;  //1 1/2"
      Area[5] =2198;  //2"
      Area[6] =3137;  //2 1/2"
      Area[7] =4840;  //3"
      Area[8] =6461;  //3 1/2"
      Area[9] =8316;  //4"
      Area[10]=13050; //5"
      Area[11]=18821; //6"
    }
    
    if (TipoTuberia == "FMC"){
      Area[0] =204;   //1/2"
      Area[1] =343;   //3/4"
      Area[2] =527;   //1"
      Area[3] =824;   //1 1/4"
      Area[4] =1201;  //1 1/2"
      Area[5] =2107;  //2"
      Area[6] =3167;  //2 1/2"
      Area[7] =4560;  //3"
      Area[8] =6207;  //3 1/2"
      Area[9] =8107;  //4"
      Area[10]=0;     //5"
      Area[11]=0;     //6"
        
    }
    if (TipoTuberia == "PVC"){
      Area[0] =184;   //1/2"
      Area[1] =327;   //3/4"
      Area[2] =535;   //1"
      Area[3] =935;   //1 1/4"
      Area[4] =1282;  //1 1/2"
      Area[5] =2124;  //2"
      Area[6] =3029;  //2 1/2"
      Area[7] =4693;  //3"
      Area[8] =6277;  //3 1/2"
      Area[9] =8091;  //4"
      Area[10]=12748; //5"
      Area[11]=18433; //6"
        
    }
      
  return Area;
};

DiametroComercialTuberias = function (i) {
  var Diametro;
    if (i == 0 ){ Diametro = "1/2"; };
    if (i == 1 ){ Diametro = "3/4"; };
    if (i == 2 ){ Diametro = "1"; };
    if (i == 3 ){ Diametro = "1 1/4"; };
    if (i == 4 ){ Diametro = "1 1/2"; };
    if (i == 5 ){ Diametro = "2"; };
    if (i == 6 ){ Diametro = "2 1/2"; };
    if (i == 7 ){ Diametro = "3"; };
    if (i == 8 ){ Diametro = "3 1/2"; };
    if (i == 9 ){ Diametro = "4"; };
    if (i == 10){ Diametro = "5"; };
    if (i == 11){ Diametro = "6"; };
    
    return Diametro;

};
// Fin Funciones Canalizaciones

