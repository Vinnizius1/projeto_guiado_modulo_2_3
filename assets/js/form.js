function testaFormulario(e) {
  e.preventDefault();
  // o "i" pegará cada índice:
  /* for (i in e.target.elements["phone"].value ) {
    if ('0123456789'.indexOf(e.target.elements["phone"].value[i]) == -1) {
      alert('Apenas números são permitidos no campo "Telefone"')
      return false;
    }
  } */

  // O "^" significa "negação", ou seja, ele acusará tudo o que não estiver na lista. O "+" significa "sequência"
  var phonePattern = /[^0-9-() +]+/g;
  if (phonePattern.test(e.target.elements["phone"].value)) {
    alert('Apenas números são permitidos no campo "Telefone"');
    return false;
  }

  if (e.target.elements["phone"].value.length < 11) {
    alert("Número inválido");
    return false;
  }

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

/* 
  Evento 'onkeypress()'
*/
function testaCampoTelefone(e) {
  e.preventDefault();
  console.log(e);

  if (e.target.value.length == 0) {
    e.target.value += '('
  }
  if (e.target.value.length == 3) {
    e.target.value += ') '
  }
  if (e.target.value.length == 6) {
    e.target.value += ' '
  }
  if (e.target.value.length == 11) {
    e.target.value += '-'
  }

  if (/[0-9]+/g.test(e.key) && e.target.value.length < 16) {
    e.target.value += e.key;
  }
}
