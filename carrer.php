<?php
$to="blackstoneinfomatics@gmail.com";
$subject="message from website - Blackstone Infomatics";
$message="Name:".$_POST["name"]."\n";
$message="phone:".$_POST["phone"]."\n";
$message="Mail:".$_POST["mail"]."\n";
$message="Option:".$_POST["option"]."\n";
$message="Location:".$_POST["loc"]."\n";
$message="Applied for:".$_POST["apply"]."\n";
$headers="From: website.blackstone@gmail.com";
mail($to,$subject,$message,$headers);
header("Location:career.html");
?>