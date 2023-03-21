import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return(
    <div className='App'>
      {/* <Counter>ss</Counter> */}
      <ExtUsers></ExtUsers>
    </div>
  );
}


function ExtUsers (){
  const [users, setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h2>EX Users</h2>
      <p>{users.length}</p>
      {
        users.map(user =>  <User name={user.name} email = {user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div style={{border: '2px solid red' , margin: '20px'}}>
      <h3>Name: {props.name}</h3>
      <h4>Email {props.email}</h4>
    </div>
  )
}

// function Counter (){
//   const [count, setCount] = useState(10)

//   const increaseCount = () =>setCount(count +1 );

//   const decreaseCount = () =>setCount(count -1 );

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>DecreaseCount</button>
//     </div>
//   )
// }

// const singers = [
//   {name: 'boltu', job: 'akaimma'},
//   {name: 'buzz', job: 'akaimma'},
//   {name: 'mamun', job: 'kamla'},
//   {name: 'rashid', job: 'hoga mara'}
// ]

// function App() {
//   const names = ['hola', 'kola', 'gula'];
//   return (
//     <div className="App">
//       {
//         names.map(name => <li>name: {name}</li>)
//       }
//       {
//         names.map(name => <Person name = {name}></Person>)
//       }
//       {
//         singers.map(singer => <Person name = {singer.name} job ={singer.job}></Person>)
//       }
//       <h1>gg</h1>
//       <Person name={names[0]} kam='amikmma'></Person>
//       <Person name={names[1]} kam='kamla' ></Person>
//       <h1>new section</h1>
//       <Friend name='kamal' phone = '54645345'></Friend>
//       <Friend name='jamal' phone = '74578585'></Friend>
//       <Friend name='rafiq' phone = '78678678'></Friend>
//     </div>
//   );
// }

// function Person (props) {
//   console.log(props);
//   return (
//     <div className='person'> 
//       <h1>{props.name}</h1>
//       <p>{props.job}</p>
//     </div>
//   )
// }
// function Friend(props){
//   console.log(props)
//   return(
//     <div className='container'>
//       <h3>Name: {props.name}</h3>
//       <p>Phone: {props.phone}</p>
//     </div>
//   )
// }

export default App;
