<?php
include("config.php");
date_default_timezone_set("Africa/Johannesburg");

if(isset($_POST['start'])){

    //Generate random string based on time stamp
    //String of all alphanumeric character
    //$str_result = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    $str_result = '0123456789ABCDEFGHIjklmnopqrstuvwxyz';
    $date = date("Y-m-d h:i");
 
    // Shuffle the $str_result and returns substring
    // of specified length
    $meetingCode =  substr(str_shuffle($str_result),0, 8);                  

    $sql = "INSERT INTO meetings(meeting_code, meeting_datetime)VALUES('$meetingCode', '$date')";
    $res = mysqli_query($conn, $sql);
    if($res){
        $output = $meetingCode;  
    }
    else{
        $output = "failed";
    }
    echo $output;
}

?>