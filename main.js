const form = document.getElementById("form-agenda");
const agenda = [];
const telefone = [];
let linhas = "";
form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  const inputNome = document.getElementById("nome");
  const inputTelefone = document.getElementById("telefone");
  if (agenda.includes(inputNome.value)) {
    alert(`Nome ${inputNome.value} já está cadastrado`);
  } else {
    agenda.push(inputNome.value);

    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += "</tr>";
    linhas += linha;
  }
  inputNome.value = "";
  inputTelefone.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
