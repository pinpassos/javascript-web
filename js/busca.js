const botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", () => {
    const response = xhr.responseText
    const pacientes = JSON.parse(response)
    
    console.log(typeof pacientes);
  });

  xhr.send();
});
