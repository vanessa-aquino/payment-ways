import { Component, EventEmitter, Output } from '@angular/core';
import { ParcelOption } from '../models/parcel-option.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.css'
})
export class CreditCardComponent {

  @Output() parcelChange: EventEmitter<ParcelOption> = new EventEmitter<ParcelOption>();
  selectedParcelOption = 1;

  parcelOptions: Array<ParcelOption> = [
    {display: '1x sem juros', value: 1, tax: 0},
    {display: '2x sem juros', value: 2, tax: 0},
    {display: '3x sem juros', value: 3, tax: 0},
    {display: '4x com juros de 0,2% a.m.', value: 4, tax: .2 / 100},
    {display: '5x com juros de 0,25% a.m.', value: 5, tax: .25 / 100},
    {display: '6x com juros de 0,3% a.m.', value: 6, tax: .3 / 100},
    {display: '7x com juros de 0,35% a.m.', value: 7, tax: .35 / 100},
    {display: '8x com juros de 0,4% a.m.', value: 8, tax: .4 / 100},
    {display: '9x com juros de 0,45% a.m.', value: 9, tax: .45 / 100},
    {display: '10x com juros de 0,5% a.m.', value: 10, tax: .5 / 100},
    {display: '11x com juros de 0,75% a.m.', value: 11, tax: .75 / 100},
    {display: '12x com juros de 1,0% a.m.', value: 12, tax: 1 / 100},
  ]

  validateNumberOnly(keyboardEvent: KeyboardEvent): void {
    if(isNaN(parseInt(keyboardEvent.key))) {
      keyboardEvent.preventDefault();
    };
  }

  updateParcel(): void {
    const parcelOption = this.parcelOptions.find((option) => {
      return option.value === this.selectedParcelOption;
    });

    if(parcelOption !== undefined) {
      this.parcelChange.emit(parcelOption);
    }
  }

}
