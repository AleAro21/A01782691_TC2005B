function quitaDuplicados(arr) {
    let sinDuplicados = [];
    let objAux = {};
    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] in objAux)) {
        sinDuplicados.push(arr[i]);
        objAux[arr[i]] = true;
      }
    }
    return sinDuplicados;
  }

  console.log('Ejercicio 8:')
console.log(quitaDuplicados([1, 0, 1, 0, 10, 10, 0, 1]));