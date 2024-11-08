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
            nome: "Notebook Positivo Vision C15 Lumina Bar Celeron 4gb 128gb Emmc Tela 15  Windows 11",
            preco: "R$ 1.510,01",
            imagem: "IMG/IMG_PCS/pcs05.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/notebook-positivo-vision-c15-lumina-bar-celeron-4gb-128gb-emmc-tela-15-hd-antirreflexo-windows-11-tecla-link-cinza/p/MLB26133662#searchVariation%3DMLB26133662%26position%3D2%26search_layout%3Dstack%26type%3Dproduct%26tracking_id%3D9b1fd9b4-8cce-4309-a532-890d883a4305",
            comentariosLink: "https://www.mercadolivre.com.br/noindex/catalog/reviews/MLB26133644?noIndex=true&access=view_all&modal=true&controlled=true",
           cor: "Mercado_Livre"
        },
        
        {
            loja: "Mercado Livre",
            nome: "Notebook Hp 256 G9 Intel Core I5 8gb 256gb Ssd 15,6 Windows Cor Preto",
            preco: "R$ 2.859",
            imagem: "IMG/img_pcs/pcs06.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/notebook-hp-256-g9-intel-core-i5-8gb-256gb-ssd-156-windows-cor-preto/p/MLB26841494#searchVariation%3DMLB26841494%26position%3D4%26search_layout%3Dstack%26type%3Dproduct%26tracking_id%3D9b1fd9b4-8cce-4309-a532-890d883a4305",
            comentariosLink: "https://www.mercadolivre.com.br/noindex/catalog/reviews/MLB26841479?noIndex=true&access=view_all&modal=true&controlled=true",
           cor: "Mercado_Livre"
        },

        {
                 loja: "Mercado Livre",
            nome: "Notebook Motion Gray Celeron 128gb 4gb Ram C4128e Positivo Cor Cinza",
            preco: "R$ 1.519,90",
            imagem: "IMG/img_pcs/pcs07.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/notebook-motion-gray-celeron-128gb-4gb-ram-c4128e-positivo-cor-cinza/p/MLB18384142#searchVariation%3DMLB18384142%26position%3D7%26search_layout%3Dstack%26type%3Dproduct%26tracking_id%3D9b1fd9b4-8cce-4309-a532-890d883a4305",
            comentariosLink: "https://www.mercadolivre.com.br/noindex/catalog/reviews/MLB18384141?noIndex=true&access=view_all&modal=true&controlled=true",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "Computador Completo Fácil Intel Core I5 9400f 8gb Ssd 960gb",
            preco: "R$ 2.402,55",
            imagem: "IMG/img_pcs/pcs08.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/computador-completo-facil-intel-core-i5-9400f-8gb-ssd-960gb/p/MLB33329151?pdp_filters=item_id:MLB4481096078#is_advertising=true&searchVariation=MLB33329151&position=1&search_layout=stack&type=pad&tracking_id=6fc74249-2469-47bb-b0d5-35d7a352d68c&is_advertising=true&ad_domain=SEARCHWEBMOBILE_LST&ad_position=1&ad_click_id=Nzg0ZDczNDMtY2Q5OC00YmE2LThhN2MtZDUzM2Y1NzI3NGRi",
            comentariosLink: "https://www.mercadolivre.com.br/computador-completo-facil-intel-core-i5-9400f-8gb-ssd-960gb/p/MLB33329151?pdp_filters=item_id:MLB4481096078#is_advertising=true&searchVariation=MLB33329151&position=1&search_layout=stack&type=pad&tracking_id=6fc74249-2469-47bb-b0d5-35d7a352d68c&is_advertising=true&ad_domain=SEARCHWEBMOBILE_LST&ad_position=1&ad_click_id=Nzg0ZDczNDMtY2Q5OC00YmE2LThhN2MtZDUzM2Y1NzI3NGRi",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "Pc Computador Completo Intel Cpu I7, 16gb Memória Ram, Ssd 480, Wifi, Monitor 19",
            preco: "R$ 1.390",
            imagem: "IMG/img_pcs/pcs09.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/pc-computador-completo-intel-cpu-i7-16gb-memoria-ram-ssd-480-wifi-monitor-19-kit-teclado-e-mouse/p/MLB35816409#searchVariation%3DMLB35816409%26position%3D4%26search_layout%3Dstack%26type%3Dproduct%26tracking_id%3D6fc74249-2469-47bb-b0d5-35d7a352d68c",
            comentariosLink: "https://www.mercadolivre.com.br/noindex/catalog/reviews/MLB35816409?noIndex=true&access=view_all&modal=true&controlled=true",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "Notebook Lenovo Thinkpad T480 I7 Ssd M2 512gb 8gb Win10Pro Cor Preto",
            preco: "R$ 3.299",
            imagem: "IMG/img_pcs/pcs10.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/notebook-lenovo-thinkpad-t480-i7-ssd-m2-512gb-8gb-win10pro-cor-preto/p/MLB24162799#searchVariation%3DMLB24162799%26position%3D1%26search_layout%3Dstack%26type%3Dproduct%26tracking_id%3Dca245953-8294-4e7f-87d4-35214d0d89a1",
            comentariosLink: "https://www.mercadolivre.com.br/noindex/catalog/reviews/MLB15292002?noIndex=true&access=view_all&modal=true&controlled=true",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "Notebook Vaio Fe15 Ryzen7 16gb 512gb Ssd Linux Prata Titânio",
            preco: "R$ 3.499",
            imagem: "IMG/img_pcs/pcs11.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/notebook-vaio-fe15-ryzen7-16gb-512gb-ssd-linux-prata-titnio/p/MLB26841502#searchVariation%3DMLB26841502%26position%3D5%26search_layout%3Dstack%26type%3Dproduct%26tracking_id%3D9b1fd9b4-8cce-4309-a532-890d883a4305",
            comentariosLink: "https://www.mercadolivre.com.br/noindex/catalog/reviews/MLB26841483?noIndex=true&access=view_all&modal=true&controlled=true",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "Pc Gamer Completo Amd Ryzen 5 8500g 16gb Ddr5 Ssd 240gb 500w",
            preco: "R$ 3.479",
            imagem: "IMG/img_pcs/pcs12.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/pc-gamer-completo-amd-ryzen-5-8500g-16gb-ddr5-ssd-240gb-500w/p/MLB38525926?pdp_filters=item_id:MLB3788584785#is_advertising=true&searchVariation=MLB38525926&position=6&search_layout=stack&type=pad&tracking_id=6fc74249-2469-47bb-b0d5-35d7a352d68c&is_advertising=true&ad_domain=SEARCHWEBMOBILE_LST&ad_position=6&ad_click_id=NGVmYzE1OWMtM2E2MS00ODJlLThlY2QtYzRmNzBlZjM4NWM4",
            comentariosLink: "https://www.mercadolivre.com.br/pc-gamer-completo-amd-ryzen-5-8500g-16gb-ddr5-ssd-240gb-500w/p/MLB38525926?pdp_filters=item_id:MLB3788584785#is_advertising=true&searchVariation=MLB38525926&position=6&search_layout=stack&type=pad&tracking_id=6fc74249-2469-47bb-b0d5-35d7a352d68c&is_advertising=true&ad_domain=SEARCHWEBMOBILE_LST&ad_position=6&ad_click_id=NGVmYzE1OWMtM2E2MS00ODJlLThlY2QtYzRmNzBlZjM4NWM4",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "Computador Pc Completo Intel SparkPC I3 3º Geração, 8gb Ram, Ssd 240gb Monitor 19",
            preco: "R$ 1.017",
            imagem: "IMG/img_pcs/pcs13.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/computador-pc-completo-intel-sparkpc-i3-3-geraco-8gb-ram-ssd-240gb-monitor-19/p/MLB32847554#searchVariation%3DMLB32847554%26position%3D13%26search_layout%3Dstack%26type%3Dproduct%26tracking_id%3D6fc74249-2469-47bb-b0d5-35d7a352d68c",
            comentariosLink: "https://www.mercadolivre.com.br/noindex/catalog/reviews/MLB32847554?noIndex=true&access=view_all&modal=true&controlled=true",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "Notebook Dell Inspiron I15-i120k-a45p I7 16gb 512gb 15.6 W11 Cor Preto",
            preco: "R$ 4.199",
            imagem: "IMG/img_pcs/pcs14.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/notebook-dell-inspiron-i15-i120k-a45p-i7-16gb-512gb-156-w11-cor-preto/p/MLB37702540#searchVariation%3DMLB37702540%26position%3D8%26search_layout%3Dstack%26type%3Dproduct%26tracking_id%3D6fc74249-2469-47bb-b0d5-35d7a352d68c",
            comentariosLink: "https://www.mercadolivre.com.br/noindex/catalog/reviews/MLB37702538?noIndex=true&access=view_all&modal=true&controlled=true",
           cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "Pc Gamer Completo Intel I7 4ª 8gb Gtx 1050ti 4gb Ssd 240gb",
            preco: "R$ 2.773,05",
            imagem: "IMG/img_pcs/pcs15.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/pc-gamer-completo-intel-i7-4-8gb-gtx-1050ti-4gb-ssd-240gb/p/MLB38525974?pdp_filters=item_id:MLB4928350376#is_advertising=true&searchVariation=MLB38525974&position=5&search_layout=stack&type=pad&tracking_id=6fc74249-2469-47bb-b0d5-35d7a352d68c&is_advertising=true&ad_domain=SEARCHWEBMOBILE_LST&ad_position=5&ad_click_id=NmQwY2M4N2QtMTQwNC00ZTljLTg2MjItMGE3ZmRjODA0YmY4",
            comentariosLink: "https://www.mercadolivre.com.br/pc-gamer-completo-intel-i7-4-8gb-gtx-1050ti-4gb-ssd-240gb/p/MLB38525974?pdp_filters=item_id:MLB4928350376#is_advertising=true&searchVariation=MLB38525974&position=5&search_layout=stack&type=pad&tracking_id=6fc74249-2469-47bb-b0d5-35d7a352d68c&is_advertising=true&ad_domain=SEARCHWEBMOBILE_LST&ad_position=5&ad_click_id=NmQwY2M4N2QtMTQwNC00ZTljLTg2MjItMGE3ZmRjODA0YmY4",
            cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "Notebook Vaio Fe15 Ryzen7 16gb 512gb Ssd Linux Prata Titânio",
            preco: "R$ 3.799",
            imagem: "IMG/img_pcs/pcs16.jpg",
            ofertaLink: "https://produto.mercadolivre.com.br/MLB-4078586762-notebook-vaio-fe15-ryzen7-16gb-512gb-ssd-linux-prata-titnio-_JM#position%3D7%26search_layout%3Dstack%26type%3Ditem%26tracking_id%3Dca245953-8294-4e7f-87d4-35214d0d89a1",
            comentariosLink: "https://produto.mercadolivre.com.br/noindex/catalog/reviews/MLB4078586762?noIndex=true&access=view_all&modal=true",
           cor: "Mercado_Livre"
        },

        {
            loja: "Armazon",
            nome: "PC CPU Completo Mancer, Intel Core I5, 8GB De Memória Ram, SSD 240GB + Monitor 18.5",
            preco: "R$ 1.299,99",
            imagem: "IMG/img_pcs/pcs17.jpg",
            ofertaLink: "https://www.amazon.com.br/Completo-Mancer-Intel-Mem%C3%B3ria-Monitor/dp/B0B61QGFWL/ref=mp_s_a_1_4?crid=1VRVBF5Y4BWGC&dib=eyJ2IjoiMSJ9.BUGUEEoCi7yFZkODbKqBlmybR_J5x4sikDx4hN7plWItC9a2gWhFNo2Afjk1OZYwad8ckGiNn9LHW3_YQMB06N6nt4Qj5A7YUiEQi3Z4vtXAxX6qH7VR4xzh9SqhT0akYlyJovZ_5mICdO09ipCK_G9s3AXaqLJB7kMlQSGPjlV6u2_6z-r-VFIabP94qnQj8GtdLwlOCPP3WN3FdRpFpg.qfDFXA9S_I1n6M6R5OmKCCdRRijlYvM2xU0xLMjY-c8&dib_tag=se&keywords=computador+completo&qid=1724639061&sprefix=computador+%2Caps%2C638&sr=8-4&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            comentariosLink: "https://www.amazon.com.br/product-reviews/B0B61QGFWL/ref=cm_cr_othr_mb_show_all_top?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

        {
            loja: "Armazon",
            nome: "Notebook Ultra 14,1 Pol HD Core i5 8GB 256GB SSD Windows 11 Home Preto - UB540",
            preco: "R$ 2.199,00",
            imagem: "IMG/img_pcs/pcs18.jpg",
            ofertaLink: "https://www.amazon.com.br/Notebook-Ultra-256GB-Windows-Preto/dp/B0CNS3CLMJ/ref=mp_s_a_1_1_sspa?crid=1QW7U0DHGZWWR&dib=eyJ2IjoiMSJ9.FN7aM6leajeQyiz5Fod1E3JfkeEsAf8axn5JTbsH6fBiwzdFTb0eTFXv-5T3DkPGpD9kkiXk1ThAtfkHRaGe4TlaxYN5XkGTBUAuYJ2hdFubptOS5Wtb_pQXg4To4-QvDIjHFWXb0FRT1TI9eLyx1BRry1nYq4rVvxNmmCtnEaaEfYIwvqUGPTR5srxRf_c8r7m8XANN7o0qMUibjlbu-A.DtCXw9-OI0D1quxivHAk0ICcJKawEXO30kZE5HQCwTI&dib_tag=se&keywords=notebook&qid=1724639156&sprefix=notebook+%2Caps%2C300&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&sp_csd=d2lkZ2V0TmFtZT1zcF9waG9uZV9zZWFyY2hfYXRm&psc=1",
            comentariosLink: "https://www.amazon.com.br/product-reviews/B0CNS3CLMJ/ref=cm_cr_othr_mb_show_all_top?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

        {
            loja: "Armazon",
            nome: "Computador Completo Intel Core i5 8GB SSD 512GB Windows 10 Monitor LED 19.5 HDMI 3green Windows 10",
            preco: "R$ 1.199,00",
            imagem: "IMG/img_pcs/pcs19.jpg",
            ofertaLink: "https://www.amazon.com.br/Computador-Completo-Windows-Monitor-3green/dp/B087STN4HN/ref=mp_s_a_1_13?crid=1VRVBF5Y4BWGC&dib=eyJ2IjoiMSJ9.BUGUEEoCi7yFZkODbKqBlmybR_J5x4sikDx4hN7plWItC9a2gWhFNo2Afjk1OZYwad8ckGiNn9LHW3_YQMB06N6nt4Qj5A7YUiEQi3Z4vtXAxX6qH7VR4xzh9SqhT0akYlyJovZ_5mICdO09ipCK_G9s3AXaqLJB7kMlQSGPjlV6u2_6z-r-VFIabP94qnQj8GtdLwlOCPP3WN3FdRpFpg.qfDFXA9S_I1n6M6R5OmKCCdRRijlYvM2xU0xLMjY-c8&dib_tag=se&keywords=computador+completo&qid=1724639061&sprefix=computador+%2Caps%2C638&sr=8-13&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            comentariosLink: "https://www.amazon.com.br/product-reviews/B087STN4HN/ref=cm_cr_othr_mb_show_all_top?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

        {
            loja: "Armazon",
            nome: "Notebook ASUS VivoBook Go 15, AMD RYZEN 5 7520U, 8GB, 512GB SSD, W11 Home, Tela 15,60 FHD, Mixed Black - E1504FA-NJ836W",
            preco: "R$ 2.733,31",
            imagem: "IMG/img_pcs/pcs20.jpg",
            ofertaLink: "https://www.amazon.com.br/Notebook-ASUS-VivoBook-RYZEN-7520U/dp/B0CLS8XXGF/ref=mp_s_a_1_10?crid=1QW7U0DHGZWWR&dib=eyJ2IjoiMSJ9.FN7aM6leajeQyiz5Fod1E3JfkeEsAf8axn5JTbsH6fBiwzdFTb0eTFXv-5T3DkPGpD9kkiXk1ThAtfkHRaGe4TlaxYN5XkGTBUAuYJ2hdFubptOS5Wtb_pQXg4To4-QvDIjHFWXb0FRT1TI9eLyx1BRry1nYq4rVvxNmmCtnEaaEfYIwvqUGPTR5srxRf_c8r7m8XANN7o0qMUibjlbu-A.DtCXw9-OI0D1quxivHAk0ICcJKawEXO30kZE5HQCwTI&dib_tag=se&keywords=notebook&qid=1724639156&sprefix=notebook+%2Caps%2C300&sr=8-10&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            comentariosLink: "https://www.amazon.com.br/product-reviews/B0CLS8XXGF/ref=cm_cr_othr_mb_show_all_top?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

        {
            loja: "Armazon",
            nome: "Notebook Lenovo Ideapad 1i i5-1235U 8GB 512GB SSD 15.6 W11",
            preco: "R$ 2.551,12",
            imagem: "IMG/img_pcs/pcs21.jpg",
            ofertaLink: "https://www.amazon.com.br/Notebook-Lenovo-Ideapad-i5-1235U-512GB/dp/B0CK3R8JYG/ref=mp_s_a_1_9?crid=1QW7U0DHGZWWR&dib=eyJ2IjoiMSJ9.FN7aM6leajeQyiz5Fod1E3JfkeEsAf8axn5JTbsH6fBiwzdFTb0eTFXv-5T3DkPGpD9kkiXk1ThAtfkHRaGe4TlaxYN5XkGTBUAuYJ2hdFubptOS5Wtb_pQXg4To4-QvDIjHFWXb0FRT1TI9eLyx1BRry1nYq4rVvxNmmCtnEaaEfYIwvqUGPTR5srxRf_c8r7m8XANN7o0qMUibjlbu-A.DtCXw9-OI0D1quxivHAk0ICcJKawEXO30kZE5HQCwTI&dib_tag=se&keywords=notebook&qid=1724639156&sprefix=notebook+%2Caps%2C300&sr=8-9&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            comentariosLink: "https://www.amazon.com.br/product-reviews/B0CK3R8JYG/ref=cm_cr_othr_mb_show_all_top?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        {
            loja: "Armazon",
            nome: "Computador Gamer Completo Intel Core i5 8GB SSD 256GB Kit Gamer com Headset Monitor 20 Windows 10 3green Flash",
            preco: "R$ 1.429,99",
            imagem: "IMG/img_pcs/pcs22.jpg",
            ofertaLink: "https://www.amazon.com.br/Computador-Completo-Headset-Monitor-Windows/dp/B0CPMFT695/ref=mp_s_a_1_10?crid=1VRVBF5Y4BWGC&dib=eyJ2IjoiMSJ9.BUGUEEoCi7yFZkODbKqBlmybR_J5x4sikDx4hN7plWItC9a2gWhFNo2Afjk1OZYwad8ckGiNn9LHW3_YQMB06N6nt4Qj5A7YUiEQi3Z4vtXAxX6qH7VR4xzh9SqhT0akYlyJovZ_5mICdO09ipCK_G9s3AXaqLJB7kMlQSGPjlV6u2_6z-r-VFIabP94qnQj8GtdLwlOCPP3WN3FdRpFpg.qfDFXA9S_I1n6M6R5OmKCCdRRijlYvM2xU0xLMjY-c8&dib_tag=se&keywords=computador+completo&qid=1724639061&sprefix=computador+%2Caps%2C638&sr=8-10&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            comentariosLink: "https://www.amazon.com.br/product-reviews/B0CPMFT695/ref=cm_cr_othr_mb_show_all_top?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

        {
            loja: "Armazon",
            nome: "Computador Completo Intel Core i7 16GB SSD 1TB Monitor LED 24 Windows 10 3green 3green Top 3GT-073",
            preco: "R$ 1.899,99",
            imagem: "IMG/img_pcs/pcs23.jpg",
            ofertaLink: "https://www.amazon.com.br/Computador-Completo-Monitor-Windows-3GT-073/dp/B0CKWC8QKL/ref=mp_s_a_1_9?crid=1VRVBF5Y4BWGC&dib=eyJ2IjoiMSJ9.BUGUEEoCi7yFZkODbKqBlmybR_J5x4sikDx4hN7plWItC9a2gWhFNo2Afjk1OZYwad8ckGiNn9LHW3_YQMB06N6nt4Qj5A7YUiEQi3Z4vtXAxX6qH7VR4xzh9SqhT0akYlyJovZ_5mICdO09ipCK_G9s3AXaqLJB7kMlQSGPjlV6u2_6z-r-VFIabP94qnQj8GtdLwlOCPP3WN3FdRpFpg.qfDFXA9S_I1n6M6R5OmKCCdRRijlYvM2xU0xLMjY-c8&dib_tag=se&keywords=computador+completo&qid=1724639061&sprefix=computador+%2Caps%2C638&sr=8-9&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            comentariosLink: "https://www.amazon.com.br/product-reviews/B0CKWC8QKL/ref=cm_cr_othr_mb_show_all_top?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

        {
            loja: "Armazon",
            nome: "Notebook Acer Aspire 3 A315-510P-34XC Intel Core i3, 8GB RAM, 256GB SSD, 15.6” LED FULL HD, Windows 11",
            preco: "R$ 2.249,10",
            imagem: "IMG/img_pcs/pcs24.jpg",
            ofertaLink: "https://www.amazon.com.br/Acer-NX-KMDAL-001-Notebook-A315-510P-34XC/dp/B0CFYTT98F/ref=mp_s_a_1_5?crid=1QW7U0DHGZWWR&dib=eyJ2IjoiMSJ9.FN7aM6leajeQyiz5Fod1E3JfkeEsAf8axn5JTbsH6fBiwzdFTb0eTFXv-5T3DkPGpD9kkiXk1ThAtfkHRaGe4TlaxYN5XkGTBUAuYJ2hdFubptOS5Wtb_pQXg4To4-QvDIjHFWXb0FRT1TI9eLyx1BRry1nYq4rVvxNmmCtnEaaEfYIwvqUGPTR5srxRf_c8r7m8XANN7o0qMUibjlbu-A.DtCXw9-OI0D1quxivHAk0ICcJKawEXO30kZE5HQCwTI&dib_tag=se&keywords=notebook&qid=1724639156&sprefix=notebook+%2Caps%2C300&sr=8-5&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            comentariosLink: "https://www.amazon.com.br/product-reviews/B0CFYTT98F/ref=cm_cr_othr_mb_show_all_top?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

        {
            loja: "Armazon",
            nome: "Computador Completo Mancer, Intel Core i5, 16GB De Ram, HD 500GB, Monitor 18.5 + Kit Teclado e Mouse",
            preco: "R$ 1.229,99",
            imagem: "IMG/img_pcs/pcs25.jpg",
            ofertaLink: "https://www.amazon.com.br/Computador-Completo-Mancer-Monitor-Teclado/dp/B0C5JRQY6B/ref=mp_s_a_1_8?crid=1VRVBF5Y4BWGC&dib=eyJ2IjoiMSJ9.BUGUEEoCi7yFZkODbKqBlmybR_J5x4sikDx4hN7plWItC9a2gWhFNo2Afjk1OZYwad8ckGiNn9LHW3_YQMB06N6nt4Qj5A7YUiEQi3Z4vtXAxX6qH7VR4xzh9SqhT0akYlyJovZ_5mICdO09ipCK_G9s3AXaqLJB7kMlQSGPjlV6u2_6z-r-VFIabP94qnQj8GtdLwlOCPP3WN3FdRpFpg.qfDFXA9S_I1n6M6R5OmKCCdRRijlYvM2xU0xLMjY-c8&dib_tag=se&keywords=computador+completo&qid=1724639061&sprefix=computador+%2Caps%2C638&sr=8-8&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            comentariosLink: "https://www.amazon.com.br/product-reviews/B0C5JRQY6B/ref=cm_cr_othr_mb_show_all_top?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

        {
            loja: "Armazon",
            nome: "Notebook ASUS E510MA, Intel Celeron Dual Core, 4GB, 128GB EMMC, Windows 11 Home, Tela de 15,6, Black - E510MA-BR1347WS",
            preco: "R$ 1.733,83",
            imagem: "IMG/img_pcs/pcs26.jpg",
            ofertaLink: "https://www.amazon.com.br/Notebook-E510MA-Celeron-Windows-E510MA-BR1347WS/dp/B0CDQTHKTP/ref=mp_s_a_1_8?crid=1QW7U0DHGZWWR&dib=eyJ2IjoiMSJ9.FN7aM6leajeQyiz5Fod1E3JfkeEsAf8axn5JTbsH6fBiwzdFTb0eTFXv-5T3DkPGpD9kkiXk1ThAtfkHRaGe4TlaxYN5XkGTBUAuYJ2hdFubptOS5Wtb_pQXg4To4-QvDIjHFWXb0FRT1TI9eLyx1BRry1nYq4rVvxNmmCtnEaaEfYIwvqUGPTR5srxRf_c8r7m8XANN7o0qMUibjlbu-A.DtCXw9-OI0D1quxivHAk0ICcJKawEXO30kZE5HQCwTI&dib_tag=se&keywords=notebook&qid=1724639156&sprefix=notebook+%2Caps%2C300&sr=8-8&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            comentariosLink: "https://www.amazon.com.br/product-reviews/B0CDQTHKTP/ref=cm_cr_othr_mb_show_all_top?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

        {
            loja: "Armazon",
            nome: "Computador Completo Intel Core i7 16GB SSD 480GB + Headset + Adaptador USB-C Monitor 19 4 Núcleos Super Turbo Pc Hdmi Teclado e Mouse Strong Tech",
            preco: "R$ 1.590,02",
            imagem: "IMG/img_pcs/pcs27.jpg",
            ofertaLink: "https://www.amazon.com.br/Computador-Completo-Monitor-Strong-Tech/dp/B0BS42MW7M/ref=mp_s_a_1_3?crid=1VRVBF5Y4BWGC&dib=eyJ2IjoiMSJ9.BUGUEEoCi7yFZkODbKqBlmybR_J5x4sikDx4hN7plWItC9a2gWhFNo2Afjk1OZYwad8ckGiNn9LHW3_YQMB06N6nt4Qj5A7YUiEQi3Z4vtXAxX6qH7VR4xzh9SqhT0akYlyJovZ_5mICdO09ipCK_G9s3AXaqLJB7kMlQSGPjlV6u2_6z-r-VFIabP94qnQj8GtdLwlOCPP3WN3FdRpFpg.qfDFXA9S_I1n6M6R5OmKCCdRRijlYvM2xU0xLMjY-c8&dib_tag=se&keywords=computador+completo&qid=1724639061&sprefix=computador+%2Caps%2C638&sr=8-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            comentariosLink: "https://www.amazon.com.br/product-reviews/B0BS42MW7M/ref=cm_cr_othr_mb_show_all_top?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

        {
            loja: "Armazon",
            nome: "Notebook Lenovo Ultrafino IdeaPad 1 i3-1215U 8GB 256GB SSD Windows Home 15.6 82VY000SBR Cloud Grey",
            preco: "R$ 2.599,00",
            imagem: "IMG/img_pcs/pcs28.jpg",
            ofertaLink: "https://www.amazon.com.br/Notebook-Lenovo-Ultrafino-i3-1215U-82VY000SBR/dp/B0CM8LZFXB/ref=mp_s_a_1_4?crid=1QW7U0DHGZWWR&dib=eyJ2IjoiMSJ9.FN7aM6leajeQyiz5Fod1E3JfkeEsAf8axn5JTbsH6fBiwzdFTb0eTFXv-5T3DkPGpD9kkiXk1ThAtfkHRaGe4TlaxYN5XkGTBUAuYJ2hdFubptOS5Wtb_pQXg4To4-QvDIjHFWXb0FRT1TI9eLyx1BRry1nYq4rVvxNmmCtnEaaEfYIwvqUGPTR5srxRf_c8r7m8XANN7o0qMUibjlbu-A.DtCXw9-OI0D1quxivHAk0ICcJKawEXO30kZE5HQCwTI&dib_tag=se&keywords=notebook&qid=1724639156&sprefix=notebook+%2Caps%2C300&sr=8-4&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            comentariosLink: "https://www.amazon.com.br/product-reviews/B0CM8LZFXB/ref=cm_cr_othr_mb_show_all_top?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

         {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs29.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs30.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs31.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs32.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs33.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs34.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs35.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs36.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs37.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs38.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },
        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs39.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Pichau",
            nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs40.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Pichau"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs41.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs42.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs43.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs44.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs45.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs46.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs47.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs48.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs49.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs50.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "IMG/img_pcs/pcs51.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
           nome: "",
            preco: "R$ ",
            imagem: "IMG/img_placavideo/pcs52.jpg",
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
                cartao.style.color = "white"; 
                break;
            case cartao.classList.contains("Mercado_Livre"):
                cartao.style.color = "#191970";
                break;
            case cartao.classList.contains("hp"):
                cartao.style.color = "white";
                break;
            case cartao.classList.contains("Magalu"):
                cartao.style.color = "white";
                break;
            default:
                cartao.style.color = "#000000"; 
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
