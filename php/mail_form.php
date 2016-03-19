<?
$name = $_POST['name'];
$subject = "Hello from " .$name;
$email = $_POST['email'];
$message = $_POST['message'];

if ($email!="" and $message!="" and $name!="")
{

$site_name = "radeg.cz";
$header   = "From: ". $name . " <" . $email . ">\r\n";
$header   .= 'Content-type: text/html; charset=utf-8' . "\r\n";

mail("radeg007@gmail.com", $subject, $message, "From: " . $email, $site_name);
}
?>
