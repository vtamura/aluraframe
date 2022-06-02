class ListaNegociacoes {
    constructor(atualiza) {
        this._negociacoes = []
        this._atualiza = atualiza
    }

    get negociacoes() {
        return this._negociacoes
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao)
    }

    esvazia(negociacao) {
        this._negociacoes = []
    }
}