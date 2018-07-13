import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadChildren: './components/lazyload-image/lazyload-image.module#LazyloadImageModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
