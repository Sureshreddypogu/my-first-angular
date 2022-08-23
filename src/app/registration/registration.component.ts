import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: any=FormGroup;
  submitted:boolean=false;

  constructor(
    private regist: FormBuilder,
    private router:Router,
    private registrationService: RegistrationService,
    
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.regist.group({
      fname:['', [Validators.required]],
      lname:['', Validators.required],
      pwd:['',[Validators.required, Validators.minLength(6)]],
      cpwd:['', Validators.required],
      email:['', Validators.required],
      birthday:['', Validators.required],
      phone:['', Validators.required],
      address:['', Validators.required],
      pcode:['', Validators.required]
    });
  }
  get reg(){return this.registrationForm.controls;}

  onSubmit(){
    this.submitted=true;
    console.log(this.registrationForm);

    if (this.registrationForm.invalid) {
      return;
    }
    let registerObj = {
      fname: this.registrationForm.value.fname,
      lname: this.registrationForm.value.lname,
      birthday: this.registrationForm.value.birthday,
      phone: this.registrationForm.value.phone,
      address: this.registrationForm.value.address,
      pcode: this.registrationForm.value.pcode,
    }
      this.registrationService.listofemploees.push(registerObj);
      console.log(registerObj);
      this.router.navigate(['/','login']);
    return
  }

  
  

}
