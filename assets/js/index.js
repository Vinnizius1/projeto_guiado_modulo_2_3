/* Declaração das variáveis GLOBAIS */
let people;
let peopleRaw;

// Retorno do - objeto especificado - 'people':
peopleRaw = localStorage.getItem("people");

// Se o Retorno desse 'peopleRaw' obteve dados, eles serão convertidos em objeto via '.parse' e  então atribuídos à 
// variável PEOPLE:
if (peopleRaw != null) {
  people = JSON.parse(peopleRaw);
} else {
  people = [];
}

/* Função PRINCIPAL */
function desenhaTabela() {
  // A classe 'dynamic-content' está especificamente na tag linha 'tr', então pegará todas suas tags filhas 'td': 
  let currentLines = [...document.querySelectorAll("table.lista tbody .dynamic-content")];
  currentLines.forEach((element) => {
    element.remove();
  });
  // O 'for loop' escreverá cada objeto, pelo INDEX do array, com seus detalhes no HTML por meio do 'innerHTML':
  for (person in people) {
    document.querySelector("table.lista tbody").innerHTML += 
    `
      <tr class="dynamic-content" style="background-color: ${person % 2 == 0 ? "#fff" : "#eee"} ">
        <td>${people[person].name}</td>
        <td>${people[person].tel}</td>
        <td>${people[person].xp ? "<strong style='color: green'>Sim</strong>" : "<strong style='color: red'>Não</strong>"}</td>
        <td>
          <button onclick="deleteUser(${person})">Excluir</button>
        </td>
      </tr>
    `;
  }
}

/*  Função DELETAR */
function deleteUser(p) {
  // O SPLICE na posição 'p' removerá apenas o próprio elemento:
  people.splice(p, 1);
  // Esta função desenhará a Tabela novamente de acordo com os elementos que sobraram no Local Storage após o método 'remove()':
  desenhaTabela();
  // Este 'setItem' definirá o valor do item objeto que será armazenado:
  localStorage.setItem("people", JSON.stringify(people));
}

desenhaTabela();

/* Dados do EXEMPLO:
  let people = [
    {
      name: "Vinicius Matos de Mendonça",
      tel: "+55 (62) 88888-8888",
      xp: false,
    },
    {
      name: "Jogervaldo da Costa Samões",
      tel: "+48 (11) 88888-8888",
      xp: true,
    },
    {
      name: "Rubérveles Matias Marques de Paula",
      tel: "+35 (61) 88888-8888",
      xp: false,
    },
    {
      name: "Romualdo da Silva Rokthenfallen",
      tel: "+35 (61) 99999-8888",
      xp: true,
    },
  ]; 
*/
