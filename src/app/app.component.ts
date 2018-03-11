import {
  Component,
  OnInit
} from '@angular/core';

import { DemoserviceService } from './shared/services/demoservice.service';
import { Mat } from './mat';
// import 'rxjs/Rx';
import { promise } from 'protractor';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'http test for wiki fandom';

  private loading: boolean = false;

  images: any[];
  public imageTitles: string[];

  public data;
  public dataString;
  public dataText;

  // resources
  raw;
  basic;
  advanced;
  electronics;
  materials;

  // components
  basePieces;
  interiorModules;

  // mts / bom
  selectedItems;
  materialsInBom;

  constructor(
    private demoService: DemoserviceService
  ) { }

  ngOnInit() {
    this.demoService.fetchAdvanced();
    this.demoService.fetchBasic();
    this.demoService.fetchRaw();
    this.demoService.fetchElectronics();

    this.demoService.materials.subscribe(v => {
      if (!v.includes(null)) {
        this.materials = v;
      }
    });

    this.demoService.fetchBasePieces();
    this.demoService.basePieces.subscribe(c => {
      if (c) {
        this.basePieces = c;
      }
    });

    this.demoService.fetchInteriorModules();
    this.demoService.interiorModules.subscribe(m => {
      if (m) {
        this.interiorModules = m;
      }
    });

    this.demoService.itemSelectedObservable.subscribe(mat => {
      this.selectedItems = mat;
    });

    this.demoService.materialsInBOMObservable.subscribe(m => {
      this.materialsInBom = m;
    });

  }

  updateMaterial(m: Mat) {
    /* update material after picking it */
    const updatePromise = new Promise((res, rej) => {

      if (m.mats.length > 0) {
        res('has mats');
      } else {
        if (m.type !== 'Raw Materials') {
          this.demoService.findComposites(this.demoService.makeId(m.type), m.name).then(x => {
            const o = this.demoService.searChMaterialsArray(x, this.materials);
            o.forEach(oMat => {
              this.updateMaterial(oMat); // updates existing mats
            });

            /*fixes*/
            if (m.name === 'Room') {
              o.find(oX => {
                if (oX.name === 'Titanium') {
                  oX.count = 6;
                  return oX;
                }
              });
            } else if (m.name === 'Scanner Room') {
              o.find(oX => {
                if (oX.name === 'Titanium') {
                  oX.count = 5;
                  return oX;
                }
              });
            } else if (m.name === 'Thermal Plant') {
              o.find(oX => {
                if (oX.name === 'Titanium') {
                  oX.count = 5;
                  return oX;
                }
              });
            } else if (m.name === 'Alien Containment') {
              o.find(oX => {
                if (oX.name === 'Glass') {
                  oX.count = 5;
                  return oX;
                }
              });
            } else if (m.name === 'Titanium Ingot') {
              o.find(oX => {
                if (oX.name === 'Titanium') {
                  oX.count = 10;
                  return oX;
                }
              });
            }

            m.mats = o;
          }).then(x => {
            res(m);
          });
        } else {
          // console.log('it\'s raw');
        }
      }
    });
    return updatePromise;
  }

  logComposite(m: Mat) {
    this.updateMaterial(m).then(x => {
      this.demoService.addToSelected(m);
    });
  }

  removeFromSelected(m) {
    this.demoService.removeFromSelected(m);
  }

}


