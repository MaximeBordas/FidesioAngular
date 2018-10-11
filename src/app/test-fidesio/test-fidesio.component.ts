import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import  {ApiGlobalService} from '../api-global.service';
import {Records} from '../model/records';

@Component({
  selector: 'app-test-fidesio',
  templateUrl: './test-fidesio.component.html',
  styleUrls: ['./test-fidesio.component.css']
})
export class TestFidesioComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private api: ApiGlobalService,
  )
  { }

  /**
   * Variables
   */
  records: [Object];
  startPagination = 0;
  searchValue: string;
  filter: string;


  /**
   *
   */
  ngOnInit() {
    this.http.get<Records>(this.api.API_URL +  '&rows=20').subscribe(
      res => {
        this.records = res.records;
      }
    );
  }

  /**
   *
   * @param page
   */
  paginator(page: number){
    this.startPagination = page + this.startPagination;

    this.http.get<Records>(this.api.API_URL+ '&rows=20&start=' + this.startPagination).subscribe(
      res =>{
        this.records = res.records
      }
    );
  }

  /**
   *
    * @param filter
   */
  sort(filter: string) {
    if (this.filter !== undefined) {
      this.filter = '';
    } else {
      this.filter = filter;
    }
    this.http.get<Records>(this.api.API_URL + '&rows=20&start=' + this.startPagination + '&sort=' + this.filter).subscribe(res => {
      this.records = res.records;
    });
  }

  /**
   *
   */
  search() {
    this.http.get<Records>(this.api.API_URL + '&rows=-1' + '&q=' + this.searchValue).subscribe(res => {
      this.records = res.records;
    });
  }


}
