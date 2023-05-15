/*
        //兩數相除時，值的變化
        //無條件捨去小數位
        console.log(Math.floor(123.95));
        //無條件進位到整數位
        console.log(Math.ceil(123.01));
        //四捨五入到整數位
        console.log(Math.round(123.01));
        console.log(Math.round(123.51));
        //四捨五入到小數位
        console.log(123.516712.toFixed(2));
*/
let num1= Number(prompt("數字1",""));
let num2= Number(prompt("數字2",""));
let op= prompt('運算符號(+,-,*,/)','');

if(op=='+'){
 add(num1,num2);
} else if(op=='-'){
 sub(num1,num2);
} else if(op=='*'){
 mul(num1,num2);
}else if(op=='/'){
 divide(num1,num2);
}

//加法函式
function add (n1,n2){
     let ans = n1+n2;
     console.log (`兩數相加為:${ans} `);
 }

 //減法函式

 function sub (n1,n2){
     let ans = n1-n2;
     console.log (`兩數相減為:${ans} `);
 }
 
 //乘法函式

 function mul (n1,n2){
     let ans = n1*n2;
     console.log (`兩數相乘為:${ans} `);
 }

 //除法函式

 function divide (n1,n2){
     let ans = n1/n2;
     ans=ans.toFixed(2); //固定小數位到第二位
     console.log (`兩數相除為:${ans} `);
 }