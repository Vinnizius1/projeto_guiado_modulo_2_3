function testaFormulario(e) {

  e.preventDefault();

  var people;
  var peopleRaw;

  peopleRaw = localStorage.getItem("people");

  // 1º IF
  if (peopleRaw != null) {
    people = JSON.parse(peopleRaw);
  } else {
    people = [];
  }

  // 2º IF
  if (id !== null) {
    people[id] = {
      name: e.target.elements["name"].value,
      tel: e.target.elements["phone"].value,
      xp: e.target.elements["xp"].value == "true",
    };
  } else {
    people.push({
      name: e.target.elements["name"].value,
      tel: e.target.elements["phone"].value,
      xp: e.target.elements["xp"].value == "true",
    });
  }
  //console.log(people);

  // Vamos "persistir":
  localStorage.setItem("people", JSON.stringify(people));

  // Agora vamos redirecionar o usuário para a tela de listagem:
  document.getElementById("goHome").click();
}


/* 
  Pegando URL e definindo a variável "id" para retornar o índice/index da "person" que está sendo alterada:
*/
var urlPrincipal = new URL(window.location.href);
var id = urlPrincipal.searchParams.get("person");


/*  
  IF
*/
if (id !== null) {

  peopleRaw = localStorage.getItem("people");

  if (peopleRaw != null) {
    people = JSON.parse(peopleRaw);
  } else {
    people = [];
  }

  //console.log(people[id])

  // Agora podemos editar o valor dos 'inputs'
  document.getElementById("name").value = people[id].name;
  document.getElementById("phone").value = people[id].tel;
  if (people[id].xp) {
    document.getElementById("xp-yes").checked = true;
  } else {
    document.getElementById("xp-no").checked = true;
  }
}