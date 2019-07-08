import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css']
})
export class SwapiComponent implements OnInit {

  constructor() { }

  ngOnInit() {

fetch('https://swapi.co/api/people') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
  let people = json.results; 
  console.log(people);


  
  // for(p of people) {
  //   let listItem = document.createElement('li');
  //   listItem.innerHTML = '<p>' + p.name + '</p>'; 
  //   starWarsPeopleList.appendChild(listItem);
  // }

});
  }

}
