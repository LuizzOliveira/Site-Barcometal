document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card-cliente'); // Seleciona todos os cards
    const dots = document.querySelectorAll('.dot-cliente'); // Seleciona todos os pontos de navegação
    let currentIndex = 0; // Define o índice inicial

    // Função para exibir o card e alterar a classe 'active' nos dots
    function showCard(index) {
        // Alterna a classe 'active' nos cards e nos pontos
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index); // Se o índice for igual, ativa o card
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index); // Se o índice for igual, ativa o ponto
        });
    }

    // Função para mostrar o próximo card
    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length; // Avança para o próximo índice (loop)
        showCard(currentIndex); // Atualiza o card e o ponto ativo
    }

    // Atualiza o card a cada 1 segundo
    setInterval(nextCard, 5000);

    // Adiciona evento de clique nos pontos de navegação
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index; // Atualiza o índice com o ponto clicado
            showCard(currentIndex); // Atualiza a visualização do card e do ponto
        });
    });

    // Exibe o primeiro card ao carregar a página
    showCard(currentIndex); 
});

