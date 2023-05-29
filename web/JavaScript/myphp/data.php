<?php
    //載入外部的連線檔案
    //$變數是自己取的名字
    include ('./conn.php');
    $sql_query = 'select * from students';
    $result = $db_link->query($sql_query);
    //取得總筆數
    $tot_records = $result -> num_rows;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            text-align: center;

        }
    </style>
</head>
<body>
    <div class="container">
        <!-- echo 顯示資料
    <h1>總筆數:<?php echo $tot_records ?> </h1> -->

    <h1>學生資料管理系統</h1>

    <p>目前資料筆數:<?php echo $tot_records; ?>
    <a href="add.php">新增學生資料</a>
    </p>
    <table border="1" align="center">
        <!-- 欄位 -->
        <tr>
            <th>座號</th>
            <th>姓名</th>
            <th>性別</th>
            <th>生日</th>
            <th>信箱</th>
            <th>電話</th>
            <th>地址</th>
            <th>功能</th>
        </tr>
        <!-- 資料 -->
        <?php
        // $row_rec=$result -> fetch_assoc(); =>僅取得第一筆資料
        //因此以下用迴圈帶出所有資料
        while($row_rec=$result -> fetch_assoc()){
            echo '<tr>';
            echo '<td>'.$row_rec["cID"].'</td>'; /*用..串接資料*/ 
            echo '<td>'.$row_rec["cName"].'</td>';
            echo '<td>'.$row_rec["cSex"].'</td>';
            echo '<td>'.$row_rec["cBirthday"].'</td>';
            echo '<td>'.$row_rec["cEmail"].'</td>';
            echo '<td>'.$row_rec["cPhone"].'</td>';
            echo '<td>'.$row_rec["cAddr"].'</td>';
            echo '<td>'; /*程式太長可以這樣斷行*/ 
            echo "<a href='edit.php?sid=".$row_rec["cID"]."'>修改</a>";
            echo "<a href='delete.php?sid=".$row_rec["cID"]."'>刪除</a>";
            echo '</td>';
            echo '</tr>';
        }

        ?>
        



    </table>

    </div>

</body>
</html>