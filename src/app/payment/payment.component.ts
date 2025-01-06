import { Component, Input, OnInit } from '@angular/core';
import { PaymentWaysComponent } from "../payment-ways/payment-ways.component";
import { CreditCardComponent } from "../credit-card/credit-card.component";
import { PaymentOption } from '../models/payment-option.interface';
import { ParcelOption } from '../models/parcel-option.interface';
import { CommonModule } from '@angular/common';
import { PixComponent } from "../pix/pix.component";
import { DebitCardComponent } from "../debit-card/debit-card.component";
import { BoletoComponent } from "../boleto/boleto.component";

@Component({
  selector: 'app-payment',
  imports: [PaymentWaysComponent, CreditCardComponent, CommonModule, PixComponent, DebitCardComponent, BoletoComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {

  totalValueStr: string = 'R$';
  @Input() totalValue: number = 0;
  selectedPaymentOption!: PaymentOption;
  selectedParcelOption!: ParcelOption;

  constructor() {}

  ngOnInit(): void {
    this.formatTotalValue();
  }

  formatTotalValue() {
    this.totalValueStr = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(this.totalValue);
  }

  updatePaymentWay(paymentOption: PaymentOption): void {
    this.selectedPaymentOption = paymentOption;
  }

  updateParcel(parcelOption: ParcelOption): void {
    this.selectedParcelOption = parcelOption;
    console.log('selecionado' + parcelOption)
  }


}
