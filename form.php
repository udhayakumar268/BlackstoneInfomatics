<?php
$to="blackstoneinfomatics@gmail.com";
$subject="message from website - Blackstone Infomatics";
$message="Name:".$_POST["name"]."\n";
$message="Mail:".$_POST["email"]."\n";
$message="phone:".$_POST["phone"]."\n";
$message="Message:".$_POST["msg"]."\n";
$headers="From: website.blackstone@gmail.com";
mail($to,$subject,$message,$headers);
header("Location:contact.html");
?>