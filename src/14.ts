import { User } from './User';

const users = [
  new User('John', 'Doe'),
  new User('Jane', 'Smith'),
  new User('Bob', 'Lewis'),
];

function getRandomUser(): User {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
}

const user = getRandomUser();
console.log(`Hello, ${user.firstName} ${user.lastName}!`);