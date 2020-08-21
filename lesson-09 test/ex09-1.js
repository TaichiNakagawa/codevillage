const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…
const items = document.querySelectorAll('.list li')
// itemsは配列（のようなもの）なので、forEachで繰り返しができる
items.forEach((item) => {
  console.log(item.textContent) // アイテム1, アイテム2, アイテム3 が順番に表示される
})

})
removeButton.addEventListener('click', (event) => { // <button id="remove">がクリックされたとき…
list.removeChild(list.lastChild) // リストの最初の「アイテム1」が消える
})