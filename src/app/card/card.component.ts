import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
people: [] = [];
person: '';

constructor(private http: HttpClient) { }

  ngOnInit() {
    let peopleUrl = `https://swapi.co/api/people/`
    this.http.get(peopleUrl)
    .subscribe(
      (data: any) => {
        this.people = data.results
        console.log('hello')
  })
}}
