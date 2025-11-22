let cardContainer = document.querySelector(".card-container")
let campoBusca = document.querySelector("input[type='text']");
let dados = [];

async function iniciarBusca(){
    if(dados.length === 0) {
        let resposta = await fetch("data.json");
        dados = await resposta.json();
    }

    let termoBusca = campoBusca.value.toLowerCase();
    let dadosFiltrados = dados.filter(dado => dado.nome.toLowerCase().includes(termoBusca));

    redenrizarCards(dadosFiltrados);
}

function redenrizarCards(dados){
    cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar os novos
    for (let dado of dados) {
      let article = document.createElement("article");
      article.classList.add("card");
      article.innerHTML = `
      <h2>${dado.nome}</h2>
      <p>${dado.ano}</p>
      <p>${dado.descricao}</p>
      <a href="${dado.link}" target="_blank">Saiba mais</a>
      `
      cardContainer.appendChild(article);
    }
}