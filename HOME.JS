
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
            nome: "HD Western Digital 1TB WD Purple Surveillance SATA 64MB Cache - WD10PURZ",
            preco: "R$ 284,10",
            imagem: "IMG/img_ofertas/oferta01.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/hd-western-digital-1tb-wd-purple-surveillance-sata-64mb-cache-wd10purz/p/MLB6090095#searchVariation%3DMLB6090095%26position%3D7%26search_layout%3Dstack%26type%3Dproduct%26tracking_id%3D19cc5c5f-e946-4c7d-b7ed-6e7ba156b2cc",
            comentariosLink: "https://www.mercadolivre.com.br/noindex/catalog/reviews/MLB6090094?noIndex=true&access=view_all&modal=true&controlled=true"
        },
        {
            loja: "Mercado Livre",
            nome: "Gabinete Gamer Rgb Liketec Craft Mid Tower Fita Led Sem Fan Cor Preto",
            preco: "R$ 176,86",
            imagem: "IMG/img_ofertas/oferta02.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/gabinete-gamer-rgb-liketec-craft-mid-tower-fita-led-sem-fan-cor-preto/p/MLB23189736?pdp_filters=item_id:MLB4780569998#is_advertising=true&searchVariation=MLB23189736&position=1&search_layout=stack&type=pad&tracking_id=9e5a457a-4262-4ee0-8823-a8948ea8061d&is_advertising=true&ad_domain=SEARCHWEBMOBILE_LST&ad_position=1&ad_click_id=NjFhNWU2YTEtMjVhZi00NTgzLWIxNjYtN2JjNDJkNDhkYzgz",
            comentariosLink: "https://www.mercadolivre.com.br/noindex/catalog/reviews/MLB23189671?noIndex=true&access=view_all&modal=true&controlled=true"
        },
        {
            loja: "Mercado Livre",
            nome: "Teclado Gamer Evolut Eg-212 Slender Qwerty Português Brasil Teclas Silenciosas Slim Led Rainbow 3 Modos",
            preco: "R$ 74,95",
            imagem: "IMG/img_ofertas/oferta03.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/teclado-gamer-evolut-eg-212-slender-qwerty-portugus-brasil-teclas-silenciosas-slim-led-rainbow-3-modos/p/MLB19792928?pdp_filters=item_id:MLB3108633032#is_advertising=true&searchVariation=MLB19792928&position=2&search_layout=stack&type=pad&tracking_id=33c8ebbe-2f52-4823-b5a7-97933a7283e7&is_advertising=true&ad_domain=SEARCHWEBMOBILE_LST&ad_position=2&ad_click_id=YTZjYWZkNzEtMjVkMy00NDRhLWJiNTUtMWIxMDI0M2VlZDcy",
            comentariosLink: "https://www.mercadolivre.com.br/noindex/catalog/reviews/MLB19792927?noIndex=true&access=view_all&modal=true&controlled=true"
        },
        {
            loja: "Zoom",
            nome: "Mouse Óptico Notebook sem Fio M280 - Logitech",
            preco: "R$ 68,99",
            imagem: "IMG/img_ofertas/oferta04.jpg",
            ofertaLink: "https://www.zoom.com.br/mouse/mouse-optico-m280-logitech?_lc=88&searchterm=Mouse",
            comentariosLink: "https://www.zoom.com.br/mouse/mouse-optico-m280-logitech?_lc=88&searchterm=Mouse"
        },
    ];

    const templateProduto = document.getElementById("template-produto");
    const containerProdutos = document.querySelector(".container-produtos");

    produtos.forEach(produto => {
        const produtoClone = templateProduto.cloneNode(true);
        produtoClone.style.display = "block";
        produtoClone.querySelector(".link-produto").href = produto.ofertaLink;
        produtoClone.querySelector(".imagem-produto").src = produto.imagem;
        produtoClone.querySelector(".nome-loja").textContent = produto.loja;
        produtoClone.querySelector(".nome-produto").textContent = produto.nome;
        produtoClone.querySelector(".preco-produto").textContent = produto.preco;
        produtoClone.querySelector(".ver-oferta").href = produto.ofertaLink;
        produtoClone.querySelector(".comentarios-produto").href = produto.comentariosLink;

        function redirecionarParaOferta(event) {
            event.preventDefault();
            window.open(produto.ofertaLink, '_blank');
        }

        produtoClone.querySelector(".nome-loja").addEventListener("click", redirecionarParaOferta);

        produtoClone.querySelector(".nome-produto").addEventListener("click", redirecionarParaOferta);

        produtoClone.querySelector(".preco-produto").addEventListener("click", redirecionarParaOferta);

        produtoClone.querySelector(".imagem-produto").addEventListener("click", function(event) {
            event.preventDefault();
            window.open(produto.imagem, '_blank');
        });

        produtoClone.querySelector(".ver-oferta").addEventListener("click", function(event) {
            event.preventDefault();
            window.open(produto.ofertaLink, '_blank');
        });

        produtoClone.querySelector(".comentarios-produto").addEventListener("click", function(event) {
            event.preventDefault();
            window.open(produto.comentariosLink, '_blank');
        });

        containerProdutos.appendChild(produtoClone);
    });

    document.getElementById("mais").addEventListener("click", function() {
        window.location.href = "ofertas.html"; 
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const produtos = [
        {
            loja: "Mercado Livre",
            nome: "Computador Completo Fácil Intel I7 4ª Geração 16gb Ssd 240gb",
            preco: "R$ 1.538,10",
            imagem: "IMG/img_pcs/pcs01.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/computador-completo-facil-intel-i7-4-geraco-16gb-ssd-240gb/p/MLB38525380?pdp_filters=item_id:MLB4928281068#is_advertising=true&searchVariation=MLB38525380&position=1&search_layout=grid&type=pad&tracking_id=90aee470-c6b3-4723-9ed8-fc1a6fddbb35&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=M2JkOTlmMzEtMDNkZi00ZDAwLWJhMzctMjhmODVjNGYzMWE4",
            comentariosLink: "https://www.mercadolivre.com.br/computador-completo-facil-intel-i7-4-geraco-16gb-ssd-240gb/p/MLB38525380?pdp_filters=item_id:MLB4928281068#is_advertising=true&searchVariation=MLB38525380&position=1&search_layout=grid&type=pad&tracking_id=90aee470-c6b3-4723-9ed8-fc1a6fddbb35&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=M2JkOTlmMzEtMDNkZi00ZDAwLWJhMzctMjhmODVjNGYzMWE4"
        },
        {
            loja: "Mercado Livre",
            nome: "Pc Gamer Fácil Completo Intel I5 3ª 16gb Gtx1050ti 4gb 240gb",
            preco: "R$ 2.366,10",
            imagem: "IMG/img_pcs/pcs02.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/pc-gamer-facil-completo-intel-i5-3-16gb-gtx1050ti-4gb-240gb/p/MLB38524973?pdp_filters=item_id:MLB4928269702#is_advertising=true&searchVariation=MLB38524973&position=2&search_layout=grid&type=pad&tracking_id=90aee470-c6b3-4723-9ed8-fc1a6fddbb35&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=NWJiMGI1OTQtOTcwZS00ZWNhLTgzNTUtZDQ0OTE4NDJiY2M1",
            comentariosLink: "https://www.mercadolivre.com.br/pc-gamer-facil-completo-intel-i5-3-16gb-gtx1050ti-4gb-240gb/p/MLB38524973?pdp_filters=item_id:MLB4928269702#is_advertising=true&searchVariation=MLB38524973&position=2&search_layout=grid&type=pad&tracking_id=90aee470-c6b3-4723-9ed8-fc1a6fddbb35&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=NWJiMGI1OTQtOTcwZS00ZWNhLTgzNTUtZDQ0OTE4NDJiY2M1",
        },
        {
            loja: "Mercado Livre",
            nome: "Computador Completo Fácil Intel Core I5 9400f 8gb Ssd 960gb",
            preco: "R$ 2.402,55",
            imagem: "IMG/img_pcs/pcs03.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/computador-completo-facil-intel-core-i5-9400f-8gb-ssd-960gb/p/MLB33329151?pdp_filters=item_id:MLB4481096078#is_advertising=true&searchVariation=MLB33329151&position=3&search_layout=grid&type=pad&tracking_id=90aee470-c6b3-4723-9ed8-fc1a6fddbb35&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=3&ad_click_id=MDEwZmU1ZWEtNzU4Mi00M2RkLWI3MDUtZWYyYmVmNWQwOGMy",
            comentariosLink: "https://www.mercadolivre.com.br/computador-completo-facil-intel-core-i5-9400f-8gb-ssd-960gb/p/MLB33329151?pdp_filters=item_id:MLB4481096078#is_advertising=true&searchVariation=MLB33329151&position=3&search_layout=grid&type=pad&tracking_id=90aee470-c6b3-4723-9ed8-fc1a6fddbb35&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=3&ad_click_id=MDEwZmU1ZWEtNzU4Mi00M2RkLWI3MDUtZWYyYmVmNWQwOGMy",
        },
        {
            loja: "Mecado livre",
            nome: "Notebook Hp 256 G9 Intel Core I5 8gb 256gb Ssd 15,6 Windows Cor Preto",
            preco: "R$ 2.716,05",
            imagem: "IMG/img_pcs/pcs04.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/notebook-hp-256-g9-intel-core-i5-8gb-256gb-ssd-156-windows-cor-preto/p/MLB26841494#searchVariation%3DMLB26841494%26position%3D8%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3D90aee470-c6b3-4723-9ed8-fc1a6fddbb35",
            comentariosLink: "https://www.mercadolivre.com.br/notebook-hp-256-g9-intel-core-i5-8gb-256gb-ssd-156-windows-cor-preto/p/MLB26841494#reviews"
        },
    ];

    const templateProduto = document.getElementById("B");
    const containerProdutos = document.querySelector(".A");

    produtos.forEach(produto => {
        const produtoClone = templateProduto.cloneNode(true);
        produtoClone.style.display = "block";
        produtoClone.querySelector(".link-produto").href = produto.ofertaLink;
        produtoClone.querySelector(".imagem-produto").src = produto.imagem;
        produtoClone.querySelector(".nome-loja").textContent = produto.loja;
        produtoClone.querySelector(".nome-produto").textContent = produto.nome;
        produtoClone.querySelector(".preco-produto").textContent = produto.preco;
        produtoClone.querySelector(".ver-oferta").href = produto.ofertaLink;
        produtoClone.querySelector(".comentarios-produto").href = produto.comentariosLink;

        function redirecionarParaOferta(event) {
            event.preventDefault();
            window.open(produto.ofertaLink, '_blank');
        }

        produtoClone.querySelector(".nome-loja").addEventListener("click", redirecionarParaOferta);

        produtoClone.querySelector(".nome-produto").addEventListener("click", redirecionarParaOferta);

        produtoClone.querySelector(".preco-produto").addEventListener("click", redirecionarParaOferta);

        produtoClone.querySelector(".imagem-produto").addEventListener("click", function(event) {
            event.preventDefault();
            window.open(produto.imagem, '_blank');
        });

        produtoClone.querySelector(".ver-oferta").addEventListener("click", function(event) {
            event.preventDefault();
            window.open(produto.ofertaLink, '_blank');
        });

        produtoClone.querySelector(".comentarios-produto").addEventListener("click", function(event) {
            event.preventDefault();
            window.open(produto.comentariosLink, '_blank');
        });

        containerProdutos.appendChild(produtoClone);
    });

    document.getElementById("mais1").addEventListener("click", function() {
        window.location.href = "PCs.html";
    });
});
