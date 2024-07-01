// Espera até que o documento HTML esteja completamente carregado
$(document).ready(function(){
    // Inicializa o plugin Owl Carousel na classe ".owl-carousel"
    $(".owl-carousel").owlCarousel({
        items: 1, // Número de itens visíveis por vez
        loop: true, // Habilita o loop infinito
        autoplay: true, // Ativa o autoplay (reprodução automática)
        autoplayTimeout: 3000, // Tempo de espera entre os slides (em milissegundos)
        autoplayHoverPause: true, // Pausa o autoplay quando o mouse está sobre o carousel
        nav: true, // Mostra botões de navegação (próximo e anterior)
        dots: true, // Mostra os pontos indicadores de slide
        navText: [ // Texto personalizado para os botões de navegação
            "<span class='nav-btn prev-slide'>&#10094;</span>", // Ícone para o botão anterior
            "<span class='nav-btn next-slide'>&#10095;</span>" // Ícone para o botão próximo
        ]
    });
});
