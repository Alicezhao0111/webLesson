
        function msg(str1){
            console.log(str1);
        }
        function add(n1,n2){
            console.log(n1+n2);
        }
        //新的方式會做: 輸出(匯出) 
        //通常會寫在function的最下面
        export default{
            msg:msg, //指讓匯出的名稱‧跟function的名稱一樣
            add:add
        }
        
