<!DOCTYPE HTML>
<?php
if (!isset($_POST['submit'])){
    echo "You have not submitted the form!";
    exit();
}
if (isset($_POST['submit'])){
echo "You have submitted the form succesfully!";
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
echo "<br> Email: $email";
$age = filter_var($_POST['age'], FILTER_SANITIZE_NUMBER_INT);
$name = htmlspecialchars($_POST['name'], ENT_QUOTES);
$role = htmlspecialchars($_POST['role'], ENT_QUOTES);
$favorite_subject = htmlspecialchars($_POST['favorite_subject'], ENT_QUOTES);
$favorite_color = htmlspecialchars($_POST['favorite_color'], ENT_QUOTES);
$favorite_os = htmlspecialchars($_POST['favorite_os'], ENT_QUOTES);
$favorite_phone = htmlspecialchars($_POST['favorite_phone'], ENT_QUOTES);
}
?>
