// todos los datos recuperados del html
const materia = document.getElementById("materia");
const nuevaMat = document.getElementById("nuevaMat");
const nombre = document.getElementById("nombre");
const agregar = document.getElementById("agregar");
const tareas = document.getElementById("tareas");
const eliminar = document.getElementsByClassName("eliminar");
const completado = document.getElementsByClassName("completado");
const info= document.getElementsByClassName("info");
const noCompletado = document.getElementsByClassName("noCompletado");
const contador = document.getElementById("contador");
let total = 0;
let hechas = 0;
let arrMat =['CursoWeb', 'cursoweb', 'Otro', 'otro'];
let existe;

// funcion para saber que opcion escogió el usuario
function escoger (){
    var escoger = document.getElementById("materia").value;
    if(escoger == 'otro'){
        nuevaMat.style="display: block;"
    }
    else {
        nuevaMat.style="display: none;"
    }
}
// en caso de que sea una nueva materia entonces se agregará al div tareas
function nueva(){
    if(nuevaMat != ""){
        tareas.innerHTML += '<div class="info"> <button class="completado">Marcar como completada</button> <button class="eliminar">Eliminar</button><p>' + nuevaMat.value + ': ' + nombre.value + '</p> </div>'; 
    }
}

//cuando el usuario de click el select se ejecutará la funcion escoger
materia.addEventListener("click", ()=>{
    escoger();
    
});

// se agregaran las tareas dependiendo del caso seleccionado
agregar.addEventListener("click", (evento) =>{
    var escoger = document.getElementById("materia").value;
    //verifica que se haya escrito el nombre de la tarea
    if(nombre.value != ""){
        //en caso de escoger otro se agregara la materia al select
        if(escoger == 'otro'){
            //verifica que se haya escrito el nombre de la materia
            if(nuevaMat.value != ""){  
                nuevaMat.style="display: none;"
                //verificar que la materia nueva no exista
                console.log(arrMat)
                //si la nueva materia ya existe entonces se mandara una alerta
                if(arrMat.includes(nuevaMat.value)){
                    console.log("si")
                    alert("La materia ya existe");
                }
                //si la nueva materia no existe entonces continuara el programa 
                else{
                    console.log("no")
                    arrMat.push(nuevaMat.value); 
                    tareas.innerHTML += '<div class="info"> <button class="completado">Marcar como completada</button> <button class="eliminar">Eliminar</button><p>' + nuevaMat.value + ': ' + nombre.value + '</p> </div>';
                    nuevaMat.style="display: none;" 
                    materia.innerHTML += '<option id="'+ nuevaMat.value +'" value="'+ nuevaMat.value +'" selected="true">'+ nuevaMat.value +'</option>';
                    total+= 1;
                    
                }
            }
            else{
                alert("Por favor llene los datos");
            }
        }
        //esto ocurre en caso de escoger materia existente 
        else{
            nuevaMat.style="display: none;"
            tareas.innerHTML += '<div class="info"> <button class="completado">Marcar como completada</button> <button class="eliminar">Eliminar</button><p>' + materia.value + ': ' + nombre.value + '</p> </div>'; 
            total+= 1;
        }
    }
    else{
        alert("Por favor llene los datos");
    }
    //se llama a la función para que sume las tareas totales
    tareasTotal();
    // llama a la función para que ponga el contador de tareas
    contarTareas();
    contador.style.display="block";
});

// evento para que se eliminen las tareas
tareas.addEventListener("click", (evento)=> {
    if(evento.target.className === 'eliminar'){
        evento.target.parentElement.outerHTML='';
        total -= 1; 
        
    }
    //se llama a la función para que elimine las tareas totales
    tareasTotal();
    // llama a la función para que ponga el contador de tareas
    contarTareas();
});

//evento para que se marquen tareas completadas o no completadas
tareas.addEventListener("click", (evento) =>{
    if(evento.target.className === 'completado'){
        evento.target.parentElement.style.backgroundColor ="#c6b4ce";
        evento.target.outerHTML='<button class="noCompletado">Marcar como no completada</button>';
        hechas += 1;
    }
        else if(evento.target.className === 'noCompletado'){
            evento.target.parentElement.style.backgroundColor ="#e6d0f1";
            evento.target.outerHTML='<button class="completado">Marcar como completada</button>';
            hechas -= 1;
        }
    // llama a la función para que cuente las tareas hechas
    tareasHechas();
    // llama a la función para que ponga el contador de tareas
    contarTareas();
});

//contador tareas totales
function tareasTotal(){
    console.log(total);
}

// contador tareas hechas
function tareasHechas(){
    console.log(hechas);
}

// contador de tareas
function contarTareas(){
    //si no hay tareas elimina el contador
    if(total != 0){
     contador.innerHTML = hechas +" tareas completadas de "+ total;
    }
    else{
        contador.style.display="none";
    }
 }