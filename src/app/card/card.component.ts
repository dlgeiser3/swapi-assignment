import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../Result'

@Component({
 selector: 'app-card',
 template: `<button mat-button [matMenuTriggerFor]="menu">Menu</button>
 <mat-menu #menu="matMenu">
   <button mat-menu-item (click)="sendValue(value)" value="people">people</button>
   <button mat-menu-item (click)="sendValue(value)" value="films">films</button>
   <button mat-menu-item (click)="sendValue(value)" value="starships">starships</button>
 </mat-menu>
 
 
 <div *ngFor="let person of people">
     {{person | json}}
    </div>
`,
 styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
people: Result[] = [];
person: '';
ship: [] = [];
film: [] =[]

constructor(private http: HttpClient) { };



 ngOnInit() {

   let peopleUrl = `https://swapi.co/api/people`
   this.http.get(peopleUrl)
   .subscribe(
     (data: any) => {
       this.people = data.results
  })

  function sendValue(value) {
    value= value
   };

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

