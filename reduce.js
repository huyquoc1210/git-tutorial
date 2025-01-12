const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  return accumulator + currentValue.x;
}, 0);

console.log(sum); // 6

const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"] },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
  { name: "Alice", books: ["The Lord of the Rings", "The Shining"] },
];
const allBooks = friends.reduce((acc, cur) => [...acc, ...cur.books], []);

console.log(allBooks);

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    // console.log("num", num);
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
