function echoProgram(){
let strOut = [];
let str = [
"function echoProgram(){",
"let strOut = [];",
"let str = [",
"for (let i = 0; i < 3; i++)",
"strOut.push(str[i]);",
"for (let i = 0; i < str.length-1; i++)",
"strOut.push(String.fromCharCode(34) + str[i] + String.fromCharCode(34)+',');",
"strOut.push(String.fromCharCode(34) + String.fromCharCode(125) + String.fromCharCode(34));",
"strOut.push('];');",
"for (let i = 3; i < str.length; i++)",
"strOut.push(str[i]);",
"",
"return strOut.join(String.fromCharCode(10));",
"}"
];
for (let i = 0; i < 3; i++)
strOut.push(str[i]);
for (let i = 0; i < str.length-1; i++)
strOut.push(String.fromCharCode(34) + str[i] + String.fromCharCode(34)+',');
strOut.push(String.fromCharCode(34) + String.fromCharCode(125) + String.fromCharCode(34));
strOut.push('];');
for (let i = 3; i < str.length; i++)
strOut.push(str[i]);

return strOut.join(String.fromCharCode(10));
}
