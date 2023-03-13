// 5.Escribe una función que calcule el máximo común divisor de dos números.
function getGreatestCommonDivisor(a, b) {
    const larger = a > b ? a : b;
    const smaller = larger === a ? b : a;
    let divisor = smaller;
    while (larger % divisor !== 0 || smaller % divisor !== 0) {
      divisor = divisor - 1;
    }
    return divisor;
  }
  console.log(
    "5. Obtener el máximo común divisor de dos números: \n Número a: 21, Número b: 15\n"
  );
  console.log(`Máximo común divisor: ${getGreatestCommonDivisor(21, 15)}\n\n`);