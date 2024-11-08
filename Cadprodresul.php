<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "produtos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$tipo = $_POST['c1'];  
$link = $_POST['link']; 
$nome = $_POST['nome'];

$categoria = '';
$hardware_types = ['armazenamento', 'gabinete', 'fonte', 'ram', 'monitor', 'placa de vídeo', 'placa-mãe', 'processador', 'ventoinha'];
$periferico_types = ['mouse', 'teclado'];

if (in_array($tipo, $hardware_types)) {
    $categoria = 'hardware';
} elseif (in_array($tipo, $periferico_types)) {
    $categoria = 'periferico';
} else {
    die("Tipo de produto desconhecido.");
}

$stmt_check = $conn->prepare("SELECT COUNT(*) FROM produtos WHERE link = ?");
$stmt_check->bind_param("s", $link);
$stmt_check->execute();
$stmt_check->bind_result($count);
$stmt_check->fetch();
$stmt_check->close();

$message = '';

if ($count > 0) {
    $message = '<div class="message error">Erro: O link já está cadastrado. Por favor, use um link diferente.</div>';
} else {
    $stmt = $conn->prepare("INSERT INTO produtos (tipo, link, nome, categoria) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $tipo, $link, $nome, $categoria);

    try {
        $stmt->execute();
        $message = '<div class="message success">Produto cadastrado com sucesso!</div>';
    } catch (mysqli_sql_exception $e) {
        if ($e->getCode() === 1062) {
            $message = '<div class="message error">Erro: O link já está cadastrado. Por favor, use um link diferente.</div>';
        } else {
            $message = '<div class="message error">Erro ao cadastrar produto. Por favor, tente novamente.</div>';
        }
    }

    $stmt->close();
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado do Cadastro</title>
    <link rel="stylesheet" href="CSS/Cadprodresul.css">
    
</head>
<body>

    <div class="navigation">
        <?php echo $message; ?>
        
        <div class="buttons">
            <form action="cadastrarProd.php" method="get">
                <input type="submit" value="Cadastrar mais produtos">
            </form>
            <form action="Home.html" method="get">
                <input type="submit" value="Voltar para a Home">
            </form>
        </div>
    </div>

</body>
</html>
