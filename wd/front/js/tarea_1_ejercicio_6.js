// 6 Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

function changeLetters(str) {
    let alphabets = {
        a: "4",
        b: "8",
        e: "3",
        g: "6",
        i: "1",
        o: "0",
        p: "9",
        s: "5",
        t: "7",
        z: "2"
    };
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (alphabets[str[i].toLowerCase()]) {
                newStr += alphabets[str[i].toLowerCase()];
            } else {
                newStr += str[i];
            }
        }
        return newStr;
}

console.log('Ejercicio 6')
console.log(changeLetters('Javascript es divertido'));






