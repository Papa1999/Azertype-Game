// Popup de partage du resultat 
let popup= document.getElementById("popup-overlay")
let partager= document.getElementById("partager")

partager.addEventListener("click", ()=>{
        popup.classList.add("active-popup")
    })

let fermerPopup= document.getElementById("close")
    fermerPopup.addEventListener("click", ()=>{
        popup.classList.remove("active-popup")
    })
