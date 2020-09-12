import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Form} from'./form'
import {List} from './list'
// importの注意 : defaultの場合は{}なし
// importの注意 : defaultなしの場合は{}あり

function App() {
  return (
      // 返すHTMLの要素は必ず１つ! 0でも、2個以上でもダメ！！
      <>
        <h1>ToDoリスト</h1>
        <Form />
        <List />
      </>
  );
}

export default App;
