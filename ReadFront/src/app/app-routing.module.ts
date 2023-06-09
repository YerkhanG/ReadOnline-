
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component: AboutComponent},
  {path: 'books/:id',component: BookDetailComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path : '**' , component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

