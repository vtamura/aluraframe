class NegociacaoView {
    constructor(elemento) {
        this._elemento = elemento
        
    }

    _render() {
        return `
        <table class="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
        `
    }

    update() {
        this._elemento.innerHtml = this._render()
    }
}