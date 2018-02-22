import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { Item } from './item';
import { Material } from './material';
import { log } from 'util';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.sass']
})
export class MainContentComponent implements OnInit {

  items: Item[] = [
    new Item(
      {
        url: 'https://picsum.photos/200/200/?random',
        alt: 'image\'s alt'
      },
      {
        title: '1 title.',
        description: 'description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, doloribus.'
      },
      {
        raw: [
          {name: 'a1', url: 'https://picsum.photos/200/200/?random', count: 3},
          {name: 'r2', url: 'https://picsum.photos/200/200/?random', count: 2},
          {name: 'r3', url: 'https://picsum.photos/200/200/?random', count: 1}
        ],
        basic: [],
        advanced: []
      }
    ),
    new Item(
      {
        url: 'https://picsum.photos/200/200/?random',
        alt: 'image\'s alt'
      },
      {
        title: '1 title.',
        description: 'description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, doloribus.'
      },
      {
        raw: [
          { name: 'b1', url: 'https://picsum.photos/200/200/?random', count: 3 },
          { name: 'c2', url: 'https://picsum.photos/200/200/?random', count: 2 },
          { name: 'r3', url: 'https://picsum.photos/200/200/?random', count: 1 }
        ],
        basic: [],
        advanced: []
      }
    ),
    new Item(
      {
        url: 'https://picsum.photos/200/200/?random',
        alt: 'image\'s alt'
      },
      {
        title: '1 title.',
        description: 'description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, doloribus.'
      },
      {
        raw: [
          { name: 'r1', url: 'https://picsum.photos/200/200/?random', count: 3 },
          { name: 'gh2', url: 'https://picsum.photos/200/200/?random', count: 2 },
          { name: 'r3', url: 'https://picsum.photos/200/200/?random', count: 1 }
        ],
        basic: [],
        advanced: []
      }
    )
  ];

  itemsInBar: Item[] = [];

  materialsInBom: {
    raw: Material[],
    basic: Material[],
    advanced: Material[]
  } = {
    raw: [],
    basic: [],
    advanced: []
  };

  constructor(private ms: MainService) {}

  ngOnInit() {

  }

  addToBar(i) {
    this.itemsInBar.push(i);
    this.createMaterial(i);
  }

  removeFromBar(i) {
    const index = this.itemsInBar.indexOf(i);
    this.itemsInBar.splice(index, 1);
  }

  // create new material
  createMaterial(i: Item) {
    i.getMaterialsRaw().forEach((v: Material) => {

      // check if material is alrdy in raw return similar element
      const r = this.materialsInBom.raw.find(element => v.name === element.name);
      if (r) {
        // add to material count
        r.count += v.count;
      } else {
        // add new material
        const m = new Material(v.name, v.url, v.count);
        this.materialsInBom.raw.push(m);
      }

    });
   }

   findSimilar(array: object[], prop, item: Object) {
     const r = array.find((x, i) => {
       console.log(i);
       return x[prop] === item[prop];
      });
   }


// this.materialsInBom.raw.find(x => x.name === v.name

}
