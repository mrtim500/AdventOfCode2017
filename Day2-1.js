const fs = require('fs');
const { URL } = require('url');
const fileUrl = new URL('file:///H:/Documents/prive/adventofcode2017/AdventOfCode2017/Day2-input.txt');
var totaal = 0;

var input = fs.readFileSync(new URL(fileUrl)).toString().split("\n");

for (i = 0; i < input.length; i++) { //loop over regels

    var regelArray = input[i].split("\t");

    var hoogste = Math.max.apply(Math, regelArray); 
    var laagste = Math.min.apply(Math, regelArray); 

    totaal += hoogste - laagste;

};

console.log(totaal);