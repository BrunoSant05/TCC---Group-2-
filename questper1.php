<?php
$p1 = $_POST['p1'] ?? '';
$p2 = $_POST['p2'] ?? '';
$p3 = $_POST['p3'] ?? '';
$p4 = $_POST['p4'] ?? '';
$p5 = $_POST['p5'] ?? '';
$p6 = $_POST['p6'] ?? '';
$p7 = $_POST['p7'] ?? '';

function selected($value, $current) {
    return $value === $current ? 'selected' : '';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Resposta</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #2E8B8C;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            width: 100%;
        }
        h1 {
            text-align: center;
        }
        form {
            margin: 20px 0;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            text-transform: uppercase;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
        select, input[type="text"] {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border-radius: 4px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Editar Respostas</h1>
        <form action="questresul1.php" method="post">
            <label for="p1">Tipo de Uso:</label>
            <select name="p1" id="p1">
                <option value="gamer" <?php echo selected('gamer', $p1); ?>>Gamer</option>
                <option value="designer" <?php echo selected('designer', $p1); ?>>Designer</option>
                <option value="estudo" <?php echo selected('estudo', $p1); ?>>Estudo</option>
                <option value="pessoal" <?php echo selected('pessoal', $p1); ?>>Pessoal</option>
                <option value="trabalho" <?php echo selected('trabalho', $p1); ?>>Trabalho</option>
            </select>

            <label for="p2">Placa de Vídeo:</label>
            <select name="p2" id="p2">
                <option value="nvidia" <?php echo selected('nvidia', $p2); ?>>Nvidia</option>
                <option value="amd" <?php echo selected('amd', $p2); ?>>AMD</option>
                <option value="nao" <?php echo selected('nao', $p2); ?>>Sem placa de vídeo</option>
            </select>

            <label for="p3">Tipo de Armazenamento:</label>
            <select name="p3" id="p3">
                <option value="hd" <?php echo selected('hd', $p3); ?>>HD</option>
                <option value="ssd" <?php echo selected('ssd', $p3); ?>>SSD</option>
                <option value="nvme" <?php echo selected('nvme', $p3); ?>>NVMe</option>
                <option value="ambos" <?php echo selected('ambos', $p3); ?>>SSD + HD</option>
                <option value="sem" <?php echo selected('sem', $p3); ?>>Sem preferência</option>
            </select>

            <label for="p4">Tipo de Torre:</label>
            <select name="p4" id="p4">
                <option value="media" <?php echo selected('media', $p4); ?>>Torre Média</option>
                <option value="completa" <?php echo selected('completa', $p4); ?>>Torre Completa</option>
                <option value="mini" <?php echo selected('mini', $p4); ?>>Mini Torre</option>
                <option value="sem" <?php echo selected('sem', $p4); ?>>Sem preferência</option>
            </select>

            <label for="p5">Tipo de Conexão:</label>
            <select name="p5" id="p5">
                <option value="hdmi" <?php echo selected('hdmi', $p5); ?>>HDMI</option>
                <option value="vga" <?php echo selected('vga', $p5); ?>>VGA</option>
                <option value="display" <?php echo selected('display', $p5); ?>>DisplayPort</option>                
                <option value="sem" <?php echo selected('sem', $p4); ?>>Sem preferência</option>
            </select>

            <label for="p6">Faixa de Preço:</label>
            <select name="p6" id="p6">
                <option value="2500" <?php echo selected('2500', $p6); ?>>Até R$2500</option>
                <option value="4500" <?php echo selected('4500', $p6); ?>>Entre R$2500 e R$4500</option>
                <option value="7000" <?php echo selected('7000', $p6); ?>>Entre R$4500 e R$7000</option>
                <option value="7001" <?php echo selected('7001', $p6); ?>>Acima de R$7000</option>
            </select>

            <label for="p7">Montagem:</label>
            <select name="p7" id="p7">
                <option value="sim" <?php echo selected('sim', $p7); ?>>Sim</option>
                <option value="nao1" <?php echo selected('nao1', $p7); ?>>Tenho alguém para montar</option>
                <option value="nao2" <?php echo selected('nao2', $p7); ?>>Consigo montar sozinho</option>
            </select>

            <input type="submit" value="Salvar Alterações">
        </form>
    </div>
</body>
</html>
