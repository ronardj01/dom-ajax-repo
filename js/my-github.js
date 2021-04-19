// Write code here to communicate with Github
function getGithubRepos(userGithub) {
  //Cambiando el id de la secction #about al #github para que solo fucione al hacer click en My Github y no cambie los demas formatos.
  let newIdSection = document.getElementById("about");
  newIdSection.id = "github";
  //Variables para acceder a los tag del html.
  let nameGitUser = document.querySelector("#github h1");
  nameGitUser.innerText = userGithub;
  let url = `https://api.github.com/users/${userGithub}/repos`;

  //variables para el numero de repositorios
  let numberOfRepos = document.querySelector("#github div.subheading");
  numberOfRepos.innerHTML = `I have <a href="#" id="cantidadRepos">x</a> repos on mh github.`;
  let linkOfRepos = document.getElementById("cantidadRepos");

  //variables para la lista de repositorios.
  let ulRepos = document.querySelector("#github ul");

  //Buscqueda en la api de github.
  fetch(url)
    .then(response => response.json())
    .then(repos => {
      //Numeros de repositorios
      let arrayOfRepos = Object.values(repos);
      linkOfRepos.innerText = arrayOfRepos.length;

      //Obtener lista de repositorios
      arrayOfRepos.forEach(repo => {
        let liRepo = document.createElement("li");
        liRepo.innerText = repo.name;
        ulRepos.appendChild(liRepo);
      });
    });
}

//Llamando a la funcion en github section.
//Variable para la seccion My Github.
let MyGithubBtn = document.querySelector(
  "#navbarSupportedContent ul li:nth-child(2)"
);

MyGithubBtn.addEventListener("click", event => {
  event.preventDefault();
  getGithubRepos("ronardj01");
});
