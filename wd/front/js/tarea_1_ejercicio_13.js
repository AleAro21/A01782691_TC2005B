// 13. Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
function getMostFrequentString(strings) {
    let mostFrequent = strings[0];
    let mostFrequentCount = 0;
    for (index in strings) {
      const string = strings[index];
      let count = 0;
      for (index in strings) {
        if (strings[index] === string) {
          count++;
        }
      }
      if (count > mostFrequentCount) {
        mostFrequent = string;
        mostFrequentCount = count;
      }
    }
    return mostFrequent;
  }
  console.log(
    "13. Encontrar la cadena con mayor cantidad de ocurrencias en un arreglo: \n Lista: ['vaya', 'que', 'no', 'vaya','que', 'puedo', 'vaya', 'no', 'que', 'que']\n"
  );
  console.log(
    `Resultado: ${getMostFrequentString([
      "vaya",
      "que",
      "no",
      "vaya",
      "que",
      "puedo",
      "vaya",
      "no",
      "que",
      "que",
    ])}\n\n`
  );