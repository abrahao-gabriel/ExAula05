import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gabriel-timer',
  templateUrl: './gabriel-timer.component.html',
  styleUrls: ['./gabriel-timer.component.css'],
})
export class GabrielTimerComponent implements OnInit {
  counter: number = 0;
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);

  constructor() {}

  ngOnInit() {}

  getTimer() {
    return this.counter;
  }
}
