import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gabriel-simple-interests',
  templateUrl: './gabriel-simple-interests.component.html',
  styleUrls: ['./gabriel-simple-interests.component.css']
})
export class GabrielSimpleInterestsComponent implements OnInit {
@Input() c:string
@Input() i:string
@Input() t:string

  constructor() { }

  ngOnInit() {
  }

  getJuros(){
    return Number(this.c)*(Number(this.i)/100)*Number(this.t)
  }
}