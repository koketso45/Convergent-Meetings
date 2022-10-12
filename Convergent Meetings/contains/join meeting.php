<?php
include("config.php");

if(isset($_POST['join_code'])){
    $join_code = mysqli_real_escape_string($conn, $_POST["join_code"]);

    $sql = "SELECT * FROM meetings WHERE meeting_code = '$join_code' ";
    $res = mysqli_query($conn, $sql);
    if(mysqli_num_rows($res) > 0){
        $output = $join_code;
    }else{
        $output = "Meeting Code does not exit";
    }

    echo $output;
}
?>