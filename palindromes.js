// I want to check is it palindrome or not
function palindrome(str){
// assign a front and back indicator
let front = 0;
let back = str.length - 1;
// back and front pointers won't always met in the middle so i am using back>front
while(back > front ){
    // increments front pointer if current character doesn't meet criteria
    while(str[front].match(/[\W_]/)){
        front++;
        continue;
    }
    //decrements back indicator if current character doesn't meet criteria
    while (str[back].match(/[\W_]/)){
        back--;
        continue;
    }
    //making comparision on the current character
    if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
    front++;
    back--;
    }
    // if the whole string has been compared without returning false, it is a palindrome 
    return true;

}
str = "eye";
console.log(palindrome(str));