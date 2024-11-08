

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questionário</title>
    <link rel="stylesheet" href="CSS/questper.css">

</head>
<body>
    <form action="questresul.php" method="post" id="questionForm">
        <h1>Questionário</h1>

        <div class="question-group active" id="q1">
    <h3>Qual a finalidade de uso?</h3>
    <label class="custom-radio">Gamer
        <input type="radio" name="p1" value="gamer" required>
        <span class="checkmark"></span>
        <span class="tooltip">Ideal para jogos e gráficos pesados.</span>
    </label>
    <label class="custom-radio">Designer
        <input type="radio" name="p1" value="designer" required>
        <span class="checkmark"></span>
        <span class="tooltip">Ideal para design gráfico e edição de vídeos.</span>
    </label>
    <label class="custom-radio">Estudo
        <input type="radio" name="p1" value="estudo" required>
        <span class="checkmark"></span>
        <span class="tooltip">Ideal para tarefas escolares e pesquisas online.</span>
    </label>
    <label class="custom-radio">Pessoal
        <input type="radio" name="p1" value="pessoal" required>
        <span class="checkmark"></span>
        <span class="tooltip">Ideal para uso diário, como navegação na web e redes sociais.</span>
    </label>
    <label class="custom-radio">Trabalho
        <input type="radio" name="p1" value="trabalho" required>
        <span class="checkmark"></span>
        <span class="tooltip">Ideal para tarefas de escritório e trabalho remoto.</span>
    </label>
</div>
<div class="question-group" id="q2">
    <h3>Qual marca de placa de vídeo?</h3>
    <label class="custom-radio">Nvidia
        <input type="radio" name="p2" value="nvidia" required>
        <span class="checkmark"></span>
        <span class="tooltip">Conhecida por seu desempenho superior em jogos e gráficos.</span>
    </label>
    <label class="custom-radio">AMD
        <input type="radio" name="p2" value="amd" required>
        <span class="checkmark"></span>
        <span class="tooltip">Oferece um ótimo custo-benefício para jogos e trabalho gráfico.</span>
    </label>
    <label class="custom-radio">Sem placa de vídeo dedicada
        <input type="radio" name="p2" value="nao" required>
        <span class="checkmark"></span>
        <span class="tooltip">Adequado para tarefas básicas e uso cotidiano.</span>
    </label>
</div>
<div class="question-group" id="q3">
    <h3>Qual tipo de armazenamento?</h3>
    <label class="custom-radio">HD
        <input type="radio" name="p3" value="hd" required>
        <span class="checkmark"></span>
        <span class="tooltip">Mais econômico, maior capacidade, mas mais lento.</span>
    </label>
    <label class="custom-radio">SSD
        <input type="radio" name="p3" value="ssd" required>
        <span class="checkmark"></span>
        <span class="tooltip">Rápido, ideal para inicialização e carregamento de programas.</span>
    </label>
    <label class="custom-radio">NVMe
        <input type="radio" name="p3" value="nvme" required>
        <span class="checkmark"></span>
        <span class="tooltip">Extremamente rápido, ideal para grandes volumes de dados e edição.</span>
    </label>
    <label class="custom-radio">SSD e HD
        <input type="radio" name="p3" value="ambos" required>
        <span class="checkmark"></span>
        <span class="tooltip">Combina velocidade e capacidade de armazenamento.</span>
    </label>
    <label class="custom-radio">Sem preferência
        <input type="radio" name="p3" value="sem" required>
        <span class="checkmark"></span>
        <span class="tooltip">Qualquer opção que atenda suas necessidades.</span>
    </label>
</div>
<div class="question-group" id="q4">
    <h3>Qual estilo de gabinete?</h3>
    <label class="custom-radio">Torre média
        <input type="radio" name="p4" value="media" required>
        <span class="checkmark"></span>
        <span class="tooltip">Compacto e eficiente para a maioria dos setups.</span>
    </label>
    <label class="custom-radio">Torre completa
        <input type="radio" name="p4" value="completa" required>
        <span class="checkmark"></span>
        <span class="tooltip">Maior espaço para componentes e melhor ventilação.</span>
    </label>
    <label class="custom-radio">Minitorre
        <input type="radio" name="p4" value="mini" required>
        <span class="checkmark"></span>
        <span class="tooltip">Muito compacto, ideal para espaços pequenos.</span>
    </label>
    <label class="custom-radio">Sem preferência
        <input type="radio" name="p4" value="sem" required>
        <span class="checkmark"></span>
        <span class="tooltip">Qualquer estilo que atenda suas necessidades.</span>
    </label>
</div>
<div class="question-group" id="q5">
    <h3>Qual saída de vídeo preferida?</h3>
    <label class="custom-radio">HDMI
        <input type="radio" name="p5" value="hdmi" required>
        <span class="checkmark"></span>
        <span class="tooltip">Compatível com a maioria dos monitores e TVs.</span>
    </label>
    <label class="custom-radio">VGA
        <input type="radio" name="p5" value="vga" required>
        <span class="checkmark"></span>
        <span class="tooltip">Antiga, mas ainda em uso em alguns dispositivos.</span>
    </label>
    <label class="custom-radio">DisplayPort
        <input type="radio" name="p5" value="display" required>
        <span class="checkmark"></span>
        <span class="tooltip">Oferece alta qualidade de vídeo e áudio.</span>
    </label>
    <label class="custom-radio">Sem preferência
        <input type="radio" name="p5" value="sem" required>
        <span class="checkmark"></span>
        <span class="tooltip">Qualquer saída que atenda suas necessidades.</span>
    </label>
</div>
<div class="question-group" id="q6">
    <h3>Qual a faixa de preço que você considera?</h3>
    <label class="custom-radio">Até R$2500
        <input type="radio" name="p6" value="2500" required>
        <span class="checkmark"></span>
        <span class="tooltip">Opções mais econômicas e básicas.</span>
    </label>
    <label class="custom-radio">Entre R$2500 e R$4500
        <input type="radio" name="p6" value="4500" required>
        <span class="checkmark"></span>
        <span class="tooltip">Bom equilíbrio entre preço e desempenho.</span>
    </label>
    <label class="custom-radio">Entre R$4500 e R$7000
        <input type="radio" name="p6" value="7000" required>
        <span class="checkmark"></span>
        <span class="tooltip">Opções avançadas com melhores especificações.</span>
    </label>
    <label class="custom-radio">Acima de R$7000
        <input type="radio" name="p6" value="7001" required>
        <span class="checkmark"></span>
        <span class="tooltip">Máximo desempenho e qualidade.</span>
    </label>
</div>
<div class="question-group" id="q7">
    <h3>Você precisa de ajuda para a montagem?</h3>
    <label class="custom-radio">Sim
        <input type="radio" name="p7" value="sim" required>
        <span class="checkmark"></span>
        <span class="tooltip">Precisa de assistência na montagem do equipamento.</span>
    </label>
    <label class="custom-radio">Tenho alguém para montar
        <input type="radio" name="p7" value="nao1" required>
        <span class="checkmark"></span>
        <span class="tooltip">Já tem alguém para ajudar na montagem.</span>
    </label>
    <label class="custom-radio">Consigo montar sozinho
        <input type="radio" name="p7" value="nao2" required>
        <span class="checkmark"></span>
        <span class="tooltip">Consegue montar o equipamento sozinho.</span>
    </label>
</div>


        <input type="submit" value="Confirmar Respostas" id="submitButton">
    </form>

    <script>
         const questions = document.querySelectorAll('.question-group');
        let currentQuestion = 0;

        questions.forEach((question, index) => {
            const radios = question.querySelectorAll('input[type="radio"]');
            radios.forEach(radio => {
                radio.addEventListener('change', () => {
                    if (index < questions.length - 1) {
                        questions[index + 1].classList.add('active');
                        window.scrollTo({
                            top: questions[index + 1].offsetTop,
                            behavior: 'smooth'
                        });
                    } else {
                        document.getElementById('submitButton').style.display = 'block';
                        window.scrollTo({
                            top: document.getElementById('submitButton').offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    </script>
</body>
</html>
