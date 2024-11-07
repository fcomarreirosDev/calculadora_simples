function calcular(operacao) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado = 0;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Por favor, insira dois números válidos.";
        return;
    }

    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('resultado').textContent = "Não é possível dividir por zero.";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            return;
    }

    document.getElementById('resultado').textContent = resultado;
}

function resetar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('#resultado').value = '';
}