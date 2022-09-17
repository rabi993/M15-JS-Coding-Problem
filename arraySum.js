// var marks =[52,25,31,48,67,5,79,52,54,54,67,90,8,47,46];
// var sum =0;
// for (var i=0; i<marks.length; i++){
//     var element = marks[i];
//     sum= sum + element;
    
// }
// console.log('sum of array elements is:',sum);


function getArraySum(marks){
    var sum =0;
    for (var i=0; i<marks.length; i++){
        var element = marks[i];
        sum= sum + element;
        
    }
    return  sum;
}
var marks =[52,25,31,48,67,5,79,52,54,54,67,90,8,47,46];
var result = getArraySum(marks);
console.log('sum of array elements is:',result);