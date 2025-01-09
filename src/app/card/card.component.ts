import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardNumber: string = '';
  @Input() cardHolderName: string = '';
  @Input() cardValidity: string = '';
}
