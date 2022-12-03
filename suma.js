function sumaOper(){
    const valor1 = document.getElementById('suma1').value;
    const valor2 = document.getElementById('suma2').value;

    if(valor1 == ''){
        valor1 = 0;
    }

    if(valor2 == ''){
        valor2 = 0;
    }

    const resultadoSuma = parseInt(valor1) + parseInt(valor2);

    document.getElementById('sumaRe').value = resultadoSuma;
}

const buttonSuma = document.getElementById('button');

buttonSuma.addEventListener('click', sumaOper);