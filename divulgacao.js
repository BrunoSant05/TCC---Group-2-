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
