class DataHelper {
    constructor() {
        throw new Error('DataHelper não pode ser instanciada.')
    }

    static textoParaData(texto) {
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) 
            throw new Error('Data deve ter o formato YYYY-MM-DD')
        return new Date(...texto.split('-').map(Number))
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
    }

}