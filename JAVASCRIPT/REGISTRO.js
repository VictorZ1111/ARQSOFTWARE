function validarFormulario() {
    var cedula = document.getElementById("cedula").value.trim();
    var apellidos = document.getElementById("apellidos").value.trim();
    var nombres = document.getElementById("nombres").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var email = document.getElementById("email").value.trim();

    if (
        cedula === "" ||
        apellidos === "" ||
        nombres === "" ||
        telefono === "" ||
        email === ""
    ){
        alert("POR FAVOR, COMPLETE TODOS LOS CAMPOS");
    }

    // Crea objeto cliente
    var cliente = {
        cedula: cedula,
        apellidos: apellidos,
        nombres: nombres,
        telefono: telefono,
        email: email
    };

    // Obtener clientes existentes 
    var clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    // Agrega nuevo cliente
    clientes.push(cliente);

    // Guarda en localStorage
    localStorage.setItem("clientes", JSON.stringify(clientes));

    alert("CLIENTE REGISTRADO CORRECTAMENTE");

    // Limpia formulario
    document.getElementById("formRegistro").reset();

}
