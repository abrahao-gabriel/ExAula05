import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gabriel-random-numbers',
  templateUrl: './gabriel-random-numbers.component.html',
  styleUrls: ['./gabriel-random-numbers.component.css'],
})
export class GabrielRandomNumbersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getRandomNumber() {
    let num = Math.trunc(100 * Math.random());

    return num;
  }
}
