import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreditCardComponent } from './credit-card/credit-card.component';
import { PixComponent } from './pix/pix.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { BoletoComponent } from './boleto/boleto.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentWaysComponent } from './payment-ways/payment-ways.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreditCardComponent, PaymentComponent, PaymentWaysComponent, CommonModule, FormsModule, PixComponent, DebitCardComponent, BoletoComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-components';
}
