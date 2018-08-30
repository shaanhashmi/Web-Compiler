import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripePaymentComponent, CheckoutPageExample } from './stripe-payment.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CheckoutPageExample }]),
    NgxStripeModule.forRoot('pk_test_tWNP3MtnapIp5N91YvY4uLFc'),
  ],
  declarations: [StripePaymentComponent, CheckoutPageExample],
  exports: [StripePaymentComponent, CheckoutPageExample],
  entryComponents: [StripePaymentComponent],
  providers: []
})
export class StripePaymentModule { }
