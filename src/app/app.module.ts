import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';

// Routes
import {  app_routing } from "./app.routes";

// Servicios
import { NewsService } from "./services/news.service"
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    HttpClientModule
  ],
  providers: [NewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
