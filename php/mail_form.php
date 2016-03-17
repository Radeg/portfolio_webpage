<?
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
//$thanksPage = 'http://www.divadlovetry.cz/thanks.html';
//$nothanksPage = 'http://www.divadlovetry.cz/nothanks.html';

if ($email!="" and $message!="" and $name!="")
{

$site_name = "Portfolio";
$header   = "From: ". $name . " <" . $email . ">\r\n";
$header   .= 'Content-type: text/html; charset=utf-8' . "\r\n";

mail("radeg007@gmail.com", $message, "From: " . $email, $site_name);
echo '<p>Your message has been sent!</p>';
}
else
{
echo '<p>Something went wrong, go back and try again!</p>';
}
?>
