import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: any= FormGroup;
  submitted: boolean= false;
  invalidMsg : boolean= false;
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private http : HttpClient
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
    if (this.LoginForm.invalid) {
      return;
    }
    this.invalidMsg=false;
    this.getValidate().subscribe(d=>{
      let data: any=[];
      data =d;
      data.forEach((elemen:any)=> {
      console.log(elemen.uname);
      if (elemen.uname===this.LoginForm.value.usr && elemen.pass===this.LoginForm.value.pwd) {
          if(elemen.role==0){
            this.router.navigate(["/studenttest"]);
          }else if(elemen.role==1){
            this.router.navigate(["/listofemployees"]);
          }else{
            this.router.navigate(["/table"]);
          }
          
      } else {
        this.invalidMsg=true;
      }        
      });
    })
    
  }
  getValidate() {
    return this.http.get('./assets/json/cred.json');
  }

}
