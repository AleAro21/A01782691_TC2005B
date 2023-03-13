// 9. Escribe una función que reciba como parámetro una lista de cadenas de texto,
// y regrese la longitud de la cadena más corta.
function getShortestStringLength(strings) {
    let shortest = strings[0];
    for (index in strings) {
      const string = strings[index];
      if (string.length < shortest.length) {
        shortest = string;
      }
    }
    return shortest.length;
  }
  console.log(
    "9. Obtener la longitud de la cadena más corta de una lista de cadenas: \n Lista: ['vaya', 'que', 'no', 'puedo']\n"
  );
  console.log(
    `Longitud de la cadena más corta: ${getShortestStringLength([
      "vaya",
      "que",
      "no",
      "puedo",
    ])}\n\n`
  );