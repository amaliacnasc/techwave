let seta = document.querySelectorAll('.seta');

// Função que será executada quando o elemento for clicado
function ativar(event) {
    console.log('Clicou');
    event.target.classList.toggle('ativo'); // Adiciona a classe 'ativo' ao elemento clicado
}

// Adiciona o evento de clique a cada elemento com a classe 'seta'
seta.forEach(element => {
    element.addEventListener('click', ativar);
});


// falta esconder o texto com o dia do evento e professor 
// falta adicionar o favicon