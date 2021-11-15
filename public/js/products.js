const buttonDelete = document.querySelectorAll("#button-delete")

buttonDelete.forEach(button => button.onclick = (event) => {
  if(!confirm("Pressione para confirmar a exclusão"))
    return event.preventDefault()
})    