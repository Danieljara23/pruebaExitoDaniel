import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  noticias = [];

  constructor(public _news: NewsService) {

    this._news.getNoticias()
          .subscribe( resNewsData => {
            this.noticias = resNewsData
            console.log(resNewsData);
          });
  }

  ngOnInit() {
  }

}
