import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonacoEditorModule, COMPLETION_PROVIDERS } from 'ngx-monaco';

import { TravisCompletionService } from './providers/travis-completion.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [{ provide: COMPLETION_PROVIDERS, useClass: TravisCompletionService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
