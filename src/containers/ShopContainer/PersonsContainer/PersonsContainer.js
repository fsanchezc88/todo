import React, {useState} from 'react';
import Person from "../../../components/Person/Person";
import classes from "./PersonsContainer.module.css";


const PersonsContainer = () =>{
    const [personsState, setPersonsState] = useState({
        persons: [
            {id: 1, name: 'Faure', age: 18},
            {id: 2, name: 'Oscar', age: 24},
            {id: 3, name: 'Vidal', age: 19},
        ],
        showPerson: false
    });

    const nameChangedHandler = (event, id) => {
        const personIndex = personsState.persons.findIndex( p => {
            return p.id === id;
        } );

        const person = {
            ...personsState.persons[personIndex]
        }

        person.name = event.target.value;

        const persons = [...personsState.persons];

        persons[personIndex] = person;

        setPersonsState({
            persons: persons,
            showPerson: personsState.showPerson
        });
    }

    const togglePersonsHandler = () => {
        const mostrarPersonas = personsState.showPerson;
        setPersonsState({
            persons: personsState.persons,
            showPerson: !mostrarPersonas
        });
    }

    const deletePerson = (event, id) => {
        const persons = [...personsState.persons];
        const personIndex = persons.findIndex(person => person.id === id);
        persons.splice(personIndex, 1);
        setPersonsState({
            persons: persons,
            showPerson: personsState.showPerson
        });
    }

    let persons = null;
    let btnClass = '';

    if(personsState.showPerson){
        persons = personsState.persons.map((person, index) => {
            return <Person
                click={(event) => deletePerson(event, person.id)}
                changed={(event) => nameChangedHandler(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}/>
        });
        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if ( personsState.persons.length <= 2 ) {
        assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( personsState.persons.length <= 1 ) {
        assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.PersonContainer}>
            <h1>Bienvenido a React Bidaiondo</h1>
            <p className={assignedClasses.join( ' ' )}>Funciona!</p>
            <button
                className={btnClass}
                onClick={togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
    )
}

export default PersonsContainer;