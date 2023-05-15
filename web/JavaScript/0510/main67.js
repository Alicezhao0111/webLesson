//使用模組檔案的主程式

//1.匯入模組檔(名稱可以不同)
import math from './lib67.js';
//2.使用
math.add(3,5);
math.multiply(3,5);
console.log(math.city[0]);//得到台北市

//3.匯入非預設模組檔 (不可以跟匯出的名稱不同)
import  {add,multiply,city} from './lib67.js';
//怎麼使用?
add(5,5)
multiply(-5,5);
console.log(add(3,5));
console.log(multiply(3,5));
console.log(city[1]);//得到桃園市