var name =[5,4,2,1,3,6,7,89,66,45,66,1,45,4,85];
console.log("initial array: ",name);
var uniqueName=[];
for(var i=0; i<name.length; i++){
    var element = name[i];
    var index =uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log('unique array: ',uniqueName);