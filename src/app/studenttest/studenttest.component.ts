import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-studenttest',
  templateUrl: './studenttest.component.html',
  styleUrls: ['./studenttest.component.css']
})
export class StudenttestComponent implements OnInit {

  constructor ( private router:Router ) { }
  title = 'my-project'; 

  studentInfo:any=[
    {id:101,name:"suresh",English:90,Telugu:85,Maths:88,Physics:30,Chemistry:60,Social:66,dob:"10.11.1999"},
    {id:102,name:"ramesh",English:20,Telugu:75,Maths:18,Physics:20,Chemistry:62,Social:46,dob:"05.10.1999"},
    {id:103,name:"ramesh",English:50,Telugu:35,Maths:80,Physics:20,Chemistry:64,Social:36,dob:"25.09.1998"},
    {id:104,name:"naresh",English:70,Telugu:85,Maths:78,Physics:70,Chemistry:40,Social:68,dob:"19.10.1999"},
    {id:105,name:"somesh",English:80,Telugu:35,Maths:82,Physics:30,Chemistry:70,Social:26,dob:"29.07.1999"},
    {id:106,name:"paramesh",English:40,Telugu:75,Maths:28,Physics:60,Chemistry:30,Social:76,dob:"11.10.1998"},
    {id:107,name:"veresh",English:70,Telugu:85,Maths:78,Physics:50,Chemistry:90,Social:36,dob:"06.10.1999"},
    {id:108,name:"suriya",English:35,Telugu:95,Maths:18,Physics:20,Chemistry:60,Social:76,dob:"10.10.1999"},
    {id:109,name:"suri",English:30,Telugu:15,Maths:28,Physics:50,Chemistry:20,Social:56,dob:"11.08.1999"},
    {id:110,name:"yash",English:57,Telugu:85,Maths:38,Physics:40,Chemistry:0,Social:16,dob:"11.11.1998"},

];

ngOnInit(): void {
  this.testResult();
}

studentDetails:any=[];

total_pass:number=0;

testResult(){
    this.studentInfo.forEach((obje:any)=> {
        
        
        
      let total=obje.English+obje.Telugu+obje.Maths+obje.Physics+obje.Chemistry+obje.Social;
      let per=(total/6).toPrecision(4);
      let pass_fail='Fail';
      if(obje.English>=30 && obje.Telugu>=30 && obje.Maths>=30 && obje.Physics>=30 && obje.Chemistry>=30 && obje.Social>=30){
        this.total_pass+=1;
        pass_fail='Pass';
      }
      let grade='F';
      if(total>=400){
        grade='A';
      }else if(total>=300 && total<400){
        grade='B';
      }else if(total>=200 && total<300){
        grade='C';
      }else if(total>=100 && total<200){
        grade='D';
      }else{
        grade='E';
      }
      
      let studentObj = {
        id:obje.id,name:obje.name,English:obje.English,Telugu:obje.Telugu,Maths:obje.Maths,Physics:obje.Physics,Chemistry:obje.Chemistry,Social:obje.Social,total:total,pass_fail:pass_fail,per:per,grade:grade,dob:obje.dob
      }
      this.studentDetails.push(studentObj);
    });
}
}
