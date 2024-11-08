<?php
// Defina os parâmetros de conexão com o banco de dados
$host = '127.0.0.1';        // Host onde o MySQL está rodando
$dbname = 'cadastro_db';    // Nome do banco de dados
$user = 'root';            // Usuário do banco de dados
$pass = '';            // Senha do banco de dados

try {
    // Cria uma nova conexão PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    
    // Define o modo de erro para exceções para facilitar o debug
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Exibe a mensagem de erro e interrompe o script em caso de falha
    die("Erro ao conectar ao banco de dados: " . $e->getMessage());
}
?>

