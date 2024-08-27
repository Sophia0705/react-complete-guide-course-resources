// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;    // type은 소문자로 -> Number 이런 식으로 쓰면 nuber란 JS의 object를 가리킴

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 32
};

// person = {
//   isEmployee: true
// };

let people: {
  name: string;
  age: number;
}[];