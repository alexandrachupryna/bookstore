import { NavigationEnd, Router } from '@angular/router';
import { Cart } from './../cart/carts.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { AuthService } from '../popup-reg-auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartAmount: number = 0;
  routerLink: string = this.router.url;
  pageTitle: string = '';
  isAuthenticated: boolean = false;
  isMobileMenuOpen: boolean = false;
  private userSub!: Subscription;

  constructor(private cartService: CartService, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.getUserMode();

    this.cartService.cartListChanged.subscribe(
      (carts: Cart[]) => {
        this.cartAmount = carts.reduce((accumulator, curValue) => accumulator + curValue.amount, 0);
      }
    );

    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.routerLink = this.router.url;
          this.pageTitle = this.getPageTitle(this.routerLink);
        }
      }
    );

    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

  ngOnDestroy() {
    this.userSub.unsubscribe()
  }

  getPageTitle(page: string) {
    let title = '';

    if (page.startsWith('/books')) {
      page === '/books';
    }

    switch(page) {
      case '/books': title = 'My Store';
        break;
      case '/carts': title = 'My Store';
        break;
      case '/authors': title = 'My Store';
        break;
      case '/about': title = 'About us';
        break;
      case '/delivery': title = 'Delivery and payment';
        break;
      case '/contact': title = 'Contact us';
        break;
      default: title = 'My Store';
    }
    return title;
  }

  openLoginPopUp() {
    this.authService.togglePopup(true);

    if (this.isMobileMenuOpen) {
      this.toggleMobileMenu()
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.position = this.isMobileMenuOpen ? 'fixed' : 'static';
  }

  navigate(page: string) {
    this.router.navigate([page])

    if (this.isMobileMenuOpen) {
      this.toggleMobileMenu()
    }
  }

  onHeaderButton() {
    if (this.isAuthenticated) {
      this.authService.logout()

      if (this.isMobileMenuOpen) {
        this.toggleMobileMenu()
      }
    } else {
      this.openLoginPopUp()
    }
  }

  onCartButtonClicked() {
    this.isAuthenticated ? this.router.navigate(["/carts"]) : this.cartService.togglePopup(true)
  }
}
