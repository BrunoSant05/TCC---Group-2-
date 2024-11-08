<?php
require_once 'config.php'; // Inclui o arquivo de configuração do banco de dados
session_start(); // Inicia a sessão para salvar mensagens temporárias

header('Content-Type: application/json'); // Define o tipo de retorno como JSON

// Verifica se a requisição é do tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Coleta os dados enviados pelo formulário
    $nome = trim($_POST['nome']);
    $usuario = trim($_POST['usuario']);
    $cpf = trim($_POST['cpf']);
    $data_nascimento = $_POST['data_nascimento'];
    $telefone = trim($_POST['telefone']);
    $email = trim($_POST['email']);
    $senha = password_hash($_POST['senha'], PASSWORD_BCRYPT); // Criptografa a senha

    // Inicializa a variável para o upload da foto
    $foto = '';
    
    // Validação básica do CPF
    if (!preg_match("/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/", $cpf)) {
        $_SESSION['message'] = 'CPF inválido.';
        $_SESSION['status'] = 'error';
        $redirect_url = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'cadastrar.html';
        header("Location: $redirect_url");
        exit;
    }

    // Verifica se o usuário ou email já existe
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

    // Verifica se uma foto foi enviada e se não ocorreu erro no upload
    if (isset($_FILES['foto']) && $_FILES['foto']['error'] === 0) {
        $foto_dir = '../uploads/'; // Diretório onde a foto será armazenada
        
        // Cria o diretório se não existir
        if (!is_dir($foto_dir)) {
            mkdir($foto_dir, 0777, true);
        }
        
        // Define o caminho completo da foto
        $foto = $foto_dir . basename($_FILES['foto']['name']);
        
        // Move o arquivo enviado para o diretório de uploads
        if (!move_uploaded_file($_FILES['foto']['tmp_name'], $foto)) {
            // Se falhar, armazena mensagem de erro na sessão e redireciona
            $_SESSION['message'] = 'Erro ao fazer upload da foto';
            $_SESSION['status'] = 'error';
            $redirect_url = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'cadastrar.html';
            header("Location: $redirect_url");
            exit; // Termina a execução do script
        }
    }

    try {
        // Prepara a query de inserção no banco de dados
        $stmt = $pdo->prepare("INSERT INTO usuarios (nome, usuario, cpf, data_nascimento, telefone, email, senha, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        
        // Executa a query com os dados coletados
        $stmt->execute([$nome, $usuario, $cpf, $data_nascimento, $telefone, $email, $senha, $foto]);

        // Se a inserção for bem-sucedida, armazena mensagem de sucesso
        $_SESSION['message'] = 'Usuário cadastrado com sucesso!';
        $_SESSION['status'] = 'success';
    } catch (PDOException $e) {
        // Se ocorrer erro ao cadastrar, armazena a mensagem de erro
        $_SESSION['message'] = 'Erro ao cadastrar: ' . $e->getMessage();
        $_SESSION['status'] = 'error';
    }

    // Redireciona para a página anterior, ou para uma página padrão, caso não haja uma URL de referência
    $redirect_url = isset($_SESSION['previous_page']) ? $_SESSION['previous_page'] : 'home.html';
    header("Location: $redirect_url");
    exit; // Termina a execução do script
} else {
    // Se o método não for POST, armazena mensagem de erro e redireciona
    $_SESSION['message'] = 'Método não permitido';
    $_SESSION['status'] = 'error';
    $redirect_url = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'cadastrar.html';
    header("Location: $redirect_url");
    exit; // Termina a execução do script
}
?>
