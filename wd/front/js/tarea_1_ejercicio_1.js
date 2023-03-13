// 1. Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
function getFirstUniqueCharacter(string) {
    for (index in string) {
      const char = string[index];
      const restOfString = string.slice(string.indexOf(char) + 1);
      if (restOfString.includes(char)) {
        continue;
      } else {
        return char;
      }
    }
    return "ningúno";
  }
  console.log(
    "\n1. Encontrar el primer carácter de una cadena que no se repite:\n Cadena: 'abacddbec'\n"
  );
  console.log(
    `El primer carácter que no se repite es ${getFirstUniqueCharacter(
      "abacddbece"
    )}\n\n`
  );