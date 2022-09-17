import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gabriel-random-numbers',
  templateUrl: './gabriel-random-numbers.component.html',
  styleUrls: ['./gabriel-random-numbers.component.css']
})
export class GabrielRandomNumbersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

getRandomNumber(){
  let arr= [];
  for (let i = 0; i < 10; i++){
    arr[i] = Math.trunc(100 * Math.random());
  }
  return arr;
}


}