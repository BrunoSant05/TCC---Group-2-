<?php
$p1 = isset($_POST['p1']) ? $_POST['p1'] : 'N/A';
$p2 = isset($_POST['p2']) ? $_POST['p2'] : 'N/A';
$p3 = isset($_POST['p3']) ? $_POST['p3'] : 'N/A';
$p4 = isset($_POST['p4']) ? $_POST['p4'] : 'N/A';
$p5 = isset($_POST['p5']) ? $_POST['p5'] : 'N/A';
$p6 = isset($_POST['p6']) ? $_POST['p6'] : 'N/A';
$p7 = isset($_POST['p7']) ? $_POST['p7'] : 'N/A';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmado!!!</title>

    <link rel="stylesheet" href="CSS/questconf.css">
  
</head>
<body>

<div class="container">
    <h1>Finalização</h1>
    <h3>Obrigado por responder ao questionário!</h3>
    <p>Com base nas suas respostas, faremos a melhor recomendação de peças para o seu computador.</p>

    <form action='home.html'>
        <input type='submit' value='Finalizar e Retornar à Página Inicial'>
    </form>
</div>

</body>
</html>
