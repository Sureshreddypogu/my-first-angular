import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  // API_KEY='241ba28f7366416c9650417bd67873e0'
  today = new Date().toISOString().slice(0,10);
  newsD: any=[];
  newsdate:any= this.today;
  // date:string=this.today;
  //  country:string='us';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getNews(this.newsdate).subscribe(re=>{
      console.log("news update::",re);
      this.newsD=re;
    });
    // console.log("date:::" ,new Date());    
  }


  // sortByCountry(e:any) {
  //   this.getNews(e.target.value, '').subscribe(re=>{
  //     this.newsD=re;
  //   });
  //   console.log('sort country',  this.newsdate,this.country);
  // }


  searchBydate(e:any){
    this.getNews(e.target.value).subscribe(re=>{
      console.log("news update::",re);
      this.newsD=re;
    });
  }
  getNews(e:any){    
    return this.http.get(`https://newsapi.org/v2/everything?q=apple&to=${e}&sortBy=publishedAt&apiKey=241ba28f7366416c9650417bd67873e0`);
  }  
}
  // getNews(e:any,type:string){
  //   console.log('Country:::::',this.country);
  //   // let API_KEY='241ba28f7366416c9650417bd67873e0'
  //   if (type=='everything') {
  //     return this.http.get(`https://newsapi.org/v2/everything?q=tesla&from=${this.newsdate}&sortBy=publishedAt&apiKey=${this.API_KEY}`);
  //   } else {
  //     return this.http.get(`https://newsapi.org/v2/top-headlines?country=${e}&sortBy=publishedAt&apiKey=${this.API_KEY}`);
  //   }
     
  // }  

