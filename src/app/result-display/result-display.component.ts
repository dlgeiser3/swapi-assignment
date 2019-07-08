import { Component, OnInit } from '@angular/core';
import { Result } from '../Result';
import { RESULTS} from '../mock-results';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  results = RESULTS;
  constructor() { }

  ngOnInit() {
  }

}
