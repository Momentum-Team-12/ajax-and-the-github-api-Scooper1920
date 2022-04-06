console.log("A-yooo")

let rootdiv= document.querySelector("#root")
let repo=document.querySelector("#repo")


fetch ("https://api.github.com/users/scooper1920", {
    method:"GET",
    
})

.then(function(response){
    return response.json()
})
.then(function(data){
    let picdiv = document.createElement("img")
    rootdiv.appendChild(picdiv)
    picdiv.src = data.avatar_url
    picdiv.classList.add("pic")

    let namediv = document.createElement("div")
    rootdiv.appendChild(namediv)
    namediv.innerText = data.name

    let citydiv=document.createElement("div")
    // you can use any element in the parenthesis
    citydiv.innerText ="Location: " + data.location
    rootdiv.appendChild(citydiv)
    console.log(data.avatar_url)
    console.log(data.repos_url)
  
})

fetch ("https://api.github.com/users/scooper1920/repos", {
    method:"GET",

})
.then(function(response){
    return response.json()
})
.then(function(data) {
  
  
    for (let i of data) {
        let repodiv=document.createElement("div")
        console.log(i.url)
        repo.appendChild(repodiv)
        repodiv.innerText=i.url
        
        
    
//       // saying "let" means create something called "i" which is one of data
//         // let i exist where i is one of data
    }
})