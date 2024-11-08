<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar Produto</title>
    <link rel="stylesheet" href="CSS/cadastrarprod.css">
</head>
<body>
    <form action="Cadprodresul.php" method="post">
         <div class="container">
        <h1>Cadastrar Produto</h1>
        <p>Cadastre seu produto e divulgue a sua loja por meio do cadastro de seu produto. É só cadastrar o produto com o link que será direcionado para o seu site.</p>
    </div>
        <label for="c1">Tipo de produto</label><br>
        <select name="c1" id="c1">
            <option value="armazenamento">armazenamento</option>
            <option value="gabinete">Gabinete</option>
            <option value="fonte">Fonte</option>
            <option value="ram">Memoria RAM</option>
            <option value="monitor">Monitor</option>
            <option value="mouse">Mouse</option>
            <option value="video">Placa de vídeo</option>
            <option value="mae">Placa-mãe</option>
            <option value="processador">Processador</option>
            <option value="teclado">Teclado</option>
            <option value="ventoinha">Ventoinha</option>
        </select>
        <br>
        <label for="c2">Link do produto:</label><br>
        <input type="text" name="link" id="c2"><br>
        <label for="c3">Nome do produto:</label><br>
        <input type="text" name="nome" id="c3"><br>
        <input type="submit" value="Cadastrar produto">
    </form>
</body>
</html>
