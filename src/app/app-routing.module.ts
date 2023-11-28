import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksModalComponent } from './books-modal/books-modal.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'books', component: BooksPageComponent },
  { path: 'books-modal', component: BooksModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
