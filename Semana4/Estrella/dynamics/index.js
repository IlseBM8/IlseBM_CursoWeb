const canvas = document.getElementById("can-estrella");
const ctx = canvas.getContext("2d"); 

const rellenar = document.getElementById("rellenar");

var puntos = 16;
var puntosViejo;
var circulo1 = 50;
var circulo1Viejo;

ctx.strokeStyle="#000000";      
var colorViejo;

ctx.fillStyle="#000000";

var rellenarse = false;
//var relleno;
var rellenarseViejo;

estrella();


//---------------------------------------------------Eventos--------------------------------------------------------------------------
 picos.addEventListener("keyup", ()=>{
    const picos = document.getElementById("picos").value; //se guarda el valor de los picos
//     console.log(picos)
    if(picos >=4 && picos <=30){
        puntosViejo = puntos;
        puntos = picos * 2;
        if(puntosViejo != puntos){
            borrar(); 
        }
        estrella();       
    } 
})

picudo.addEventListener("change", ()=>{
    const picudo = document.getElementById("picudo").value; //se guarda el valor del rango
    console.log(picudo);
    circulo1Viejo = circulo1;

    circulo1 = picudo;
    console.log("circulo viejo" +circulo1Viejo)
    if(circulo1Viejo != circulo1){
        borrar();
    }
    estrella(); 
})

color.addEventListener("change", ()=>{
    const color = document.getElementById("color").value; //se guarda el valor del color
    console.log(color);
    //if(rellenarse == false){
        //colorViejo = color;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;

        estrella();
  
})



rellenar.addEventListener("click", ()=>{
    
    if(rellenarse === false){
        rellenarse = true;
        console.log(rellenarse)

    }
    else{
        rellenarse = false;
        console.log(rellenarse)
    }
    
    estrella();
    
})


function estrella(){
    var centro = 450/2; //es un cuadrado
    const circulo2 = 200; 
    var g= (Math.PI * 2) / puntos;  //360° = 2pi Radianes

    var circulo = false;
    var l;
    var dif;
    var x;
    var y; 
    ctx.lineWidth=4;
    ctx.beginPath();

    for( var i=0; i<puntos +1; i++){ //recorre todos los vertices
        if(circulo===true){ 
            l=circulo1; //toma el primer circulo
            circulo=false; //va alternando entre los dos circulos 
        } 
        else{
            l=circulo2; // toma el segundo circulo
            circulo=true; //va alternando
        }
        dif= i*g; //por cada lado
        x=l * Math.cos(dif) + centro; //hacia el centro 
        y=l * Math.sin(dif) + centro; 
        ctx.lineTo(x,y);
    }


    if(rellenarse == false){
        ctx.stroke();
    
    }
    else{

        ctx.fill();
        
        
    }
    ctx.closePath();
}

function borrar(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}