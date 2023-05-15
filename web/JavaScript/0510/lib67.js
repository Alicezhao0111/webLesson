//建立模組的檔案

//建立加法函式
let add = function(n1,n2){
    console.log(n1+n2);
};
//建立乘法函式
let multiply = function(n1,n2){
    console.log(n1*n2);
};
let city=['台北市','桃園市'];

//建立math物件，包裝加法與乘法二個函式
let math={

    add:add,
    multiply:multiply,
    city:city

};
//預設的輸出
export default math; //也可寫 export {add,multiply};

//非預設的輸出
export {add,multiply,city};
