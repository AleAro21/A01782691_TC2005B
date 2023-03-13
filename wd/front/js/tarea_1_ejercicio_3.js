//3. Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado;
function newReversedArray(array) {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(
  "3a. Invertir el orden de un arreglo devolviendo uno nuevo: \n Arreglo inicial: [5,6,7]\n"
);
console.log(`Resultado: [${newReversedArray([5, 6, 7])}]\n\n`);
// 3. la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
function reverseArray(array) {
  let maxIndex = array.length - 1;
  let index = 0;
  while (maxIndex > index) {
    const leftValue = array[index];
    const rightValue = array[maxIndex];
    array[index] = rightValue;
    array[maxIndex] = leftValue;
    maxIndex--;
    index++;
  }
  return array;
}
console.log(
  "3b. Invertir el orden de un arreglo modificando el que se pasa como argumento: \n Arreglo inicial: [5,6,7,5,6,10]\n"
);
console.log(`Resultado: [${newReversedArray([5, 6, 7, 5, 6, 10])}]\n\n`);