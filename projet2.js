let contact = [
    {nom:"mohamed",numero:"+2126998876",email:"contact@contact.me"},
]
let len = 0
for(let i = 0; contact[i] != undefined; i++)
    len++
function    ajouter(){
    let n = prompt('chhal mn contact baghi tzid : ')
    for(let i = 1;i<= n;i++){
        let new_nom = prompt(`Entrer un nom ${i} : `)
        let new_numero = prompt(`Entrer une numero ${i} : `)
        let new_email = prompt(`Entrer un email ${i} : `)
        let new_contact = {
            nom:new_nom,
            numero:new_numero,
            email:new_email
        }
        contact.push(new_contact)
    }
    let acces = prompt("bghiti tchof stock yes/no ? :")
    if(acces == 'yes')
        console.log(contact)
    else if(acces == 'no')
        console.log('merci')
    else
        console.log('dkhl gha yes awla no')
}
function mettre_a_jour(){
  let f = false
  let = target = prompt('Entrer le nom de contact : ')
  for(let i = 0;i < len;i++){
    if(target == contact[i].nom){
      let new_nom = prompt('ENtrer une nouvelle nom : ')
      let new_numero = prompt('Entrer une nouvelle numero : ')
      let new_email = prompt('Entrer une nouvelle email : ')
      contact[i].nom = new_nom
      contact[i].numero = new_numero
      contact[i].email = new_email
      f = true
    }
  }
  if(f == false)
    console.log("makaynch had contact f stock !!")
  console.log(contact)
}
function    afficher(){
    for(let j = 0; j < len;j++){
        console.log(`nom : ${contact[j].nom}; numero  : ${contact[j].numero}; email : ${contact[j].email}`)
    }
}
function recherche(){
  let f = false
  let t = prompt('Entrer le nom de contact : ')
  for(let i = 0;i < len;i++){
    if(t == contact[i].nom){
      console.log(`nom : ${contact[i].nom}; numero  : ${contact[i].numero}; email : ${contact[i].email}`)
      f = true
      break
    }
  }
  if(f == false)
    console.log("makaynch had contact : ")
}
function supprime(){
  let t = prompt('Entrer le nom de contact : ')
  for(let i = 0;i < len ; i++ ){
    if(t == contact[i].nom){
      continue
    else
      
    }
  }
}
console.log("==== MENU ====\n 1. Ajouter un Contact\n 2. Afficher tous les Contact\n 3. Rechercher un contact par son nom\n 4. Mettre à jour un contact\n 5. Supprimer un contact\n ")
let id = Number(prompt("choisir un option :"))
switch(id){
    case 1:
    ajouter()
    break
  case 2:
    afficher()
    break
  case 3:
    recherche()
    break
  case 4:
    mettre_a_jour()
    break
  default:
        console.log("à venir")
}