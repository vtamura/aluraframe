class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes, 
            new NegociacaoView($('#negociacoesView')), 
            'adiciona', 'esvazia');
       
        this._mensagem = new Bind(
            new Mensagem, 
            new MensagemView($('#mensagemView')),
            'texto'); 
    }

    adiciona(event) {
        event.preventDefault()
        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._mensagem.texto = 'Negociação adicionada com sucesso'; 
        this._limpaFormulario()
    }

    remove(event) {
        event.preventDefault()
        this._listaNegociacoes.esvazia()
        this._mensagem.texto = 'Negociações removidas com sucesso'; 
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