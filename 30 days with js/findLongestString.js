var str = "Life is brutal and full of zasadzkasssssssssssssssssssssssssssss";
var str2 = "Kto malych nie liczy ten duzych nie oglada";

function findLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0; 
    for (let i = 0; i < words.length; i++){
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

console.log(findLongestWord(str1));
console.log(findLongestWord(str2));