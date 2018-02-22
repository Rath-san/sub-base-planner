import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, Response } from '@angular/common/http';
import {
  Http,
  Response,
  URLSearchParams
} from '@angular/http'
import 'rxjs/Rx'
// import 'rxjs/add/operator/map'
// import { Observable } from 'rxjs/Observable';

// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

class SearchItem {
  constructor(
    public images: any,
    public sections: any,
    public text: any
  ){}
}

@Injectable()
export class DemoserviceService {
  apiRoot = '/api.php?format=json'
  apiRootPage = '&action=parse&page='
  apiAction = '&action=';
  apiTitles = '&titles=';
  apiProp = '&prop=';
  page: SearchItem[];
  pageImages;
  pageSections;
  pageText;

  constructor(private http: Http) { }

  getArticle() {
  }



  // getPageContent(pageTitle: string) {
  //   return this.http.get(this.apiRoot + pageTitle);
  // }

  getPage(pageTitle: string) {
    let promise = new Promise((resolve, reject) => {
      let search = new URLSearchParams();
      search.set('action', 'parse');
      search.set('page', pageTitle);
      this.http.get(this.apiRoot, {search: search})
        .toPromise()
        .then(
          res => {
            res.json()
            // console.log(res.json().parse)
            this.page = res.json().map(item => {
              return new SearchItem (
                  item.images,
                  item.sections,
                  item.text
              );
            });
            // this.page = res.json().parse
            // this.pageImages = res.json().parse.images
            // this.pageSections = res.json().parse.sections
            // this.pageText = res.json().parse.text['*']
            resolve()
          },
          err => {
            reject();
          }
        )
    })
    return promise;

  }

  // getPageImages(imageTitle: string) {
  //   return this.http.get('/api.php?format=json&action=query&titles=File:'+ imageTitle +'&prop=imageinfo&iiprop=url')
  // }

  searchImages(imageTitle: string) {
    let apiUrl = `${this.apiRoot}&titles=File:${imageTitle}&prop=imageinfo&iiprop=url`;
    this.http.get(apiUrl)
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data)
        }
    )
  }
}
