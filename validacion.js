(() => {
  const inputs = document.querySelectorAll("input");
  const textarea = document.querySelector("textarea");

  inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
      valida(input.target);
    });
  });
  textarea.addEventListener("blur", (input) => {
    valida(input.target);
  });

  function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }
  }

  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];

  const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacio",
    },
    email: {
      valueMissing: "El campo email no puede estar vacio",
      typeMismatch: "El correo no es valido (ej: nombre@empresa.com)",
    },
    asunto: {
      valueMissing: "El campo asunto no puede estar vacio",
    },
    mensaje: {
      valueMissing: "El campo mensaje no puede estar vacio",
    },
  };

  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });

    return mensaje;
  }
})();
