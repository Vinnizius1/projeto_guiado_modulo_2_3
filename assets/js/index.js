let peopleRaw;
let people;

peopleRaw = localStorage.getItem("people");
if (peopleRaw != null) {
  people = JSON.parse(peopleRaw);
} else {
  people = [];
}

// Função PRINCIPAL
function desenhaTabela() {
  var currentLines = [
    ...document.querySelectorAll("table.lista tbody .dynamic-content"),
  ];
  currentLines.forEach((element) => {
    element.remove();
  });

  for (person in people) {
    document.querySelector(
      "table.lista tbody"
    ).innerHTML += `<tr class="dynamic-content" style="background-color: ${
      person % 2 == 0 ? "#fff" : "#eee"
    } ">
        <td>${people[person].name}</td>
        <td>${people[person].tel}</td>
        <td>${
          people[person].xp
            ? "<strong style='color: green'>Sim</strong>"
            : "<strong style='color: red'>Não</strong>"
        }</td>
        <td>
            <button onclick="deleteUser(${person})">Excluir</button>
        </td>
    </tr>`;
  }
}

function deleteUser(p) {
  people.splice(p, 1);
  desenhaTabela();
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
