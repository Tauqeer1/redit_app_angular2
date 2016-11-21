import { Component, OnInit, Input } from '@angular/core';
import {Article} from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: { class: 'row'}
})
export class ArticleComponent implements OnInit {


  @Input() article: Article;

  /*votes: number;
  title: string;
  link: string;*/

  constructor() {

    this.article = new Article('Angular 2', 'http://angular.io', 10);

    /*this.title = 'Angular 2';
    this.link = 'angular.io';
    this.votes = 10;*/
  }

  voteUp(): void {

    this.article.voteUp();
    // this.article.votes += 1;

    // this.votes += 1;
  }
  voteDown(): void {

    this.article.voteDown();
    // this.article.votes -= 1;
    // this.votes -= 1;
  }

  ngOnInit() {
  }

}
