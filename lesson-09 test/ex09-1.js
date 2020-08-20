const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…

  const newItem = document.createElement('li')
  for (let i = 0; i < newItem.children.length; i++) { // for文での繰り返し
    console.log(newItem.children[i]) // <li>アイテム1</li>, <li>アイテム2</li>, <li>アイテム3</li> が順番に表示
  }
  newItem.textContent = '新しいアイテム'
  list.appendChild(newItem)
})
removeButton.addEventListener('click', (event) => { // <button id="remove">がクリックされたとき…

  list.removeChild(list.lastElementChild)
})