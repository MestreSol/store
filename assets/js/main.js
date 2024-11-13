document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.produto-item');
    const modal = document.getElementById('productModal');
    const carousel = document.getElementById('carousel');
    const closeBtn = document.querySelector('.close-btn');
    let currentItemIndex = 0; // Índice do item de produto
    let carouselIndex = 0; // Índice do carrossel de imagens

    // Função para abrir o modal com as imagens do produto
    items.forEach(item => {
        item.addEventListener('click', () => {
            const productId = item.getAttribute('data-product');
            openModal(productId);
        });
    });

    // Função para abrir o modal
    function openModal(productId) {
        // Limpar o carrossel atual
        carousel.innerHTML = '';

        // Obter as imagens do produto selecionado
        const images = getProductImages(productId);

        // Adicionar imagens ao carrossel
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            carousel.appendChild(imgElement);
        });

        // Exibir o modal
        modal.style.display = 'block';
        carouselIndex = 0; // Resetar o índice do carrossel
        showImage(carouselIndex);
    }

    // Função para obter imagens do produto
    function getProductImages(productId) {
        const images = {
            julieteazul: [
                'assets/images/julieteazul1.jpg',
                'assets/images/julieteazul2.jpg',
                'assets/images/julieteazul3.jpg'
            ],
            // Você pode adicionar outros produtos aqui, se necessário
        };
        return images[productId] || [];
    }

    // Função para exibir a imagem do carrossel
    function showImage(index) {
        const images = document.querySelectorAll('#carousel img');
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    // Função para mover o carrossel
    function moveCarousel(direction) {
        const images = document.querySelectorAll('#carousel img');
        carouselIndex = (carouselIndex + direction + images.length) % images.length;
        showImage(carouselIndex);
    }

    // Configuração dos botões de navegação do carrossel
    document.querySelector('.next').addEventListener('click', () => moveCarousel(1));
    document.querySelector('.prev').addEventListener('click', () => moveCarousel(-1));

    // Função para fechar o modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Inicialização: garante que apenas o primeiro item de cada carrossel seja exibido
    items.forEach((item, index) => {
        item.style.display = index === 0 ? 'block' : 'none';
    });
});
