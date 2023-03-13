import { Router } from '@angular/router';
import { AuthService } from './../popup-reg-auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  private userSub!: Subscription;

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      if (!user) {
        this.router.navigate(['/'])
      }
    })
  }

  ngOnDestroy() {
    this.userSub.unsubscribe()
  }
}
