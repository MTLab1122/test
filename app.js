"use strict";
// let a="Pak";
// a=9;
// console.log(a);
// const a=5;
// a++;
// console.log(a);
// if(true){
//     let a=4
// }
// else{
//     let a = "string"
// }
// console.log(a);
// var a: number= "7";
// a=9;
// console.log(a);
// let myType={ name: "zia" , id:1};
// myType={ id:2, name: "Tom"};
// myType={ id:3, name: "Tom" , gender:false};
// let myType={ name: "zia" , id:1};
// myType={ id:2, name: "Tom"};
// myType={ id:3, name: "Tom" , gender:false};
// myType={ id:2, gender:false};
// let myType=<any>{ name: "zia" , id:1};
// myType={ id:2, name: "Tom"};
// myType={ id:3, name: "Tom" , gender:false};
// myType={ id:4, gender:false};
// let notSure:any =4;
// notSure="maybe a string instead";
// notSure=false;
// enum Color {Red=1, Green, Blue};
// var colorName:string =Color[2];
// console.log(colorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
;
var c = Color2["Blue"];
console.log(c);
