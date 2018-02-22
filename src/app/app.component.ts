import { Component,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild } from '@angular/core';
import { DemoserviceService } from './demoservice.service'
import { ImageComponent } from './image/image.component'
// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit, AfterContentInit {
  title = 'http test for wiki fandom';

  private loading: boolean = false;

  images: any[];
  public imageTitles: string[];

  public data
  public dataString;
  public dataText;

  @ViewChild('imgInsert', {
    read: ViewContainerRef
  }) imgInsert: ViewContainerRef;

  matches;
  result;
  constructor(
    private demoService: DemoserviceService,
    private cFR: ComponentFactoryResolver,
    private vCR: ViewContainerRef
  ) {}

  ngAfterViewInit(){
  }

  ngAfterContentInit() {
  }

  ngOnInit() {
    // this.getContent('Habitat Builder')
      // .then(
      //   () => this.getImage(this.imageTitles)
      // );
    // this.getContent('Habitat Builder')
  }

  getContent() {
    // let promise = new Promise((resolve, reject) => {
    //   this.demoService.getPageContent(title).subscribe(
    //     data => {
    //       this.data = data;
    //       this.imageTitles = this.data.parse.images;
    //     },
    //     err => reject(),
    //     () => resolve()
    //   );
    // });
    // return promise;
    this.loading = true;
    this.demoService.getPage('Habitat Builder').then( () => this.loading = false);
  }

  getImages() {

  }

  // getImage(titles) {
  //   titles.forEach(t => {
  //     this.demoService.getPageImages(t).subscribe(
  //       data => {
  //         let partUrl = JSON.stringify(data).split(',')
  //         partUrl.forEach(v => {
  //           let cleanUrl = this.cleanUrl(v)
  //           if(cleanUrl) {
  //             this.createImgComponent(cleanUrl)
  //           }
  //         })
  //       },
  //       err => console.log('error'),
  //       () => console.log('success')
  //     )
  //   })
  //
  // }

  // cleanUrl(url) {
  //   if(url.indexOf('"imageinfo":[{"url":"') !== -1) {
  //     let u = url.replace('"imageinfo":[{"url":"', '').slice(0,-1)
  //     return u
  //   }
  // }

  // createImgComponent(url) {
  //   let componentFactory = this.cFR.resolveComponentFactory(ImageComponent)
  //   let dc = <ImageComponent>this.imgInsert.createComponent(componentFactory).instance;
  //   dc.prop = url
  // }

  log(l) {
    console.log('%c' + l, 'background: blue; color: white');
  }

}
