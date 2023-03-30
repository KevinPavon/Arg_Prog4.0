$(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault(); // Evita que el formulario se envíe
  
      // Verifica que los campos no estén vacíos
      if ($("#nombre").val() === "") {
        $("#nombre").after("<span class='error'>Completar este campo</span>");
      }
      if ($("#apellido").val() === "") {
        $("#apellido").after("<span class='error'>Completar este campo</span>");
      }
      if ($("#email").val() === "") {
        $("#email").after("<span class='error'>Completar este campo</span>");
      }
      if ($("#telefono").val() === "") {
        $("#telefono").after("<span class='error'>Completar este campo</span>");
      }
    });
  
    // Remueve el mensaje de error cuando se modifica el campo
    $("input").on("input", function() {
      $(this).next(".error").remove();
    });
  });
  