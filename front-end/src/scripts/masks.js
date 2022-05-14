 
 
 function infoCartaoNumero(campo, campoCartao, campoErro) {

    campoErro.innerHTML = "";

    campo.value = campo.value
      .replace(/\D+/g, '')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})\d+?$/, '$1');

    if (campo.value.length == 0) {
      campoCartao.innerHTML = "0000 0000 0000 0000";
      campoErro.innerHTML = "Insira o número do cartão";
    } else {
      campoCartao.innerHTML = campo.value;
    }
  }

  function infoCartaoNome(campo, campoCartao, campoErro) {

    campoErro.innerHTML = "";

    campo.value = campo.value
      .replace(/\d+/g, '');
    if (campo.value.length == 0) {
      campoCartao.innerHTML = "Jhon Doe";
      campoErro.innerHTML = "Insira o nome no cartão";
    } else {
      campoCartao.innerHTML = campo.value;
    }
  }

  function infoCartaoValidade(campo, campoCartao, campoErro) {

    campoErro.innerHTML = "";

    campo.value = campo.value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1');

    if (campo.value.length == 0) {
      campoCartao.innerHTML = "12/21";
      campoErro.innerHTML = "Insira a validade do cartão";
    } else {
      campoCartao.innerHTML = campo.value;
    }

  }

  function infoCartaoCvv(campo, campoCartao, campoErro) {

    campoErro.innerHTML = "";

    campo.value = campo.value.replace(/\D+/g, '');
    if (campo.value.length == 0) {
      campoCartao.innerHTML = "123";
      campoErro.innerHTML = "Insira o código de validação do cartão";
    } else {
      campoCartao.innerHTML = campo.value;
    }

  }

  formClientes.onsubmit = function (e) { e.preventDefault(); validarCamposCliente(); }

  razaoSocialInput.onkeyup = function () {

    if (razaoSocialInput.value.length == 0) {
      razaoSocialErro.innerHTML = "Insira a razão social";
    } else {
      razaoSocialErro.innerHTML = "";
      razaoSocialOK = true;
    }

  }

  logradouroInput.onkeyup = function () {

    if (logradouroInput.value.length == 0) {
      logradouroErro.innerHTML = "Insira um logradouro";
    } else {
      logradouroErro.innerHTML = "";
      logradouroOK = true;
    }
  }

  numeroEnderecoInput.onkeyup = function () {

    if (numeroEnderecoInput.value.length == 0) {
      numeroEnderecoErro.innerHTML = "Insira o número do endereço";
    } else {
      numeroEnderecoOK = true;
      numeroEnderecoErro.innerHTML = "";
    }

  }

  bairroInput.onkeyup = function () {

    if (bairroInput.value.length == 0) {
      bairroErro.innerHTML = "Insira um bairro";
    } else {
      bairroOK = true;
      bairroErro.innerHTML = "";
    }

  }

  estadoInput.onkeyup = function () {

    if (estadoInput.value.length == 0) {
      estadoErro.innerHTML = "Insira um estado";
    } else {
      estadoOK = true;
      estadoErro.innerHTML = "";
    }

  }

  cidadeInput.onkeyup = function () {

    if (cidadeInput.value.length == 0) {
      cidadeErro.innerHTML = "Insira uma cidade";
    } else {
      cidadeOK = true;
      cidadeErro.innerHTML = "";
    }

  }

  function mascaraCnpj() {

    if (cnpjInput.value.length == 0) {
      cnpjErro.innerHTML = "Insira um CNPJ";
    } else {
      cnpjOK = true;
      cnpjErro.innerHTML = "";
    }

    cnpjInput.value = cnpjInput.value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');

  }

  function mascaraNomeRepresentante() {

    if (nomeRepresentanteInput.value.length == 0) {
      nomeRepresentanteErro.innerHTML = "Insira o nome do representante ";
    } else {
      nomeRepresentanteOK = true;
      nomeRepresentanteErro.innerHTML = "";
    }

    nomeRepresentanteInput.value = nomeRepresentanteInput.value
      .replace(/\d+/g, '');

  }

  function mascaraCpf() {

    cpfRepresentanteInput.value = cpfRepresentanteInput.value
      .replace(/\D+/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');

  }

  function testarCpf() {
    let cpf = cpfRepresentanteInput.value.replace(/\D+/g, '');
    let soma = 0;
    let resto;

    if (!cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999") {
      cpfRepresentanteErro.innerHTML = "Insira um CPF válido";
    }

    for (var i = 1; i <= 9; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;
    }

    if (resto == 10 || resto == 11) {
      resto = 0;
    }

    if (resto != parseInt(cpf.substring(9, 10))) {
      cpfRepresentanteErro.innerHTML = "Insira um CPF válido";
    }

    soma = 0;

    for (var i = 1; i <= 10; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;
    }

    if (resto == 10 || resto == 11) {
      resto = 0;
    }

    if (resto == parseInt(cpf.substring(10, 11))) {

    } else {

    }

  }

  function mascaraCep() {

    cepInput.value = cepInput.value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');

  }

  function validarCamposCliente() {

    if (razaoSocialInput.value.length == 0) {
      razaoSocialErro.innerHTML = "Insira a razão social";
    }

    if (cnpjInput.value.length < 18) {
      cnpjErro.innerHTML = "Insira um CNPJ válido";
    }

    if (nomeRepresentanteInput.value.length == 0) {
      nomeRepresentanteErro.innerHTML = "Insira o nome do representante";
    }

    if (cpfRepresentanteInput.value.length == 0) {
      cpfRepresentanteErro.innerHTML = "Insira o CPF do representante";
    }

    if (cepInput.value.length == 0) {
      cepErro.innerHTML = "Insira um CEP";
    }

    if (logradouroInput.value.length == 0) {
      logradouroErro.innerHTML = "Insira um logradouro";
    }

    if (numeroEnderecoInput.value.length == 0) {
      numeroEnderecoErro.innerHTML = "Insira o número do endereço";
    }

    if (bairroInput.value.length == 0) {
      bairroErro.innerHTML = "Insira um bairro";
    }

    if (estadoInput.value.length == 0) {
      estadoErro.innerHTML = "Insira um estado";
    }

    if (cidadeInput.value.length == 0) {
      cidadeErro.innerHTML = "Insira uma Cidade";
    }

    if (razaoSocialOK && cnpjOK && nomeRepresentanteOK && cpfRepresentanteOK && cepOK && logradouroOK && numeroEnderecoOK && bairroOK && estadoOK && cidadeOK) {
      window.location.href = "dashboard.html";
    }
  }

function mascaraCnpj() {

    cnpjInput.value = cnpjInput.value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');

  }

function mascaraCep() {

    cepInput.value = cepInput.value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');

  }

  function validarCamposFornecedor() {

    if (razaoSocialInput.value.length == 0) {
      razaoSocialErro.innerHTML = "Insira a razão social";
    }

    if (cnpjInput.value.length < 18) {
      cnpjErro.innerHTML = "Insira um CNPJ válido";
    }

    if (cepInput.value.length == 0) {
      cepErro.innerHTML = "Insira um CEP";
    }

    if (logradouroInput.value.length == 0) {
      logradouroErro.innerHTML = "Insira um logradouro";
    }

    if (numeroEnderecoInput.value.length == 0) {
      numeroEnderecoErro.innerHTML = "Insira o número do endereço";
    }

    if (bairroInput.value.length == 0) {
      bairroErro.innerHTML = "Insira um bairro";
    }

    if (estadoInput.value.length == 0) {
      estadoErro.innerHTML = "Insira um estado";
    }

    if (cidadeInput.value.length == 0) {
      cidadeErro.innerHTML = "Insira uma Cidade";
    }

    if (razaoSocialOK && cepOK && logradouroOK && numeroEnderecoOK && bairroOK && estadoOK && cidadeOK) {
      window.location.href = "dashboard.html";
    } else {
      console.log(razaoSocialOK, cepOK, logradouroOK, numeroEnderecoOK, bairroOK, estadoOK, cidadeOK);
    }
  }

