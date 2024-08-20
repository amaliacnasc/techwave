// Seleciona todos os elementos com a classe 'seta'
let seta = document.querySelectorAll('.seta');

// Função que será executada quando o elemento for clicado
function ativar(event) {
    console.log('Clicou');
    event.target.classList.toggle('ativo'); // Adiciona a classe 'ativo' ao elemento clicado
    toggleTexto(); // Chama a função para alternar a visibilidade do texto
}

// Adiciona o evento de clique a cada elemento com a classe 'seta'
seta.forEach(element => {
    element.addEventListener('click', ativar);
});

// Função para alternar a visibilidade dos elementos com a classe 'data-autor'
function toggleTexto() {
    let textos = document.querySelectorAll(".mais"); // Seleciona todos os elementos com a classe 'data-autor'
    
    textos.forEach(element => {
        if (element.style.display === "none" || element.style.display === "") {
            element.style.display = "block";
            element.classList.toggle('ativo');
        } else {
            element.style.display = "none";
        }
    });
}

// falta esconder o texto com o dia do evento e professor 
// falta adicionar o favicon