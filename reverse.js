
function reversestring(str){
    var reverse ="";
    for(var i=0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement =" hello i am a atudent.";
console.log("original statement: ",statement);
var result = reversestring(statement);
console.log("reverse result: ",result);

var statement1 =" kire ki8 khobor ";
console.log("original statement: ",statement1);
var result1 = reversestring(statement1);
console.log("reverse result: ",result1);

var statement2 =" valo hoye ja ";
console.log("original statement: ",statement2);
var result2 = reversestring(statement2);
console.log("reverse result: ",result2);
