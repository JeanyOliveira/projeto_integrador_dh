const searchField = document.querySelector(".input-filter")
const btnBuscar = document.querySelector(".button-header")

searchField.addEventListener("keyup", () =>{
  const input = document.querySelector(".input-filter")
  let filter = input.value.toLowerCase()
  let conteinerCard = document.querySelector(".conteiner-cards")
  let cards = conteinerCard.querySelectorAll(".cards")
  let i, productName, txtValue

  for(i = 0; i < cards.length; i++){
    productName = cards[i].querySelector(".tituloCard")
    txtValue = productName.innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1)
      cards[i].style.display = "";
    else 
      cards[i].style.display = "none";
  }
})

btnBuscar.addEventListener("click", () => {
  console.log("entrou ", searchField.style)
  console.log("entrou ", searchField)
  searchField.style.display = "block"
})