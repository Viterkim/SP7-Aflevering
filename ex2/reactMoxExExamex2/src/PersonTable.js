import React, { Component } from "react";
import {observer} from 'mobx-react';
import PersonFactory from './PersonFactory';

@observer
class PersonTable extends Component {
  constructor(){
    super();
    PersonFactory.getPersons();
  }

  render() {
    const makeTable = PersonFactory.persons.map((person, index) =>{
      return <tr key={index}>
        <td>{person.age}</td>
        <td>{person.name}</td>
        <td>{person.gender}</td>
        <td>{person.email}</td>
        <td>{person.friends.map((friend) =>{
        return friend.name + ", "})}</td></tr>});

    return(
      <table className="table">
        <thead>
          <tr><th>Age</th><th>name</th><th>Gender</th><th>Email</th><th>Friends</th></tr>
        </thead>

        <tbody>
          {makeTable}
        </tbody>
      </table>
  );
  }
}
export default PersonTable;
