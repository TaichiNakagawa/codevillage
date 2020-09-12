import React from 'react'
import {Item} from './item'
export const List = () => {
    return(
      <ul>
            {/* Item コンポーネントを入れ
            {/* ループで何個も作る */}
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </ul>
    );
}