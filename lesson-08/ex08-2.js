document.body;
const h1=document.createElement('h1');
h1.textContent='DOM';
document.body.appendChild(h1);
const p=document.createElement('p');
p.textContent='JavaScriptからHTMLを扱うための仕組み';
document.body.appendChild(p);
const h2=document.createElement('h2');
h2.textContent='印象に残っているトピック';
document.body.appendChild(h2);
const ul=document.createElement('ul');
document.body.appendChild(ul);
const newItem0=document.createElement('li')
newItem0.textContent='documentオブジェクト'
ul.appendChild(newItem0)
const newItem1=document.createElement('li')
newItem1.textContent='getElementById'
ul.appendChild(newItem1)
const newItem2=document.createElement('li')
newItem2.textContent='イベントリスナ'
ul.appendChild(newItem2)
