import { Injectable } from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Material } from './material';
import { log } from 'util';

@Injectable()
export class MainService {

  apiRoot: string = 'api.php?action=query&format=json&prop=images&imlimit=100&titles=';

  imageUrl: string = '//subnautica.wikia.com/wiki/Special:FilePath/';

  results: Object[];
  loading: boolean;

  data;

  items: any[] = [];
  itemsInBar: any[] = [];
  materials: any[] = [];
  bom: any = {
    raw: []
  };

  // this.filter = Observable.of(myFilter);


  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }


  getItemsInBar(): Observable<any> {
    return of(this.itemsInBar);
  }

  getImages(title: string) {
    const apiUrl = `${this.apiRoot}${title}`;
    // let apiUrl = `api.php?action=query&format=json&prop=images&titles=Habitat%20Builder`
    this.http.get(apiUrl)
      .map(res => res.json())
      .subscribe(
      data => {
        this.data = data;
        // console.log(data);
      }
      );
  }

  // addToBar(i) {
  //   this.itemsInBar.push(i);
  //   this.addToBom(i);
  // }

  // removeFromBar(i) {
  //   const index = this.itemsInBar.indexOf(i);
  //   this.itemsInBar.splice(index, 1);
  //   // this.removeFromBOM(i)
  // }

  addToBom(i) {
    const itemRaw = i.materials.raw;
    itemRaw.forEach(element => {
      const copy = JSON.parse(JSON.stringify(this.bom)); // copy array not reference
      const obj = copy.raw.find(o => o.name === element.name);
      if (copy.raw.length === 0) {
        copy.raw.push(element);
      } else {
        if (obj) {
          obj.count += element.count;
        } else {
          copy.raw.push(element);
        }
      }
      this.bom = copy;
    });
  }
  // search image by title ex.: Blue Palm Seed.png
  getImage(fileName: string) {
    return `http://subnautica.wikia.com/wiki/Special:FilePath/${fileName}`;
  }

  logData() {
    console.log(this.itemsInBar);
  }

  removeFromBOM(i) {
    const mats = i.materials;
  }

}
