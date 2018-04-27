<?php

session_start();
//starts of session inside website

if(isset($_POST['submit'])){

	include 'dbh.inc.php';

	$uid = mysqli_real_escape_string($conn, $_POST['uid']);
	$pwd = mysqli_real_escape_string($conn, $_POST['pwd']);

	print ("Hiiiii ");
	print htmlspecialchars($_POST['uid']);
	//error handlers
	//checl if inputs are empty

	if(empty($uid) || empty($pwd)){
		header("Location: ../index.php?login=empty");
		exit();
	}else{
		//check if uname exist in db
		$sql = "SELECT * FROM users WHERE user_uid = '$uid'";
		$result = mysqli_query($conn, $sql);
		$resultCheck = mysqli_num_rows($result);
		if ($resultCheck <1){
			/*header("Location: ../index.php?login=error1");
			exit();*/
		}else{
			//checks if the pw the user typed in matches the pw in the db
			if($row = mysqli_fetch_assoc($result)){
				//dehashing pw
				$hashedPwdChecked = password_verify($pwd, $row['user_pwd']);
				if($hashedPwdChecked == false){
					header("Location: ../index.php?login=error2");
					exit();
				}elseif($hashedPwdChecked == true){
					//log in user here
					$_SESSION['u_id'] = $row['user_id'];
					$_SESSION['u_first'] = $row['user_first'];
					$_SESSION['u_last'] = $row['user_last'];
					$_SESSION['u_email'] = $row['user_email'];
					$_SESSION['u_uid'] = $row['user_uid'];

					header("Location: ../views/mainapp.php?login=success");
					//header("Location: /views/mainapp.html");
					//echo '<a href="/views/mainapp.html">CSS Tutorial</a>';

					//include('views/mainapp.php');


					//exit();

				}
			}
		}
	}

}else{
	header("Location: ../index.php?login=error");
	exit();
}