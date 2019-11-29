<?php
require_once("site/controllers/SiteController.php");
$site = new SiteController();
$site -> index();









// $REQUEST_URI = filter_input(INPUT_SERVER, 'REQUEST_URI');
// $INITE = strpos($REQUEST_URI, '?');
// if ($INITE):
// 	$REQUEST_URI = substr($REQUEST_URI, 0, $INITE);
// endif;
// $REQUEST_URI_PASTA = substr($REQUEST_URI, 1);
// $URL = explode('/', $REQUEST_URI_PASTA);
// $URL[0] = ($URL[0] != '' ? $URL[0] : 'home');

// if (file_exists('views/' . $URL[0] . '.php')):
// 	require('views/' . $URL[0] . '.php');
// elseif (is_dir('views/' . $URL[0])):
// 	if (isset($URL[1]) && file_exists('views/' . $URL[0] . '/' . $URL[1] . '.php')):
// 		require('views/' . $URL[0] . '/' . $URL[1] . '.php');
// else:
// 	require('views/404.php');
// endif;
// else:
// 	require('views/404.php');
// endif;