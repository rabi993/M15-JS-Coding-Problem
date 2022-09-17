var speech = "i am a student. my name is rabiul islam.";
console.log(speech.length);
var count =0;
for(var i=0; i<speech.length; i++){
    var char = speech[i];
    // console.log(char);
    if (char==" " && speech[i-1]  !=" "){
        count++;
    }
}
count++;
console.log(count);


var speech = "i am a student. my name is rabiul islam. ";
console.log(speech.length);
var count =0;
for(var i=0; i<speech.length; i++){
    var char = speech[i];
    // console.log(char);
    if (char==" " && speech[i-1]  !=" "){
        count++;
    }
}
count++;
console.log(count);


var speech = "i am a student. my   name is    rabiul islam.";
console.log(speech.length);
var count =0;
for(var i=0; i<speech.length; i++){
    var char = speech[i];
    // console.log(char);
    if (char==" " && speech[i-1]  !=" "){
        count++;
    }
}
count++;
console.log(count);