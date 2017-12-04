const fs = require('fs');
const { URL } = require('url');
const fileUrl = new URL('file:///H:/Documents/prive/adventofcode2017/AdventOfCode2017/Day2-input.txt');
var totaal = 0;

var input = fs.readFileSync(new URL(fileUrl)).toString().split("\n");

for (i = 0; i < input.length; i++) { //loop over regels

    var regelArray = input[i].split("\t");

    for (j = 0; j < regelArray.length; j++) {

        for (k = 0; k < regelArray.length; k++) {
            if (j !== k) {
                if ((regelArray[j] / regelArray[k]) % 1 == 0) {
                    totaal += regelArray[j] / regelArray[k];
                };
            };
        };
    };

};

console.log(totaal);