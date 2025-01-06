import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentWaysComponent } from './payment-ways.component';

describe('PaymentWaysComponent', () => {
  let component: PaymentWaysComponent;
  let fixture: ComponentFixture<PaymentWaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentWaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentWaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
