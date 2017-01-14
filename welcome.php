<?php
/**

	Resizable changes body cursor on resize - change to use custom cursors

**/

include('cp/functions.php');
include('cp/border.php');


?>

<!DOCTYPE html>
<html>
<head>
	<title></title>

<script src="core.js"></script>


<link rel="stylesheet" href="style.css" />

<script src="libs/jquery-2.1.4.min.js"></script>
<script src="libs/jquery-ui/jquery-ui.min.js"></script>
<link rel="stylesheet" href="libs/jquery-ui/jquery-ui.min.css" />

<script src="libs/spectrum/spectrum.js"></script>
<link rel="stylesheet" href="libs/spectrum/spectrum.css" />

<script src="validateForm.js"></script>

<link rel="stylesheet" href="controlPanel.css" />
<script src="controlPanel.js"></script>


<style type="text/css">

	html, body {
		height: 100%;
	}

	body {
		cursor: url(./site/misc/cursor.png), auto;
		background: none;
	}

	#Canvas {
		height: 100%;
		width: 100%;
		max-width: 100%;
		overflow-x: hidden;
		display: block;
		padding: 0;
		margin: 0;
	}

	#Canvas:after{
		content: '';
	}

	#Canvas .Focus {
		-webkit-box-shadow: 0 0 20px #00aaff; 
		-moz-box-shadow: 0 0 20px #00aaff; 
		box-shadow:0 0 20px #00aaff;
	}

	#Canvas .Focus.hide {
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
	}

	#Canvas .Focus:hover, #Canvas .Focus.ui-resizable-resizing {
		-webkit-box-shadow: 0 0 20px #00aaff; 
		-moz-box-shadow: 0 0 20px #00aaff; 
		box-shadow:0 0 20px #00aaff;
	}

	#Canvas * {
		height: 20px;
		max-width: 100%;
	}

	#Canvas .Focus .ui-icon-gripsmall-diagonal-se {
		background: url(./site/resizer.gif) bottom right no-repeat;
		background-size: contain;
	}

</style>



</head>
<body>

</body>
<?php //<script src="home.js"></script> ?>

</html>