const inicio = document.getElementById("iniciar");
const contenedor = document.getElementById("contenedor")
const minCont = document.getElementById("minCont");
const segCont = document.getElementById("segCont");
const loMinutos = document.getElementById("loMinutos");
const loSegundos = document.getElementById("loSegundos");
const detener = document.getElementById("detener");
const AfricanDrums = new Audio("./statics/media/AfricanDrums.mp3")

var minutos=0;
let segundos=0;
let contador;

minutosV.addEventListener("blur",()=>{
    const minutosV = document.getElementById("minutosV").value;
    //si los minutos ingresados son mayor a 59 entonces se pone 59
    if(minutosV > 59){
        minutos=59
        if(minutos >= 10){
            loMinutos.innerHTML = "<p id='minCont' class='numeritos'>"+ minutos +"</p>" 
        }
        else{
            loMinutos.innerHTML = "<p id='minCont' class='numeritos'>0"+ minutos +"</p>"   
        }
    }
    //si los minutos ingresados son menor o igual a 0 entonces se pone 00
    else if(minutosV <= 0){
        minutos=0
        if(minutos >= 10){
            loMinutos.innerHTML = "<p id='minCont' class='numeritos'>"+ minutos +"</p>" 
        }
        else{
            loMinutos.innerHTML = "<p id='minCont' class='numeritos'>0"+ minutos +"</p>"   
        }      
    }
    // pasa si los minutos estan en el rango de 1-59 
    else{
        minutos = minutosV;
        if(minutos >= 10){
            loMinutos.innerHTML = "<p id='minCont' class='numeritos'>"+ minutos +"</p>" 
        }
        else{
            loMinutos.innerHTML = "<p id='minCont' class='numeritos'>0"+ minutos +"</p>"   
        }   
    }
    
})

segundosV.addEventListener("blur", ()=>{
    const segundosV = document.getElementById("segundosV").value
    //si los segundos ingresados son mayor a 59 entonces se pone 59
    if(segundosV > 59 ){
        segundos=59
        if(segundos >= 10){
            loSegundos.innerHTML = "<p id='segCont' class='numeritos'>"+ segundos +"</p>" 
        }
        else{
            loSegundos.innerHTML = "<p id='segCont' class='numeritos'>0"+ segundos +"</p>"   
        }
    }
    //si los segundos ingresados son menor o igual a 0 entonces se pone 00
    else if(segundosV <= 0){
        segundos=0
        if(segundos >= 10){
            loSegundos.innerHTML = "<p id='segCont' class='numeritos'>"+ segundos +"</p>" 
        }
        else{
            loSegundos.innerHTML = "<p id='segCont' class='numeritos'>0"+ segundos +"</p>"   
        }
    }
    // pasa si los segundos estan en el rango de 1-59 
    else{
        segundos = segundosV;
        if(segundos >= 10){
            loSegundos.innerHTML = "<p id='segCont' class='numeritos'>"+ segundos + "</p>"
        }
        else{
            loSegundos.innerHTML = "<p id='segCont' class='numeritos'>0"+ segundos + "</p>"  
        }
    }
    
})

 reloj();

function reloj(){
    inicio.addEventListener("click", ()=>{
        let fin ;
        let min = minutos*60*1000;
        let seg=segundos*1000
        let tiempo = min + seg;
        let contSeg=segundos-1;
        let contMin=minutos-1;
 
        //ocurre cada segundo
        contador = setInterval(()=>{
            //si escogen segundos en 0 automaticamente se cambiara a 59 y los minutos se restaran
            if(contSeg === -1){
                contSeg = 59;
                if(contMin >= 10){
                    loMinutos.innerHTML = "<p id='minCont' class='numeritos'>"+ contMin -- +"</p>"   
                }
                else{
                    loMinutos.innerHTML = "<p id='minCont' class='numeritos'>0"+ contMin -- +"</p>"    
                } 
            }
            //se le resta 1 a los segundos
            if(contSeg >= 10){
                loSegundos.innerHTML = "<p id='minCont' class='numeritos'>"+ contSeg-- + "</p>"
            }   
            else{
                loSegundos.innerHTML = "<p id='minCont' class='numeritos'>0"+ contSeg-- + "</p>"
            }
            //si los segundos llegan a 0 entonces se convierten en 59 y los minutos se restan
            if(contSeg < 0 && contSeg != -1){
                contSeg = 59;
                if(contMin >= 10){
                    loMinutos.innerHTML = "<p id='minCont' class='numeritos'>"+ contMin -- +"</p>"  
                }  
                else{
                    loMinutos.innerHTML = "<p id='minCont' class='numeritos'>0"+ contMin -- +"</p>"    
                } 
            }
    },1000)

    //si se apreta el boton de detener, se detendrá el contador pero falta hacer que se pare el setTimeout
    detener.addEventListener("click", ()=>{
        clearInterval(contador);   
        clearTimeout(fin); 
    })

    //cuando pasa el tiempo establecido se para
    fin = setTimeout(()=>{
        clearInterval(contador);
        AfricanDrums.play()
        AfricanDrums.addEventListener("ended", ()=>{
            alert("Sonido de la alarma: African Drums (Sting) de Twin Musicom está sujeta a una licencia de Atribución 4.0 de Creative Commons. https://creativecommons.org/licenses/by/4.0/ Artista: http://www.twinmusicom.org/")


        })
    },tiempo)

  
})
  }




/*
African Drums (Sting) de Twin Musicom está sujeta a una licencia de Atribución 4.0 de Creative Commons. https://creativecommons.org/licenses/by/4.0/

Artista: http://www.twinmusicom.org/*/  