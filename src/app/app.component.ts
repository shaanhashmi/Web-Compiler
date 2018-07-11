import { Component, ViewChild, ElementRef } from '@angular/core';
import { MonacoFile, MonacoEditorService } from 'ngx-monaco';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Javascript';
  url: string;
  output: any;
  content: string;
  files: MonacoFile = {
    uri: 'index.js',
    language: 'javascript',
    content: `console.log('Hello World');`
  };
  logMessages: any[];
  constructor(private mns: MonacoEditorService) {
    this.content = this.files.content;
    setTimeout(() => {
      this.url = 'https://interactive-examples.mdn.mozilla.net/pages/js/globalprops-eval.html?origin=http://localhost:4200'
    }, 2000)
  }

  ngOnInit() {
  }

  onFileChange(ev) {
    this.content = ev.content;
  }

  execute() {
    const value = this.content.split(/[\^$.|?*+']/).join(" ");
    // console.log(this.output())
    const fi = value.indexOf("(") + 1;
    const li = value.lastIndexOf(")");
    this.output = value.substring(fi, li);

    // console.log(typeof +this.output);
    // if (typeof this.output)
    if (!this.content)
      this.output = 'undefined';
    else
      this.output = eval(this.content).toString();
  }
}
