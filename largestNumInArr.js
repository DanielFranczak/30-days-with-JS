// Day 1 - return largest number in subarray in Array - Dzien 1 - zwroc najwieksza liczbę  w podtablicy Tablicy
var arrNum = [
    [123,212,144,521],
    [600,222,654,112],
    [872,1222,980,675],
    [12,675,283,888],
    [111,3292,887,998,97,12]
];
function largestOfFive(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        let largestNum = arr[i][0];
        for(let n = 1; n < arr[i].length; n++) {
            if (arr[i][n] > largestNum){
                largestNum = arr[i][n];
            }
        }
        result[i] = largestNum;
    }
    return result
}


console.log(largestOfFive(arrNum));