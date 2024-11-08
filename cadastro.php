<?php
require_once '../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = $_POST['nome'];
    $usuario = $_POST['usuario'];
    $cpf = $_POST['cpf'];
    $data_nascimento = $_POST['data_nascimento'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $senha = password_hash($_POST['senha'], PASSWORD_BCRYPT);

    // Upload de foto
    $foto = '';
    if (isset($_FILES['foto']) && $_FILES['foto']['error'] === 0) {
        $foto = 'uploads/' . basename($_FILES['foto']['name']);
        move_uploaded_file($_FILES['foto']['tmp_name'], '../' . $foto);
    }

    $stmt = $pdo->prepare("INSERT INTO usuarios (nome, usuario, cpf, data_nascimento, telefone, email, senha, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$nome, $usuario, $cpf, $data_nascimento, $telefone, $email, $senha, $foto]);

    echo json_encode(['status' => 'success', 'message' => 'Usuário cadastrado com sucesso!']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método não permitido']);
}
?>
