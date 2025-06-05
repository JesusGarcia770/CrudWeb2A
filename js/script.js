//Endpoint de Integrantes - API
const API_URL = "https://retoolapi.dev/3u9Ytp/integrantes";

//Funcion que manda a traer el JSON con GET
async function ObtenerIntegrantes() {
    //Solicitar la respuesta de el servidor
    const respuesta = await fetch(API_URL);

    //Pasamos a JSON la respuesta de el servidor
    const data = await respuesta.json(); //Esto es un JSON

    //Enviamos el JSON  a la funcion
    MostrarDatos(data);
}

//Función para crear las filas de la tabla en base de JSON
//"datos" representara al JSON de donde viene la informacion
function MostrarDatos(datos){

    //Se llama a la tabla con el elemento "id" y luego por el tbody
    const tabla = document.querySelector("#tabla tbody");

    //Para injectar codigo HTML usamos "innerHTML"
    tabla.innerHTML = ""; //Vaciamos el contenido de la tabla
    
    datos.forEach(integrante => {
        tabla.innerHTML += `
            <tr>
                <td>${integrante.id}</td>
                <td>${integrante.nombre}</td>
                <td>${integrante.apellido}</td>
                <td>${integrante.correo}</td>
                <td>
                    <button>Editar</button>
                    <button>Eliminar</button>
                </td>
            </tr>
        `;
    });
}

ObtenerIntegrantes();




const modal = document.getElementById("mdAgregar");

const btnAgregar = document.getElementById("btnAgregar");
const btncerrar = document.getElementById("btnCerrar");

btnAgregar.addEventListener("click", ()=>{
    modal.showModal();

});

btncerrar.addEventListener("click",()=>{
    modal.close();
});

document.getElementById("frmAgregar").addEventListener("submit", async e => {
    e.preventDefault();

    const Nombre = document.getElementById("txtNombre").Value.trim();
    const Apellido = document.getElementById("txtEmail").Value.trim();
    const correo = document.getElementById("txtEmail").Value.trim();

    if(!Nombre || !Apellido || !correo){
        alert("ingrese los valores correctamente");
        return;
    }

    //Llamar a la api para enviar el registro
    const respuesta = await fetch(API_URL, {method: "post",
        
    });


});



