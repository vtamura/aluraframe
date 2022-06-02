class View {
    constructor(elemento) {
        this._elemento = elemento
    }

    render() {
        throw new Error('O método render deve ser utilizado pelas classes filhas.')
    }

    update(model) {
        this._elemento.innerHTML = this.render(model)
    }
}