import React, { Component , useState } from 'react';
import './App.css';
import Person from './Person/Person';




//const app = props => {
//  const [personState, setPersonState] = useState({
//    persons: [
//        { name: 'Max', age: 28 },
//        { name: 'Manu', age: 29 },
//        { name: 'Stephanie', age: 26 }
//      ]
//    })        
//    const switchNameHandler = () => {
//          // console.log('Was clicked!');
//          // DON'T DO THIS: personState.persons[0].name = 'Maximilian';
//          setPersonState({
//            persons: [
//              { name: 'Maximilian', age: 28 },
//              { name: 'Manu', age: 29 },
//              { name: 'Stephanie', age: 27 }
//            ]
//          });
//        };
//  return (
//      <div className="App">
//        <h1>Hi, I'm a React App</h1>
//        <p>This is really working!</p>
//        <button onClick={switchNameHandler}>Switch Name</button>
//        <Person
//          name={personState.persons[0].name}
//          age={personState.persons[0].age}
//          click={}
//        />
//        <Person
//          name={personState.persons[1].name}
//          age={personState.persons[1].age}
//        >
//          My Hobbies: Racing
//        </Person>
//        <Person
//          name={personState.persons[2].name}
//          age={personState.persons[2].age}
//        />
//      </div>
//    );
//}
//


class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  };


  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: personState.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };
  nameChangedHandle = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value , age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Ayham!!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this , 'Hima')}
          changed ={this.nameChangedHandle}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;