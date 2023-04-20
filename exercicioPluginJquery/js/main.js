$("document").ready(function () {
  $("form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telephone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      address: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      name: "Este campo é obrigatório!",
      email: "Este campo é obrigatório!",
      telephone: "Este campo é obrigatório!",
      cpf: "Este campo é obrigatório!",
      address: "Este campo é obrigatório!",
      cep: "Este campo é obrigatório!",
    },
  });

  $("#telephone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");
});
