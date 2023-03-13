import { AuthGuard } from './popup-reg-auth/auth.guard';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { ContactComponent } from './contact/contact.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CartComponent } from './cart/cart.component';
import { BooksComponent } from './books/books.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookDetailComponent},
  { path: 'carts', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
