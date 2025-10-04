const destaques = [
    {
        tipo: "Jogo",
        titulo: "The Last of Us Part II",
        descricao: "Explore um mundo pós-apocalíptico cheio de desafios e emoções",
        imagem: "img/tlou2.jpeg"
    },
    {
        tipo: "Filme",
        titulo: "Inception",
        descricao: "Uma jornada através dos sonhos que desafia a realidade.",
        imagem: "img/inception.jpg"
    },
    {
        tipo: "Livro",
        titulo: "1984 de George Orwell",
        descricao: "Uma distopia clássica que explora temas de vigilância e liberdade.",
        imagem: "img/1984.jpg"
    },
    {
        tipo: "Série",
        titulo: "How I Met Your Mother",
        descricao: "Um pai conta para os filhos como conheceu a mãe deles.",
        imagem: "img/himym.jpg"
    }
];


const homeContainer = document.querySelector(".destaques");
if (homeContainer) {
    homeContainer.innerHTML = "<h3>Destaques da Semana</h3>";
    destaques.forEach((item, index) => {
        const article = document.createElement("article");

        article.innerHTML = `
        <a href="detalhes.html?id=${index}">
            <img src="${item.imagem}" alt="${item.tipo}: ${item.titulo}"
            <h4>${item.tipo}: ${item.titulo}</h4>
            <p>${item.descricao}</p>
        </a>
        `;

        homeContainer.appendChild(article);
    }); 
}

const detalhesContainer = document.querySelector(".detalhes-item");
if (detalhesContainer) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id !== null && destaques[id]) {
        const item = destaques[id];
        detalhesContainer.innerHTML = `
        <div class="card-detalhes">
            <h2>${item.tipo}: ${item.titulo}</h2>
            <img src="${item.imagem}" alt="${item.tipo}: ${item.titulo}">
            <p>${item.descricao}</p>
            <a class="btn-voltar" href="index.html">Voltar para a home</a>
        </div>
        
        `;
    } else {
        detalhesContainer.innerHTML = "<p>Item não encontrado.</p>"
    }

}



