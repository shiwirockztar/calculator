// alert("lets go!");
// include("decimal.js");

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
  var x = document.getElementById('x');


  var del = document.getElementById('del');
  var clear = document.getElementById('clear');
  var plus = document.getElementById('plus');//suma
  var minus = document.getElementById('minus');
  var multiply = document.getElementById('multiply');
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
  uno.onclick =    function(e){resultado.textContent = resultado.textContent  + "1";x.textContent = x.textContent  + "1";}
  dos.onclick =    function(e){resultado.textContent = resultado.textContent  + "2";x.textContent = x.textContent  + "2";}
  tres.onclick =   function(e){resultado.textContent = resultado.textContent  + "3";x.textContent = x.textContent  + "3";}
  cuatro.onclick = function(e){resultado.textContent = resultado.textContent  + "4";x.textContent = x.textContent  + "4";}
  cinco.onclick =  function(e){resultado.textContent = resultado.textContent  + "5";x.textContent = x.textContent  + "5";}
  seis.onclick =   function(e){resultado.textContent = resultado.textContent  + "6";x.textContent = x.textContent  + "6";}
  siete.onclick =  function(e){resultado.textContent = resultado.textContent  + "7";x.textContent = x.textContent  + "7";}
  ocho.onclick =   function(e){resultado.textContent = resultado.textContent  + "8";x.textContent = x.textContent  + "8";}
  nueve.onclick =  function(e){resultado.textContent = resultado.textContent  + "9";x.textContent = x.textContent  + "9";}
  cero.onclick =   function(e){resultado.textContent = resultado.textContent  + "0";x.textContent = x.textContent  + "0";}
  punto.onclick =  function(e){resultado.textContent = resultado.textContent  + ".";x.textContent = x.textContent  + ".";}

  clear.onclick = function(e){resetear();}
  del.onclick = function(e){resultado.textContent =resultado.textContent.replace(/.$/, '');x.textContent=x.textContent.replace(/.$/, '');}
  // equal.onclick = function(e){operandob = resultado.textContent;resolver();}

// -------------------- suma --------------------
  plus.onclick = function(e){resultado.textContent = resultado.textContent + "+";numeros.push(x.textContent);x.textContent = "";operaciones.push("+");}
// -------------------- resta --------------------
  minus.onclick = function(e){resultado.textContent = resultado.textContent + "-";numeros.push(x.textContent);x.textContent = "-";operaciones.push("-");}
  // -------------------- multiplicacion --------------------
  multiply.onclick = function(e){resultado.textContent = resultado.textContent + "X";numeros.push(x.textContent);x.textContent = "";operaciones.push("X");}
// ------------------ limpiar ------------------
  function limpiar(){resultado.textContent = ""; numeros=[];operaciones=[];}

  equal.onclick = function(e){
      // resolver();
      numeros.push(x.textContent);x.textContent = "";
      filtrar();//resultado de hacer del a operaciones
      igualar();
      // limpiar();
  }


  let totalP=0,sum=0,totalN=0;

// ---------------------------------- proceso (=) igual ----------------------------------
  function igualar(){
  operaciones.forEach(multiplicar);
  numeros.forEach(sumatoria);

  respuesta.textContent = sum;
  sum=0;}
// ------------------------------fin proceso (=) igual ----------------------------------


// --------------------------------------- multiplicaciones  ---------------------------------------
let n;

function multiplicar(item,n=0){
  if (item=="X") {
    operaciones.splice(n, 1);  //se borra la operacion X
    numeros[n]=numeros[n]*numeros[n+1];numeros.splice(n+1, 1);  //
  }
  else{}
  n++;}
 // --------------------------------------fin de multiplicaciones  --------------------------------------


// ----------------------------------------- inicio de sumatoria      ------------------------------------
  function sumatoria(item){
  sum=new Decimal(parseFloat(item)).plus(sum).toNumber ();  // numeroD+sum
  console.log("la suma va en ",sum);
  return sum;}
// ----------------------------------------- fin de sumatoria      ------------------------------------


// --------------------------------- inicio de reset ---------------------------------
  function resetear(){
  resultado.textContent = "";x.textContent="";//"???"
  // text.replace("???","");
  operandob = 0;
  operandoa = 0;
  operacion = "";numeros=[];operaciones=[];
  }
// --------------------------------- fin de reset ---------------------------------

// ------------------------------------------ filtrar ------------------------------------------

function filtrar(){

  numeros =numeros.filter(check);

  function check(filt) {
    return filt != "";
  }

}



// --------------------------------------- fin de filtrar ---------------------------------------


 // sum=0;
  //  console.log("los numeros son",numeros);

  // numeros.forEach(sumatoria);
  // console.log("suma final dio",sum);