const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…
const items = document.querySelectorAll('.list li')
const newItem =document.createElement('li')
newItem.textContent='アイテム'+(list.children.length+1)
list.appendChild(newItem)
})
removeButton.addEventListener('click', (event) => { // <button id="remove">がクリックされたとき…
list.removeChild(list.lastChild) // リストの最初の「アイテム1」が消える
})