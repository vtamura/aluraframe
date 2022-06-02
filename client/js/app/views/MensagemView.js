class MensagemView extends View{
    constructor(elemento) {
        super(elemento)
    }

    render(model) {
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>'
    }

    
}