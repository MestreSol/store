document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.produto-item');
    const modal = document.getElementById('productModal');
    const carousel = document.getElementById('carousel');
    const closeBtn = document.querySelector('.close-btn');
    let currentItemIndex = 0; 
    let carouselIndex = 0; 

    // abrir o modal com as imagens do produto <3 
    items.forEach(item => {
        item.addEventListener('click', () => {
            const productId = item.getAttribute('data-product');
            openModal(productId);
        });
    });

    // : para abrir o modal =3 
    function openModal(productId) {
        // <3  Limpar o carrossel atual <3
        carousel.innerHTML = '';

        // <3 Obter as imagens do produto selecionado <3
        const images = getProductImages(productId);

        // <3 <3 Adicionar imagens ao carrossel <3 <3 
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

    //  obter imagens do produto
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

    // para exibir a imagem do carrossel
    function showImage(index) {
        const images = document.querySelectorAll('#carousel img');
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    //  para mover o carrossel
    function moveCarousel(direction) {
        const images = document.querySelectorAll('#carousel img');
        carouselIndex = (carouselIndex + direction + images.length) % images.length;
        showImage(carouselIndex);
    }

    // Configuração dos botões de navegação do carrossel
    document.querySelector('.next').addEventListener('click', () => moveCarousel(1));
    document.querySelector('.prev').addEventListener('click', () => moveCarousel(-1));

    //  para fechar o modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Inicialização: AKI O primeiro item de cada carrossel É exibido
    items.forEach((item, index) => {
        item.style.display = index === 0 ? 'block' : 'none';
    });

    //  para adicionar NO CARRINHO =3 
    const images = document.querySelectorAll('.carousel img');
    let currentImageIndex = 0;

    function showImageCarousel(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    document.querySelector('.next').addEventListener('click', function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImageCarousel(currentImageIndex);
    });

    document.querySelector('.prev').addEventListener('click', function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImageCarousel(currentImageIndex);
    });

    // AQUI Mostra a primeira imagem inicialmente
    showImageCarousel(currentImageIndex);

    // Adicionar ao carrinho
    document.getElementById('addToCart').addEventListener('click', function () {
        const productName = document.querySelector('.produto-info h2').textContent;
        alert(productName + ' foi adicionado ao carrinho!');
        
    });
});
