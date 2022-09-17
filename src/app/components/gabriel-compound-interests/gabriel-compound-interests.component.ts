import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gabriel-compound-interests',
  templateUrl: './gabriel-compound-interests.component.html',
  styleUrls: ['./gabriel-compound-interests.component.css']
})
export class GabrielCompoundInterestsComponent implements OnInit {
  @Input() c:string
  @Input() i:string
  @Input() t:string
  constructor() { }

  ngOnInit() {
  }
  getJuros(){
  let m = Number(this.c)*Math.pow(1+(Number(this.i)/100),Number(this.t))

    return m-Number(this.c) 
  }
}