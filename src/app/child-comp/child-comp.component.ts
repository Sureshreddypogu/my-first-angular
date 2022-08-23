import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

    @Output() info= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  sendToParent(){
      let obj={name:"siva", mobile:"8000000004"}
      this.info.emit(obj);
  }

}
