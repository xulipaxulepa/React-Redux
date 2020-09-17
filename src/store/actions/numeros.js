export function alterarNumeroMinimo(novoNumerro) {
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumerro
    }
}

export function alterarNumeroMaximo(novoNumerro) {
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: novoNumerro
    }
}