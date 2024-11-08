<?php
require_once 'config.php';
session_start();

header('Content-Type: application/json');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nome = trim($_POST['nome']);
    $usuario = trim($_POST['usuario']);
    $cpf = trim($_POST['cpf']);
    $data_nascimento = $_POST['data_nascimento'];
    $telefone = trim($_POST['telefone']);
    $email = trim($_POST['email']);
    $senha = password_hash($_POST['senha'], PASSWORD_BCRYPT); 

    $foto = '';
    

    if (!preg_match("/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/", $cpf)) {
        $_SESSION['message'] = 'CPF inválido.';
        $_SESSION['status'] = 'error';
        $redirect_url = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'cadastrar.html';
        header("Location: $redirect_url");
        exit;
    }


    $stmt = $pdo->prepare("SELECT COUNT(*) FROM usuarios WHERE usuario = ? OR email = ?");
    $stmt->execute([$usuario, $email]);
    $count = $stmt->fetchColumn();

    if ($count > 0) {
        $_SESSION['message'] = 'Usuário ou e-mail já cadastrado.';
        $_SESSION['status'] = 'error';
        $redirect_url = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'cadastrar.html';
        header("Location: $redirect_url");
        exit;
    }


    if (isset($_FILES['foto']) && $_FILES['foto']['error'] === 0) {
        $foto_dir = '../uploads/'; 

        if (!is_dir($foto_dir)) {
            mkdir($foto_dir, 0777, true);
        }
        

        $foto = $foto_dir . basename($_FILES['foto']['name']);
        
        if (!move_uploaded_file($_FILES['foto']['tmp_name'], $foto)) {

            $_SESSION['message'] = 'Erro ao fazer upload da foto';
            $_SESSION['status'] = 'error';
            $redirect_url = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'cadastrar.html';
            header("Location: $redirect_url");
            exit; // Termina a execução do script
        }
    }

    try {
        $stmt = $pdo->prepare("INSERT INTO usuarios (nome, usuario, cpf, data_nascimento, telefone, email, senha, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        
        $stmt->execute([$nome, $usuario, $cpf, $data_nascimento, $telefone, $email, $senha, $foto]);


        $_SESSION['message'] = 'Usuário cadastrado com sucesso!';
        $_SESSION['status'] = 'success';
    } catch (PDOException $e) {

        $_SESSION['message'] = 'Erro ao cadastrar: ' . $e->getMessage();
        $_SESSION['status'] = 'error';
    }


    $redirect_url = isset($_SESSION['previous_page']) ? $_SESSION['previous_page'] : 'home.html';
    header("Location: $redirect_url");
    exit; 
} else {

    $_SESSION['message'] = 'Método não permitido';
    $_SESSION['status'] = 'error';
    $redirect_url = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'cadastrar.html';
    header("Location: $redirect_url");
    exit; // Termina a execução do script
}
?>
