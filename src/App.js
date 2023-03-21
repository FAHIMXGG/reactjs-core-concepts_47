import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>gg</h1> */}
      <Person></Person>
      <h1>new section</h1>
      <Friend></Friend>
    </div>
  );
}

function Person () {
  return (
    <div className='person'> 
      <h1>hello</h1>
      <p>wassup</p>
    </div>
  )
}
function Friend(){
  return(
    <div className='container'>
      <h3>Name: Alu</h3>
      <p>Maramari</p>
    </div>
  )
}

export default App;
