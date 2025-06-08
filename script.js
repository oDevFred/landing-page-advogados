// --- Script para Rolagem Suave (usando jQuery Easing) ---
// Espera o documento estar pronto
$(function() {
    // Seleciona todos os links internos que apontam para IDs
    $('a.nav-link[href^="#"]').on('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do navegador

        var hash = this.hash; // Obtém o hash (ex: #about)

        // Usa a função animate do jQuery com easing para rolagem suave
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 56 // Ajusta a posição para o navbar fixo
        }, 1000, 'easeInOutExpo', function() { // 1000ms de duração, 'easeInOutExpo' para a suavidade
            window.location.hash = hash; // Adiciona o hash na URL (opcional, mas bom para histórico)
        });

        // Fecha o menu de navegação responsivo (hambúrguer) após o clique
        // Certifique-se de que este seletor e lógica ainda funcionem para o seu Bootstrap
        $('.navbar-toggler').each(function() {
            if ($(this).attr('aria-expanded') === 'true') {
                $(this).trigger('click');
            }
        });
    });
});

// --- Script para definir o ano atual ---
// Este código agora também está dentro do $(function() {}) para garantir que o DOM esteja pronto
$(function() {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});