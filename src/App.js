import logo from './logo.svg';
import './App.css';

const singers = [
  {name: 'boltu', job: 'akaimma'},
  {name: 'buzz', job: 'akaimma'},
  {name: 'mamun', job: 'kamla'},
  {name: 'rashid', job: 'hoga mara'}
]

function App() {
  const names = ['hola', 'kola', 'gula'];
  return (
    <div className="App">
      {
        names.map(name => <li>name: {name}</li>)
      }
      {
        names.map(name => <Person name = {name}></Person>)
      }
      {
        singers.map(singer => <Person name = {singer.name}></Person>)
      }
      <h1>gg</h1>
      <Person name={names[0]} kam='amikmma'></Person>
      <Person name={names[1]} kam='kamla' ></Person>
      <h1>new section</h1>
      <Friend name='kamal' phone = '54645345'></Friend>
      <Friend name='jamal' phone = '74578585'></Friend>
      <Friend name='rafiq' phone = '78678678'></Friend>
    </div>
  );
}

function Person (props) {
  console.log(props);
  return (
    <div className='person'> 
      <h1>{props.name}</h1>
      <p>{props.kam}</p>
    </div>
  )
}
function Friend(props){
  console.log(props)
  return(
    <div className='container'>
      <h3>Name: {props.name}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
