function agregarDatos() {
    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById("nombre").value;
    const dni = document.getElementById("dni").value;
    const sexo = document.getElementById("sexo").value;
    const telefono = document.getElementById("telefono").value;
  
    // Crear una nueva fila en la tabla con los datos ingresados
    const tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0];
    const nuevaFila = tabla.insertRow();
    const celdaNombre = nuevaFila.insertCell();
    const celdaDNI = nuevaFila.insertCell();
    const celdaSexo = nuevaFila.insertCell();
    const celdaTelefono = nuevaFila.insertCell();
    celdaNombre.innerHTML = nombre;
    celdaDNI.innerHTML = dni;
    celdaSexo.innerHTML = sexo;
    celdaTelefono.innerHTML = telefono;
  
    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("sexo").value = "masculino";
    document.getElementById("telefono").value = "";
  }
  