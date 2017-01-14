<?

error_reporting(E_ERROR | E_WARNING | E_PARSE);
session_start();

// $db_host = 'localhost';
// $db_name = 'digiabode';
// $db_user = 'root';
// $db_pass = '';

// $mysqli = new mysqli("$db_host", "$db_user", "$db_pass", "$db_name");
// if(!$mysqli)
// 	die('Could not connect: '.$mysqli->error);


/***** CONSTANTS ******/
$projects_table = 'projects_'.$_SESSION[id];





if(!function_exists(pre)){
	function pre($arr){
		echo '<pre>';
		print_r($arr);
		echo '</pre>';
	}
}

function createTable($table_name){
	global $mysqli;

	$table_name = 'projects_'.$table_name;

	$query = "SELECT id FROM $table_name";
	$check = $mysqli->query($query);
	if(empty($check)){ 
		$query = "CREATE TABLE $table_name (
			id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
			project VARCHAR(255),
			domain VARCHAR(255),
			live TINYINT
		)";

		if(!$mysqli->query($query)){
			echo '<hr> -'.$mysqli->error;
			die();
		}
	}
}

function loginCheck(){	
	// global $mysqli;
	// $email = $mysqli->real_escape_string($_SESSION['email']);
	// $pass = $mysqli->real_escape_string($_SESSION['pw']);
	// $id = $mysqli->real_escape_string($_SESSION['id']);
	// $query = "SELECT * FROM accounts WHERE id = '$id' && email = '$email' && password = '$pass' LIMIT 1";
	// $get = $mysqli->query($query);
	// if($get->num_rows < 1)
	// 	header('LOCATION: /');
	// else
	// 	return $get->fetch_assoc();

	header('LOCATION: ../');
}

if(!isset($_POST['vars']['submit']) && !isset($_POST['login']['submit']))
	$user_info = loginCheck();

?>