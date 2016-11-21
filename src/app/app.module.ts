import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RedditApp } from './app.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    RedditApp,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [RedditApp]
})
export class AppModule { }
