class Teclado{

    generarTeclado(){
        const miTeclado=document.getElementById("teclado");
        for(let i=65;i<=90;i++){
            if(i==79){
                const letra=String.fromCharCode(209);
                this.crearBoton(letra, miTeclado);
            }
            const letra=String.fromCharCode(i);
            this.crearBoton(letra, miTeclado);
        }
    }

    crearBoton(letra, contenedor){
        const btn=document.createElement("button");
        btn.id=letra;
        btn.textContent=letra;
        btn.classList.add("btn", "btn-primary","m-1");
        btn.addEventListener("click",()=>{this.presionarBoton(letra);});
        contenedor.appendChild(btn);
    }

    presionarBoton(){

    }

}

const teclado=new Teclado();
teclado.generarTeclado();
