import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

    url='http://localhost:3000/usr';

  constructor(private http:HttpClient) { }
  listofemploees: any=[];
  saveUsrData(data:any){
    return this.http.post(this.url,data);
  }
}
