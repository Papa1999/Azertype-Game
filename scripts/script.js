// Initialisation des variables
let score= 0
let motUtilisateur= ""
let phraseUtilisateur= ""


// Récupération d'éléments depuis le fichier html
const listeBoutons= document.querySelectorAll("input[type='radio']")

let proposition= document.getElementById("proposition")

let saisie= document.getElementById("saisie")

let valider= document.getElementById("valider")

let spanScore= document.getElementById("score")

let listeJeu= listeMots




/* Cette fonction mets à jour la valeur de la variabe score et l'affiche */
function afficherScore(valide, total){
    spanScore.textContent= `Votre score est de ${valide}/${total}`
}

/* Cette fonction affiche ce que l'utilisateur doit saisir selon l'option */
function afficherProposition(mot){
    proposition.textContent= mot
}

/* Cette fonction permet d'ouvrir l'onglet de l'email*/ 
function envoyerMail(adMail, nomUser, scoreUser){
    mailto= `mailto:${adMail}?subject= Partage du score AzerType&body=Salut, je suis ${nomUser} et je viens de réaliser le score de ${scoreUser} sur le site Azertype`
    location.href= mailto
}
/*Ces deux deux fonction vérifient le formatage des saisies */
// function verifierNom(nameInput){

//     let regExNom= new RegExp("^[a-zA-Z][a-zA-Z]+[a-zA-Z]+$")
//     let correctNom= regExNom.test(nameInput.value)
//     console.log(correctNom)
//     if(correctNom){
//         nameInput.classList.remove("error")
//         console.log("le format du nom est correct")
//     }
//     else{
//         nameInput.classList.add("error")
//         console.log("le format du nom est incorrect")
//     }

// }

// function verifierEmail(mailInput){

//     let regExMail= new RegExp("[a-zA-Z0-9]")
//     let correctMail= regExMail.test(mailInput.value)
//     console.log(correctMail)
//     if(correctMail){
//         mailInput.classList.remove("error")
//         console.log("le format du mail est correct")
//     }
//     else{
//         mailInput.classList.add("error")
//         console.log("le format du mail est incorrect")
//     }

// }



/* Cette fonction permet de lancer le jeu */
function lancerJeu() {
     
    /*Initialisation de la variable i et affichage du premier option*/
    let i=0;
    afficherProposition(listeJeu[i])

    // Ajout d'un écouteur d'événement au bouton valider
    valider.addEventListener("click", () => {

        // Mise à jour du score
        if(saisie.value===listeJeu[i]){
            score++
        }

        // Vidange du champs de saisi
        saisie.value=""

        // incrémentation de i
        i++

        // Affichage du nouveau score
        afficherScore(score, i)

        // Passage au mot suivant 
        if(listeJeu[i]=== undefined){
            afficherProposition(" Le jeu est fini. 'Partager'  maintenant votre score")
            valider.disabled= true
        }else{
            afficherProposition(listeJeu[i])
        } 
    })

    
    // Boucle permettant de determiner le trigger 
    for(let compteur= 0 ; compteur<listeBoutons.length; compteur++){

        listeBoutons[compteur].addEventListener("change", (event) => {

            /* Quelque soit l'élément déclencheur, on recommence le jeu depuis le début */

            if(event.target.value==="phrases"){
                // Mise à jour des paramètres du jeu
                compteur= 0
                i= 0
                score= 0
                listeJeu= listePhrases
                
                //Affichage des nouveaux paramètres 
                afficherScore(score, i)
                afficherProposition(listeJeu[i])

                // réactivation du bouton valider
                valider.disabled= false
            }else{
                // Mise à jour des paramètres du jeu
                i= 0
                score= 0
                listeJeu= listeMots

                //Affichage des nouveaux paramètres 
                afficherScore(score, i)
                afficherProposition(listeJeu[i])

                // réactivation du bouton valider
                valider.disabled= false
            } 
        })      
    } 

    // Formulaire
    let formulaire= document.querySelector("form")

    formulaire.addEventListener("submit", (event) => {
        event.preventDefault()

        // Récupération des champs
        let inputNom= document.getElementById("nom")
        let inputEmail= document.getElementById("email")

        // Vérification des formats
        // verifierNom(inputNom)
        // verifierEmail(inputEmail)

        // Récupération d'informations et envoie du mail
        let nom= inputNom.value
        let email= inputEmail.value
        let scoreUser= `${score}/${i}`
        envoyerMail(email, nom, scoreUser)
    })

}






