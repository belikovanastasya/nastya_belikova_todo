import React from 'react';
import './content.scss';

const Greeting = (props) => {
  const date = new Date().getHours();
  if (date >= 22 && date < 24 || date >= 0 && date < 3) {
    return <p>Good Night, {props.name}</p>;
  }
  if (date >= 3 && date < 12) {
    return <p>Good Morning, {props.name}</p>;
  }
  if (date >= 12 && date < 18) {
    return <p>Good Afternoon, {props.name}</p>;
  }
  if (date >= 18 && date < 22) {
    return <p>Good Evening, {props.name}</p>;
  }
};

const Numbers = (props) => {
  const numsArray = [];
  let number = +props.from;
  while (number < +props.to) {
    numsArray.push(number);
    number++;
  }
  if (props.even) {
    return <ul>{numsArray.filter(num => !(num % 2)).map((num, index) => <li key={index}>{num}</li>)}</ul>;
  }
  return <ul>{numsArray.filter(num => num % 2).map((num, index) => <li key={index}>{num}</li>)}</ul>;
};

const users = [
  {
    id: 1,
    firstName: 'Oleg',
    lastName: 'Ivanov',
    age: 28
  },
  {
    id: 2,
    firstName: 'Vasya',
    lastName: 'Petrov',
    age: 24
  },
  {
    id: 3,
    firstName: 'Igor',
    lastName: 'Petrov',
    age: 30
  }
];
const User = props => <li>{props.firstName} {props.lastName} {props.age}</li>;
const List = (props) => {
  const items = props.users
    .map(el => (<User
      key={el.id}
      firstName={el.firstName}
      lastName={el.lastName}
      age={el.age}
    />));
  return <ul>{items}</ul>;
};

export const Content = () => (
  <section>
    <h1>My App</h1>
    <Greeting name="UserName" />
    <Numbers from="5" to="18" odd />
    <List users={users} />
  </section>
);
