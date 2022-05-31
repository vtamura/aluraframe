class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._listaNegociacoes = new ListaNegociacoes
        this._negociacaoView = new NegociacaoView($('#negociacoesView'))
        this._negociacaoView.update();
    }

    adiciona(event) {
        event.preventDefault()
        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._limpaFormulario()

        console.log(this._listaNegociacoes.negociacoes)

    }

    _criaNegociacao() {
        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )

        // const dataFinal = dataFormatada
        // .map((item, i) => i === dataFormatada.length - 1 ? 
        // Number(item) + 1 : 
        // Number(item))
    }

    _limpaFormulario() {
        this._inputData.value = '2022-06-25'
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
    }
}