<?php
session_start();
session_destroy();
header('Location: \Exercice_AJAX-JQuery\TP_AJAX-JQuery\index.php');
exit();
?>