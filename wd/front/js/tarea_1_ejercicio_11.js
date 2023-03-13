// 11. Escribe una función que tome una lista de cadena de textos y devuelva una nueva
// lista con todas las cadenas en orden alfabético.
function getAlphabetizedStrings(strings) {
    const orderedStrings = [];
    for (index in strings) {
      const string = strings[index];
      orderedStrings.push(string.split("").sort().join(""));
    }
    return orderedStrings;
  }
  console.log(
    "11. Devolver una lista con las cadenas de texto en orden alfabético: \n Lista: ['vaya', 'que', 'no', 'puedo']\n"
  );
  console.log(
    `Resultado: [${getAlphabetizedStrings(["vaya", "que", "no", "puedo"])}]\n\n`
  );