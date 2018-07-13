import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonacoEditorModule, COMPLETION_PROVIDERS } from 'ngx-monaco';

import { TravisCompletionService } from './providers/travis-completion.service';
import { SafePipe } from './pipes/safe.pipe';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MonacoEditorModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{ provide: COMPLETION_PROVIDERS, useClass: TravisCompletionService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
