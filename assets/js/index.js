/*  Variáveis GLOBAIS  */
let people;
let peopleRaw;

/*  Retorno do objeto especificado "people"  */
peopleRaw = localStorage.getItem("people");

/*  Se o Retorno anterior obteve dados, eles serão convertidos em Objeto (.parse) e atribuídos a variável "people"  */
if (peopleRaw != null) {
  people = JSON.parse(peopleRaw);
} else {
  people = [];
}

/*   Função PRINCIPAL   */
function desenhaTabela() {

  // A classe "dynamic-content" está especificamente na linha (tr), ou seja, pegará todas suas colunas (td) filhas.
  let currentLines = [...document.querySelectorAll("table.lista tbody .dynamic-content")];
  currentLines.forEach((element) => {
    element.remove();
  });

  // "for loop" escreverá cada "person" (pelo index no array) com seus detalhes do Objeto "people" no HTML (innerHTML).
  for (person in people) {
    document.querySelector("table.lista tbody").innerHTML += 
    `<tr class="dynamic-content" style="background-color: ${person % 2 == 0 ? "#fff" : "#eee"} ">
        <td>${people[person].name}</td>
        <td>${people[person].tel}</td>
        <td>${people[person].xp
            ? "<strong style='color: green'>Sim</strong>"
            : "<strong style='color: red'>Não</strong>"
        }</td>
        <td>
            <button onclick="deleteUser(${person})">Excluir</button>
        </td>
    </tr>`;
  }
}

/*  Função DELETAR */
function deleteUser(p) {
  // Na posição "p" removerá APENAS o próprio elemento, ou seja, "1".
  people.splice(p, 1);

  // Desenhará a Tabela novamente de acordo com os elementos que sobraram no Local Storage após o método "remove()"
  desenhaTabela();

  // "setItem" definirá o valor do item objeto de armazenamento especificado.
  localStorage.setItem("people", JSON.stringify(people));
}

desenhaTabela();

/* let people = [
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
  ]; */
