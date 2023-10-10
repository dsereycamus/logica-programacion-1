const prompt = require("prompt-sync")()
function ordenarNumeros(num1, num2, num3) {

  let mayor
  let centro
  let menor



numeros = [num1, num2, num3];

const numerosMenorAMayor =[...numeros].sort((a, b) => a - b);
  console.log(numerosMenorAMayor);

const numerosMayorAMenor =[...numeros].sort((a, b) => b - a);
  console.log(numerosMayorAMenor);
  mayor = numerosMayorAMenor[0]
  centro = numerosMayorAMenor[1]
  menor = numerosMayorAMenor[2]

  if (mayor === centro && centro === menor) {
  return ("Los números son iguales")
  }
 

  
// No modificar el código debajo de esta línea
  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };

}
let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let num3 = parseInt(prompt("Ingresa el tercer número: "));
ordenarNumeros(num1, num2, num3);
module.exports = ordenarNumeros;