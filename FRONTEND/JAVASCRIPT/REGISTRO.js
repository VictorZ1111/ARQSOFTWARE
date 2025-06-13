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

    // Envía los datos al backend
    fetch('http://localhost:3000/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert('Error al registrar cliente: ' + data.error);
        } else {
            alert('CLIENTE REGISTRADO CORRECTAMENTE');
            document.getElementById("formRegistro").reset();
        }
    })
    .catch(error => {
        alert('Error de conexión con el backend');
    });

    return false; // Evita el envío tradicional del formulario
}
