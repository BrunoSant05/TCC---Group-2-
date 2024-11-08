<?php
$p1 = $_POST['p1'];
$p2 = $_POST['p2'];
$p3 = $_POST['p3'];
$p4 = $_POST['p4'];
$p5 = $_POST['p5'];
$p6 = $_POST['p6'];
$p7 = $_POST['p7'];

function recomendarPecas($p1, $p2, $p3, $p4, $p5, $p6, $p7) {
    $recomendacao = [];
    
    switch ($p1) {
        case 'gamer':
            $recomendacao[] = "Gamer";
            break;
        case 'designer':
            $recomendacao[] = "Designer";
            break;
        case 'estudo':
            $recomendacao[] = "Estudo";
            break;
        case 'pessoal':
            $recomendacao[] = "Pessoal";
            break;
        case 'trabalho':
            $recomendacao[] = "Trabalho";
            break;
    }
    
    switch ($p2) {
        case 'nvidia':
            $recomendacao[] = "Nvidia";
            break;
        case 'amd':
            $recomendacao[] = "AMD";
            break;
        case 'nao':
            $recomendacao[] = "Sem placa de vídeo";
            break;
    }
    
    switch ($p3) {
        case 'hd':
            $recomendacao[] = "HD";
            break;
        case 'ssd':
            $recomendacao[] = "SSD";
            break;
        case 'nvme':
            $recomendacao[] = "NVMe";
            break;
        case 'ambos':
            $recomendacao[] = "SSD + HD";
            break;
        case 'sem':
            $recomendacao[] = "Sem preferência";
            break;
    }
    
    switch ($p4) {
        case 'media':
            $recomendacao[] = "Torre Média";
            break;
        case 'completa':
            $recomendacao[] = "Torre Completa";
            break;
        case 'mini':
            $recomendacao[] = "Mini Torre";
            break;
        case 'sem':
            $recomendacao[] = "Sem preferência";
            break;
    }
    
    switch ($p5) {
        case 'hdmi':
            $recomendacao[] = "HDMI";
            break;
        case 'vga':
            $recomendacao[] = "VGA";
            break;
        case 'display':
            $recomendacao[] = "DisplayPort";
            break;
        case 'sem':
            $recomendacao[] = "Sem preferência";
            break;
    }
    
    switch ($p6) {
        case '2500':
            $recomendacao[] = "Até R$2500";
            break;
        case '4500':
            $recomendacao[] = "Entre R$2500 e R$4500";
            break;
        case '7000':
            $recomendacao[] = "Entre R$4500 e R$7000";
            break;
        case '7001':
            $recomendacao[] = "Acima de R$7000";
            break;
    }
    
    switch ($p7) {
        case 'sim':
            $recomendacao[] = "Sim";
            break;
        case 'nao1':
            $recomendacao[] = "Tenho alguém para montar";
            break;
        case 'nao2':
            $recomendacao[] = "Consigo montar sozinho";
            break;
    }
    
    return $recomendacao;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Você está certo disso?</title>
    <link rel="stylesheet" href="CSS/questresul.css">

</head>
<body>
    <div class="container">
        <h1>Sua resposta:</h1>
        <ol>
        <?php
        $pecasRecomendadas = recomendarPecas($p1, $p2, $p3, $p4, $p5, $p6, $p7);

        foreach ($pecasRecomendadas as $peca) {
            echo "<li>$peca</li>";
        }
        ?>
        </ol>
        <form action= "questconf.php" method="post">

            <input type="hidden" name="p1" value="<?php echo htmlspecialchars($p1); ?>">
            <input type="hidden" name="p2" value="<?php echo htmlspecialchars($p2); ?>">
            <input type="hidden" name="p3" value="<?php echo htmlspecialchars($p3); ?>">
            <input type="hidden" name="p4" value="<?php echo htmlspecialchars($p4); ?>">
            <input type="hidden" name="p5" value="<?php echo htmlspecialchars($p5); ?>">
            <input type="hidden" name="p6" value="<?php echo htmlspecialchars($p6); ?>">
            <input type="hidden" name="p7" value="<?php echo htmlspecialchars($p7); ?>">
            <input type="submit" value="Confirmar resposta">
       
    </div>
</body>
</html>
