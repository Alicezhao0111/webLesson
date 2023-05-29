<?php
include("conn.php");

//按下修改按鈕時才會執行
if(isset($_POST["action"])&&($_POST["action"]=="del")){
    //建立新增資料的指令
    $sql_query="DELETE FROM students WHERE cID=?";
    $del_data = $db_link -> prepare($sql_query);
    $del_data -> bind_param("i",$_POST["strID"]);
    $del_data -> execute();
    $del_data -> close();
    $db_link -> close();
    //重新導向data.php
    header("location:data.php"); //重新導回到主畫面
}
    //找出要刪除的資料
    $sql_select = "SELECT cID, cName, cSex, cBirthday, cEmail, cPhone, cAddr FROM students WHERE cID=?";
    $del_data = $db_link -> prepare($sql_select);
    $del_data -> bind_param("i",$_GET["sid"]); //取得網址上的參數
    $del_data -> execute(); //執行SQL
    $del_data -> bind_result($cid, $cname, $csex, $cbirthday, $cemail, $cphone, $caddr); //取得資料並設定變數，順序跟第4行一樣
    $del_data -> fetch();
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
    <h1>刪除學生資料</h1>
    <form action="" method="post">
        <table>
            <tr>
                <td>座號</td>
                <td><?php echo $cid ?></td>
            </tr>
            <tr>
                <td>姓名</td>
                <td><input type="text" name="strName" value="<?php echo $cname;?>"></td>
            </tr>
            <tr>
                <td>性別</td>
                <td>
                <input type="radio" name="strSex" id="radio" value="M" <?php if($csex=="M")echo "checked";?>>男
                <input type="radio" name="strSex" id="radio" value="F" <?php if($csex=="F")echo "checked";?>>女
                    <!-- 在php中寫html -->
                    <?php
                    if($csex == 'F'){
                    ?>
                    <input type="radio" name="strSex" id="" value="F" checked> 女 
                    <input type="radio" name="strSex" id="" value="M"> 男
                    <?php   
                    } else{
                    ?>
                    <input type="radio" name="strSex" id="" value="F"> 女 
                    <input type="radio" name="strSex" id="" value="M"> 男
                    <?php
                    }
                    ?>
                    
                </td>
            </tr>
            <tr>
                <td>生日</td>
                <td><input type="date" name="strBirthday" id="" value="<?php echo $cbirthday ?>"></td>
            </tr>
            <tr>
                <td>信箱</td>
                <td><input type="email" name="strEmail" id="" value="<?php echo $cemail ?>"></td>
            </tr>
            <tr>
                <td>電話</td>
                <td><?php echo $cphone ?></td>
            </tr>
            <tr>
                <td>地址</td>
                <td><?php echo $caddr ?></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <!-- 隱藏欄位 功能-->
                    <input type="hidden" name="action" value="del">
                    <!-- 隱藏欄位 座號-->
                    <!-- 要再丟出去，才不會丟到別人家去 -->
                    <input name="strID" type="hidden" value="<?php echo $cid;?>">
                    <input type="submit" value="確認刪除">
                    <!-- 按下取消刪除返回上一頁 -->
                    <input type="reset" value="取消刪除" onclick="history.back();"> 
                </td>
            </tr>

        </table>


    </form>
</body>
</html>