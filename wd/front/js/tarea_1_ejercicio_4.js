// 4. Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.

function newString(str){
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
    
}

console.log('Ejercicio 4:');
console.log(newString('esto es una prueba'));
    
    


   