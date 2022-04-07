console.log("A-yooo");

let rootdiv = document.querySelector("#root");
let repo = document.querySelector("#repo");
let name = document.querySelector("#name");
let pic = document.querySelector("#pic")

fetch("https://api.github.com/users/scooper1920", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let picdiv = document.createElement("img");
    pic.appendChild(picdiv);
    console.log("pic div created");
    picdiv.src = data.avatar_url;
    picdiv.classList.add("pic");

    let namediv = document.createElement("div");
    name.appendChild(namediv);
    console.log("rootdiv created");
    namediv.innerText = data.name;

    let biodiv = document.createElement("div");
    rootdiv.appendChild(biodiv);
    console.log("biodiv created");
    biodiv.innerText = `Bio: ${data.bio}`;

    let usrnmdiv = document.createElement("div");
    rootdiv.appendChild(usrnmdiv);
    console.log("user name div created");
    usrnmdiv.innerText = `Login:  ${data.login}`;

    let urldiv = document.createElement("div")
    rootdiv.append(urldiv);
    console.log("url div created")
    urldiv.innerHTML =`
     Github url + '<a href=" + ${data.html_url} > </a>'
     `


    let citydiv = document.createElement("div");
    // you can use any element in the parenthesis
    citydiv.innerText = `Location: ${data.location}`;
    rootdiv.appendChild(citydiv);
    console.log(data.avatar_url);
    console.log(data.repos_url);
  });

fetch("https://api.github.com/users/scooper1920/repos", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i of data) {
      let repodiv = document.createElement("div");
      console.log(i.url);
      repo.appendChild(repodiv);
      repodiv.innerText = i.url;
      repodiv.classList.add("repodiv")

      //       // saying "let" means create something called "i" which is one of data
      //         // let i exist where i is one of data
    }
  });
