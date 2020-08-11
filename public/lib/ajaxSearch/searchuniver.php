<?php
    $key=$_GET['key'];
    $array = array();
    $con=mysqli_connect("localhost","root","","topprepod");
    $query=mysqli_query($con, "select * from universities");
    while($row=mysqli_fetch_assoc($query))
    {
      $array[] = $row['name'];
    }
    echo json_encode($array);
    mysqli_close($con);
?>
