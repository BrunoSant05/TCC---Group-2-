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
            nome: "Roteador Wireless Gigabit Ac1300 Archer C6 V4 Preto Tp-link 110V/220V",
            preco: "R$ 284,10",
            imagem: "IMG/img_ofertas/oferta05.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/roteador-wireless-gigabit-ac1300-archer-c6-v4-preto-tp-link-110v220v/p/MLB25876284?pdp_filters=deal:MLB779362-1&hide_psmb=true#promotion_type=TODAY_PROMOTION&searchVariation=MLB25876284&deal_print_id=71d3797f-a272-4bb7-aa11-6f121b82f5c9&position=8&search_layout=grid&type=product&tracking_id=8e22364b-7e61-4d40-91fe-22a2837ffa16&deal_print_id=c959c127-f882-4ec3-b5e5-ff11e2ae2a00&promotion_type=TODAY_PROMOTION",
            comentariosLink: "https://www.mercadolivre.com.br/roteador-wireless-gigabit-ac1300-archer-c6-v4-preto-tp-link-110v220v/p/MLB25876284?pdp_filters=deal:MLB779362-1&hide_psmb=true#reviews",
            cor: "Mercado_Livre"
        },

        {
            loja: "Mercado Livre",
            nome: "Kit Roteador Wi-fi Mesh Dual-band Ac1900 Deco S7 Tp-link Cor Branco",
            preco: "R$ 809,00",
            imagem: "IMG/img_ofertas/oferta06.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/kit-roteador-wi-fi-mesh-dual-band-ac1900-deco-s7-tp-link-cor-branco/p/MLB23918550?pdp_filters=deal:MLB779362-1&hide_psmb=true#promotion_type=TODAY_PROMOTION&searchVariation=MLB23918550&deal_print_id=71d3797f-a272-4bb7-aa11-6f121b82f5c9&position=17&search_layout=grid&type=product&tracking_id=e4079ffc-9956-498d-8117-3e616290f2f3&deal_print_id=7a188ff0-ab7c-4cf8-a8a9-2b7a2f436f7e&promotion_type=TODAY_PROMOTION",
            comentariosLink: "https://www.mercadolivre.com.br/kit-roteador-wi-fi-mesh-dual-band-ac1900-deco-s7-tp-link-cor-branco/p/MLB23918550?pdp_filters=deal:MLB779362-1&hide_psmb=true#reviews",
            cor: "Mercado_Livre" 
        },
        {
            loja: "Mercado Livre",
            nome: "Roteador Tp-link Ax1800 Wi-fi 6 Dual Band Gigabit-ex220 Cor Preto",
            preco: "R$ 258,40",
            imagem: "IMG/img_ofertas/oferta07.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/roteador-tp-link-ax1800-wi-fi-6-dual-band-gigabit-ex220-cor-preto/p/MLB20567130?pdp_filters=deal:MLB779362-1&hide_psmb=true#promotion_type=TODAY_PROMOTION&searchVariation=MLB20567130&deal_print_id=71d3797f-a272-4bb7-aa11-6f121b82f5c9&position=25&search_layout=grid&type=product&tracking_id=e4079ffc-9956-498d-8117-3e616290f2f3&deal_print_id=7a188ff0-ab7c-4cf8-a8a9-2b7a2f436f7e&promotion_type=TODAY_PROMOTION",
            comentariosLink: "https://www.mercadolivre.com.br/roteador-tp-link-ax1800-wi-fi-6-dual-band-gigabit-ex220-cor-preto/p/MLB20567130?pdp_filters=deal:MLB779362-1&hide_psmb=true#reviews",
            cor: "Mercado_Livre" 
            
        },
        {
            loja: "Mercado Livre",
            nome: "Memória RAM Desktop RZX Gamer Fire Dragon DDR3 8GB 1600MHz 1.5v",
            preco: "R$ 65,55",
            imagem: "IMG/img_ofertas/oferta08.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/memoria-ram-desktop-rzx-gamer-fire-dragon-ddr3-8gb-1600mhz-15v-pc3-12800-dimm-preto/p/MLB14729323?pdp_filters=deal:MLB779362-1&hide_psmb=true#promotion_type=TODAY_PROMOTION&searchVariation=MLB14729323&deal_print_id=71d3797f-a272-4bb7-aa11-6f121b82f5c9&position=31&search_layout=grid&type=product&tracking_id=e4079ffc-9956-498d-8117-3e616290f2f3&deal_print_id=7a188ff0-ab7c-4cf8-a8a9-2b7a2f436f7e&promotion_type=TODAY_PROMOTION",
            comentariosLink: "https://www.mercadolivre.com.br/memoria-ram-desktop-rzx-gamer-fire-dragon-ddr3-8gb-1600mhz-15v-pc3-12800-dimm-preto/p/MLB14729323?pdp_filters=deal:MLB779362-1&hide_psmb=true#reviews",
            cor: "Mercado_Livre" 
        },

        {
            loja: "Mercado Livre",
            nome: "Webcam Home Ofice ! Microfone ! Teans, Zoom, Meet, Hangouts!",
            preco: "R$ 52,74",
            imagem: "IMG/img_ofertas/oferta09.jpg",
            ofertaLink: "https://produto.mercadolivre.com.br/MLB-1863612368-webcam-home-ofice-microfone-teans-zoom-meet-hangouts-_JM?hide_psmb=true#promotion_type%3DTODAY_PROMOTION%26deal_print_id%3D71d3797f-a272-4bb7-aa11-6f121b82f5c9%26position%3D51%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3De4079ffc-9956-498d-8117-3e616290f2f3&deal_print_id=7a188ff0-ab7c-4cf8-a8a9-2b7a2f436f7e&promotion_type=TODAY_PROMOTION",
            comentariosLink: "https://produto.mercadolivre.com.br/MLB-1863612368-webcam-home-ofice-microfone-teans-zoom-meet-hangouts-_JM?hide_psmb=true#reviews",
            cor: "Mercado_Livre" 
        },
        
        {
            loja: "Mercado Livre",
            nome: "Combo Teclado E Mouse Sem Fio Multilaser Slim Usb - Tc212 Cor do mouse Preto",
            preco: "R$ 93,10",
            imagem: "IMG/img_ofertas/oferta10.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/combo-teclado-e-mouse-sem-fio-multilaser-slim-usb-tc212-cor-do-mouse-preto/p/MLB10215006?pdp_filters=deal:MLB779362-1&hide_psmb=true#promotion_type=TODAY_PROMOTION&searchVariation=MLB10215006&deal_print_id=71d3797f-a272-4bb7-aa11-6f121b82f5c9&position=37&search_layout=grid&type=product&tracking_id=e4079ffc-9956-498d-8117-3e616290f2f3&deal_print_id=7a188ff0-ab7c-4cf8-a8a9-2b7a2f436f7e&promotion_type=TODAY_PROMOTION",
            comentariosLink: "https://www.mercadolivre.com.br/combo-teclado-e-mouse-sem-fio-multilaser-slim-usb-tc212-cor-do-mouse-preto/p/MLB10215006?pdp_filters=deal:MLB779362-1&hide_psmb=true#reviews",
            cor: "Mercado_Livre" 
        },
        
        {
            loja: "Mercado Livre",
            nome: "Fone Headset Gamer C/ Luz Led P/ Celular Jogar Free Fire Cor Preto Cor da luz Rainbow",
            preco: "R$ 47,00",
            imagem: "IMG/img_ofertas/oferta11.jpg",
            ofertaLink: "https://www.mercadolivre.com.br/fone-headset-gamer-c-luz-led-p-celular-jogar-free-fire-cor-preto-cor-da-luz-rainbow/p/MLB19819953?pdp_filters=deal:MLB779362-1&hide_psmb=true#promotion_type=TODAY_PROMOTION&searchVariation=MLB19819953&deal_print_id=71d3797f-a272-4bb7-aa11-6f121b82f5c9&position=41&search_layout=grid&type=product&tracking_id=e4079ffc-9956-498d-8117-3e616290f2f3&deal_print_id=7a188ff0-ab7c-4cf8-a8a9-2b7a2f436f7e&promotion_type=TODAY_PROMOTION",
            comentariosLink: "https://www.mercadolivre.com.br/fone-headset-gamer-c-luz-led-p-celular-jogar-free-fire-cor-preto-cor-da-luz-rainbow/p/MLB19819953?pdp_filters=deal:MLB779362-1&hide_psmb=true#reviews",
            cor: "Mercado_Livre" 
        },
        
        {
            loja: "Mercado Livre",
            nome: "Case Ssd M.2 Nvme E Sata Para Usb 3.1 E Type-c",
            preco: "R$ 72,58",
            imagem: "IMG/img_ofertas/oferta12.jpg",
            ofertaLink: "https://produto.mercadolivre.com.br/MLB-1944657587-case-ssd-m2-nvme-e-sata-para-usb-31-e-type-c-_JM?hide_psmb=true#promotion_type%3DTODAY_PROMOTION%26deal_print_id%3D71d3797f-a272-4bb7-aa11-6f121b82f5c9%26position%3D45%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3De4473cb5-75ec-4268-9144-9ec01892adfd&deal_print_id=2a065328-09d1-4c11-b8e3-5d3935f7f3d1&promotion_type=TODAY_PROMOTION",
            comentariosLink: "https://produto.mercadolivre.com.br/MLB-1944657587-case-ssd-m2-nvme-e-sata-para-usb-31-e-type-c-_JM?hide_psmb=true#reviews",
            cor: "Mercado_Livre" 
        },
        
        
        {
            loja: "Mercado Livre",
            nome: "500 Folhas Papel Couche 170g / 180g Brilho Impressão Laser",
            preco: "R$ 146,94",
            imagem: "IMG/img_ofertas/oferta13.jpg",
            ofertaLink: "https://produto.mercadolivre.com.br/MLB-2739648936-500-folhas-papel-couche-170g-180g-brilho-impresso-laser-_JM?hide_psmb=true#promotion_type%3DTODAY_PROMOTION%26deal_print_id%3D71d3797f-a272-4bb7-aa11-6f121b82f5c9%26position%3D46%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3De4473cb5-75ec-4268-9144-9ec01892adfd&deal_print_id=2a065328-09d1-4c11-b8e3-5d3935f7f3d1&promotion_type=TODAY_PROMOTION",
            comentariosLink: "https://produto.mercadolivre.com.br/MLB-2739648936-500-folhas-papel-couche-170g-180g-brilho-impresso-laser-_JM?hide_psmb=true#promotion_type%3DTODAY_PROMOTION%26deal_print_id%3D71d3797f-a272-4bb7-aa11-6f121b82f5c9%26position%3D46%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3De4473cb5-75ec-4268-9144-9ec01892adfd&deal_print_id=2a065328-09d1-4c11-b8e3-5d3935f7f3d1&promotion_type=TODAY_PROMOTION",
            cor: "Mercado_Livre" 
        },
        
        {
            loja: "Mercado Livre",
            nome: "Teclado Gamer Semi Mecânico Led Rgb Abnt2 Usb Pc Ps4 Xbox",
            preco: "R$ 59,17",
            imagem: "IMG/img_ofertas/oferta14.jpg",
            ofertaLink: "https://produto.mercadolivre.com.br/MLB-2142810669-teclado-gamer-semi-mecnico-led-rgb-abnt2-usb-pc-ps4-xbox-_JM?hide_psmb=true#promotion_type%3DTODAY_PROMOTION%26deal_print_id%3D71d3797f-a272-4bb7-aa11-6f121b82f5c9%26position%3D48%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3De4473cb5-75ec-4268-9144-9ec01892adfd&deal_print_id=2a065328-09d1-4c11-b8e3-5d3935f7f3d1&promotion_type=TODAY_PROMOTION",
            comentariosLink: "https://produto.mercadolivre.com.br/MLB-2142810669-teclado-gamer-semi-mecnico-led-rgb-abnt2-usb-pc-ps4-xbox-_JM?hide_psmb=true#reviews",
            cor: "Mercado_Livre" 
        },
        
        {
            loja: "Mercado Livre",
            nome: "Roteador Tp-link Wireless Ac1200 Dual Band - Ec220-g5",
            preco: "R$ 198,90",
            imagem: "IMG/img_ofertas/oferta15.jpg",
            ofertaLink: "https://produto.mercadolivre.com.br/MLB-3911519076-roteador-tp-link-wireless-ac1200-dual-band-ec220-g5-_JM?hide_psmb=true#promotion_type%3DTODAY_PROMOTION%26deal_print_id%3D71d3797f-a272-4bb7-aa11-6f121b82f5c9%26position%3D39%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3D1ab12515-bebc-412d-a2e2-e0d95dd75a51&deal_print_id=9fe9273c-1159-4006-b8c9-1bda7fce6259&promotion_type=TODAY_PROMOTION",
            comentariosLink: "https://produto.mercadolivre.com.br/MLB-3911519076-roteador-tp-link-wireless-ac1200-dual-band-ec220-g5-_JM?hide_psmb=true#reviews",
            cor: "Mercado_Livre" 
        },
        
        {
            loja: "Mercado Livre",
            nome: "Kit 4 Cartuchos De Tinta 712 C/preto 38ml Hp T210 T250 T650",
            preco: "R$ 987,05",
            imagem: "IMG/img_ofertas/oferta16.jpg",
            ofertaLink: "https://produto.mercadolivre.com.br/MLB-2004761879-kit-4-cartuchos-de-tinta-712-cpreto-38ml-hp-t210-t250-t650-_JM?hide_psmb=true#promotion_type%3DTODAY_PROMOTION%26deal_print_id%3D71d3797f-a272-4bb7-aa11-6f121b82f5c9%26position%3D47%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3De4473cb5-75ec-4268-9144-9ec01892adfd&deal_print_id=2a065328-09d1-4c11-b8e3-5d3935f7f3d1&promotion_type=TODAY_PROMOTION",
            comentariosLink: "https://produto.mercadolivre.com.br/MLB-2004761879-kit-4-cartuchos-de-tinta-712-cpreto-38ml-hp-t210-t250-t650-_JM?hide_psmb=true#promotion_type%3DTODAY_PROMOTION%26deal_print_id%3D71d3797f-a272-4bb7-aa11-6f121b82f5c9%26position%3D47%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3De4473cb5-75ec-4268-9144-9ec01892adfd&deal_print_id=2a065328-09d1-4c11-b8e3-5d3935f7f3d1&promotion_type=TODAY_PROMOTION",
            cor: "Mercado_Livre" 
        },

        {
            loja: "HP",
            nome: "HyperX Pulsefire Raid - Mouse Gamer (Preto)",
            preco: "R$ 346,66",
            imagem: "IMG/img_ofertas/oferta17.jpg",
            ofertaLink: "https://www.hp.com/br-pt/shop/hyperx-pulsefire-raid-mouse-gamer-preto-4p5q3aa.html",
            comentariosLink: "https://www.hp.com/br-pt/shop/hyperx-pulsefire-raid-mouse-gamer-preto-4p5q3aa.html",
            cor: "hp"
        },

        {
            loja: "HP",
            nome: "HyperX SoloCast - Microfone USB (Preto)",
            preco: "R$ 449,90",
            imagem: "IMG/img_ofertas/oferta18.jpg",
            ofertaLink: "https://www.hp.com/br-pt/shop/acessorios.html?p=3",
            comentariosLink: "https://www.hp.com/br-pt/shop/acessorios.html?p=3",
            cor: "hp"
        },
        
        {
            loja: "HP",
            nome: "Headset Gamer HP P2 C/ USB Blue Light",
            preco: "R$ 2169,90",
            imagem: "IMG/img_ofertas/oferta19.jpg",
            ofertaLink: "https://www.hp.com/br-pt/shop/acessorios/headset-gamer-hp-p2-c-usb-blue-light-194q8aa.html",
            comentariosLink: "https://www.hp.com/br-pt/shop/acessorios/headset-gamer-hp-p2-c-usb-blue-light-194q8aa.html",
            cor: "hp"
        },
        
        {
            loja: "HP",
            nome: "HyperX Cloud Stinger S - Headset Gamer (Preto)",
            preco: "R$ 323,86",
            imagem: "IMG/img_ofertas/oferta20.jpg",
            ofertaLink: "https://www.hp.com/br-pt/shop/hyperx-cloud-stinger-s-headset-gamer-preto-4p4f1aa.html",
            comentariosLink: " https://www.hp.com/br-pt/shop/hyperx-cloud-stinger-s-headset-gamer-preto-4p4f1aa.html",
            cor: "hp"
        },
        
        {
            loja: "HP",
            nome: "Caixa de Som HP Preta",
            preco: "R$ 199,90",
            imagem: "IMG/img_ofertas/oferta21.jpg",
            ofertaLink: "https://www.hp.com/br-pt/shop/caixa-de-som-hp-preta-8ca76aa.html",
            comentariosLink: "https://www.hp.com/br-pt/shop/caixa-de-som-hp-preta-8ca76aa.html",
            cor: "hp"
        },
        
        {
            loja: "HP",
            nome: "HyperX CloudX Stinger Core - Headset Gamer Preto-Verde - Xbox",
            preco: "R$ 226,96",
            imagem: "IMG/img_ofertas/oferta22.jpg",
            ofertaLink: "https://www.hp.com/br-pt/shop/hyperx-cloudx-stinger-core-headset-gamer-preto-verde-xbox-4p5j9aa.html",
            comentariosLink: "https://www.hp.com/br-pt/shop/hyperx-cloudx-stinger-core-headset-gamer-preto-verde-xbox-4p5j9aa.html",
            cor: "hp"
        },
        
        {
            loja: "HP",
            nome: "Adaptador de Rede HP RJ45 Fêmea",
            preco: "R$ 219,90",
            imagem: "IMG/img_ofertas/oferta23.jpg",
            ofertaLink: "https://www.hp.com/br-pt/shop/adaptador-de-rede-hp-rj45-femea-8ww43aa.html",
            comentariosLink: "https://www.hp.com/br-pt/shop/adaptador-de-rede-hp-rj45-femea-8ww43aa.html",
            cor: "hp"
        },
        
        {
            loja: "HP",
            nome: "Caixa de Som HP Mini Preta",
            preco: "R$ 99,90",
            imagem: "IMG/img_ofertas/oferta24.jpg",
            ofertaLink: "https://www.hp.com/br-pt/shop/caixa-de-som-hp-mini-preta-2b286aa.html",
            comentariosLink: "https://www.hp.com/br-pt/shop/caixa-de-som-hp-mini-preta-2b286aa.html",
            cor: "hp"
        },
        
        {
            loja: "HP",
            nome: "Fone de Ouvido Intra HP C/ Microfone Preto",
            preco: "R$ 59,90",
            imagem: "IMG/img_ofertas/oferta25.jpg",
            ofertaLink: "https://www.hp.com/br-pt/shop/fone-de-ouvido-intra-hp-c-microfone-preto-8ca64aa.html",
            comentariosLink: "https://www.hp.com/br-pt/shop/fone-de-ouvido-intra-hp-c-microfone-preto-8ca64aa.html",
            cor: "hp"
        },
        
        {
            loja: "HP",
            nome: "HyperX Alloy Origins Core - Teclado Mecânico Gamer - Azul HX (layout BR)",
            preco: "R$ 664,91",
            imagem: "IMG/img_ofertas/oferta26.jpg",
            ofertaLink: "https://www.hp.com/br-pt/shop/hyperx-alloy-origins-core-teclado-mecanico-gamer-azul-hx-layout-br-4p5p2a2.html",
            comentariosLink: "https://www.hp.com/br-pt/shop/hyperx-alloy-origins-core-teclado-mecanico-gamer-azul-hx-layout-br-4p5p2a2.html",
            cor: "hp"
        },
        
         {
            loja: "HP",
            nome: "Caixa de Som HP Preta RGB Light DHE-6000",
            preco: "R$ 149,90",
            imagem: "IMG/img_ofertas/oferta27.jpg",
            ofertaLink: "https://www.hp.com/br-pt/shop/caixa-de-som-hp-preta-rgb-light-dhe-6000-8yj91aa.html",
            comentariosLink: "https://www.hp.com/br-pt/shop/caixa-de-som-hp-preta-rgb-light-dhe-6000-8yj91aa.html",
            cor: "hp"
        },
        
        {
            loja: "HP",
            nome: "Fone de Ouvido Intra HP C/ Microfone Preto",
            preco: "R$ 49,90",
            imagem: "IMG/img_ofertas/oferta28.jpg",
            ofertaLink: "https://www.hp.com/br-pt/shop/acessorios/fone-de-ouvido-intra-hp-c-microfone-preto-8yj88aa.html",
            comentariosLink: "https://www.hp.com/br-pt/shop/acessorios/fone-de-ouvido-intra-hp-c-microfone-preto-8yj88aa.html",
            cor: "hp"
        },

        {
            loja: "Amazon",
            nome: "Mouse Sem Fio Slim Recarregável Led Rgb Bluetooth Preto",
            preco: "R$ 35,91",
            imagem: "IMG/img_ofertas/oferta29.jpg",
            ofertaLink: "https://www.amazon.com.br/Recarreg%C3%A1vel-Compat%C3%ADvel-Silencioso-Ergonomico-Bluetooth/dp/B0D6C3BX1L?ref=dlx_deals_dg_dcl_B0D6C3BX1L_dt_sl14_7c",
            comentariosLink: "https://www.amazon.com.br/Recarreg%C3%A1vel-Compat%C3%ADvel-Silencioso-Ergonomico-Bluetooth/product-reviews/B0D6C3BX1L/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },

        {
            loja: "Amazon",
            nome: "WAVLINK Adaptador de Vídeo Universal USB 3.0 para Dual HDMI UHD",
            preco: "R$ 241,00",
            imagem: "IMG/img_ofertas/oferta30.jpg",
            ofertaLink: "https://www.amazon.com.br/Adaptador-universal-suporta-monitores-adaptador/dp/B0943VNT67?ref=dlx_deals_dg_dcl_B0943VNT67_dt_sl14_7c",
            comentariosLink: "https://www.amazon.com.br/Adaptador-universal-suporta-monitores-adaptador/product-reviews/B0943VNT67/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
                {
            loja: "Amazon",
            nome: "Fones de ouvido sem fio Bluetooth 5.3",
            preco: "R$ 105,00",
            imagem: "IMG/img_ofertas/oferta31.jpg",
            ofertaLink: "https://www.amazon.com.br/Bluetooth-intra-auriculares-ganchos-esportivos-exerc%C3%ADcios/dp/B0CGRMBVHX?ref=dlx_deals_dg_dcl_B0CGRMBVHX_dt_sl14_7c",
            comentariosLink: "https://www.amazon.com.br/Bluetooth-intra-auriculares-ganchos-esportivos-exerc%C3%ADcios/product-reviews/B0CGRMBVHX/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
                {
            loja: "Amazon",
            nome: "WAVLINK Estação de ancoragem USB 3.0 com tela dupla HDMI ",
            preco: "R$ 624,04",
            imagem: "IMG/img_ofertas/oferta32.jpg",
            ofertaLink: "https://www.amazon.com.br/WAVLINK-Universal-Ethernet-remov%C3%ADvel-eficiente/dp/B07JC3CT2S?ref=dlx_deals_dg_dcl_B07JC3CT2S_dt_sl14_7c",
            comentariosLink: "https://www.amazon.com.br/WAVLINK-Universal-Ethernet-remov%C3%ADvel-eficiente/product-reviews/B07JC3CT2S/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
                {
            loja: "Amazon",
            nome: "kit Upgrade, Intel Core i5-3470 + Cooler + Placa-Mãe 1155 + 16GB DDR3",
            preco: "R$ 476,90",
            imagem: "IMG/img_ofertas/oferta33.jpg",
            ofertaLink: "https://www.amazon.com.br/Upgrade-Intel-i5-3470-Cooler-Placa-M%C3%A3e/dp/B0BLSXWPTG?ref=dlx_deals_dg_dcl_B0BLSXWPTG_dt_sl14_7c",
            comentariosLink: "https://www.amazon.com.br/Upgrade-Intel-i5-3470-Cooler-Placa-M%C3%A3e/product-reviews/B0BLSXWPTG/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
                {
            loja: "Amazon",
            nome: "UGREEN Hub USB C com HDMI 4K 60 Hz, carregamento PD tipo C a 100 W",
            preco: "R$ 160,92",
            imagem: "IMG/img_ofertas/oferta34.jpg",
            ofertaLink: "https://www.amazon.com.br/UGREEN-carregamento-multiporta-transfer%C3%AAncia-compat%C3%ADvel/dp/B0BW2PNZF2?ref=dlx_deals_dg_dcl_B0BW2PNZF2_dt_sl14_7c",
            comentariosLink: "https://www.amazon.com.br/UGREEN-carregamento-multiporta-transfer%C3%AAncia-compat%C3%ADvel/product-reviews/B0BW2PNZF2/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
                {
            loja: "Amazon",
            nome: "SAMTUNK Capa teclado for Xiaomi Redmi Pad SE 11. 2023",
            preco: "R$ 232,20",
            imagem: "IMG/img_ofertas/oferta35.jpg",
            ofertaLink: "https://www.amazon.com.br/SAMTUNK-Xiaomi-Redmi-Pad-SE/dp/B0CMCY7GTD?ref=dlx_deals_dg_dcl_B0CMCY7GTD_dt_sl14_7c",
            comentariosLink: "https://www.amazon.com.br/SAMTUNK-Xiaomi-Redmi-Pad-SE/product-reviews/B0CMCY7GTD/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
                {
            loja: "Amazon",
            nome: "Kit Teclado e Mouse Sem Fio USB Slim para Notebook",
            preco: "R$ 152,99",
            imagem: "IMG/img_ofertas/oferta36.jpg",
            ofertaLink: "https://www.amazon.com.br/Teclado-Mouse-Slim-para-Notebook/dp/B0D3JBNMGK?ref=dlx_deals_dg_dcl_B0D3JBNMGK_dt_sl14_7c",
            comentariosLink: "https://www.amazon.com.br/Teclado-Mouse-Slim-para-Notebook/dp/B0D3JBNMGK?ref=dlx_deals_dg_dcl_B0D3JBNMGK_dt_sl14_7c",
            cor: "Amazon"
        },
        
                {
            loja: "Amazon",
            nome: "Kit Teclado + Mouse Sem Fio Wireless 2.4GHz USB Slim para PC",
            preco: "R$ 123,29",
            imagem: "IMG/img_ofertas/oferta37.jpg",
            ofertaLink: "https://www.amazon.com.br/Teclado-Mouse-Wireless-2-4GHz-Slim/dp/B0D3BBNGZN?ref=dlx_deals_dg_dcl_B0D3BBNGZN_dt_sl14_7c",
            comentariosLink: "https://www.amazon.com.br/Teclado-Mouse-Wireless-2-4GHz-Slim/product-reviews/B0D3BBNGZN/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
                {
            loja: "Amazon",
            nome: "Mesa para Notebook, Mesa Portatil para Notebook",
            preco: "R$ 116,09",
            imagem: "IMG/img_ofertas/oferta38.jpg",
            ofertaLink: "https://www.amazon.com.br/Notebook-Portatil-Suporte-Port%C3%A1til-Cooler/dp/B0D6XY8QX5?ref=dlx_deals_dg_dcl_B0D6XY8QX5_dt_sl14_7c",
            comentariosLink: "https://www.amazon.com.br/Notebook-Portatil-Suporte-Port%C3%A1til-Cooler/dp/B0D6XY8QX5?ref=dlx_deals_dg_dcl_B0D6XY8QX5_dt_sl14_7c",
            cor: "Amazon"
        },
        
        {
            loja: "Amazon",
            nome: "SoundPEATS Fones de Ouvido Sem Fio Bluetooth 5.2",
            preco: "R$ 183, 20",
            imagem: "IMG/img_ofertas/oferta39.jpg",
            ofertaLink: "https://www.amazon.com.br/SoundPEATS-A7-Pro-Cancelamento-Confer%C3%AAncia/dp/B0B68YWP7K?ref=dlx_deals_dg_dcl_B0B68YWP7K_dt_sl14_7c",
            comentariosLink: "https://www.amazon.com.br/SoundPEATS-A7-Pro-Cancelamento-Confer%C3%AAncia/product-reviews/B0B68YWP7K/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews",
            cor: "Amazon"
        },
        
         {
            loja: "Amazon",
            nome: "",
            preco: "",
            imagem: "IMG/img_ofertas/oferta40.jpg",
            ofertaLink: "",
            comentariosLink: "",
            cor: "Amazon"
        },

        {
            loja: "Magalu",
            nome: "Roteador Repetidor Wireless-n Sinal Wifi Repeater 300mbps",
            preco: "R$ 56,61",
            imagem: "IMG/img_ofertas/oferta41.jpg",
            ofertaLink: "https://www.magazinevoce.com.br/magazinedaluizatop/roteador-repetidor-wireless-n-sinal-wifi-repeater-300mbps-utimix/p/cg6j8ah4g8/in/rpts/",
            comentariosLink: "https://www.magazinevoce.com.br/magazinedaluizatop/roteador-repetidor-wireless-n-sinal-wifi-repeater-300mbps-utimix/p/cg6j8ah4g8/in/rpts/",
            cor: "Magalu"
        },

        {
            loja: "Magalu",
            nome: "Mouse Sem Fio 2.4 ghz Optico Recarregável Gamer USB Led Rgb Wirelles Usb Notebook",
            preco: "R$ 28,29",
            imagem: "IMG/img_ofertas/oferta42.jpg",
            ofertaLink: "https://www.magazinevoce.com.br/magazinedaluizatop/mouse-sem-fio-2-4-ghz-optico-recarregavel-gamer-usb-led-rgb-wirelles-usb-notebook-mouse-ultra-fino-wireless/p/cd3k8jd1h1/in/mger/",
            comentariosLink: "https://www.magazinevoce.com.br/magazinedaluizatop/mouse-sem-fio-2-4-ghz-optico-recarregavel-gamer-usb-led-rgb-wirelles-usb-notebook-mouse-ultra-fino-wireless/p/cd3k8jd1h1/in/mger/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
            nome: "Teclado e Mouse Sem Fio Dell KM3322W, USB, ABNT2, Preto - 580-BBBB",
            preco: "R$ 131,99",
            imagem: "IMG/img_ofertas/oferta43.jpg",
            ofertaLink: "https://www.magazinevoce.com.br/magazinedaluizatop/teclado-e-mouse-sem-fio-dell-km3322w-usb-abnt2-preto-580-bbbb/p/ac960e1ahf/in/kitm/",
            comentariosLink: "https://www.magazinevoce.com.br/magazinedaluizatop/teclado-e-mouse-sem-fio-dell-km3322w-usb-abnt2-preto-580-bbbb/p/ac960e1ahf/in/kitm/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
            nome: "Fonte MSI MAG A650BN, ATX, 650W, 80 PLUS Bronze, PFC Ativo, Entrada Bivolt, Preto - 306-7ZP2B22-CE0",
            preco: "R$ 327,74",
            imagem: "IMG/img_ofertas/oferta44.jpg",
            ofertaLink: "https://www.magazinevoce.com.br/magazinedaluizatop/fonte-msi-mag-a650bn-atx-650w-80-plus-bronze-pfc-ativo-entrada-bivolt-preto-306-7zp2b22-ce0/p/jf0eb90c94/in/ftpc/",
            comentariosLink: "https://www.magazinevoce.com.br/magazinedaluizatop/fonte-msi-mag-a650bn-atx-650w-80-plus-bronze-pfc-ativo-entrada-bivolt-preto-306-7zp2b22-ce0/p/jf0eb90c94/in/ftpc/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
            nome: "Fone de ouvido sem fio Bluetooth E6s TWS Para Celular Notebook - amilly",
            preco: "R$ 19,90",
            imagem: "IMG/img_ofertas/oferta45.jpg",
            ofertaLink: "https://www.magazinevoce.com.br/magazinedaluizatop/fone-de-ouvido-sem-fio-bluetooth-e6s-tws-para-celular-notebook-amilly/p/cgc1jhd996/ea/fobt/",
            comentariosLink: "https://www.magazinevoce.com.br/magazinedaluizatop/fone-de-ouvido-sem-fio-bluetooth-e6s-tws-para-celular-notebook-amilly/p/cgc1jhd996/ea/fobt/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
            nome: "Receptor Bluetooth Para Som Usb Adaptador Conector P2 Áudio Stereo 5.1 Qualidade - OPEN ZEE",
            preco: "R$ 9,49",
            imagem: "IMG/img_ofertas/oferta46.jpg",
            ofertaLink: "https://www.magazinevoce.com.br/magazinedaluizatop/receptor-bluetooth-para-som-usb-adaptador-conector-p2-audio-stereo-5-1-qualidade-open-zee/p/egc9hj0f23/in/adau/",
            comentariosLink: "https://www.magazinevoce.com.br/magazinedaluizatop/receptor-bluetooth-para-som-usb-adaptador-conector-p2-audio-stereo-5-1-qualidade-open-zee/p/egc9hj0f23/in/adau/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
            nome: "Mesa para Notebook Portátil Dobrável Cama Porta Tablet - Livon",
            preco: "R$ 56,91",
            imagem: "IMG/img_ofertas/oferta47.jpg",
            ofertaLink: "https://www.magazinevoce.com.br/magazinedaluizatop/mesa-para-notebook-portatil-dobravel-cama-porta-tablet-livon/p/bch4k834a6/in/mntb/",
            comentariosLink: "https://www.magazinevoce.com.br/magazinedaluizatop/mesa-para-notebook-portatil-dobravel-cama-porta-tablet-livon/p/bch4k834a6/in/mntb/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
            nome: "Placa de Vídeo RX 6600 CLD 8G ASRock AMD Radeon, 8GB, GDDR6 - 90-GA2RZZ-00UANF",
            preco: "R$ 1.739,99",
            imagem: "IMG/img_ofertas/oferta48.jpg",
            ofertaLink: "https://www.magazinevoce.com.br/magazinedaluizatop/placa-de-video-rx-6600-cld-8g-asrock-amd-radeon-8gb-gddr6-90-ga2rzz-00uanf/p/kb0d5bafec/in/pcvd/",
            comentariosLink: "https://www.magazinevoce.com.br/magazinedaluizatop/placa-de-video-rx-6600-cld-8g-asrock-amd-radeon-8gb-gddr6-90-ga2rzz-00uanf/p/kb0d5bafec/in/pcvd/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
            nome: "Cooler Fan Rise Mode Energy, 3 Unidades, 120mm, ARGB, Preto - FN-02-RGB-5V",
            preco: "R$ 91,99",
            imagem: "IMG/img_ofertas/oferta49.jpg",
            ofertaLink: "https://www.magazinevoce.com.br/magazinedaluizatop/cooler-fan-rise-mode-energy-3-unidades-120mm-argb-preto-fn-02-rgb-5v/p/beg14d6h84/in/pepc/",
            comentariosLink: "https://www.magazinevoce.com.br/magazinedaluizatop/cooler-fan-rise-mode-energy-3-unidades-120mm-argb-preto-fn-02-rgb-5v/p/beg14d6h84/in/pepc/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
            nome: "SSD 240 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 350MB/s - SA400S37/240G",
            preco: "R$ 212,73",
            imagem: "IMG/img_ofertas/oferta50.jpg",
            ofertaLink: "https://www.magazinevoce.com.br/magazinedaluizatop/ssd-240-gb-kingston-a400-sata-leitura-500mb-s-e-gravacao-350mb-s-sa400s37-240g/p/afk8j14j01/in/ssdi/",
            comentariosLink: "https://www.magazinevoce.com.br/magazinedaluizatop/ssd-240-gb-kingston-a400-sata-leitura-500mb-s-e-gravacao-350mb-s-sa400s37-240g/p/afk8j14j01/in/ssdi/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
            nome: "SSD 480GB WD Green PC SN350, PCIe, NVMe, Leitura: 2400MB/s e Gravação: 1650MB/s - WDS480G2G0C",
            preco: "R$ 275,99",
            imagem: "IMG/img_ofertas/oferta51.jpg",
            ofertaLink: "https://www.magazinevoce.com.br/magazinedaluizatop/ssd-480gb-wd-green-pc-sn350-pcie-nvme-leitura-2400mb-s-e-gravacao-1650mb-s-wds480g2g0c/p/cafek935kg/in/ssdi/",
            comentariosLink: "https://www.magazinevoce.com.br/magazinedaluizatop/ssd-480gb-wd-green-pc-sn350-pcie-nvme-leitura-2400mb-s-e-gravacao-1650mb-s-wds480g2g0c/p/cafek935kg/in/ssdi/",
            cor: "Magalu"
        },
        
        {
            loja: "Magalu",
            nome: "SSD 480 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 450MB/s - SA400S37/480G",
            preco: "R$ 310,49",
            imagem: "IMG/img_ofertas/oferta52.jpg",
            ofertaLink: "https://www.magazinevoce.com.br/magazinedaluizatop/ssd-480-gb-kingston-a400-sata-leitura-500mb-s-e-gravacao-450mb-s-sa400s37-480g/p/gfa426b3d6/in/ssdi/",
            comentariosLink: "https://www.magazinevoce.com.br/magazinedaluizatop/ssd-480-gb-kingston-a400-sata-leitura-500mb-s-e-gravacao-450mb-s-sa400s37-480g/p/gfa426b3d6/in/ssdi/",
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
