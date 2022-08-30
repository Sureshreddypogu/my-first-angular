import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-calendernews',
  templateUrl: './calendernews.component.html',
  styleUrls: ['./calendernews.component.css']
})
export class CalendernewsComponent implements OnInit {

  API_KEY='241ba28f7366416c9650417bd67873e0';
  today:string=new Date().toISOString().slice(0,10);
  newsHeadlines:any=[];
  searchByKeyWord:any= FormGroup;
  searchByDate:any= FormGroup;
  submitted:boolean=false;
  keyword:string='top headlines';
  date:string=this.today;
  country:string='us';
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.searchByKeyWord = this.fb.group({
      keyword: ['', [Validators.required]],
    });
    this.searchByDate = this.fb.group({
      date: ['', [Validators.required]],
    });
  }
  sortByCountry(e:any) {
    this.country=e.target.value;
    this.getNewsHeadlines(this.country,this.date,'top-headlines').subscribe(res=>{
      this.newsHeadlines=res;
    });
    console.log('Para', this.keyword, this.date,this.country);
  }
  sortByDate(e:any){
    //console.log('Selected Date:::',e.target.value);
    this.date=e.target.value;
    this.getNewsHeadlines(this.keyword,this.date,'everything').subscribe(res=>{
      this.newsHeadlines=res;
    });
    console.log('Para', this.keyword, this.date,this.country);
  }
  get k(){return this.searchByKeyWord.controls};
  get d(){return this.searchByDate.controls};
  searchNewsByKeyWord(){
    //console.log(this.searchByKeyWord);
    this.submitted=true;
    if (this.searchByKeyWord.invalid) {
      return;
    }
    this.keyword=this.searchByKeyWord.value.keyword;
    this.getNewsHeadlines(this.keyword,this.date,'everything').subscribe(res=>{      
      console.log('NEWS Headlines::::',res);
      this.newsHeadlines=res;
    });
    console.log('Para', this.keyword, this.date,this.country);
  }
  
  getNewsHeadlines(data:any,date:any,type:string){
    if(type=='everything'){
      return this.http.get(`https://newsapi.org/v2/everything?q=${data}&to=${date}&sortBy=publishedAt&apiKey=${this.API_KEY}`);
    }else{
      return this.http.get(`https://newsapi.org/v2/top-headlines?country=${data}&category=business&apiKey=${this.API_KEY}`);
    }    
  } 
}
