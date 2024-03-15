const deleteButton= document.getElementById('deleteButton')
const deleteIt = document.getElementById('deleteIt')


//deleteButton eventListener

deleteButton.addEventListener('click',deleteHandler)
 
function deleteHandler(){

  deleteIt.remove()

  document.getElementById("afterDelete").style.display = "block";
  


}