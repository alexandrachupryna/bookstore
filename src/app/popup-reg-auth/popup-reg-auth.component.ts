import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-reg-auth',
  templateUrl: './popup-reg-auth.component.html',
  styleUrls: ['./popup-reg-auth.component.css']
})
export class PopupRegAuthComponent implements OnInit {
  isPopupOpen: boolean = false;
  isLoginForm: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.popupToggled.subscribe(
      (mode: boolean) => {
        this.isPopupOpen = mode;
      }
    );
  }

  closePopup() {
    this.authService.togglePopup(false)
    this.switchForm(true)
  }

  switchForm(mode: boolean) {
    this.isLoginForm = mode;
  }
}
