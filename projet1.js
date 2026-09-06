    const prompt = require('prompt-sync')();
    let stock = [
        {titre:"Rich Dad Poor Dad",auteur:"Robert Kiyosak",prix:"20$",quantite:3},
        {titre:"hello",auteur:"Robert Kiyosak",prix:"25$",quantite:13},
    ]
    function  voir_stock(){
        let acces = prompt("bghiti tchof stock yes/no ? :")
        if(acces == 'yes')
            console.log(stock)
        else if(acces == 'no')
            console.log('merci')
        else
            console.log('dkhl gha yes awla no')
    }
    function    Afficher(){
        for(let j = 0; j < stock.length;j++){
            console.log(`titre : ${stock[j].titre}; auteur : ${stock[j].auteur}; prix : ${stock[j].prix}; quantite : ${stock[j].quantite}`)
        }
    }
    function    Recherche(){
        let found = false
        let entre_titre = prompt("Entrer le titre de livre : ")
        for(let i=0; i< stock.length;i++){
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
        let n = Number(prompt("Combien de livres souhaitez-vous ajouter ? : "))
        for(let i = 1;i<=n;i++){
            let add_titre = prompt(`Entrer le titre de livre ${i} : `)        
            let add_auteur = prompt(`Entrer le auteur de livre ${i} : `)        
            let add_prix = prompt(`Entrer le prix de livre ${i} : `)        
            let add_quantite = Number(prompt(`Entrer le quentite de livre ${i}: `))
            let new_livre = {
                titre:add_titre,
                auteur:add_auteur,
                prix:add_prix,
                quantite:add_quantite
            }
            stock.push(new_livre)
        }
        voir_stock()
    }
    function    Mettre_a_jour(){
        let found = false
        let n = prompt("Entrer le titre de livre pour Mettre a jour : ")
        for(let i = 0;i<stock.length;i++){
            if(n == stock[i].titre){
                let new_titre = prompt("Entrer nouvelle titre : ")
                let new_quentite = Number(prompt("Entrer nouvelle quentite : "))
                stock[i].titre = new_titre
                stock[i].quantite = new_quentite
                found = true
            }
        }
        if(found == true){
            voir_stock()
        }
        if(found == false)
            console.log("nous n'avons pas ce livre en stock ")
    }
    function    Supprimer(){
        let found = false
        let nbdlo = []
        let x = prompt("entrez le nom du livre que vous souhaitez supprimer : ")
        for(let i = 0;i < stock.length;i++){
            if (x == stock[i].titre) {
                found = true
                continue
            }else{
                nbdlo[nbdlo.length] = stock[i];
            }
        }
        stock = nbdlo
        if(found == false)
            console.log("nous n'avons pas ce livre en stock")
        if(found == true){
            voir_stock()
        }
    }
    function    Nombre_stock(){
        let res = 0
        for(let i = 0; i < stock.length;i++)
            res += stock[i].quantite
        console.log(`le nombre total de livres en stock = ${res}`)
    }
    let id = 0
    while(id != 7){
    console.log("==== MENU ====\n 1. Ajouter un livre au stock\n 2. Afficher tous les livres disponibles\n 3. Rechercher un livre par son titre\n 4. Mettre à jour la quantité d'un livre\n 5. Supprimer un livre du stock\n 6. Afficher le nombre total de livres en stock\n 7. Quitter")
    id = Number(prompt("choisir un option :"))
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
            break
        case 7:
            console.log("Au revoir !")
            break
        default:
            console.log("choix invalid")
    }}