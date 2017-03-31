import { observable, action} from "mobx";
const URL = require("../package.json").serverURL;

class PersonFactory {
  @observable persons = [];

   @action
   getPersons(){
     var myInit = {method: "GET"};

     fetch(URL + "persons", myInit).then(response => {
       return response.json();
     }).then(data => {
       this.persons.replace(data);
     });
   }
}

var personFact = new PersonFactory();
export default personFact;
