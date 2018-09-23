//Day 2 - Caesar Cipher - Dzie drugi Szyfr Cezara 
let str = "FRPBAQ QNY BS ZL PUNYYRATR!";
function cC(str){
    //Divide string into each characters
    return str.split('')
    .map.call(str, function(char){ // iterate over every char in the array
        i = char.charCodeAt(0);
    if (i<65 || i > 90) { // check if cha is between A-Z 
        return String.fromCharCode(i); // Return un-converted char 
        }
        else if (i < 78){ 
            return String.fromCharCode(i + 13); // N = ASCII no 78 , if the cahr code is less than 78, shift forward 13 letters
        }
        return String.fromCharCode(i - 13); // otherwise shift the char 13 places backwarrd
    }).join(''); // conect array into string 
}
console.log(cC(str));
