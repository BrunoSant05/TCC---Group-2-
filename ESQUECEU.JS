document.addEventListener("DOMContentLoaded", function() {
    const opcaoSelect = document.getElementById("opcao");
    const emailField = document.getElementById("email_opcao");
    const telefoneField = document.getElementById("tel_opcao");
  
    opcaoSelect.addEventListener("change", function() {
      if (opcaoSelect.value === "email") {
        emailField.style.display = "block";
        telefoneField.style.display = "none";
      } else if (opcaoSelect.value === "telefone") {
        telefoneField.style.display = "block";
        emailField.style.display = "none";
      }
    });
  });

  
  $(document).ready(function(){
    $('#telefone').inputmask('+99 (99) 99999-9999');
 });