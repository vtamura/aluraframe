const campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
]

const tbody = document.querySelector('.table tbody')

document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault()
    const tr = document.createElement('tr')
    
    campos.forEach( campo => {
        let td = document.createElement('td')
        td.textContent = campo.value

        tr.appendChild(td)
        
    })
    const tdVolume = document.createElement('td')
    tdVolume.textContent = campos[1].value * campos[2].value
    tr.appendChild(tdVolume)
    tbody.appendChild(tr)

    campos[0].value = ''
    campos[1].value = 1
    campos[2].value = 0.0

    campos[0].focus()
})
