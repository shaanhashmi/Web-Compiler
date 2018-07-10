import { Component, ViewChild, ElementRef } from '@angular/core';
import { MonacoFile } from 'ngx-monaco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Javascript';
  output: any;
  content: string;
  file: MonacoFile = {
    uri: 'index.js',
    language: 'javascript',
    content: `console.log('Hello')`
  };
  constructor() {
    this.content = this.file.content;
  }
  ngOnInit() {
  }

  onFileChange(file: MonacoFile) {
    this.content = file.content;
  }

  execute() {
    eval(this.content)

  }
}
