var deleteBtn
var i=0
var c=0
var clicked=document.getElementById('forClick')
clicked.onclick=function(){ 
var elemText=document.getElementById('forText').value    
var input=document.createElement('input')
input.setAttribute('id', 'inputid')
input.value=elemText
var divGeneral =document.createElement('div')
var deleteBtn=document.createElement('button')
deleteBtn.innerText="Delete"
deleteBtn.id='del'+ ++i
var id= deleteBtn.id
deleteBtn.setAttribute("onclick", "deleteObj(id)")
var editBtn= document.createElement('button')
editBtn.innerText="Edit"
editBtn.id='edit'+i
var id=editBtn.id
editBtn.setAttribute("onclick", "editObj(id)")
divGeneral.innerText = input.value
divGeneral.appendChild(deleteBtn)
divGeneral.appendChild(editBtn)
document.body.appendChild(divGeneral)
}

function deleteObj(id){
var elem=document.getElementById(id)
elem.parentElement.remove()
}


function editObj(id){
var btn= document.getElementById(id)
btn.parentElement.setAttribute('btnId', id)
var elem=btn.parentNode.firstChild
var input = document.createElement('input')
input.setAttribute('type', 'text')
input.value=elem.textContent
var saveBtn= document.createElement('button')
saveBtn.innerText="Save"
saveBtn.id='save'+ ++c
var id=saveBtn.id
btn.style.display="none"
btn.parentElement.appendChild(saveBtn)
saveBtn.setAttribute("onclick", "SaveBtn(id)")
btn.parentElement.replaceChild(input, elem)
}

function SaveBtn(id){
var saveBtn=document.getElementById(id)
var oldInput=saveBtn.parentNode.firstChild
var input=document.createElement('input')
input.value=saveBtn.parentNode.firstChild.innerText
var p=document.createElement('p')
p.innerText=oldInput.value
saveBtn.style.display="none"
saveBtn.parentElement.replaceChild(p, oldInput)
}





