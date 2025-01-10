import { Component, Input, AfterViewInit } from '@angular/core';
import Cleave from 'cleave.js';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements AfterViewInit {
  @Input() cardNumber: string = '';
  @Input() cardHolderName: string = '';
  @Input() cardValidity: string = '';

  ngAfterViewInit() {
    new Cleave('#number-card', {
      creditCard: true,
      onCreditCardTypeChanged: function (type) {
        console.log('Cartão detectado', type);
      }
    });

    new Cleave('#month-input', {
      date: true,
      datePattern: ['m', 'y']
    });
  }
}
