import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchHeightCardComponent } from './match-height-card.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule, MatToolbarModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forChild([{ path: '', component: MatchHeightCardComponent }])
  ],
  declarations: [MatchHeightCardComponent],
  exports: [MatchHeightCardComponent]
})
export class MatchHeightCardModule { }
