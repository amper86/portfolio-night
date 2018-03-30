<?php
$name = $_POST['name'];
$email = $_POST['email'];
$street = $_POST['street'];
$message = $_POST['message'];

$mail_message = '
<html>
    <head>
        <title>С сайта myportfolio</title>
        <style>
            body {
                background-color: gray;
            }
            h2 {
                font-size: 30px;
                color: blue;
            }
            li {
                list-style-none;
                font-size: 24px;
                color: green;
            }
        </style>
    </head>
    <body>
        <h2>Информация</h2>
        <ul>
            <li>Имя: ' . $name . '</li>
            <li>Почта: ' . $email . '</li>
            <li>Сообщение: ' . $message . '</li>
        </ul>
    </body>
</html>    
';

$headers = "From: Администратор сайта <admin@cg54542.tmweb.ru>\r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

$result = [status => 'true', text => ''];
if($name == ''){
    $result['status'] = 'false';
    $result['text'] = 'Напишите имя!';
}
if($email == ''){
    $result['status'] = 'false';
    $result['text'] = 'Напишите почтовый адресс!';
}
if($message == ''){
    $result['status'] = 'false';
    $result['text'] = 'Напишите сообщение!';
}
if($result['status'] == 'true'){
    mail('86amper@gmail.com', 'Сообщение с myportfolio', $mail_message, $headers);
    $result['text'] = 'Сообщение отправлено';
}

echo json_encode($result);

?>