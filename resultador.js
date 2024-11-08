document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const resultadosDiv = document.getElementById('resultados');
    
    if (query) {
        // Simulação de resultados de busca
        const mockResults = [
            { title: 'Computador Gamer', description: 'Descrição do Computador Gamer' },
            { title: 'Mouse Sem Fio', description: 'Descrição do Mouse Sem Fio' },
            { title: 'Teclado Mecânico', description: 'Descrição do Teclado Mecânico' },
            { title: 'Fone de Ouvido Bluetooth', description: 'Descrição do Fone de Ouvido Bluetooth' },
        ];

        const filteredResults = mockResults.filter(item => item.title.toLowerCase().includes(query));

        if (filteredResults.length > 0) {
            filteredResults.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                
                const resultTitle = document.createElement('h2');
                resultTitle.textContent = result.title;
                resultItem.appendChild(resultTitle);
                
                const resultDescription = document.createElement('p');
                resultDescription.textContent = result.description;
                resultItem.appendChild(resultDescription);

                resultadosDiv.appendChild(resultItem);
            });
        } else {
            resultadosDiv.textContent = 'Nenhum resultado encontrado.';
        }
    } else {
        resultadosDiv.textContent = 'Nenhuma pesquisa realizada.';
    }
});









document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const animations = ['slide', 'fade', 'scale'];
    
    menuToggle.addEventListener('click', () => {
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        menu.classList.remove('slide', 'fade', 'scale');
        menu.classList.add(randomAnimation);
        if (menu.style.left === '0px') {
            menu.style.left = '-300px';
            menu.style.opacity = '0';
        } else {
            menu.style.left = '0';
            menu.style.opacity = '1';
        }
    });

    
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

    // Adicionando funcionalidade de busca com sugestões
    const searchForm = document.getElementById('barra_de_pesquisa');
    const searchInput = document.getElementById('escreva_a_pesquisa');
    const suggestions = document.getElementById('sugestao');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        suggestions.innerHTML = ''; 

        if (query) {
            const suggestionSet = new Set();
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
            window.location.href = `/projeto/Resultado/resultado.html?query=${encodeURIComponent(searchInputValue)}`;
        }
    });
});



