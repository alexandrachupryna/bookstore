import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-list/cart-item/cart-item.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { CartService } from './cart/cart.service';
import { AboutComponent } from './about/about.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ContactComponent } from './contact/contact.component';
import { CartOrderFormComponent } from './cart/cart-order-form/cart-order-form.component';
import { CartOrderInfoComponent } from './cart/cart-order-info/cart-order-info.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { PopupRegAuthComponent } from './popup-reg-auth/popup-reg-auth.component';
import { AlertComponent } from './shared/alert/alert.component';
import { RegistrationComponent } from './popup-reg-auth/registration/registration.component';
import { AuthComponent } from './popup-reg-auth/auth/auth.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactContentComponent } from './contact/contact-content/contact-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartPopupComponent } from './cart/cart-popup/cart-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './books/book.service';
import { AuthService } from './popup-reg-auth/auth.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    BookItemComponent,
    FooterComponent,
    CartComponent,
    CartItemComponent,
    CartListComponent,
    DropdownDirective,
    AboutComponent,
    DeliveryComponent,
    ContactComponent,
    CartOrderFormComponent,
    CartOrderInfoComponent,
    FilterBooksPipe,
    PopupRegAuthComponent,
    AlertComponent,
    RegistrationComponent,
    AuthComponent,
    ContactFormComponent,
    ContactContentComponent,
    PageNotFoundComponent,
    CartPopupComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CartService,
    BookService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
