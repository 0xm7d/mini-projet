const prompt = require('prompt-sync')();
let stock = [
    {titre:"Rich Dad Poor Dad",auteur:"Robert Kiyosak",prix:"20$",quantite:3,},
    {titre:"salam",auteur:"Robert Kiyosak",prix:"25$",quantite:13,},
]
let len = 0
    for(let i = 0;stock[i] != undefined;i++)
        len++
console.log(stock)
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
function    Ajouter(){
    found = false
    let n = prompt("Combien de livres souhaitez-vous ajouter ? : ")
    for(let i = 1;i<=n;i++){
        let add_titre = prompt(`Entrer le titre de livre ${i} : `)        
        let add_auteur = prompt(`Entrer le auteur de livre ${i} : `)        
        let add_prix = prompt(`Entrer le prix de livre ${i} : `)        
        let add_quentite = prompt(`Entrer le quentite de livre ${i}: `)
        let new_livre = {
            titre:add_titre,
            auteur:add_auteur,
            prix:add_prix,
            quantite:add_quentite
        }
        stock.push(new_livre)
    }
    // console.log(stock)
}
function    Mettre_a_jour(){
    let found = false
    let n = prompt("Entrer le titre de livre pour Mettre a jour : ")
    for(let i = 0;i<len;i++){
        if(n == stock[i].titre){
            let new_titre = prompt("Entrer nouvelle titre : ")
            let new_quentite = prompt("Entrer nouvelle quentite : ")
            stock[i].titre = new_titre
            stock[i].quantite = new_quentite
            found = true
        }
    }
    if(found == false)
        console.log("nous n'avons pas ce livre en stock ")
    console.log(stock)
}
function    Supprimer(){
    found = false
    let n = prompt("Entrer le titre de livre tu veux supprime : ")
    for(let i = 0;i<len;i++){
        if(n == stock[i].titre){
            stock.splice(i)
            found = true
        }
    }
    if(found == false)
        console.log("nous n'avons pas ce livre en stock ")
console.log(stock)
}
function    Nombre_stock(){
    console.log(`le nombre total de livres en stock = ${len}`)
}
console.log("==== MENU ====\n 1. Ajouter un livre au stock\n 2. Afficher tous les livres disponibles\n 3. Rechercher un livre par son titre\n 4. Mettre à jour la quantité d'un livre\n 5. Supprimer un livre du stock\n 6. Afficher le nombre total de livres en stock.")
let id = Number(prompt("choisir un option :"))
switch(id){
    case 1:
        Ajouter()
        break
    case 2:
        Afficher()
        break
    case 3:
        Recherche()
        break
    case 4:
        Mettre_a_jour()
        break
    case 5:
        Supprimer()
        break
    case 6:
        Nombre_stock()
        break;
    default:
        console.log("coming soon")
}
