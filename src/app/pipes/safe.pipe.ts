import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  /**
   * 
   * @param value 
   */
  transform(value: any): any {
    console.log(value);
    if (!value)
      return null;
    else
      return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}