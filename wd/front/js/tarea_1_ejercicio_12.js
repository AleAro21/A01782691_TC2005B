function mediana_y_moda(lista) {
    const n = lista.length;
    lista.sort((a, b) => a - b);
  
    // Calculando la mediana
    let mediana;
    if (n % 2 === 0) {
      mediana = (lista[n/2 - 1] + lista[n/2]) / 2;
    } else {
      mediana = lista[(n-1) / 2];
    }
  
    // Calculando la moda
    const counter = {};
    let moda;
    let maxFrecuencia = 0;
    lista.forEach((num) => {
      if (counter[num]) {
        counter[num]++;
      } else {
        counter[num] = 1;
      }
  
      if (counter[num] > maxFrecuencia) {
        maxFrecuencia = counter[num];
        moda = num;
      }
    });
  
    return {mediana, moda};
  }
  
  console.log(mediana_y_moda([10, 20, 30, 40, 50]))