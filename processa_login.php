<?php
// Conexão com o banco de dados
$servername = "127.0.0.1";
$username = "cadastro_db";
$password = "root";
$dbname = "root";

// Conectando ao banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Checando a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Recebendo os dados do formulário
$userInput = $_POST['username'];
$senha = $_POST['senha'];

// Consultando o banco de dados para verificar o usuário
$sql = "SELECT * FROM usuarios WHERE (username = ? OR email = ?) LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $userInput, $userInput);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Usuário encontrado
    $user = $result->fetch_assoc();
    
    // Verificando a senha
    if (password_verify($senha, $user['senha'])) {
        // Redirecionando para a página inicial se a senha for válida
        header("Location: home.html");
        exit;
    } else {
        // Senha incorreta
        echo "<script>alert('Usuário/Email ou senha incorretos!'); window.location.href='login.html';</script>";
    }
} else {
    // Usuário/Email não encontrado
    echo "<script>alert('Usuário/Email ou senha incorretos!'); window.location.href='login.html';</script>";
}

// Fechando a conexão
$conn->close();
?>
