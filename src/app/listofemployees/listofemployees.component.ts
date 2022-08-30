import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-listofemployees',
  templateUrl: './listofemployees.component.html',
  styleUrls: ['./listofemployees.component.css']
})
export class ListofemployeesComponent implements OnInit {
  listofemplie:any=[];
  //registrationService=RegistrationService;
  constructor(
    private registrationService:RegistrationService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.listofemplie=this.registrationService.listofemploees;
  }

}
