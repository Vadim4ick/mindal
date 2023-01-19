<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$token = "5732411481:AAEkNrCIi0w4aHwyz_XAmD__UBZPFu6pB-0";
$chat_id = "-1001540578677";
$arr = array(
  'Ваше имя: ' => $name,
  'Ваш телефон: ' => $phone,
  'Комментарий' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  return false;
} else {
  return true;
}
?>
