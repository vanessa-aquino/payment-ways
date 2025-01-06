import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaymentOption } from '../models/payment-option.interface';
import { CommonModule } from '@angular/common';
import { PaymentWays } from '../models/payment-ways.enum';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-ways',
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-ways.component.html',
  styleUrl: './payment-ways.component.css'
})
export class PaymentWaysComponent implements OnInit {

  selectedPaymentOption = PaymentWays.CREDIT_CARD;
  @Output() paymentWayChange: EventEmitter<PaymentOption> = new EventEmitter<PaymentOption>();

  paymentOptions: Array<PaymentOption> = [
    {display: 'Pix', value: 'pix', discount: 5},
    {display: 'Cartão de Crédito', value: 'credit-card', discount: 0},
    {display: 'Cartão de Débito', value: 'debit-card', discount: 0},
    {display: 'Boleto', value: 'boleto', discount: 2.5},
  ];

  constructor() {}


  ngOnInit(): void {
    this.updatePaymentWay();
  }

  updatePaymentWay(): void {
    const paymentOption = this.paymentOptions.find((option) => {
      return option.value === this.selectedPaymentOption;
    });

    if(paymentOption !== undefined) {
      this.paymentWayChange.emit(paymentOption);
    }
  }

}
