const buttonDelete = document.querySelector("#button-delete")
buttonDelete.onclick = (event) => {
  if(!confirm("Pressione para confirmar a exclusão"))
    return event.preventDefault()
}