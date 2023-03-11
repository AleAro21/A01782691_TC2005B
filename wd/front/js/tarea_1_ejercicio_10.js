function esPalindromo(str) {
    // Convertir la cadena a minúsculas y eliminar los espacios en blanco
    str = str.toLowerCase().replace(/\s/g, "");
    // Revertir la cadena y compararla con la original
    return str === str.split("").reverse().join("");
  }


console.log(esPalindromo("anita lava la tina"));
