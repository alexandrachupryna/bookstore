import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message!: string;
  @Output() isAlertOpen = new EventEmitter<boolean>();

  closeAlert(value: boolean) {
    this.isAlertOpen.emit(value)
  }
}
