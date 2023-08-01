import logo from './logo.svg';
import './App.css';

import React from 'react';
import Customer from "./components/Customer";
import './App.css'

const customers = [
  {
    'id' : 1,
    'image': 'http://placekitten.com/g/64/64',
    'name' :'홍길동',
    'birthday' : '951225',
    'gender':'male',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image': 'http://placekitten.com/g/64/64',
    'name' :'감자탕',
    'birthday' : '000510',
    'gender':'male',
    'job' : '음식'
  },
  {
    'id' : 3,
    'image': 'http://placekitten.com/g/64/64',
    'name' :'김부각',
    'birthday' : '650811',
    'gender':'female',
    'job' : '직장인'
  }
]

function App(){
  return (
    <div>
      {
      customers.map(c => {return(
          <Customer
          key = {c.id}
          id ={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
        />
        )})
    }
    </div>
  );
}

export default App;
