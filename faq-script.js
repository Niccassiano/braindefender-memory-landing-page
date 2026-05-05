document.addEventListener('DOMContentLoaded', () => {
    const faqHeaders = document.querySelectorAll('.faq-header-btn');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const faqItem = header.parentNode;
            const faqContent = header.nextElementSibling;

            // Alterna a classe 'active' no item clicado
            faqItem.classList.toggle('active');

            // Anima a altura do conteúdo para abrir ou fechar
            if (faqItem.classList.contains('active')) {
                faqContent.style.maxHeight = faqContent.scrollHeight + 'px';
            } else {
                faqContent.style.maxHeight = '0';
            }
        });
    });
});