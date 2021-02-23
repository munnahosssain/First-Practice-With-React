// import logo from './logo.svg';
import './App.css';


function Person() {
    return (
        <div style={{ border: '2px solid red', margin: '10px', width: '35%', borderRadius: '5px', backgroundColor: 'gray' }}>
            <h2>Web Developer</h2>
            <h4>Hello world!</h4>
        </div>
    )
}
function App() {
    var person = {
        name: 'Abdullah',
        age: 67,
        type: 'AnyPeople'
    }
    var personTwo = {
        name: 'Mohammad',
        age: 67,
        type: 'Prophet'
    }
    var style = {
        color: 'red',
        backgroundColor: 'gray',
        borderRadius: '5px',
        padding: '5px',
        margin: '3px'
    }
    return (
        <div className="App">
            <header className="App-header">
                <h2>Sum of numbers : {(2 + 8)}</h2>
                <h3 style={style} >Identity: {person.type + " " + person.name}</h3>
                <h3 style={style} >Identity: {personTwo.type + " " + personTwo.name}</h3>
                <Person></Person>
                <Person></Person>
                <Person></Person>
            </header>
        </div>
    );
}
export default App;