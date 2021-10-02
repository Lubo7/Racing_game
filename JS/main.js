//Declaracion de la clase

class Coche {

    constructor(marca, modelo, velocidad){
        this.marca = marca,
        this.modelo = modelo,
        this.velocidad = velocidad
    }

}

let c1 = new Coche("Mercedes","Clase A", 0);
let c2 = new Coche("Ford","Probe",0);

let coche1 = "";
let coche2 = "";

let traductorCoches = {
    "mercedes" : c1,
    "ford" : c2
}

const cambiarPantalla = (pantallaDestino) => {

    //Primer paso, generamos array con todas las fases

    let arrayDeFases = ["1","2","3","4"];

    //Filtramos el array que contiene las fases, le quitamos el valor que corresponde
    //a la pantalla de destino
    arrayDeFases = arrayDeFases.filter(iterador => !pantallaDestino.includes(iterador));

    //Asignamos el valor de estilo block al display de aquella section que queremos
    //que sea visible
    document.getElementById(pantallaDestino).style.display = "block";

    for (let cadaPosicion of arrayDeFases) {
        
        document.getElementById(cadaPosicion).style.display = "none";

    }
    
}

const seleccionarCoche = (cocheElegido) => {

    if(coche1 != ""){
        coche2 = traductorCoches[cocheElegido];

        console.log("El coche 1 es .... ",coche1);
        console.log("El coche 2 es .... ",coche2);
        
        setTimeout(()=>{
            cambiarPantalla("3");
        },500)
        
        
    } else {

        coche1 = traductorCoches[cocheElegido];

    }
    
}