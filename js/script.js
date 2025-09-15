document.getElementById('tabuadaForm').addEventListener('submit', (event) =>{
    event.preventDefault();

    const numero = parseInt(document.getElementById("numero").value);
    const limite = parseInt(document.getElementById("Limite").value);
    const respostaDiv = document.getElementById("resultado");

    respostaDiv. innerHTML = '';

    if(isNaN(numero)|| isNaN(limite)){
        const aviso = document.createElement('p');
        aviso.style.color = 'red';
        aviso.textContent = 'Preencha os campos corretamente!';
        respostaDiv.appendChild(aviso);
        return;
    }

    const titulo = document.createElement('h2')
    titulo.textContent = `Tabuada do ${numero} até ${limite}`;
    respostaDiv.appendChild(titulo);

    for(let i = 1; i <= limite; i++){
        const linha = document.createElement('p');
        linha.textContent = `${numero} x ${i} = ${numero * i}`;
        respostaDiv.appendChild(linha);
    }
})