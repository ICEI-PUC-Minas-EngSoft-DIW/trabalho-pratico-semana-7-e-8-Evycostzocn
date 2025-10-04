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

// container em que os cards serão inseridos
const container = document.querySelector(".destaques");

container.innerHTML = "<h3>Destaques da Semana</h3>";

destaques.forEach(item => {
    const article = document.createElement("article");

    article.innerHTML = `
    <img src="${item.imagem}" alt="${item.tipo}: ${item.titulo}">
    <h4>${item.tipo}: ${item.titulo}</h4>
    <p>${item.descricao}</p>
    `;

    container.appendChild(article);
})