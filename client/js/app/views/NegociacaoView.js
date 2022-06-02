class NegociacaoView extends View {
    constructor(elemento) {
        super(elemento)
    }

    render(model) {
        return `<table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        ${model.negociacoes.map(n => {
                            return `
                                <tr>
                                    <td>${DataHelper.dataParaTexto(n.data)}</td>
                                    <td>${n.quantidade}</td>
                                    <td>${n.valor}</td>
                                    <td>${n.volume}</td>
                                <tr>
                            `
                        }).join('')}
                        <tr>
                            <td colspan="3" align="right" style="font-weight: bold">Total:</td>
                            <td>
                            ${model.negociacoes.reduce((total, n)=>  total + n.volume, 0.0)}
                            </td>
                        </tr>
                    </tbody>
                    
                    <tfoot>
                    </tfoot>
                </table>
                `
    }

}