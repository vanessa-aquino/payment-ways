import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-debit-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './debit-card.component.html',
  styleUrl: './debit-card.component.css'
})
export class DebitCardComponent {
  validateNumberOnly(keyboardEvent: KeyboardEvent): void {
    if(isNaN(parseInt(keyboardEvent.key))) {
      keyboardEvent.preventDefault();
    };
  }
}
