console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

const array4 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array4.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array4.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]


//文字列オブジェクト、配列オブジェクトで使うメゾットは共に関数を定義した後に処理するという流れになっていて、配列オブジェクトで使うメゾットは配列を定義した後に処理している。