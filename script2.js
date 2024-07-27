function suma(){
    let num1 = parseFloat(document.getElementById('suma1').value);
    let num2 = parseFloat(document.getElementById('suma2').value);
    let resultado = num1 + num2;
    document.getElementById('Resultado1').textContent = resultado;
}
function resta(){
    let num1 = parseFloat(document.getElementById('resta1').value)
    let num2 = parseFloat(document.getElementById('resta2').value)
    let resultado = num1 - num2;
    document.getElementById('Resultado2').textContent = resultado;
}
function multi(){
    let num1 = parseFloat(document.getElementById('multi1').value)
    let num2 = parseFloat(document.getElementById('multi2').value)
    resultado = num1 * num2;
    document.getElementById('Resultado3').textContent = resultado;
}
function div(){
    let num1 = parseFloat(document.getElementById('div1').value)
    let num2 = parseFloat(document.getElementById('div2').value)
    resultado = num1 / num2;
    document.getElementById('Resultado4').textContent = resultado;
}