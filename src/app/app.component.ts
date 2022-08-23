import { Component, Input} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  menus: any={
    "header-menu":[
      {link: "/",name:"Home"},
      {link:"/table",name:"Table"},
      {link:"/studenttest",name:"Students"},
      {link:"/listofemployees",name:"Employees"},
      {link:"/registration",name:"Register"},
      {link:"/login",name:"Login"},
    ],
  }
  
}
