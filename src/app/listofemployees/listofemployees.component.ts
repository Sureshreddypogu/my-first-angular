import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofemployees',
  templateUrl: './listofemployees.component.html',
  styleUrls: ['./listofemployees.component.css']
})
export class ListofemployeesComponent implements OnInit {
  listofemplie: any;
  constructor() { }

  ngOnInit(): void {
  }

}
