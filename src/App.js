import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: 'sxsgxgz', name: 'Max', age: 28 },
            { id: 'sxsgx4x', name: 'Manu', age: 29 },
            { id: 'sxsgxgf', name: 'Stephanie', age: 26 }
        ],
        showPerson: false
    };

    deletePersonHandler = (personIndex) => {
        // 3 options to solution this delete hendler
        // const persons =this.state.persons;
        const persons = [...this.state.persons];
        // const persons =this.state.persons.slice();

        persons.splice(personIndex, 1)
        this.setState({ persons: persons })
    }


    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: personState.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                { id: 'sxsgxgz', name: newName, age: 28 },
                { id: 'sxsgx4x', name: 'Manu', age: 29 },
                { id: 'sxsgxgf', name: 'Stephanie', age: 27 }
            ],
        });
    };
    nameChangedHandle = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id

        })
        const person = {
            ...this.state.persons[personIndex]
        }

        //const person = Object.assign({},this.state.persons[personIndex])

        person.name = event.target.value;

        const persons = [...this.state.persons]
        persons[personIndex] = person

        this.setState({
            persons: persons
        });
    }
    togglePersonHendler = () => {
        const doesShow = this.state.showPerson;
        this.setState({

            showPerson: !doesShow
        });
    }
    render() {
        const style = {
            backgrundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null

        if (this.state.showPerson) {
            persons = (

                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                changed={(event) => this.nameChangedHandle(event, person.id)}
                                //click = {() => this.nameChangedHandle}
                                delete={() => this.deletePersonHandler(index)}
                            />

                        )
                    })}
                </div>
            )
        }


        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                {this.state.showPerson ? <button style={style} onClick={() => this.togglePersonHendler()}> Hide Persons</button>
                    : <button style={style} onClick={() => this.togglePersonHendler()}> Show Persons </button>}
                {persons}
            </div>
        );
    }
}

export default App;





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







