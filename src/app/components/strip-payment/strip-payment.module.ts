import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxStripeModule } from 'ngx-stripe';

import { StripPaymentComponent } from './strip-payment.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([{ path: 'stripe-payment-gateway', component: StripPaymentComponent }]),
    NgxStripeModule.forRoot("pk_test_tWNP3MtnapIp5N91YvY4uLFc")
  ],
  declarations: [StripPaymentComponent],
  exports: [StripPaymentComponent]
})
export class StripPaymentModule { }
