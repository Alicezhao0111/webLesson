<?php
//處理新增資料
//$_POST 此變數為內建的,不能改
if(isset($_POST["action"])&&($_POST["action"]=="add")){
    //連線資料庫
    include("conn.php");
    //建立新增資料的指令
    $sql_query='insert into students (cName, cSex, cBirthday, cEmail, cPhone, cAddr) values (?,?,?,?,?,?)';
    $save_data = $db_link -> prepare($sql_query); /*query ->只能查詢資料 prepare->可利用資料*/
    /*bind做結合，'ssssss'表示以文字方式*/ 
    $save_data -> bind_param('ssssss',$_POST["strName"],$_POST["strSex"],$_POST["strBirthday"],$_POST["strEmail"],$_POST["strPhone"],$_POST["strAddr"]);
    //執行SQL
    $save_data -> execute();
    //關閉SQL 
    $save_data -> close();
    //關閉資料庫db //要關閉，這樣主機負載量才不會太大
    $db_link -> close();
    //重新導向data.php
    header('location:data.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>新增學生資料</h1>
    <form action="" method="post">
        <table>
            <tr>
                <td>姓名</td>
                <td><input type="text" name="strName"></td>
            </tr>
            <tr>
                <td>性別</td>
                <td>
                    <input type="radio" name="strSex" id="" value="M"> 男
                    <input type="radio" name="strSex" id="" value="F"> 女
                </td>
            </tr>
            <tr>
                <td>生日</td>
                <td><input type="date" name="strBirthday" id=""></td>
            </tr>
            <tr>
                <td>信箱</td>
                <td><input type="email" name="strEmail" id=""></td>
            </tr>
            <tr>
                <td>電話</td>
                <td><input type="text" name="strPhone"></td>
            </tr>
            <tr>
                <td>地址</td>
                <td><input type="text" name="strAddr"></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <!-- 隱藏欄位 (防駭客)-->
                    <input type="hidden" name="action" value="add">
                    <input type="submit" value="確認送出">
                    <input type="reset" value="重新填寫">
                </td>
            </tr>

        </table>


    </form>
</body>
</html>