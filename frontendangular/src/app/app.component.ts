import { Component } from '@angular/core';
import {Person} from 'src/models/person.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendangular';
  public people: Person[] = [];

  constructor(){
    this.people.push({
      id:0,
      name: "Kim",
      cpf:"623433333",
    telephone:"88888888"});
  }
  addPerson(){

  }
  removePerson(person: Person){
    const index = this.people.indexOf(person);
    //this.people.splice(index,1);
  }
}

