/*

    OBJETIVO- Quando clicarmos na aba temos  que mostrar o conteudo da aba que foi clicada e esconder o conteudo da aba anterior.

    -passo1 -- dar um jeito de pegar os elementos que representam as abas no HTML.
    -passo2 -- dar um jeito de identificar o clique no elemento da aba.
    -passo3 -- quando o usuario clicar desmarcar a aba selecionada.
    -passo4 -- marcar a aba clicada como selecionada.
    -passo5 -- esconder o conteudo anterior
    -passo6 -- mostrar o conteudo na aba selecionada.

*/

//passo1
const abas = document.querySelectorAll(".tab");

//passo2   forEach significa para cada item da lista
abas.forEach((tab) => {
  tab.addEventListener("click", function () {
    if (tab.classList.contains("selected")) {
      return;
    }

    selecionarAba(tab);

    selecionarInformacao(tab)
    
  });
});

function selecionarAba(tab) {
    //passo 3
    const abaSelecionada = document.querySelector(".tab.selected");
    abaSelecionada.classList.remove("selected");

    //passo4
    tab.classList.add("selected");
}

function selecionarInformacao(tab) {
    //passo5
    const informacaoSelecionada = document.querySelector(".about.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //passo6
    const idDoElementoDeInformacoes = `information-${tab.id}`;
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoes);
    informacaoASerMostrada.classList.add('selecionado');
}
