import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boleto',
  imports: [CommonModule],
  templateUrl: './boleto.component.html',
  styleUrl: './boleto.component.css'
})
export class BoletoComponent {

  @ViewChild('textToCopy') textToCopy!: ElementRef;

  showMessage: boolean = false;

  copyText(event: Event) {
    event.preventDefault();

    const textElement = this.textToCopy.nativeElement;
    const textToCopy = textElement.innerText || textElement.textContent;

    if(textToCopy) {
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        this.showFeedbackMessage();
      })
      .catch(err => {
        console.error('Falha ao copiar o código', err);
      });
    }
  }
  showFeedbackMessage(): void {
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }

  openPrinter(event: Event): void {
    event.preventDefault();
    window.print();
  }

}
