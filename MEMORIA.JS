document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const animations = ['slide', 'fade', 'scale'];

    // Função para alternar o menu ao passar o mouse
    menuToggle.addEventListener('mouseover', () => {
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        menu.classList.remove('slide', 'fade', 'scale');
        menu.classList.add(randomAnimation);
        menu.style.left = '0';
        menu.style.opacity = '1';
    });

    menuToggle.addEventListener('mouseout', () => {
        menu.style.left = '-300px';
        menu.style.opacity = '0';
    });

    menu.addEventListener('mouseover', () => {
        menu.style.left = '0';
        menu.style.opacity = '1';
    });

    menu.addEventListener('mouseout', () => {
        menu.style.left = '-300px';
        menu.style.opacity = '0';
    });

    // Resultado salvo
    const resultadoSalvo = 'Cooler de Processador'; // Substitua pelo seu resultado salvo

    const categorias = {
        HARDWARE: [
            'Coolers de Processador',
            'Placas de vídeo',
            'Placas-mãe',
            'Memórias',
            'Armazenamentos',
            'Gabinetes',
            'Fontes'
        ],
        OUTROS: [
            'Monitores',
            'Mouses',
            'Teclados',
            'Fones de ouvido',
            'Mousepads',
            'Cadeiras'
        ]
    };

    const searchForm = document.getElementById('barra_de_pesquisa');
    const searchInput = document.getElementById('escreva_a_pesquisa');
    const suggestions = document.getElementById('sugestao');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        suggestions.innerHTML = ''; 

        if (query) {
            const suggestionSet = new Set();

            // Adiciona resultado salvo primeiro
            if (resultadoSalvo.toLowerCase().includes(query)) {
                const savedItem = document.createElement('li');
                savedItem.textContent = resultadoSalvo;
                savedItem.classList.add('saved'); // Adiciona a classe para estilo
                savedItem.addEventListener('click', () => {
                    searchInput.value = resultadoSalvo;
                    suggestions.innerHTML = '';
                    searchForm.submit();
                });
                suggestions.appendChild(savedItem);
            }

            // Adiciona sugestões baseadas nas categorias
            for (const [categoria, items] of Object.entries(categorias)) {
                items.forEach(item => {
                    if (item.toLowerCase().includes(query)) {
                        suggestionSet.add(item);
                    }
                });
            }

            suggestionSet.forEach(suggestion => {
                const suggestionItem = document.createElement('li');
                suggestionItem.textContent = suggestion;
                suggestionItem.addEventListener('click', () => {
                    searchInput.value = suggestion;
                    suggestions.innerHTML = '';
                    searchForm.submit();
                });
                suggestions.appendChild(suggestionItem);
            });
        }
    });

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const searchInputValue = searchInput.value.trim().toLowerCase();
        if (searchInputValue) {
            window.location.href = `resultado.html?query=${encodeURIComponent(searchInputValue)}`;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const produtos = [
         {
            loja: "Mercado Livre",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria01.jpg",
            ofertaLink: "",
            comentariosLink: "",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria01.jpg",
            ofertaLink: "",
            comentariosLink: "",
           cor: "Mercado_Livre"
        },
        {
            loja: "Mercado Livre",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria01.jpg",
            ofertaLink: "",
            comentariosLink: "",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria01.jpg",
            ofertaLink: "",
            comentariosLink: "",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria01.jpg",
            ofertaLink: "",
            comentariosLink: "",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria01.jpg",
            ofertaLink: "",
            comentariosLink: "",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria01.jpg",
            ofertaLink: "",
            comentariosLink: "",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria01.jpg",
            ofertaLink: "",
            comentariosLink: "",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria01.jpg",
            ofertaLink: "",
            comentariosLink: "",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria01.jpg",
            ofertaLink: "",
            comentariosLink: "",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria01.jpg",
            ofertaLink: "",
            comentariosLink: "",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria01.jpg",
            ofertaLink: "",
            comentariosLink: "",
           cor: "Mercado_Livre"
        },
        
        {
            loja: "Armazon",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria13.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Amazon"
        },

        {
            loja: "Armazon",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria13.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Amazon"
        },


        {
            loja: "Armazon",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria13.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Amazon"
        },


        {
            loja: "Armazon",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria13.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Amazon"
        },


        {
            loja: "Armazon",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria13.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Amazon"
        },


        {
            loja: "Armazon",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria13.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Amazon"
        },


        {
            loja: "Armazon",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria13.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Amazon"
        },


        {
            loja: "Armazon",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria13.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Amazon"
        },


        {
            loja: "Armazon",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria13.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Amazon"
        },


        {
            loja: "Armazon",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria13.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Amazon"
        },


        {
            loja: "Armazon",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria13.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Amazon"
        },

        {
            loja: "Armazon",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria13.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Amazon"
        },

         {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria25.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria25.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria25.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria25.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria25.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria25.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria25.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria25.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria25.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria25.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria25.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria25.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria37.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria37.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria37.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria37.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria37.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria37.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria37.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria37.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria37.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria37.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria37.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "/Projeto/IMG/img_memoria/memoria37.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

    ];

    const modeloProduto = document.getElementById("modelo-produto");
    const containerProdutos = document.getElementById("container-produtos");
    const navegacaoPaginacao = document.getElementById("navegacao-paginacao");
    const produtosPorPagina = 12;
    const totalPaginas = Math.ceil(produtos.length / produtosPorPagina);

    function criarBotaoPagina(pagina) {
        const botao = document.createElement("button");
        botao.textContent = pagina;
        botao.dataset.pagina = pagina;
        if (pagina === 1) {
            botao.classList.add("active");
        }
        botao.addEventListener("click", function() {
            carregarProdutos(pagina);
        });
        return botao;
    }

    function atualizarPaginacao() {
        navegacaoPaginacao.innerHTML = "";
        for (let i = 1; i <= totalPaginas; i++) {
            navegacaoPaginacao.appendChild(criarBotaoPagina(i));
        }
    }

    function definirCorTexto(cartao) {
        switch (cartao.classList.contains("Amazon") || cartao.classList.contains("Mercado_Livre") || cartao.classList.contains("hp") || cartao.classList.contains("Magalu")) {
            case cartao.classList.contains("Amazon"):
                cartao.style.color = "white"; // Prata
                break;
            case cartao.classList.contains("Mercado_Livre"):
                cartao.style.color = "#191970";
                break;
            case cartao.classList.contains("hp"):
                cartao.style.color = "white"; // Bronze
                break;
            case cartao.classList.contains("Magalu"):
                cartao.style.color = "white"; // Marrom
                break;
            default:
                cartao.style.color = "#000000"; // Preto como fallback
                break;
        }
    }

    function carregarProdutos(pagina = 1) {
        containerProdutos.innerHTML = "";

        const inicio = (pagina - 1) * produtosPorPagina;
        const fim = Math.min(inicio + produtosPorPagina, produtos.length);
        for (let i = inicio; i < fim; i++) {
            const produto = produtos[i];
            const produtoElemento = modeloProduto.cloneNode(true);
            produtoElemento.style.display = "block";

            produtoElemento.classList.add(produto.cor);
            definirCorTexto(produtoElemento); // Definir a cor do texto

            const linkProduto = produtoElemento.querySelector(".link-produto");
            linkProduto.href = produto.ofertaLink;
            
            produtoElemento.querySelector(".imagem-produto").src = produto.imagem;
            produtoElemento.querySelector(".imagem-produto").onclick = function() {
                window.open(produto.ofertaLink, '_blank');
            };
            produtoElemento.querySelector(".nome-produto").textContent = produto.nome;
            produtoElemento.querySelector(".nome-produto").onclick = function() {
                window.open(produto.ofertaLink, '_blank');
            };
            produtoElemento.querySelector(".nome-loja").textContent = produto.loja;
            produtoElemento.querySelector(".nome-loja").onclick = function() {
                window.open(produto.ofertaLink, '_blank');
            };
            produtoElemento.querySelector(".preco-produto").textContent = produto.preco;
            produtoElemento.querySelector(".preco-produto").onclick = function() {
                window.open(produto.ofertaLink, '_blank');
            };

            produtoElemento.querySelector(".ver-oferta").onclick = function() {
                window.open(produto.ofertaLink, '_blank');
            };
            produtoElemento.querySelector(".comentarios-produto").onclick = function() {
                window.open(produto.comentariosLink, '_blank');
            };

            containerProdutos.appendChild(produtoElemento);
        }

        const botoes = navegacaoPaginacao.querySelectorAll("button");
        botoes.forEach(botao => botao.classList.remove("active"));
        const botaoAtual = navegacaoPaginacao.querySelector(`button[data-pagina='${pagina}']`);
        if (botaoAtual) {
            botaoAtual.classList.add("active");
        }
    }

    atualizarPaginacao();
    carregarProdutos(); 
});
