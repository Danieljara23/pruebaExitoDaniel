import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from "./components/news/news.component";
import { HomeComponent } from "./components/home/home.component";

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
