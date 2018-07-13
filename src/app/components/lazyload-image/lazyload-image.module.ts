import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

import { LazyloadImageComponent } from './lazyload-image.component';
import { GalleryModule, } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';

import { MatButtonModule, MatCardModule, MatToolbarModule, MatMenuModule, MatSnackBarModule } from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LazyLoadImageModule,
    LazyLoadImagesModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatSnackBarModule,
    RouterModule.forChild([{ path: '', component: LazyloadImageComponent }])
  ],
  declarations: [LazyloadImageComponent],
  exports: [LazyloadImageComponent],
  entryComponents: [LazyloadImageComponent],
})
export class LazyloadImageModule { }
