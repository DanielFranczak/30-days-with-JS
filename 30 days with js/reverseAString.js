function reverseString(str){
str = str.split('');
//console.log(str);
str = str.reverse('');
//console.log(str);
str = str.join('');
//console.log(str);

return str;
}
str1 ="Zycie zycie jest nobelon";
str2 ="Ajnc cfaj draj";
str3 = "kobyła ma mały bok";
console.log(reverseString(str1));
console.log(reverseString(str2));
console.log(reverseString(str3));