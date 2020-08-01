<?php

    session_start();
  	if(isset($_POST['submit']))
  	{
  		$Name = $_POST['name'];
  		$EmailFrom = $_POST['email'];
  		$subject = $_POST['subject'];
  		$message = $_POST['message'];
  		$to = 'sumitkrgupta29@gmail.com';

  		$MainMessage = "Name: ".$Name."\n"."Subject: ".$subject."\n"."Message: "."\n\n".$message;
  		$header = "From: ".$EmailFrom;

  		if(mail($to, $subject, $MainMessage, $header))
  		{
        // $_SESSION['message'] = 'Orders Successfully !';
  			// echo "<h1>Sent</h1>";
        header("location:index.html");
  		}
  		else{
        // $_SESSION['message'] = 'Orders Successfully !';
  			// echo "<h1>Opps!</h1>";
        header("location:index.html");
  		}
  	}	
?>
