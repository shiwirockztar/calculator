// alert("lets go!");


  //Declaramos variables
  let numeros=[];
  let operaciones=[];
  var operandoa;
  var operandob;
  var operacion;
  function init(){
  //variables
  var resultado = document.getElementById('resultado');
  var respuesta = document.getElementById('respuesta');

  var del = document.getElementById('del');
  var clear = document.getElementById('clear');
  var plus = document.getElementById('plus');//suma
  var minus = document.getElementById('minus');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var equal = document.getElementById('equal');//igual

  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
  var punto = document.getElementById('punto');
  }

   //Eventos de clicke
  uno.onclick =    function(e){resultado.textContent = resultado.textContent  + "1";}
  dos.onclick =    function(e){resultado.textContent = resultado.textContent  + "2";}
  tres.onclick =   function(e){resultado.textContent = resultado.textContent  + "3";}
  cuatro.onclick = function(e){resultado.textContent = resultado.textContent  + "4";}
  cinco.onclick =  function(e){resultado.textContent = resultado.textContent  + "5";}
  seis.onclick =   function(e){resultado.textContent = resultado.textContent  + "6";}
  siete.onclick =  function(e){resultado.textContent = resultado.textContent  + "7";}
  ocho.onclick =   function(e){resultado.textContent = resultado.textContent  + "8";}
  nueve.onclick =  function(e){resultado.textContent = resultado.textContent  + "9";}
  cero.onclick =   function(e){resultado.textContent = resultado.textContent  + "0";}
  punto.onclick =   function(e){resultado.textContent = resultado.textContent  + ".";}

  clear.onclick = function(e){resetear();}
  del.onclick = function(e){resultado.textContent =resultado.textContent.replace(/.$/, '');}
  // equal.onclick = function(e){operandob = resultado.textContent;resolver();}

// -------------------- suma --------------------
  plus.onclick = function(e){resultado.textContent = resultado.textContent + "+";}
// -------------------- resta --------------------
  minus.onclick = function(e){resultado.textContent = resultado.textContent + "-";}
// ------------------ limpiar ------------------
  function limpiar(){resultado.textContent = "";}

  equal.onclick = function(e){
      // resolver();
      igualar();
      // limpiar();
  }


// ---------------------------------- proceso (=) igual ----------------------------------
  let totalP=0,sum=0,totalN=0;

  function igualar(){
    let text = resultado.textContent.split("+"); 
    text.forEach(operator);
    respuesta.textContent = totalP-totalN;//al final del proceso antes de borrar el resultado se muestra
    sum=0,totalN=0,totalP=0;}


  function operator(item){
    if (item.search("-")<0) { 
       totalP+=parseFloat(item);}
    else  {
       let element=item.split("-");
       totalP+=parseFloat(element[0]);
       element.forEach(sumatoria);
       totalN+=(sum)-(parseFloat(element[0]));
      sum=0;}
  }


  function sumatoria(item){
  sum+=parseFloat(item);
  console.log("la suma va en ",sum);
  return sum;}
// --------------------------------- fin de proceso igual ---------------------------------


  function resetear(){
  resultado.textContent = "";//"ㅤ"
  // text.replace("ㅤ","");
  operandob = 0;
  operandoa = 0;
  operacion = "";
  }



// ----------------------------------------------------
