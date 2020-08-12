//String.prototype.charCodeAt()
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 20;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);

//String.fromCharCode()
console.log(String.fromCharCode(191, 43, 190, 61));

//String.prototype.search()
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."