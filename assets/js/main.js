document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.produto-item');
    const modal = document.getElementById('productModal');
    const carousel = document.getElementById('carousel');
    const closeBtn = document.querySelector('.close-btn');
    let currentItemIndex = 0; 
    let carouselIndex = 0; 

    // para abrir o modal com as imagens do produto
    items.forEach(item => {
        item.addEventListener('click', () => {
            const productId = item.getAttribute('data-product');
            openModal(productId);
        });
    });

    // para abrir o modal
    function openModal(productId) {
        // Limpa  o carrossel atual (mas nao sei se ta funfa)
        carousel.innerHTML = '';

        // imagens do produto selecionado
        const images = getProductImages(productId);

       
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

    //para obter imagens do produto
    function getProductImages(productId) {
        const images = {
            julieteazul: [
                'assets/images/julieteazul1.jpg',
                'assets/images/julieteazul2.jpg',
                'assets/images/julieteazul3.jpg'
            ],
            
        };
        return images[productId] || [];
    }

    // <3 exibir a imagem do carrossel <3 
    function showImage(index) {
        const images = document.querySelectorAll('#carousel img');
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    // <3 para mover o carrossel <3
    function moveCarousel(direction) {
        const images = document.querySelectorAll('#carousel img');
        carouselIndex = (carouselIndex + direction + images.length) % images.length;
        showImage(carouselIndex);
    }

    // Configuração dos botões de navegação do carrossel
    document.querySelector('.next').addEventListener('click', () => moveCarousel(1));
    document.querySelector('.prev').addEventListener('click', () => moveCarousel(-1));

    // para fechar o modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Inicialização: garante que apenas o primeiro item de cada carrossel seja exibido
    items.forEach((item, index) => {
        item.style.display = index === 0 ? 'block' : 'none';
    });
});
