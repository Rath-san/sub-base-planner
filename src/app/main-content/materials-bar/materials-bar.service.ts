import { Injectable } from '@angular/core';
import { MainService } from '../../shared/services/main.service';

@Injectable()
export class MaterialsBarService {

  items;
  materials: any = {
    raw: [],
    basic: [],
    advanced: []
  };


  constructor(
    private _ms: MainService
  ) {
    this.items = _ms.itemsInBar;
    this.materials.raw = _ms.bom;
    // this.materials = this.items.materials;
    // console.log(this.items);

  }

  getRawTotal() {
    console.log(this.materials);
  }


  // getMaterialFromItem() {
  //   this.items.forEach(element => {
  //     const mr = element.materials.raw;
  //     const m = this.materials;
  //     // get raw
  //     if (mr) {
  //       mr.forEach(material => {
  //         m.raw.push(material);
  //         console.log(this.materials);
  //       });
  //     }
  //   });
  // }

  compare(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

}
