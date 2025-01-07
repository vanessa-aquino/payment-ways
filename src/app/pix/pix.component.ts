import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pix',
  imports: [CommonModule],
  templateUrl: './pix.component.html',
  styleUrl: './pix.component.css'
})
export class PixComponent {
  @ViewChild('textToCopy') textToCopy!: ElementRef<HTMLInputElement>;

  showMessage: boolean = false;

  copyText(event: Event): void {
    event.preventDefault();

    const textElement = this.textToCopy.nativeElement;
    const textToCopy = textElement.value;

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
}
