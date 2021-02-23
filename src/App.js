// import logo from './logo.svg';
import './App.css';

function App() {
    var person = {
        name: 'Abdullah',
        age: 67,
        type: 'AnyPeople'
    }
    // var personTwo = {
    //     name: 'Mohammad',
    //     age: 67,
    //     type: 'Prophet'
    // }
    var style = {
        color: 'red',
        backgroundColor: 'gray',
        borderRadius: '5px',
        padding: '5px',
        margin: '3px'
    }

    const developer=['Munna','sajol','chisty'];
    return (
        <div className="App">
            <header className="App-header">
                <h2>Sum of numbers : {(2 + 8)}</h2>
                <h3 style={style} >Identity: {person.type + " " + person.name}</h3>
                {/* <h3 style={style} >Identity: {personTwo.type + " " + personTwo.name}</h3> */}
                <Person devPerson="Munna Hossain" homeTown="Chandpur"></Person>
                <Person devPerson="chisty" homeTown="MAdaripur"></Person>
                <Person devPerson="sajol" homeTown="Comilla"></Person>

                {/* Dynamic call */}
                <h1>Dynamic called</h1>
                <Person devPerson={developer[0]} homeTown="Madaripur"></Person>
                <Person devPerson={developer[1]} homeTown="Madaripur"></Person>
                <Person devPerson={developer[2]} homeTown="Brammonbariya"></Person>
            </header>
        </div>
    );
}
function Person(props) {
    var cardStyle = {
        border: '2px solid red',
        margin: '10px',
        width: '35%',
        borderRadius: '5px',
        backgroundColor: 'gray'
    }
    return (
        <div style={cardStyle}>
            <h2>Web Developer</h2>
            <h4>Name: {props.devPerson}</h4>
            <h5>Village: {props.homeTown}</h5>
        </div>
    )
}
export default App;