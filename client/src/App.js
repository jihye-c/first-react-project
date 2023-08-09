import './App.css';
import React from 'react';

import Customer from "./components/Customer";
import './App.css'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

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

class App extends React.Component{
  render(){
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {customers.map(c => {return( <Customer key = {c.id} id ={c.id}image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
        </TableBody>
      </Table>
    </Paper>
  );
  }
}

export default App;
