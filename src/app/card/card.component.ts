import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
people: boolean = false;
starships: boolean = false;
films: boolean =false

// JUNK FROM THE FORM

searchForm = new FormGroup({
searchUrl: new FormControl(''),
searchInfo: new FormControl(''),
// people: new FormControl(''),
// films: new FormControl(''),
// starships: new FormControl(''),
});

constructor(private http: HttpClient) { }
onSubmit() {

  console.warn(this.searchForm.value);
  console.log(this.searchForm.value)
  return this.searchForm.value;
  
}

  ngOnInit() {

    // THIS IS WHAT NEEDS TO BE FIXED ;_;

    let peopleUrl = `https://swapi.co/api/people/?search=luke`
    this.http.get(peopleUrl)
    .subscribe(
      (data: any) => {
        this.people = data.results
        console.log(data.results)
  })

  

// let vehicleUrl = `https://swapi.co/api/vehicles/?search=sand`
//   this.http.get(vehicleUrl)
//     .subscribe(
//       (data: any) => {
//         this.ship = data.results
//       }
//     )

//   let filmUrl = `https://swapi.co/api/films/?search=revenge`
//   this.http.get(filmUrl)
//     .subscribe(
//       (data: any) => {
//         this.film = data.results
//       }
//     )

  }}
