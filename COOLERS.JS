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
            nome: "Micro Ventilador Cooler Ventoinha 80x80x20mm 12v - 1 Pçs",
            preco: "R$ 29,00",
            imagem: "IMG/img_coolers/col01.jpg",
            ofertaLink: "https://produto.mercadolivre.com.br/MLB-3031027291-micro-ventilador-cooler-ventoinha-80x80x20mm-12v-1-pcs-_JM#position%3D51%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
            comentariosLink: "https://produto.mercadolivre.com.br/MLB-3031027291-micro-ventilador-cooler-ventoinha-80x80x20mm-12v-1-pcs-_JM#position%3D51%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
           cor: "Mercado_Livre"
        },
        
         {
            loja: "Mercado Livre",
            nome: "Ventoinha Cooler 120mm Rgb Para Gabinete Computador Gamer",
            preco: "R$ 27,50",
            imagem: "IMG/img_coolers/col02.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/ventoinha-cooler-120mm-rgb-para-gabinete-computador-gamer/p/MLB32966124#searchVariation%3DMLB32966124%26position%3D31%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
            comentariosLink: "https://www.mercadolivre.com.br/ventoinha-cooler-120mm-rgb-para-gabinete-computador-gamer/p/MLB32966124#reviews",
           cor: "Mercado_Livre"
        },
        
         {
            loja: "Mercado Livre",
            nome: "Fan Cooler Argb Gmx Fn-12rainbow-d Wt 1 Fan",
            preco: "R$ 37,39",
            imagem: "IMG/img_coolers/col03.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/fan-cooler-argb-gmx-fn-12rainbow-d-wt-1-fan/p/MLB32627726#searchVariation%3DMLB32627726%26position%3D16%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
            comentariosLink: "https://www.mercadolivre.com.br/fan-cooler-argb-gmx-fn-12rainbow-d-wt-1-fan/p/MLB32627726#reviews",
           cor: "Mercado_Livre"
        },
        
         {
            loja: "Mercado Livre",
            nome: "Fan Gamer | Rise Mode | Galaxy Led | 120mm LED Branco",
            preco: "R$ 25,94",
            imagem: "IMG/img_coolers/col04.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/fan-gamer-rise-mode-galaxy-led-120mm-led-branco/p/MLB32989878#searchVariation%3DMLB32989878%26position%3D27%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
            comentariosLink: "https://www.mercadolivre.com.br/fan-gamer-rise-mode-galaxy-led-120mm-led-branco/p/MLB32989878#reviews",
           cor: "Mercado_Livre"
        },
        
         {
            loja: "Mercado Livre",
            nome: "Cooler Fan Aerocool 120mm Led Vermelho - En51363",
            preco: "R$ 19,90",
            imagem: "IMG/img_coolers/col05.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/cooler-fan-aerocool-120mm-led-vermelho-en51363/p/MLB32563339#searchVariation%3DMLB32563339%26position%3D15%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
            comentariosLink: "https://www.mercadolivre.com.br/cooler-fan-aerocool-120mm-led-vermelho-en51363/p/MLB32563339#searchVariation%3DMLB32563339%26position%3D15%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
           cor: "Mercado_Livre"
        },
        
         {
            loja: "Mercado Livre",
            nome: "Micro Ventilador Cooler Ventoinha 90x90x25 24v - 1 Pç",
            preco: "R$ 27,90",
            imagem: "IMG/img_coolers/col06.jpg",
            ofertaLink: "https://produto.mercadolivre.com.br/MLB-3025053623-micro-ventilador-cooler-ventoinha-90x90x25-24v-1-pc-_JM#position%3D39%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
            comentariosLink: "https://produto.mercadolivre.com.br/MLB-3025053623-micro-ventilador-cooler-ventoinha-90x90x25-24v-1-pc-_JM#reviews",
           cor: "Mercado_Livre"
        },
        
         {
            loja: "Mercado Livre",
            nome: "Cooler Fan Silencioso 80mm F7-50bk P/ Gabinete Led Sem Led",
            preco: "R$ 20,90",
            imagem: "IMG/img_coolers/col07.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/cooler-fan-silencioso-80mm-f7-50bk-p-gabinete-led-sem-led/p/MLB32488445#searchVariation%3DMLB32488445%26position%3D23%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
            comentariosLink: "https://www.mercadolivre.com.br/cooler-fan-silencioso-80mm-f7-50bk-p-gabinete-led-sem-led/p/MLB32488445#searchVariation%3DMLB32488445%26position%3D23%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
           cor: "Mercado_Livre"
        },
        
         {
            loja: "Mercado Livre",
            nome: "Cooler Fan 80mm Risemode Black 1500 Rpm 12v Molex Ventoinha",
            preco: "R$ 15,90",
            imagem: "IMG/img_coolers/col08.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/cooler-fan-80mm-risemode-black-1500-rpm-12v-molex-ventoinha/p/MLB35195135#searchVariation%3DMLB35195135%26position%3D5%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
            comentariosLink: "https://www.mercadolivre.com.br/cooler-fan-80mm-risemode-black-1500-rpm-12v-molex-ventoinha/p/MLB35195135#reviews",
           cor: "Mercado_Livre"
        },
        
         {
            loja: "Mercado Livre",
            nome: "Fan Gamer | Rise Mode | Galaxy Led | 120mm Led Vermelho",
            preco: "R$ 19,28",
            imagem: "IMG/img_coolers/col09.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/fan-gamer-rise-mode-galaxy-led-120mm-led-vermelho/p/MLB32979363#searchVariation%3DMLB32979363%26position%3D9%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
            comentariosLink: "https://www.mercadolivre.com.br/fan-gamer-rise-mode-galaxy-led-120mm-led-vermelho/p/MLB32979363#reviews",
           cor: "Mercado_Livre"
        },
        
         {
            loja: "Mercado Livre",
            nome: "Kit Cooler P/ Gabinete 12x12 Brazilp C/ 3x Rgb C Controle Led Branco",
            preco: "R$ 76,25",
            imagem: "IMG/img_coolers/col10.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/kit-cooler-p-gabinete-12x12-brazilp-c-3x-rgb-c-controle-led-branco/p/MLB32451338#searchVariation%3DMLB32451338%26position%3D14%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
            comentariosLink: "https://www.mercadolivre.com.br/kit-cooler-p-gabinete-12x12-brazilp-c-3x-rgb-c-controle-led-branco/p/MLB32451338#reviews",
           cor: "Mercado_Livre"
        },
        
         {
            loja: "Mercado Livre",
            nome: "Ventilador Cooler Ventoinha Gc Metalica 120x120x38 110v 220v LED Não possui",
            preco: "R$ 32,89",
            imagem: "IMG/img_coolers/col11.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/ventilador-cooler-ventoinha-gc-metalica-120x120x38-110v-220v-led-no-possui/p/MLB32625754#searchVariation%3DMLB32625754%26position%3D17%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3Da81887e1-f286-49d5-8090-8910fe4a0634",
            comentariosLink: "https://www.mercadolivre.com.br/ventilador-cooler-ventoinha-gc-metalica-120x120x38-110v-220v-led-no-possui/p/MLB32625754#reviews",
           cor: "Mercado_Livre"
        },
        
        {
            loja: "Mercado Livre",
            nome: "Micro Ventilador Cooler Ventoinha 80x80x25 12v (2pç) + Fonte",
            preco: "R$ 48,70",
            imagem: "IMG/img_coolers/col12.jpg",
            ofertaLink: "https://produto.mercadolivre.com.br/MLB-1634369101-micro-ventilador-cooler-ventoinha-80x80x25-12v-2pc-fonte-_JM#position%3D52%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3D1e6b4bf4-77a4-4da1-b3a2-8266bc9a9b9b",
            comentariosLink: "https://produto.mercadolivre.com.br/MLB-1634369101-micro-ventilador-cooler-ventoinha-80x80x25-12v-2pc-fonte-_JM#reviews",
           cor: "Mercado_Livre"
        },

        {
            loja: "Amazon",
            nome: "Cooler Gamer Fan Termico RB 120-02 Premium Processamento e Refrigeração",
            preco: "R$ 239,99",
            imagem: "IMG/img_coolers/col13.jpg",
            ofertaLink: "https://www.amazon.com.br/Termico-Notebook-Computador-Processamento-Refrigera%C3%A7%C3%A3o/dp/B0D98TNX5C/ref=sr_1_1_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler%2Bpc&qid=1723326450&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            comentariosLink: "https://www.amazon.com.br/Termico-Notebook-Computador-Processamento-Refrigera%C3%A7%C3%A3o/dp/B0D98TNX5C/ref=sr_1_1_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler%2Bpc&qid=1723326450&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
            cor: "Amazon"
        },
        
        {
            loja: "Amazon",
            nome: "Suporte Adaptador Externo para Placa de Vídeo e Cooler 120mm - ARTBOX3D",
            preco: "R$ 130,42",
            imagem: "IMG/img_coolers/col14.jpg",
            ofertaLink: "https://www.amazon.com.br/Suporte-Adaptador-Externo-Placa-Cooler/dp/B0CWB2YN4L/ref=sr_1_2_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler+pc&qid=1723326450&sr=8-2-spons&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
            comentariosLink: "https://www.amazon.com.br/Suporte-Adaptador-Externo-Placa-Cooler/dp/B0CWB2YN4L/ref=sr_1_2_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler+pc&qid=1723326450&sr=8-2-spons&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
            cor: "Amazon"
        },

        {
            loja: "Amazon",
            nome: "Cooler Fan C3Tech F7-100BK Storm 12x12x2.5 cm Preto - Rolamento FDB 12v 1200RPM",
            preco: "R$ 13,07",
            imagem: "IMG/img_coolers/col15.jpg",
            ofertaLink: "https://www.amazon.com.br/Cooler-F7-100BK-C3TECH-Acess%C3%B3rios-Computador/dp/B0754J96KK/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler%2Bpc&qid=1723326450&sr=8-3&th=1",
            comentariosLink: "https://www.amazon.com.br/Cooler-F7-100BK-C3TECH-Acess%C3%B3rios-Computador/product-reviews/B0754J96KK/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

        {
            loja: "Amazon",
            nome: "Kit 3 Cooler Ventoinha Fan Rgb 120mm 12cm Bpc-Kdl-Argb Controle Remoto e Hub",
            preco: "R$ 111,19",
            imagem: "IMG/img_coolers/col16.jpg",
            ofertaLink: "https://www.amazon.com.br/Cooler-Ventoinha-Bpc-Kdl-Argb-Controle-Remoto/dp/B09DL5J7D3/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler+pc&qid=1723326450&sr=8-4&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
            comentariosLink: "https://www.amazon.com.br/Cooler-Ventoinha-Bpc-Kdl-Argb-Controle-Remoto/product-reviews/B09DL5J7D3/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

        {
            loja: "Amazon",
            nome: "Cooler Gabinete T-Dagger T-TGF100 (120mm/3 pin e molex/1200RPM) - Preto",
            preco: "R$ 24,90",
            imagem: "IMG/img_coolers/col17.jpg",
            ofertaLink: "https://www.amazon.com.br/Cooler-Gabinete-T-Dagger-120x25mm-T-TGF100/dp/B08NXJK41M/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler+pc&qid=1723326450&sr=8-5",
            comentariosLink: "https://www.amazon.com.br/Cooler-Gabinete-T-Dagger-120x25mm-T-TGF100/product-reviews/B08NXJK41M/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        {
            loja: "Amazon",
            nome: "C3Tech Cooler Fan F9-L160BK ",
            preco: "R$ 34,90",
            imagem: "IMG/img_coolers/col18.jpg",
            ofertaLink: "https://www.amazon.com.br/Cooler-Fan-F9-L160BK-para-Gabinete/dp/B0CLT3T8Q1/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler%2Bpc&qid=1723326450&sr=8-7&th=1",
            comentariosLink: "https://www.amazon.com.br/Cooler-Fan-F9-L160BK-para-Gabinete/product-reviews/B0CLT3T8Q1/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
       {
            loja: "Amazon",
            nome: "C3Tech Cooler Fan para Gabinete F11-L150M 12CM com Led de Iluminacao",
            preco: "R$ 34,39",
            imagem: "IMG/img_coolers/col19.jpg",
            ofertaLink: "https://www.amazon.com.br/C3Tech-Cooler-Gabinete-F11-L150M-Iluminacao/dp/B0CB4WPL8R/ref=sr_1_8?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler+pc&qid=1723326450&sr=8-8",
            comentariosLink: "https://www.amazon.com.br/C3Tech-Cooler-Gabinete-F11-L150M-Iluminacao/product-reviews/B0CB4WPL8R/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
        {
            loja: "Amazon",
            nome: "COOLER PARA PROCESSADOR PICHAU SAGE V2, RGB, 120MM",
            preco: "R$ 145,90",
            imagem: "IMG/img_coolers/col20.jpg",
            ofertaLink: "https://www.amazon.com.br/COOLER-PROCESSADOR-PICHAU-BRANCO-PG-SGEWH-RGB-V02/dp/B0CZ48R96K/ref=sr_1_9?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler+pc&qid=1723326450&sr=8-9&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            comentariosLink: "https://www.amazon.com.br/COOLER-PROCESSADOR-PICHAU-BRANCO-PG-SGEWH-RGB-V02/product-reviews/B0CZ48R96K/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
        {
            loja: "Amazon",
            nome: "C3Tech Cooler Fan para Gabinete F11-L220RGB 12CM com iluminacao RGB e conector ARGB 6 pinos",
            preco: "R$ 49,04",
            imagem: "IMG/img_coolers/col21.jpg",
            ofertaLink: "https://www.amazon.com.br/C3Tech-Gabinete-F11-L220RGB-iluminacao-conector/dp/B0CB4WNCXB/ref=sr_1_11?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler+pc&qid=1723326450&sr=8-11",
            comentariosLink: "https://www.amazon.com.br/C3Tech-Gabinete-F11-L220RGB-iluminacao-conector/product-reviews/B0CB4WNCXB/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
        {
            loja: "Amazon",
            nome: " AMD Wraith Stealth Socket AM4 4 pinos conector CPU Cooler com dissipador",
            preco: "R$ 65,00",
            imagem: "IMG/img_coolers/col22.jpg",
            ofertaLink: "https://www.amazon.com.br/Stealth-conector-dissipador-alum%C3%ADnio-ventilador/dp/B07MFMFL7R/ref=sr_1_12?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler+pc&qid=1723326450&sr=8-12",
            comentariosLink: "https://www.amazon.com.br/Stealth-conector-dissipador-alum%C3%ADnio-ventilador/product-reviews/B07MFMFL7R/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
        {
            loja: "Amazon",
            nome: "Ventilador da CPU, 6 Tubos de Calor CPU Cooler 4 Pinos Pwm RGB PC Silêncio Intel",
            preco: "R$ 179,00",
            imagem: "IMG/img_coolers/col23.jpg",
            ofertaLink: "https://www.amazon.com.br/Ventilador-Cooler-Sil%C3%AAncio-2011-3-Support/dp/B09VZK2FJG/ref=sr_1_13?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler+pc&qid=1723326450&sr=8-13&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d",
            comentariosLink: "https://www.amazon.com.br/Ventilador-Cooler-Sil%C3%AAncio-2011-3-Support/product-reviews/B09VZK2FJG/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
        {
            loja: "Amazon",
            nome: "T-DAGGER Cooler Fan, 120mm, Led Branco - T-tgf300-w, Branco",
            preco: "R$ 17,77",
            imagem: "IMG/img_coolers/col24.jpg",
            ofertaLink: "https://www.amazon.com.br/Cooler-Fan-T-dagger-120mm-Branco/dp/B08SHLC7SC/ref=sr_1_14?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.ofxmSWaWfp-uML1HRUJsWelBWYp9Ja77q4eCAxHmeWBpyAc8_GgL5vnSyRRGTg_6yiktwoK9vIV4ZblZEu1ZtCjxfnAR8s8F6YNw2GyVzIbZzVFxeGZacolYVE5hOplNIcoh9uqXpxH23QVfzbvshm4ZYjhqbMfwuF_eDmHtIDMooftLXoSNU0GccgT57K7n_y8UiSyzkzrVtvArswTkszX-erKO2diiBuQsLmKa-lIqfRxv_gUSccpNqRJT74r9Hax_1KVTtO58Pq5goHpHE0DlreMjILY2DKIpmMftUrE.fAVHSe7bL0zVaUMo3AyMRHOcIO0pD-uTIT72UssYp88&dib_tag=se&keywords=cooler+pc&qid=1723326450&sr=8-14",
            comentariosLink: "https://www.amazon.com.br/Cooler-Fan-T-dagger-120mm-Branco/product-reviews/B08SHLC7SC/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
         {
            loja: "Pichau",
            nome: "COOLER PARA PROCESSADOR COOLER MASTER HYPER H412R, RR-H412-20PK-R2",
            preco: "R$ 129,99",
            imagem: "IMG/img_coolers/col25.jpg",
            ofertaLink: "https://www.pichau.com.br/cooler-para-processador-cooler-master-hyper-h412r-rr-h412-20pk-r2",
            comentariosLink: "https://www.pichau.com.br/cooler-para-processador-cooler-master-hyper-h412r-rr-h412-20pk-r2",
            cor: "Pichau"
        },
        
       {
            loja: "Pichau",
            nome: "WATER COOLER COOLER MASTER MASTERLIQUID ML360 MIRROR, ARGB, 360MM, MLX-D36M-A18PK-R1",
            preco: "R$ 699,99",
            imagem: "IMG/img_coolers/col26.jpg",
            ofertaLink: "https://www.pichau.com.br/water-cooler-cooler-master-masterliquid-ml360-mirror-argb-360mm-mlx-d36m-a18pk-r1",
            comentariosLink: "https://www.pichau.com.br/water-cooler-cooler-master-masterliquid-ml360-mirror-argb-360mm-mlx-d36m-a18pk-r1",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "COOLER PARA PROCESSADOR COOLER MASTER MASTERAIR MA612P STEALTH, ARGB, 120MM, MAP-T6PS-218PA-R1",
            preco: "R$ 539,99",
            imagem: "IMG/img_coolers/col27.jpg",
            ofertaLink: "https://www.pichau.com.br/cooler-para-processador-cooler-master-masterair-ma612p-stealth-argb-120mm-map-t6ps-218pa-r1",
            comentariosLink: "https://www.pichau.com.br/cooler-para-processador-cooler-master-masterair-ma612p-stealth-argb-120mm-map-t6ps-218pa-r1",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "COOLER PARA PROCESSADOR COOLER MASTER HYPER 212 HALO WHITE, RGB, 120MM, RR-S4WW-20PA-R1",
            preco: "R$ 199,99",
            imagem: "IMG/img_coolers/col28.jpg",
            ofertaLink: "https://www.pichau.com.br/cooler-para-processador-cooler-master-hyper-212-halo-white-rgb-120mm-rr-s4ww-20pa-r1",
            comentariosLink: "https://www.pichau.com.br/cooler-para-processador-cooler-master-hyper-212-halo-white-rgb-120mm-rr-s4ww-20pa-r1",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "WATER COOLER COOLER MASTER MASTERLIQUID 360L CORE STREET FIGHTER 6 LUKE, ARGB, 360MM, BRANCO, MLW-D36M-A17PZ-LK",
            preco: "R$ 699,99",
            imagem: "IMG/img_coolers/col29.jpg",
            ofertaLink: "https://www.pichau.com.br/water-cooler-cooler-master-masterliquid-360l-core-street-fighter-6-luke-argb-360mm-branco-mlw-d36m-a17pz-lk",
            comentariosLink: "https://www.pichau.com.br/water-cooler-cooler-master-masterliquid-360l-core-street-fighter-6-luke-argb-360mm-branco-mlw-d36m-a17pz-lk",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "COOLER PARA PROCESSADOR COOLER MASTER HYPER 212 SPECTRUM V3, RGB, 120MM, PRETO E PRATA, RR-S4NA-17PA-R1",
            preco: "R$ 129,99",
            imagem: "IMG/img_coolers/col30.jpg",
            ofertaLink: "https://www.pichau.com.br/cooler-para-processador-cooler-master-hyper-212-spectrum-v3-rgb-120mm-preto-e-prata-rr-s4na-17pa-r1",
            comentariosLink: "https://www.pichau.com.br/cooler-para-processador-cooler-master-hyper-212-spectrum-v3-rgb-120mm-preto-e-prata-rr-s4na-17pa-r1",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "VENTOINHA COOLER MASTER SICKLEFLOW 120 WHITE, MFX-B2DN-18NPW-R1",
            preco: "R$ 41,99",
            imagem: "IMG/img_coolers/col31.jpg",
            ofertaLink: "https://www.pichau.com.br/ventoinha-cooler-master-sickleflow-120-white-mfx-b2dn-18npw-r1",
            comentariosLink: "https://www.pichau.com.br/ventoinha-cooler-master-sickleflow-120-white-mfx-b2dn-18npw-r1",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "VENTOINHA COOLER MASTER MOBIUS 120, 120MM, PRETO, MFZ-M2NN-21NPK-R1",
            preco: "R$ 114,99",
            imagem: "IMG/img_coolers/col32.jpg",
            ofertaLink: "https://www.pichau.com.br/ventoinha-cooler-master-mobius-120-120mm-preto-mfz-m2nn-21npk-r1",
            comentariosLink: "https://www.pichau.com.br/ventoinha-cooler-master-mobius-120-120mm-preto-mfz-m2nn-21npk-r1",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "WATER COOLER COOLER MASTER MASTERLIQUID ML120L V2, MLW-D12M-A18PK-R2",
            preco: "R$ 249,99",
            imagem: "IMG/img_coolers/col33.jpg",
            ofertaLink: "https://www.pichau.com.br/water-cooler-cooler-master-masterliquid-ml120l-v2-mlw-d12m-a18pk-r2",
            comentariosLink: "https://www.pichau.com.br/water-cooler-cooler-master-masterliquid-ml120l-v2-mlw-d12m-a18pk-r2",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "COOLER PARA PROCESSADOR COOLER MASTER HYPER 212 ARGB, RR-2V2L-18PA-R1",
            preco: "R$ 199,99",
            imagem: "IMG/img_coolers/col34.jpg",
            ofertaLink: "https://www.pichau.com.br/cooler-para-processador-cooler-master-hyper-212-argb-rr-2v2l-18pa-r1",
            comentariosLink: "https://www.pichau.com.br/cooler-para-processador-cooler-master-hyper-212-argb-rr-2v2l-18pa-r1",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "VENTOINHA COOLER MASTER SICKLEFLOW 120 ARGB WHITE EDITION, MFX-B2DW-18NPA-R1",
            preco: "R$ 79,99",
            imagem: "IMG/img_coolers/col35.jpg",
            ofertaLink: "https://www.pichau.com.br/ventoinha-cooler-master-sickleflow-120-argb-white-edition-mfx-b2dw-18npa-r1",
            comentariosLink: "https://www.pichau.com.br/ventoinha-cooler-master-sickleflow-120-argb-white-edition-mfx-b2dw-18npa-r1",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "VENTOINHA COOLER MASTER MOBIUS 120P, ARGB, 120MM, PRETO, MFZ-M2DN-24NP2-R1",
            preco: "R$ 114,99",
            imagem: "IMG/img_coolers/col36.jpg",
            ofertaLink: "https://www.pichau.com.br/ventoinha-cooler-master-mobius-120p-argb-120mm-preto-mfz-m2dn-24np2-r1",
            comentariosLink: "https://www.pichau.com.br/ventoinha-cooler-master-mobius-120p-argb-120mm-preto-mfz-m2dn-24np2-r1",
            cor: "Pichau"
        },

        {
            loja: "Magalu",
           nome: "Cooler para Processador Gamer Rise Mode X4, LED Rainbow, Intel, 90mm, Preto - RM-ACX-04-RGB",
            preco: "R$ 32,99",
            imagem: "IMG/img_coolers/col37.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/cooler-para-processador-gamer-rise-mode-x4-led-rainbow-intel-90mm-preto-rm-acx-04-rgb/p/kgah6f9h88/in/pepc/",
            comentariosLink: "https://www.magazineluiza.com.br/review/kgah6f9h88/cooler-para-processador-gamer-rise-mode-x4-led-rainbow-intel-90mm-preto-rm-acx-04-rgb/IN/PEPC/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
           nome: "Cooler Para Processador Pc 120mm Led Intel X79 X99 X299 LGA 1200 1151 DEX DX-7000",
            preco: "R$ 45,41",
            imagem: "IMG/img_coolers/col38.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/cooler-para-processador-pc-120mm-led-intel-x79-x99-x299-lga-1200-1151-dex-dx-7000/p/fee6aa611f/in/coop/",
            comentariosLink: "https://www.magazineluiza.com.br/review/fee6aa611f/cooler-para-processador-pc-120mm-led-intel-x79-x99-x299-lga-1200-1151-dex-dx-7000/IN/COOP/",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "Water Cooler Hydro Galax Vortex ARGB, 120mm, Intel e AMD, para PC - AGV12AN4AB0",
            preco: "R$ 164,99",
            imagem: "IMG/img_coolers/col39.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/water-cooler-hydro-galax-vortex-argb-120mm-intel-e-amd-para-pc-agv12an4ab0/p/gcjag6j33k/in/waco/",
            comentariosLink: "https://www.magazineluiza.com.br/water-cooler-hydro-galax-vortex-argb-120mm-intel-e-amd-para-pc-agv12an4ab0/p/gcjag6j33k/in/waco/",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "Fans Air Cooler Fan Processador Pc Ventoinha Rise Mode 80mm",
            preco: "R$ 15,01",
            imagem: "IMG/img_coolers/col40.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/fans-air-cooler-fan-processador-pc-ventoinha-rise-mode-80mm/p/age87e8h23/in/coop/",
            comentariosLink: "https://www.magazineluiza.com.br/fans-air-cooler-fan-processador-pc-ventoinha-rise-mode-80mm/p/age87e8h23/in/coop/",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "Water Cooler Hydro Galax Vortex ARGB, 240mm, Intel e AMD, para PC - AGV24AN4AB0",
            preco: "R$ 291,99",
            imagem: "IMG/img_coolers/col41.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/water-cooler-hydro-galax-vortex-argb-240mm-intel-e-amd-para-pc-agv24an4ab0/p/kgfdgcckc7/in/waco/",
            comentariosLink: "https://www.magazineluiza.com.br/water-cooler-hydro-galax-vortex-argb-240mm-intel-e-amd-para-pc-agv24an4ab0/p/kgfdgcckc7/in/waco/",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "Cpu Cooler Intel 1155 1150 1151 4 pinos - BansonTech",
            preco: "R$ 18,99",
            imagem: "IMG/img_coolers/col42.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/cpu-cooler-intel-1155-1150-1151-4-pinos-bansontech/p/ac4db82ja6/in/coop/",
            comentariosLink: "https://www.magazineluiza.com.br/review/ac4db82ja6/cpu-cooler-intel-1155-1150-1151-4-pinos-bansontech/IN/COOP/",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "Cooler Fan Led RGB Revenger Pc Gabinete Cpu Gamer 3 + 4 Pinos Molex 120 mm 12 cm Ventoinha silenciosa dissipador calor",
            preco: "R$ 32,59",
            imagem: "IMG/img_coolers/col43.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/cooler-fan-led-rgb-revenger-pc-gabinete-cpu-gamer-3-4-pinos-molex-120-mm-12-cm-ventoinha-silenciosa-dissipador-calor/p/gh8k4j7jja/in/coop/",
            comentariosLink: "https://www.magazineluiza.com.br/cooler-fan-led-rgb-revenger-pc-gabinete-cpu-gamer-3-4-pinos-molex-120-mm-12-cm-ventoinha-silenciosa-dissipador-calor/p/gh8k4j7jja/in/coop/",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
            nome: "Cooler Processador Intel PC Intel LGA1155/1156/775 Dissipador De Calor Radial Ventilador De 92mm - DEEPCOOL",
            preco: "R$ 44,90",
            imagem: "IMG/img_coolers/col44.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/cooler-processador-intel-pc-intel-lga1155-1156-775-dissipador-de-calor-radial-ventilador-de-92mm-deepcool/p/kfekkgc85c/in/coop/",
            comentariosLink: "https://www.magazineluiza.com.br/cooler-processador-intel-pc-intel-lga1155-1156-775-dissipador-de-calor-radial-ventilador-de-92mm-deepcool/p/kfekkgc85c/in/coop/",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
            nome: "Cooler P/ Processador Intel 11551150775 E Amd Am2am3am4 - Brazil-Pc",
            preco: "R$ 20,25",
            imagem: "IMG/img_coolers/col45.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/cooler-p-processador-intel-11551150775-e-amd-am2am3am4-brazil-pc/p/dhffbef8ek/in/pepc/",
            comentariosLink: "https://www.magazineluiza.com.br/cooler-p-processador-intel-11551150775-e-amd-am2am3am4-brazil-pc/p/dhffbef8ek/in/pepc/",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
            nome: "Cooler Fan Gamer 8cm 80mm Com LED Azul Ventoinha Gabinete PC - DeX",
            preco: "R$ 19,79",
            imagem: "IMG/img_coolers/col46.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/cooler-fan-gamer-8cm-80mm-com-led-azul-ventoinha-gabinete-pc-dex/p/dk1aj74jh1/in/coop/",
            comentariosLink: "https://www.magazineluiza.com.br/cooler-fan-gamer-8cm-80mm-com-led-azul-ventoinha-gabinete-pc-dex/p/dk1aj74jh1/in/coop/",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
            nome: "Cooler Fan Ventoinha Para PC Gabinete (Escolha o seu) Vermelho/ Azul/ RGB 120mm - Pontogg",
            preco: "R$ 17,91",
            imagem: "IMG/img_coolers/col47.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/cooler-fan-ventoinha-para-pc-gabinete-escolha-o-seu-vermelho-azul-rgb-120mm-pontogg/p/kef07kdg43/in/coop/",
            comentariosLink: "https://www.magazineluiza.com.br/cooler-fan-ventoinha-para-pc-gabinete-escolha-o-seu-vermelho-azul-rgb-120mm-pontogg/p/kef07kdg43/in/coop/",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
            nome: "Cooler Fan 120mm RGB Para Gabinete Pc Gamer Até 1000rpm 4 Pinos - AeroCool",
            preco: "R$ 22,50",
            imagem: "IMG/img_coolers/col48.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/cooler-fan-120mm-rgb-para-gabinete-pc-gamer-ate-1000rpm-4-pinos-aerocool/p/fddc9ge76a/in/coop/",
            comentariosLink: "https://www.magazineluiza.com.br/cooler-fan-120mm-rgb-para-gabinete-pc-gamer-ate-1000rpm-4-pinos-aerocool/p/fddc9ge76a/in/coop/",
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
