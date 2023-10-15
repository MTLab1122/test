let a1="Pak";
a1=9;
console.log(a1);



const a=5;
a++;
console.log(a);




if(true){
    let a3=4  }
else{
    let a3 = "string"  }
console.log(a3);

var a3: number= "7";
a3=9;
console.log(a3);





let myType1={ name: "zia" , id:1};
myType1={ id:2, name: "Tom"};
myType1={ id:3, name: "Tom" , gender:false};



let myType={ name: "zia" , id:1};
myType={ id:2, name: "Tom"};
myType={ id:3, name: "Tom" , gender:false};
myType={ id:2, gender:false};




let myType2=<any>{ name: "zia" , id:1};
myType2={ id:2, name: "Tom"};
myType2={ id:3, name: "Tom" , gender:false};
myType2={ id:4, gender:false};





let notSure:any =4;
notSure="maybe a string instead";
notSure=false;






enum Color {Red=1, Green, Blue};
var colorName:string =Color[2];
console.log(colorName);




enum Color2{Red=1, Green=2, Blue=4};
var c=Color2["Blue"];
console.log(c); // colorIndex







const enum Color1{Red=1, Green, Blue};
var colorName:string=Color[2];
console.log(colorName);







// var myAdd :(baseValu:number, increment)
// function                                                         1 and 4  answer


// var buildName: (firstName:string, lastName?:string)=> string=
// function(firstName:string)                                          2 and 4 answer


// var buildNameFun: (...rest:string[], fname:string)=> string=
// function(...restOfName:string[],firstName:string){
//     return firstName + "" + restOfName.join("");
// }
// console.log(buildNameFun("Khan", "Zia" , "U"));   3. Khan zia U


function myCallBack(text:string){
    console.log("inside myCallback" + text);
}
function callingFunction(initialText:string,callback:(text:string)=> void){
    
}              2               