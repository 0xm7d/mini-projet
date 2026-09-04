const prompt = require('prompt-sync')();
let stock = [
    {
        titre:"Rich Dad Poor Dad",
        auteur:"Robert Kiyosak",
        prix:"20$",
        quantite:3,
    },
    {
        titre:"salam",
        auteur:"Robert Kiyosak",
        prix:"25$",
        quantite:13,
    },
]
let len = 0
    for(let i = 0;stock[i] != undefined;i++)
        len++
function    Afficher(){
    for(let j = 0; j < len;j++){
        console.log(`titre : ${stock[j].titre}; auteur : ${stock[j].auteur}; prix : ${stock[j].prix}; quantite : ${stock[j].quantite}`)
    }
}
function    Recherche(){
    let found = false
    let entre_titre = prompt("Entrer le titre de livre : ")
    for(let i=0; i< len;i++){
        if(entre_titre == stock[i].titre){
            console.log(`titre : ${stock[i].titre}; auteur : ${stock[i].auteur}; prix : ${stock[i].prix}; quantite : ${stock[i].quantite}`)
            found = true
            break
        }
    }
    if(found == false)
        console.log("nous n'avons pas ce livre en stock ")
}
console.log("==== MENU ====\n 1. Ajouter un livre au stock\n 2. Afficher tous les livres disponibles\n 3. Rechercher un livre par son titre\n 4. Mettre à jour la quantité d'un livre\n 5. Supprimer un livre du stock\n 6. Afficher le nombre total de livres en stock.")
let id = Number(prompt("choisir un option :"))
switch(id){
    case 2:
        Afficher()
        break
    case 3:
        Recherche()
        break
    default:
        console.log("coming soon")
}