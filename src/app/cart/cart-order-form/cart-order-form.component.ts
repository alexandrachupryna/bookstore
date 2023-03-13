import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-order-form',
  templateUrl: './cart-order-form.component.html',
  styleUrls: ['./cart-order-form.component.css']
})
export class CartOrderFormComponent implements OnInit {
  orderForm!: FormGroup;
  deliveryForm: string = 'post';
  messageAlert: string = 'Your order is accepted!';
  isAlertDisplayed: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.initForm()
  }

  private initForm() {
    this.orderForm = new FormGroup({
      'contactData': new FormGroup({
        'firstName': new FormControl('', Validators.required),
        'surname': new FormControl('', Validators.required),
        'phone': new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
        'email': new FormControl('', [Validators.required, Validators.email])
      }),
      'deliveryData': new FormGroup({
        'country': new FormControl('', Validators.required),
        'region': new FormControl('', Validators.required),
        'city': new FormControl('', Validators.required),
        'street': new FormControl('', Validators.required),
        'house': new FormControl('', Validators.required),
        'apartment': new FormControl(''),
        'index': new FormControl('', Validators.required),
        'deliveryMode': new FormGroup({
          'delivery': new FormControl('post', Validators.required),
        }),
      }),
      'comment': new FormControl('')
    })
  }

  onSubmit() {
    this.orderForm.reset()
    this.toggleAlert(true)
  }

  onDeliveryModeChange(e: any) {
    this.cartService.changeDeliveryMode(e.target.value)
  }

  toggleAlert(mode: boolean) {
    this.isAlertDisplayed = mode;
  }
}
