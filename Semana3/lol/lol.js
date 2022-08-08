class campeon{
    constructor(nombre, vida, ataque, mana, habilidades, fuerte1, fuerte2, tipo){
        this.ataque=ataque;
        this.nombre= nombre;
        this.vida= vida;
        this.mana= mana;
        this.habilidades= habilidades;
        this.fuerte1= fuerte1;
        this.fuerte2= fuerte2;
        this.tipo= tipo;
    };

    presentar(){
        console.log('Me llamo ' + this.nombre + ' y soy un campeón de LOL');
        console.log('Mis estadísticas son... vida:' + this.vida + ', ataque:'+ this.ataque + ', maná:' + this.mana);
        console.log('Estas son mis habilidaes: ' + this.habilidades);
    }   

    comparar(campeon){
        if(campeon.tipo == this.tipo){
            console.log("Gana el mas pro");
        }
        else if (campeon.tipo == this.fuerte1 || campeon.tipo == this.fuerte2){
            console.log("Tienes ventaja, aprovecha :0");
        }
        else{
            console.log("Tienes desventaja, a darle con todo");
        }
    }
}

    class tanque extends campeon{
        constructor(nombre, vida, ataque, mana, habilidades, fuerte1, fuerte2, tipo, armadura){
            super(nombre, vida, ataque, mana, habilidades, fuerte1, fuerte2, tipo)
            this.armadura=armadura;
        }
        multiplicador() {   
            if(this.tipo = tanque){
                let plus =(this.vida * .24); 
                let multi = (this.vida + plus);
                return console.log("Con el multiplicador mi vida aumenta a: " + multi);
            }
            else{
                console.log("no hay multiplicador");
            }
        }
    }

    class asesino extends campeon{
        constructor(nombre, vida, ataque, mana, habilidades, fuerte1, fuerte2, tipo){
            super(nombre, vida, ataque, mana, habilidades, fuerte1, fuerte2, tipo)
        }
        multiplicador() {   
            if(this.tipo = asesino){
                let plus =(this.ataque * .30); 
                let multi = (this.ataque + plus);
                let men = (this.vida * .05);
                let menos = (this.vida - men);
                return console.log("Con el multiplicador mi ataque aumenta a: " + multi + " y mi vida disminuye de a: "+ menos);
            }
            else{
                console.log("no hay multiplicador");
            }
        }
    }   

    class luchador extends campeon{
        constructor (nombre, vida, ataque, mana, habilidades, fuerte1, fuerte2, tipo, movilidad){
            super (nombre, vida, ataque, mana, habilidades, fuerte1, fuerte2, tipo)
            this.movilidad=movilidad;
        }
        multiplicador() {   
            if(this.tipo = luchador){
                let plus1 =(this.ataque * .15); 
                let multi1 = (this.ataque + plus1);
                let plus2 = (this.vida * .15);
                let multi2 = (this.vida + plus2);
                return console.log("Con el multiplicador mi ataque aumenta a: " + multi1 + " y mi vida aumenta a: "+ multi2);
            }
            else{
                console.log("no hay multiplicador");
            }
        }
    }

    class tirador extends campeon{
        constructor (nombre, vida, ataque, mana, habilidades, fuerte1, fuerte2, tipo, distancia){
            super (nombre, vida, ataque, mana, habilidades, fuerte1, fuerte2, tipo)
            this.distancia=distancia;
        }
        multiplicador() {   
            if(this.tipo = tirador){
                let plus =(this.ataque * .24); 
                let multi = (this.ataque + plus);
                return console.log("Con el multiplicador mi ataque aumenta a: " + multi);
            }
            else{
                console.log("no hay multiplicador");
            }
        }
    }
    
    class mago extends campeon{
        constructor (nombre, vida, ataque, mana, habilidades, fuerte1, fuerte2, tipo, distancia){
            super (nombre, vida, ataque, mana, habilidades, fuerte1, fuerte2, tipo)
            this.distancia=distancia;
        }
        multiplicador() {   
            if(this.tipo = mago){
                let plus =(this.mana * .24); 
                let multi = (this.mana + plus);
                return console.log("Con el multiplicador mi maná aumenta a: " + multi);
            }
            else{
                console.log("no hay multiplicador");
            }
        }
    }

    const Blitzcrank = new tanque('Blitzcrank', 2198, 121.5, 947, ['Barrera de maná', ' Agarre cohete', ' Sobremarcha', ' Puño de poder', ' Campo estatico'], 'mago', 'asesino', 'tanque', 100);
    const Viego = new asesino('Viego', 2175, 114.5, 0, ['Dominio del soberano', ' Espada del rey arruinado', ' Fauces espectrales', ' Sendero arruinado', ' Rompecorazones'], 'mago', 'tirador', 'asesino');
    const Riven = new luchador('Riven', 2022, 115, 0, ['Espada rúnica', ' Alas rotas', ' Estallido de ki', ' Valor', ' Espada del exilio'], 'asesino', 'tanque', 'luchador', 340);
    const Twitch = new tirador('Twitch', 2074, 111.87, 967, ['Veneno mortal', ' Emboscada', ' Tonel de veneno', ' Contaminar', ' Lluvia de proyectiles'], 'tanque' , 'luchador', 'tirador', 330);
    const Karma = new mago ('Karma', 2149, 107.1, 1224, ['Fuego reunificador', ' Llama interna', ' Resolución enfocada', ' Inspiración', ' Mantra'], 'tirador', 'luchador','mago', 335);