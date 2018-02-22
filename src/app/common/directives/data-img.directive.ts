import { Directive } from '@angular/core';

@Directive({
  selector: '[appDataImg]'
})
export class DataImgDirective {

  constructor() {
    console.log(1)
  }

}
