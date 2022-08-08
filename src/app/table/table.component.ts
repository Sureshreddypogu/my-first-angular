import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private router:Router) { }
  title = 'my-project';


  table:any=[];
  tableForm:any=[];
  ngOnInit(): void {
    this.testResult();
  }

  testResult(){

    let j=1;
    while (j<=20) {

      let i=1;
      while (i<=10) {
        this.tableForm.push({num:j,i:i});
        i++;
      }
      j++;
    }
    




    // let i =1;
    // do{
    //   let j =1;
    //   this.tableForm.push({num:j,i:i});
    //   i++;
    // }while(i<=10);
    
    //  for(let j=1;j<=10;j++){
    //   this.table.push({num:j})

    // }
    // for(let i=1;i<=100;i++){
    //   if ( i%2!=0 && ( i<=10 || (i>=21 && i<=30) || (i>=41 && i<=50) || (i>=61 && i<=70) || (i>=81 && i<=90) ) ) {
    //     this.tableForm.push({i:i})
    //   } else if (i%2==0 && ((i>10 && i<=20) || (i>=31 && i<=40) || (i>=51 && i<=60) || (i>=71 && i<=80) || (i>=91 && i<=100)) ){
    //     this.tableForm.push({i:i})
    //   }
    // }
  }
}
