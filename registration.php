<?php

include 'functions.php';

if(isset($_POST['emailValidation'])){
	if(preg_match("/^([\w-\.]+@([\w-]+\.)+[\w-]{2,100})?$/", $_POST['emailValidation'])){

		echo true;

		// $query = "SELECT * FROM accounts WHERE email = '$_POST[emailValidation]' LIMIT 1";
		// $get = $mysqli->query($query);

		// if($get->num_rows == 0)
		// 	echo true;
		// else
		// 	echo 2;
	}
	else
		echo false;
}
elseif(isset($_POST['login']['submit']) && $_POST['login']['submit'] == 'Login'){
	// $email = $_POST['login']['email'];
	// $pass = md5($_POST['login']['password']);
	// if(preg_match("/^([\w-\.]+@([\w-]+\.)+[\w-]{2,100})?$/", $email)){

	// 	$query = "SELECT id FROM accounts WHERE email = '$email' && password = '$pass' LIMIT 1";
	// 	$get = $mysqli->query($query);

	// 	if($get->num_rows == 1){
	// 		$info = $get->fetch_assoc();
	// 		$_SESSION['email'] = $email;
	// 		$_SESSION['pw'] = $pass;
	// 		$_SESSION['id'] = $info['id'];
	// 		echo 'welcome';
	// 	}
	// }
	// else
	//	echo false;	

	echo 'welcome';
}
elseif(isset($_POST['vars']['submit']) && $_POST['vars']['submit'] == 'Register'){

	// foreach($_POST['vars'] as $k => $v){
	// 	$$k = $mysqli->real_escape_string($v);
	// }

	// $pass = md5($_POST['vars']['password']);

	// $query = "INSERT INTO accounts (first_name, last_name, email, password) VALUES ('$first_name', '$last_name', '$email', '$pass')";

	// if($mysqli->query($query)){
	// 	$query = "SELECT * FROM accounts WHERE email = '$email'";
	// 	$check_id = $mysqli->query($query);
	// 	$check_id = $check_id->fetch_assoc();

	// 	$id = $check_id['id'];

	// 	createTable($id);
	// 	mkdir('users/'.$id);

	// 	$_SESSION['email'] = $email;
	// 	$_SESSION['pw'] = md5($password);
	// 	$_SESSION['id'] = $id;

	// 	echo 'welcome';
	// }
	// else{
	// 	pre($mysqli->error);
	// }

	echo 'welcome';
}

?>