import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-debit-card',
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './debit-card.component.html',
  styleUrl: './debit-card.component.css'
})
export class DebitCardComponent {
  @Output() debitCardNumberChange = new EventEmitter<string>();
  debitCardNumber: string = '';
  onNumberChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.debitCardNumber = input.value;
    this.debitCardNumberChange.emit(this.debitCardNumber);
  }

  @Output() holderNameChange = new EventEmitter<string>();
  holderName: string = '';
  onHolderNameChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.holderName = input.value;
    this.holderNameChange.emit(this.holderName);
  }

  @Output() cardValidityChange = new EventEmitter<string>();
  cardValidity: string = '';
  onCardValidityChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cardValidity = input.value;
    this.cardValidityChange.emit(this.cardValidity);
  }

  validateNumberOnly(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'];
    if(isNaN(Number(event.key)) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
