import { Injectable } from '@angular/core';
import {
  Http,
  Response,
  URLSearchParams
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import { Mat } from '../../mat';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { merge, mapTo } from 'rxjs/operators';
import { toObservable } from '@angular/forms/src/validators';

class SearchItem {
  constructor(
    public images: any,
    public sections: any,
    public text: any
  ) { }
}

@Injectable()
export class DemoserviceService {
  apiRoot = '/api.php?format=json';
  apiRootPage = '&action=parse&page=';

  page: SearchItem[];
  pageImages;
  pageSections;
  pageText;

  rawGet = new BehaviorSubject<Mat[]>(null);
  basicGet = new BehaviorSubject<Mat[]>(null);
  advancedGet = new BehaviorSubject<Mat[]>(null);
  electronicsGet = new BehaviorSubject<Mat[]>(null);

  basePieces = new BehaviorSubject<Mat[]>(null);
  interiorModules = new BehaviorSubject<Mat[]>(null);

  materials = Observable
    .zip(
      this.electronicsGet, this.basicGet, this.advancedGet, this.rawGet,
      (...arrays) => arrays.reduce((acc, array) => [...acc, ...array], []) // zapamiętać
    );

  itemGet;

  itemsSelected = [];
  itemSelectedObservable = new Subject();
  materialsInBOM = [];
  materialsInBOMObservable = new Subject();

  constructor(private http: Http) { }

  addToSelected(m: Mat) {
    if (this.checkForSimilar(m)) {
      this.checkForSimilar(m).count++;
    } else {
      m.count++;
      this.itemsSelected.push(m);
    }
    this.itemSelectedObservable.next(this.itemsSelected);
    this.offsetAddition();
  }

  removeFromSelected(m: number) {
    this.itemsSelected[m].count--;
    if (this.itemsSelected[m].count <= 0) {
      this.itemsSelected.splice(m, 1);
    }
    this.offsetAddition();
  }

  offsetAddition() {
    setTimeout(() => {
      const toBom = this.itemsSelected.map(x => {
        const mapped = x.mats.map(e => {
          return new Mat(e.name, x.count * e.count, false, e.mats, e.type, e.subtype);
        });

        return mapped;

      });

      const merged = [].concat.apply([], toBom);
      merged.sort((a, b) => {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });

      merged.filter(x => {

      });
      this.materialsInBOM = merged;
      this.materialsInBOMObservable.next(this.materialsInBOM);
    }, 10);
  }


  checkForSimilar(m: Mat): Mat {
    const s = this.itemsSelected.find(x => {
      if (x.name === m.name) {
        return x;
      }
    });
    return s;
  }

  getItemTitle(pageTitle: string) {
    const promise = new Promise((resolve, reject) => {
      const search = new URLSearchParams();
      search.set('action', 'parse');
      search.set('page', pageTitle);
      this.http.get(
        this.apiRoot,
        { search: search }
      )
        .toPromise()
        .then(res => {
          resolve(res.json());
        },
          err => {
            reject('error');
          }
        );
    });
    return promise;
  }

  getPage(pageTitle: string) {
    const promise = new Promise((resolve, reject) => {
      const search = new URLSearchParams();
      search.set('action', 'parse');
      search.set('page', pageTitle);
      search.set('prop', 'text');
      this.http.get(
        this.apiRoot,
        { search: search }
      )
        .toPromise()
        .then(res => {
          resolve(res.json());
        },
          err => {
            reject();
          }
        );
    });
    return promise;
  }
  clearTitle(title) {
    return title.replace('.png', '');
  }

  fetchAdvanced() {
    // ADVANCED MATERIALS
    this.getItemTitle('Advanced Materials')
      .then((res: { parse: any }) => {
        const rMA = this.makeMaterial(res, 'Advanced Materials', true);
        this.advancedGet.next(rMA.slice(1));
      });
  }

  fetchBasic() {
    // BASIC MATERIALS
    this.getItemTitle('Basic Materials')
      .then((res: { parse: any }) => {
        const rMA = this.makeMaterial(res, 'Basic Materials', true);
        this.basicGet.next(rMA.slice(1));
      });
  }

  fetchRaw() {
    // RAW MATERIALS
    this.getItemTitle('Raw Materials')
      .then((res: { parse: any }) => {
        const rMA = this.makeMaterial(res, 'Raw Materials', true);
        this.rawGet.next(rMA);
      });
  }

  fetchElectronics() {
    // ELECTRONICS MATERIALS
    this.getItemTitle('Electronics')
      .then((res: { parse: any }) => {
        const rMA = this.makeMaterial(res, 'Electronic', true);
        this.electronicsGet.next(rMA.slice(1));
      });
  }

  fetchBasePieces() {
    this.getItemTitle('Seabases')
      .then((res: { parse: any }) => {
        const rMA = this.makeMaterial(res, 'Uses_in_Crafting', true);
        this.basePieces.next(rMA.slice(18));
      });
  }

  fetchInteriorModules() {
    this.getItemTitle('Interior Modules')
      .then((res: { parse: any }) => {
        const rMA = this.makeMaterial(res, 'Uses_in_Crafting', true);
        this.interiorModules.next(rMA);
      });
  }



  makeMaterial(o: { parse: any }, itemSection: string, isRaw?: boolean) {
    const itemsImages = o.parse.images;

    const itemsArray = itemsImages.map(element => {

      /* fix */
      let e = element;

      if (e === 'Aluminum_Oxide_Crystal.png') {
        e = 'Ruby.png';
      } else if (e === 'Spore_Sack.png') {
        e = 'Gel_Sack.png';
      } else if (e === 'Seamoth_Modification_Station.png') {
        e = 'Vehicle_Upgrade_Console.png';
      }

      const elementName = e.replace('.png', '').replace(/_/g, ' ');
      const nMat = new Mat(elementName, 0, false, [], itemSection);
      return nMat;

    });
    return itemsArray;
  }


  findComposites(sectionName: string, itemName: string) {


    const compositeFetch = new Promise((compositeResolve, reject) => { // error gdzieś tutaj

      if (sectionName.indexOf('Crafting') === -1) {
        this.getPage('Fabricator')
          .then((res: { parse }) => {
            const dText = (res.parse.text['*']);

            const dSection = dText.match(
              this.constructRegEx('(<h[0-9]>).*?(id="' + sectionName + ')[\\s\\S]*?Sustenance', 'g') // find section
            );
            compositeResolve(this.filterSection(dSection, itemName));

          });

      } else {

        this.getPage('Habitat_Builder')
          .then((res: { parse }) => {
            const dText = (res.parse.text['*']);

            const dSection = dText.match(
              this.constructRegEx('id="' + sectionName + '[\\s|\\S]*id="Data_Bank_Entry') // find section
            );
            compositeResolve(this.filterSection(dSection, itemName));

          });

      }

    });
    return compositeFetch;
  }

  filterSection(section: string, itemName: string) {
    if (!section) { // empty section fix
      return 0;
    } else {
      const materialRecipe = section[0].match(
        this.constructRegEx('<div.*?title="' + itemName + '?', 'g') // find item to be crafted
      );

      const materialCollection = materialRecipe[0].match(
        this.constructRegEx('<span.*?class="arrow-icon"?', 'g') // find material collection
      );
      // dodać span.inventory
      const materialsExtract = materialCollection[0].match(/(<span.*?class="recipe-icon"?.*?title=")(.*?)(")/g); // extract Materials

      const m = materialsExtract.map(element => {
        return element.match(/title="(.*?)"/)[1]; // count materials
      });
      return (m);
    }
  }

  constructRegEx(expresion: string, flag?: string) {
    const newExpresion = new RegExp(expresion, flag);
    return newExpresion;
  }

  makeId(text: string) {
    /* elo moto */
    return text.replace(/ /g, '_');
  }

  searChMaterialsArray(x, array) {
    // find duplicates: Object
    const compObject = this.countDuplicates(x);
    const maRRay = [];
    for (const oR in compObject) {
      if (compObject.hasOwnProperty(oR)) {
        const eO = oR;
        array.filter(material => { // find mat in Mat[]
          if (material.name === oR) {
            const newMat = new Mat(material.name, compObject[oR], false, material.mats, material.type);
            maRRay.push(newMat);
          }
        });
      }
    }
    return maRRay;
  }

  countDuplicates(arr): Object {
    arr.sort();
    const counts = {};
    arr.forEach(element => {
      counts[element] = (counts[element] || 0) + 1;
    });
    return counts;
  }

}
