import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  isAlertDisplayed: boolean = false;
  messageAlert: string = 'Your message is sent!';

  ngOnInit() {
    this.initForm()
  }

  private initForm() {
    this.contactForm = new FormGroup({
      'contactData': new FormGroup({
        'firstName': new FormControl('', Validators.required),
        'surname': new FormControl('', Validators.required),
        'phone': new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
        'email': new FormControl('', [Validators.required, Validators.email]),
      }),
      'subscribe': new FormControl(false),
      'comment': new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    this.contactForm.reset()
    this.toggleAlert(true)
  }

  toggleAlert(mode: boolean) {
    this.isAlertDisplayed = mode;
  }
}
