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
            nome: "Disco sólido interno KingSpec P4-120 120GB",
            preco: "R$ 75,99",
            imagem: "IMG/img_arm/arm01.JPG",
            ofertaLink: "https://www.mercadolivre.com.br/disco-solido-interno-kingspec-p4-120-120gb/p/MLB15940139?pdp_filters=item_id:MLB3500783373#is_advertising=true&searchVariation=MLB15940139&position=1&search_layout=grid&type=pad&tracking_id=8c59d9e7-eb11-4df5-a764-8765d2aaa670&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=ZmVjZmIxOTUtYTA3OC00MThhLTk1OTQtYTc1ZDdhODAwYmIw",
            comentariosLink: "https://www.mercadolivre.com.br/disco-solido-interno-kingspec-p4-120-120gb/p/MLB15940139?pdp_filters=item_id:MLB3500783373#reviews/",
           cor: "Mercado_Livre"
        },
        
        {
            loja: "Mercado Livre",
            nome: "Disco sólido interno PNY SSD7CS900-1TB-RB 1TB preto",
            preco: "R$ 512,10",
            imagem: "IMG/img_arm/arm02.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/disco-solido-interno-pny-ssd7cs900-1tb-rb-1tb-preto/p/MLB10137127?pdp_filters=item_id:MLB4102093104#is_advertising=true&searchVariation=MLB10137127&position=2&search_layout=grid&type=pad&tracking_id=8c59d9e7-eb11-4df5-a764-8765d2aaa670&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=M2Y3NWM5ZWItNTNiOC00YmQwLWI4YmYtZDQwNzgxMjAyMmJh",
            comentariosLink: "https://www.mercadolivre.com.br/disco-solido-interno-pny-ssd7cs900-1tb-rb-1tb-preto/p/MLB10137127?pdp_filters=item_id:MLB4102093104#reviews",
            cor: "Mercado_Livre"
        },
        
        {
            loja: "Mercado Livre",
            nome: "SSD SATA 2.5 240GB UP GAMER UP500",
            preco: "R$ 169",
            imagem: "IMG/img_arm/arm03.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/ssd-sata-25-240gb-up-gamer-up500/p/MLB21212500#searchVariation%3DMLB21212500%26position%3D7%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3D8c59d9e7-eb11-4df5-a764-8765d2aaa670",
            comentariosLink: "https://www.mercadolivre.com.br/ssd-sata-25-240gb-up-gamer-up500/p/MLB21212500#reviews",
            cor: "Mercado_Livre"
        },
        
        {
            loja: "Mercado Livre",
            nome: "HD SSD240GB Adata 3 2.5 SU650 ASU650SS-240GT-R 240GB preto",
            preco: "R$ 153",
            imagem: "IMG/img_arm/arm04.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/hd-ssd240gb-adata-3-25-su650-asu650ss-240gt-r-240gb-preto/p/MLB15749699#searchVariation%3DMLB15749699%26position%3D9%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3D8c59d9e7-eb11-4df5-a764-8765d2aaa670",
            comentariosLink: "https://www.mercadolivre.com.br/hd-ssd240gb-adata-3-25-su650-asu650ss-240gt-r-240gb-preto/p/MLB15749699#reviews",
            cor: "Mercado_Livre"
        },
        
        {
            loja: "Mercado Livre",
            nome: "Disco sólido interno Crucial CT1000BX500SSD1 1TB",
            preco: "R$ 474,90",
            imagem: "IMG/img_arm/arm05.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/disco-solido-interno-crucial-ct1000bx500ssd1-1tb/p/MLB15707176#searchVariation%3DMLB15707176%26position%3D5%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3D8c59d9e7-eb11-4df5-a764-8765d2aaa670",
            comentariosLink: "https://www.mercadolivre.com.br/disco-solido-interno-crucial-ct1000bx500ssd1-1tb/p/MLB15707176#reviews",
            cor: "Mercado_Livre"
        },
        
        {
            loja: "Mercado Livre",
            nome: "SSD Kingston 480gb - Sa400s37/480g",
            preco: "R$ 233",
            imagem: "IMG/img_arm/arm06.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/ssd-kingston-480gb-sa400s37480g/p/MLB17978326#searchVariation%3DMLB17978326%26position%3D6%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3D8c59d9e7-eb11-4df5-a764-8765d2aaa670",
            comentariosLink: "https://www.mercadolivre.com.br/ssd-kingston-480gb-sa400s37480g/p/MLB17978326#reviews",
            cor: "Mercado_Livre"
        },
        
        {
            loja: "Mercado Livre",
            nome: "HD SSD Disco sólido interno UP Gamer UP500 480GB preto",
            preco: "R$ 216",
            imagem: "IMG/img_arm/arm07.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/hd-ssd-disco-solido-interno-up-gamer-up500-480gb-preto/p/MLB26922960#searchVariation%3DMLB26922960%26position%3D8%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3D8c59d9e7-eb11-4df5-a764-8765d2aaa670",
            comentariosLink: "https://www.mercadolivre.com.br/hd-ssd-disco-solido-interno-up-gamer-up500-480gb-preto/p/MLB26922960#reviews",
            cor: "Mercado_Livre"
        },
        
        {
            loja: "Mercado Livre",
            nome: "Disco sólido interno Lexar LNQ100X480G 480GB",
            preco: "R$ 263",
            imagem: "IMG/img_arm/arm08.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/disco-solido-interno-lexar-lnq100x480g-480gb/p/MLB18571369#searchVariation%3DMLB18571369%26position%3D16%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3D8c59d9e7-eb11-4df5-a764-8765d2aaa670",
            comentariosLink: "https://www.mercadolivre.com.br/disco-solido-interno-lexar-lnq100x480g-480gb/p/MLB18571369#reviews",
            cor: "Mercado_Livre"
        },
        
        {
            loja: "Mercado Livre",
            nome: "Hd Ssd 240gb 2,5 Sata 3 Upgamer P/ Computador Pc Notebook",
            preco: "R$ 172,90",
            imagem: "IMG/img_arm/arm09.jpg",
            ofertaLink: "https://produto.mercadolivre.com.br/MLB-4826324354-hd-ssd-240gb-25-sata-3-upgamer-p-computador-pc-notebook-_JM#is_advertising=true&position=10&search_layout=grid&type=pad&tracking_id=8c59d9e7-eb11-4df5-a764-8765d2aaa670&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=10&ad_click_id=ODc0Y2UwOTItYzgxYS00MGUyLWEyMDEtMGRjZDVjNjU1ZDI1",
            comentariosLink: "https://produto.mercadolivre.com.br/MLB-4826324354-hd-ssd-240gb-25-sata-3-upgamer-p-computador-pc-notebook-_JM#is_advertising=true&position=10&search_layout=grid&type=pad&tracking_id=8c59d9e7-eb11-4df5-a764-8765d2aaa670&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=10&ad_click_id=ODc0Y2UwOTItYzgxYS00MGUyLWEyMDEtMGRjZDVjNjU1ZDI1",
            cor: "Mercado_Livre"
        },
        
        {
            loja: "Mercado Livre",
            nome: "Disco sólido interno Crucial CT480BX500SSD1 480GB preto",
            preco: "R$ 239,83",
            imagem: "IMG/img_arm/arm10.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/disco-solido-interno-crucial-ct480bx500ssd1-480gb-preto/p/MLB18185023#searchVariation%3DMLB18185023%26position%3D35%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3D8c59d9e7-eb11-4df5-a764-8765d2aaa670",
            comentariosLink: "https://www.mercadolivre.com.br/disco-solido-interno-crucial-ct480bx500ssd1-480gb-preto/p/MLB18185023#reviews",
            cor: "Mercado_Livre"
        },
        
        {
            loja: "Mercado Livre",
            nome: "Disco sólido interno Western Digital WD Green WDS480G2G0A 480GB verde",
            preco: "R$ 228,90",
            imagem: "IMG/img_arm/arm11.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/disco-solido-interno-western-digital-wd-green-wds480g2g0a-480gb-verde/p/MLB12451965#searchVariation%3DMLB12451965%26position%3D32%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3D8c59d9e7-eb11-4df5-a764-8765d2aaa670",
            comentariosLink: "https://www.mercadolivre.com.br/disco-solido-interno-western-digital-wd-green-wds480g2g0a-480gb-verde/p/MLB12451965#reviews",
            cor: "Mercado_Livre"
        },
        
        {
            loja: "Mercado Livre",
            nome: "SSD Kingston 480gb Sa400s37 480g",
            preco: "R$ 236",
            imagem: "IMG/img_arm/arm12.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/ssd-kingston-480gb-sa400s37-480g/p/MLB24604574#searchVariation%3DMLB24604574%26position%3D13%26search_layout%3Dgrid%26type%3Dproduct%26tracking_id%3D8c59d9e7-eb11-4df5-a764-8765d2aaa670",
            comentariosLink: "https://www.mercadolivre.com.br/ssd-kingston-480gb-sa400s37-480g/p/MLB24604574#reviews",
            cor: "Mercado_Livre"
        },
        
        {
            loja: "Armazon",
            nome: "SSD 240GB 2.5 SATA SU630 - ASU630SS-240GQ-R, Adata, Armazenamento Interno SSD",
            preco: "R$ 250",
            imagem: "IMG/img_arm/arm13.jpg",
            ofertaLink: "https://www.amazon.com.br/240GB-SATA-SU630-ASU630SS-240GQ-R-Armazenamento/dp/B07KQXKK12/ref=sr_1_17?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-17&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12",
            comentariosLink: "https://www.amazon.com.br/240GB-SATA-SU630-ASU630SS-240GQ-R-Armazenamento/dp/B07KQXKK12/ref=sr_1_17?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento%2Bpc&qid=1722474188&sprefix=armazenamento%2Bpc%2Caps%2C507&sr=8-17&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12&th=1",
            cor: "Amazon"
        },
        
        {
            loja: "Armazon",
            nome: "Samsung SSD 990 EVO 2TB, PCIe Gen 4x4, Gen 5x2 M.2 2280 NVMe Unidade de Estado Sólido Interna.",
            preco: "R$ 1.540",
            imagem: "IMG/img_arm/arm14.jpg",
            ofertaLink: "https://www.amazon.com.br/Velocidades-Armazenamento-Atualização-MZ-V9E2T0B-AM/dp/B0CRC7H66Z/ref=sr_1_18?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-18&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            comentariosLink: "https://www.amazon.com.br/Velocidades-Armazenamento-Atualização-MZ-V9E2T0B-AM/dp/B0CRC7H66Z/ref=sr_1_18?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-18&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            cor: "Amazon"
        },
        
        {
            loja: "Armazon",
            nome: "SSD ADATA SU650 240GB",
            preco: "R$ 159",
            imagem: "IMG/img_arm/arm15.jpg",
            ofertaLink: "https://www.amazon.com.br/Adata-SU650-240GB-SATA-ASU650SS-240GT-R/dp/B07HCN5MRN/ref=sr_1_22_sspa?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-22-spons&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
            comentariosLink: "https://www.amazon.com.br/Adata-SU650-240GB-SATA-ASU650SS-240GT-R/dp/B07HCN5MRN/ref=sr_1_22_sspa?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-22-spons&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
            cor: "Amazon"
        },
        
        {
            loja: "Armazon",
            nome: "SSD, WD, Armazenamento Interno SSD, 240 GB (NVMe)",
            preco: "R$ 335",
            imagem: "IMG/img_arm/arm16.jpg",
            ofertaLink: "https://www.amazon.com.br/SSD-WD-Green-240-M-2/dp/B078WYS5K6/ref=sr_1_26?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-26&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678",
            comentariosLink: "https://www.amazon.com.br/SSD-WD-Green-240-M-2/dp/B078WYS5K6/ref=sr_1_26?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-26&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678",
            cor: "Amazon"
        },
        
        {
            loja: "Armazon",
            nome: "SSD Kingston NV2 500GB NVMe M.2 2280 (Leitura até 3500MB/s e Gravação até 2100MB/s)",
            preco: "R$ 279,99",
            imagem: "IMG/img_arm/arm17.jpg",
            ofertaLink: "https://www.amazon.com.br/Kingston-Leitura-3500MB-Gravação-2100MB/dp/B0BBWJH1P8/ref=sr_1_34?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-34&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12",
            comentariosLink: "https://www.amazon.com.br/Kingston-Leitura-3500MB-Gravação-2100MB/dp/B0BBWJH1P8/ref=sr_1_34?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-34&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12",
            cor: "Amazon"
        },
        
        {
            loja: "Armazon",
            nome: "SSD, Kingston, SA400S37/960G",
            preco: "R$ 428,68",
            imagem: "IMG/img_arm/arm18.jpg",
            ofertaLink: "https://www.amazon.com.br/DESKTOP-NOTEBOOK-KINGSTON-SA400S37-960G/dp/B079XC5PVV/ref=sr_1_35?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-35&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            comentariosLink: "https://www.amazon.com.br/DESKTOP-NOTEBOOK-KINGSTON-SA400S37-960G/dp/B079XC5PVV/ref=sr_1_35?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-35&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
            cor: "Amazon"
        },
        
        {
            loja: "Armazon",
            nome: "HD SSD 1TB Sandisk SDSSDA-1T00-G26",
            preco: "R$ 418,99",
            imagem: "IMG/img_arm/arm19.jpg",
            ofertaLink: "https://www.amazon.com.br/HD-SSD-1TB-Sandisk-SDSSDA-1T00-G26/dp/B07D998212/ref=sr_1_36?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-36&ufe=app_do%3Aamzn1.fos.e05b01e0-91a7-477e-a514-15a32325a6d6",
            comentariosLink: "https://www.amazon.com.br/HD-SSD-1TB-Sandisk-SDSSDA-1T00-G26/dp/B07D998212/ref=sr_1_36?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-36&ufe=app_do%3Aamzn1.fos.e05b01e0-91a7-477e-a514-15a32325a6d6",
            cor: "Amazon",
        },
        
        {
            loja: "Armazon",
            nome: "Ssd 480Gb Kingston A400 Bulk",
            preco: "R$ 225,89",
            imagem: "IMG/img_arm/arm20.jpg",
            ofertaLink: "https://www.amazon.com.br/Ssd-480Gb-Kingston-A400-Bulk/dp/B08NG86HZD/ref=sr_1_37?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-37&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74",
            comentariosLink: "https://www.amazon.com.br/Ssd-480Gb-Kingston-A400-Bulk/dp/B08NG86HZD/ref=sr_1_37?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-37&ufe=app_do%3Aamzn1.fos.6a09f7ec-d911-4889-ad70-de8dd83c8a74",
            cor: "Amazon"
        },
        
        {
            loja: "Armazon",
            nome: "SSD ADATA SU650 240GB",
            preco: "R$ 159",
            imagem: "IMG/img_arm/arm21.jpg",
            ofertaLink: "https://www.amazon.com.br/Adata-SU650-240GB-SATA-ASU650SS-240GT-R/dp/B07HCN5MRN/ref=sr_1_40?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-40&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d",
            comentariosLink: "https://www.amazon.com.br/Adata-SU650-240GB-SATA-ASU650SS-240GT-R/dp/B07HCN5MRN/ref=sr_1_40?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-40&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d",
            cor: "Amazon"
        },
        
        {
            loja: "Armazon",
            nome: "SSD WD Green SN350 1TB NVMe M.2 2280 (Leitura até 2400MB/s e Gravação até 1850MB/s)",
            preco: "R$ 559,90",
            imagem: "IMG/img_arm/arm22.jpg",
            ofertaLink: "https://www.amazon.com.br/Green-Leitura-2400MB-Gravação-1850MB/dp/B0CGY95ZZF/ref=sr_1_45?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-45&ufe=app_do%3Aamzn1.fos.e05b01e0-91a7-477e-a514-15a32325a6d6",
            comentariosLink: "https://www.amazon.com.br/Green-Leitura-2400MB-Gravação-1850MB/dp/B0CGY95ZZF/ref=sr_1_45?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-45&ufe=app_do%3Aamzn1.fos.e05b01e0-91a7-477e-a514-15a32325a6d6",
            cor: "Amazon"
        },
        
        {
            loja: "Armazon",
            nome: "fanxiang S501Q SSD 512GB PCle 3.0x4 Unidade interna de estado sólido",
            preco: "R$ 402,04",
            imagem: "IMG/img_arm/arm23.jpg",
            ofertaLink: "https://www.amazon.com.br/fanxiang-S501Q-Unidade-interna-desktops/dp/B0CNSV1M47/ref=sr_1_46?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-46&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            comentariosLink: "https://www.amazon.com.br/fanxiang-S501Q-Unidade-interna-desktops/dp/B0CNSV1M47/ref=sr_1_46?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-46&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
            cor: "Amazon"
        },
        
        {
            loja: "Armazon",
            nome: "SSD M.2 2280 Western Digital Green SN350 1TB NVME - WDS100T3G0C",
            preco: "R$ 510",
            imagem: "IMG/img_arm/arm24.jpg",
            ofertaLink: "https://www.amazon.com.br/2280-GREEN-SN350-NVME-WDS100T3G0C/dp/B09DVQQL9G/ref=sr_1_50?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-50&ufe=app_do%3Aamzn1.fos.e05b01e0-91a7-477e-a514-15a32325a6d6",
            comentariosLink: "https://www.amazon.com.br/2280-GREEN-SN350-NVME-WDS100T3G0C/dp/B09DVQQL9G/ref=sr_1_50?__mk_pt_BR=ÅMÅŽÕÑ&crid=28UNOAJW17HPU&dib=eyJ2IjoiMSJ9.SVSr6_O1S0TaRsZSPJLxXyJ7ukOptxatl1pkbEwB_T6sVzUeNs0GSN0wguFiEpxWjud8cxjoL_5ZNvvx4nTjHVQMdhQa6eN5ihpNa17fRgZLncjoiKj808w0WkOAQ4iWavg1_V6yE89t6vL1c5mkEJDLCl-SHDf_j0c0pn2A37fjU9Qm_PMtmXjg_XxFUshCvN0W7TCvQo1VuTELhL3wG-4rcfAF5XPfiHBjOXXmyVvT9PO9akpiGFmN6MyxH5J23bKmBFJhJzFnoz5S4Rsse1Y4k0jI8qzXGWI_OfL75UU.-q8xEFAGcpYGH9A6ihB8cgyvnmKsvbIG6r3V699EUW0&dib_tag=se&keywords=armazenamento+pc&qid=1722474188&sprefix=armazenamento+pc%2Caps%2C507&sr=8-50&ufe=app_do%3Aamzn1.fos.e05b01e0-91a7-477e-a514-15a32325a6d6",
            cor: "Amazon"
        },



         {
            loja: "Pichau",
            nome: "SSD ADATA ULTIMATE SU800, 256GB, 2.5, 3D NAND SATA III 6GB/S, LEITURA 550MB/S, GRAVACAO 500MB/S, ASU800SS-256GT-C",
            preco: "R$ 259,99",
            imagem: "IMG/img_Arm/arm25.jpg",
            ofertaLink: "https://www.pichau.com.br/ssd-adata-ultimate-su800-256gb-2-5-3d-nand-sata-iii-6gb-s-leitura-550mb-s-gravacao-500mb-s-asu800ss-256gt-c",
            comentariosLink: "https://www.pichau.com.br/ssd-adata-ultimate-su800-256gb-2-5-3d-nand-sata-iii-6gb-s-leitura-550mb-s-gravacao-500mb-s-asu800ss-256gt-c",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "SSD PLUS SANDISK 480GB 2.5 SATA III 6GB/S, SDSSDA-480G-G26",
            preco: "R$ 249,99",
            imagem: "IMG/img_arm/arm26.jpg",
            ofertaLink: "https://www.pichau.com.br/ssd-plus-sandisk-480g-sdssda-480g-g26",
            comentariosLink: "https://www.pichau.com.br/ssd-plus-sandisk-480g-sdssda-480g-g26",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "SSD PLUS SANDISK 240GB 2.5 SATA III 6GB/S, SDSSDA-240G-G26",
            preco: "R$ 189,99",
            imagem: "IMG/img_arm/arm27.jpg",
            ofertaLink: "https://www.pichau.com.br/ssd-plus-sandisk-240gb-2-5-sata-iii-6gb-s-sdssda-240g-g26",
            comentariosLink: "https://www.pichau.com.br/ssd-plus-sandisk-240gb-2-5-sata-iii-6gb-s-sdssda-240g-g26",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "SSD BEST MEMORY HIGHLANDER, 120GB, 2.5, SATA III 6GB/S, LEITURA 535MB/S, GRAVACAO 435MB/S, BTSDA-120G-535",
            preco: "R$ 99,99",
            imagem: "IMG/img_arm/arm28.jpg",
            ofertaLink: "https://www.pichau.com.br/ssd-best-memory-highlander-120gb-2-5-sata-iii-6gb-s-leitura-535mb-s-gravacao-435mb-s-btsda-120g-535",
            comentariosLink: "https://www.pichau.com.br/ssd-best-memory-highlander-120gb-2-5-sata-iii-6gb-s-leitura-535mb-s-gravacao-435mb-s-btsda-120g-535",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "SSD NAS APACER ENDURANCE PP3480, 256GB, M.2 2280, PCIE NVME, LEITURA 2450MB/S, GRAVACAO 2000MB/S, AP256GPP3480-R",
            preco: "R$ 289,99",
            imagem: "IMG/img_arm/arm29.jpg",
            ofertaLink: "https://www.pichau.com.br/ssd-nas-apacer-endurance-pp3480-256gb-m-2-2280-pcie-nvme-leitura-2450mb-s-gravacao-2000mb-s-ap256gpp3480-r",
            comentariosLink: "https://www.pichau.com.br/ssd-nas-apacer-endurance-pp3480-256gb-m-2-2280-pcie-nvme-leitura-2450mb-s-gravacao-2000mb-s-ap256gpp3480-r",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "SSD APACER ENDURANCE NAS SSD PPSS25, 512GB, 2.5, SATA III 6GB/S, LEITURA 540MB/S, 480MB/S, AP512GPPSS25-R",
            preco: "R$ 429,99",
            imagem: "IMG/img_arm/arm30.jpg",
            ofertaLink: "https://www.pichau.com.br/ssd-apacer-endurance-nas-ssd-ppss25-512gb-2-5-sata-iii-6gb-s-leitura-540mb-s-480mb-s-ap512gppss25-r",
            comentariosLink: "https://www.pichau.com.br/ssd-apacer-endurance-nas-ssd-ppss25-512gb-2-5-sata-iii-6gb-s-leitura-540mb-s-480mb-s-ap512gppss25-r",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "SSD APACER ENDURANCE NAS SSD PPSS25, 1TB, 2.5, SATA III 6GB/S, LEITURA 550MB/S, 500MB/S, AP1TPPSS25-R",
            preco: "R$ R$ 849,99",
            imagem: "IMG/img_arm/arm31.jpg",
            ofertaLink: "https://www.pichau.com.br/ssd-apacer-endurance-nas-ssd-ppss25-1tb-2-5-sata-iii-6gb-s-leitura-550mb-s-500mb-s-ap1tppss25-r",
            comentariosLink: "https://www.pichau.com.br/ssd-apacer-endurance-nas-ssd-ppss25-1tb-2-5-sata-iii-6gb-s-leitura-550mb-s-500mb-s-ap1tppss25-r",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "HD WD GREEN 1TB 3.5 SATA III 6GB/S, WD10EURX",
            preco: "R$ 289,99",
            imagem: "IMG/img_arm/arm32.jpg",
            ofertaLink: "https://www.pichau.com.br/hd-wd-green-1tb-3-5-sata-iii-6gb-s-wd10eurx",
            comentariosLink: "https://www.pichau.com.br/hd-wd-green-1tb-3-5-sata-iii-6gb-s-wd10eurx",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "HD SEAGATE SKYWAWK, 1TB, 3.5, 5400 RPM, SATA III 6GB/S, CACHE 256MB, ST1000VX013",
            preco: "R$ 409,99",
            imagem: "IMG/img_arm/arm33.jpg",
            ofertaLink: "https://www.pichau.com.br/hd-seagate-skywawk-1tb-3-5-5400-rpm-sata-iii-6gb-s-cache-256mb-st1000vx013",
            comentariosLink: "https://www.pichau.com.br/hd-seagate-skywawk-1tb-3-5-5400-rpm-sata-iii-6gb-s-cache-256mb-st1000vx013",
            cor: "Pichau"
        },
        
        {
            loja: "Pichau",
            nome: "HD WD BLUE, 2TB, 3.5, 7200 RPM, SATA III 6GB/S, CACHE 256MB, WD20EZBX",
            preco: "R$ 469,99",
            imagem: "IMG/img_arm/arm34.jpg",
            ofertaLink: "https://www.pichau.com.br/hd-wd-blue-2tb-3-5-7200-rpm-sata-iii-6gb-s-cache-256mb-wd20ezbx",
            comentariosLink: "https://www.pichau.com.br/hd-wd-blue-2tb-3-5-7200-rpm-sata-iii-6gb-s-cache-256mb-wd20ezbx",
            cor: "Pichau"
        },
        
         {
            loja: "Pichau",
            nome: "HD EXTERNO TOSHIBA CANVIO ADVANCE, 1TB, BRANCO, USB 3.0, HDTCA10XW3AA",
            preco: "R$ 439,99",
            imagem: "IMG/img_arm/arm35.jpg",
            ofertaLink: "https://www.pichau.com.br/hd-externo-toshiba-canvio-advance-1tb-branco-usb-3-0-hdtca10xw3aa",
            comentariosLink: "https://www.pichau.com.br/hd-externo-toshiba-canvio-advance-1tb-branco-usb-3-0-hdtca10xw3aa",
            cor: "Pichau"
        },
        
         {
            loja: "Pichau",
            nome: "HD WD PURPLE, 3TB, 3.5, 5400RPM, SATA III 6GB/S, CACHE 256MB, WD33PURZ",
            preco: "R$ 629,99",
            imagem: "IMG/img_arm/arm36.jpg",
            ofertaLink: "https://www.pichau.com.br/hd-wd-purple-3tb-3-5-5400rpm-sata-iii-6gb-s-cache-256mb-wd33purz",
            comentariosLink: "https://www.pichau.com.br/hd-wd-purple-3tb-3-5-5400rpm-sata-iii-6gb-s-cache-256mb-wd33purz",
            cor: "Pichau"
        },

        {
            loja: "Magalu",
           nome: "Disco Sólido Kingston Original 240GB Notebooks e Pc",
            preco: "R$ 314,59",
            imagem: "IMG/img_arm/arm37.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/disco-solido-kingston-original-240gb-notebooks-e-pc/p/cjg9e6j154/in/ssdi/",
            comentariosLink: "https://www.magazineluiza.com.br/disco-solido-kingston-original-240gb-notebooks-e-pc/p/cjg9e6j154/in/ssdi/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
           nome: "HD externo de 500GB Case 2.5 com HD de 500B 3.0 - PC MASTER",
            preco: "R$ 114",
            imagem: "IMG/img_arm/arm38.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/hd-externo-de-500gb-case-2-5-com-hd-de-500b-3-0-pc-master/p/kk371j7c89/in/hdex/",
            comentariosLink: "https://www.magazineluiza.com.br/hd-externo-de-500gb-case-2-5-com-hd-de-500b-3-0-pc-master/p/kk371j7c89/in/hdex/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
           nome: "HD externo de 1TB Case 2.5 com HD de 1TB 3.0 - PC Master",
            preco: "R$ 265,05",
            imagem: "IMG/img_arm/arm39.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/hd-externo-de-1tb-case-2-5-com-hd-de-1tb-3-0-pc-master/p/ghehgec910/in/hdex/",
            comentariosLink: "https://www.magazineluiza.com.br/hd-externo-de-1tb-case-2-5-com-hd-de-1tb-3-0-pc-master/p/ghehgec910/in/hdex/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
           nome: "HD PC 500GB ST500DM002 Seagate",
            preco: "R$ 84,64",
            imagem: "IMG/img_arm/arm40.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/hd-pc-500gb-st500dm002-seagate/p/ac2hhg1e80/in/hdit/",
            comentariosLink: "https://www.magazineluiza.com.br/hd-pc-500gb-st500dm002-seagate/p/ac2hhg1e80/in/hdit/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
           nome: "HD Sata Seagate ST1000DM003 1000Gb para Pc-Desktop",
            preco: "R$ 222",
            imagem: "IMG/img_arm/arm41.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/hd-sata-seagate-st1000dm003-1000gb-para-pc-desktop/p/baa0e686ge/in/hdex/",
            comentariosLink: "https://www.magazineluiza.com.br/hd-sata-seagate-st1000dm003-1000gb-para-pc-desktop/p/baa0e686ge/in/hdex/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
           nome: "Hd Sata WD5000AADS 500Gb para PC/Desktop - WESTERN DIGITAL",
            preco: "R$ 112",
            imagem: "IMG/img_arm/arm42.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/hd-sata-wd5000aads-500gb-para-pc-desktop-western-digital/p/dd8d54f885/in/hdex/",
            comentariosLink: "https://www.magazineluiza.com.br/hd-sata-wd5000aads-500gb-para-pc-desktop-western-digital/p/dd8d54f885/in/hdex/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
           nome: "Disco Rígido HD Interno Seagate 500gb Pc Desktop",
            preco: "R$ 70",
            imagem: "IMG/img_arm/arm43.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/disco-rigido-hd-interno-seagate-500gb-pc-desktop/p/eh33fdhc36/in/hdit/",
            comentariosLink: "https://www.magazineluiza.com.br/disco-rigido-hd-interno-seagate-500gb-pc-desktop/p/eh33fdhc36/in/hdit/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
           nome: "Ssd 120gb 240gb 480gb ou 960GB Kingston Sata Rev. 3.0 - Leituras 500MB/s e Gravações 450MB/s A400",
            preco: "R$ 284,05",
            imagem: "IMG/img_arm/arm44.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/ssd-120gb-240gb-480gb-ou-960gb-kingston-sata-rev-3-0-leituras-500mb-s-e-gravacoes-450mb-s-a400/p/dk85e9aekg/in/ssdi/",
            comentariosLink: "https://www.magazineluiza.com.br/ssd-120gb-240gb-480gb-ou-960gb-kingston-sata-rev-3-0-leituras-500mb-s-e-gravacoes-450mb-s-a400/p/dk85e9aekg/in/ssdi/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
           nome: "HD Interno Seagate 500Gb SATA2 5900RPM OEM p/ PC/DVR ST3500312CS",
            preco: "R$ 155",
            imagem: "IMG/img_arm/arm45.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/hd-interno-seagate-500gb-sata2-5900rpm-oem-p-pc-dvr-st3500312cs/p/cegfj85f7g/in/hdit/",
            comentariosLink: "https://www.magazineluiza.com.br/hd-interno-seagate-500gb-sata2-5900rpm-oem-p-pc-dvr-st3500312cs/p/cegfj85f7g/in/hdit/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
           nome: "Xraydisk 2.5 sata3 ssd 256gb hdd disco rígido interno de estado sólido para o PC e noteook",
            preco: "R$ 199",
            imagem: "IMG/img_arm/arm46.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/xraydisk-2-5-sata3-ssd-256gb-hdd-disco-rigido-interno-de-estado-solido-para-o-pc-e-noteook/p/ge4bdb9288/in/ssdi/",
            comentariosLink: "https://www.magazineluiza.com.br/xraydisk-2-5-sata3-ssd-256gb-hdd-disco-rigido-interno-de-estado-solido-para-o-pc-e-noteook/p/ge4bdb9288/in/ssdi/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
           nome: "SSD 240 GB de memória física PC ou Note Book - Wejinto",
            preco: "R$ 280,89",
            imagem: "IMG/img_arm/arm47.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/ssd-240-gb-de-memoria-fisica-pc-ou-note-book-wejinto/p/jf8bf4880b/in/ssdi/",
            comentariosLink: "https://www.magazineluiza.com.br/ssd-240-gb-de-memoria-fisica-pc-ou-note-book-wejinto/p/jf8bf4880b/in/ssdi/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
           nome: "HD Sata SSHD Seagate St1000DX001 1TB para Pc-Desktop",
            preco: "R$ 282",
            imagem: "IMG/img_arm/arm48.jpg",
            ofertaLink: "https://www.magazineluiza.com.br/hd-sata-sshd-seagate-st1000dx001-1tb-para-pc-desktop/p/ke7665a5ah/in/hdex/",
            comentariosLink: "https://www.magazineluiza.com.br/hd-sata-sshd-seagate-st1000dx001-1tb-para-pc-desktop/p/ke7665a5ah/in/hdex/",
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
