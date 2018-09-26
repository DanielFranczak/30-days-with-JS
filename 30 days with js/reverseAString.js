function reverseString(str){
str = str.split(''); // split string to array
//console.log(str);
str = str.reverse('');// reverse the array
//console.log(str);
str = str.join(''); // connected all elements in array into one string
//console.log(str);

return str;
}
str1 ="Zycie zycie jest nobelon";
str2 ="Ajnc cfaj draj";
str3 = "kobyła ma mały bok";
console.log(reverseString(str1));
console.log(reverseString(str2));
console.log(reverseString(str3));