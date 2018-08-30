import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Elements, Element as StripeElement, StripeService, ElementsOptions } from 'ngx-stripe';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



/**
 * @title Dialog Overview
 */
@Component({
  selector: 'checkout-page',
  template: `
  <mat-toolbar>
  <div class="d-flex justify-content-between w-100">
    <h2>Techguy</h2>
    <div>
      <button mat-button>Home</button>
      <button mat-button [matMenuTriggerFor]="menu">Gallary</button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>Gallary 1</button>
        <button mat-menu-item>Gallary 2</button>
      </mat-menu>
      <button mat-button>Service</button>
      <button mat-button>About</button>
    </div>
  </div>
</mat-toolbar>
    <div class="container strip-form text-center">
      <button mat-raised-button color="primary" (click)="openDialog()">CHECKOUT</button>
    </div>
  `
})
export class CheckoutPageExample {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(StripePaymentComponent, {
      width: '560px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.css']
})
export class StripePaymentComponent implements OnInit {
  public dialogRef: MatDialogRef<StripePaymentComponent>

  error: string;
  elements: Elements;
  card: StripeElement;
  stripeTest: FormGroup;
  elementsOptions: ElementsOptions = {
    locale: 'en'
  };

  constructor(
    private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private stripeService: StripeService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.stripeService.elements(this.elementsOptions)
      .subscribe(elements => {
        this.elements = elements;
        console.log(elements)
        // Only mount the element the first time
        if (!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                lineHeight: '24px',
                fontFamily: 'monospace',
                fontSmoothing: 'antialiased',
                fontSize: '19px',
                '::placeholder': {
                  color: 'purple'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }

  buy() {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card, { name })
      .subscribe(result => {
        if (result.token) {
          console.log(result.token);
        } else if (result.error) {
          console.log(result.error.message);
        }
      });
  }

}
