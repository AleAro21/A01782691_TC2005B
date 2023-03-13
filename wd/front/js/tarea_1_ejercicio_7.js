// 7. Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].
function factorize(number) {
    let acc = 2;
    const factors = [1];
    while (acc <= number) {
      if (number % acc === 0) {
        factors.push(acc);
      }
      acc++;
    }
    return factors;
  }
  console.log("7. Obtener todos los factores de un número: \n Número: 28\n");
  console.log(`Factores: [${factorize(28)}]\n\n`);