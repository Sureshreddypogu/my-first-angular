import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: any= FormGroup;
  submitted: boolean= false;
  constructor(
    private fb: FormBuilder,
    private router:Router
    ){ }
  

  ngOnInit(): void {
    this.LoginForm=this.fb.group({
      usr: ['',Validators.required],
      pwd: ['',Validators.required]
    });
  }
  get f(){return this.LoginForm.controls}

  onSubmit(){
    // console.log(this.LoginForm);
    this.submitted= true;
    return;
  }

}
