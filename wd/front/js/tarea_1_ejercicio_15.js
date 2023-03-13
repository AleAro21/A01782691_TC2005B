// 15. Escribe una función que tome una lista de números y devuelva
// una nueva lista con todos los números en orden descendente.
function getDescendingArray(numbers) {
    const newArray = [];
    while (numbers.length > 0) {
      let greatest = numbers[0];
      for (index in numbers) {
        const number = numbers[index];
        if (number > greatest) {
          greatest = number;
        }
      }
      newArray.push(greatest);
      numbers.splice(numbers.indexOf(greatest), 1);
    }
    return newArray;
  }
  console.log(
    "15. Devolver los números de una lista en orden descendiente: \n Arreglo inicial: [5,6,7,5,6,10]\n"
  );
  console.log(`Resultado: ${getDescendingArray([5, 6, 7, 5, 6, 10])}\n\n`);