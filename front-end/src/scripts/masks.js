export function mascaraNome(campo) {
    campo.value = campo.value.replace(/[^a-zA-Z ]/g, '');
}

export function mascaraTelefone(campo) {
    campo.value = campo.value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1');

}

export function mascaraCep(campo) {

    campo.value = campo.value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');

}

export function mascaraUf(campo) {
    campo.value = campo.value.replace(/[^a-zA-Z ]/g, '');
}

export function mascaraNumero(campo) {
    campo.value = campo.value.replace(/[^a-zA-Z0-9 ]/g, '');
}