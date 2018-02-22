import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DemoserviceService } from './demoservice.service';

import { AppComponent } from './app.component';
import { DataImgDirective } from './common/directives/data-img.directive';
import { ImageComponent } from './image/image.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FiltersComponent } from './main-content/filters/filters.component';
import { MaterialsBarComponent } from './main-content/materials-bar/materials-bar.component';
import { ItemComponent } from './main-content/item/item.component';
import { ItemMiniComponent } from './main-content/items-bar/item-mini/item-mini.component';
import { MainService } from './shared/services/main.service';
import { MaterialComponent } from './main-content/materials-bar/material/material.component';
import { BaseComponent } from './base/base.component';
import { MaterialsBarService } from './main-content/materials-bar/materials-bar.service';


@NgModule({
  declarations: [
    AppComponent,
    DataImgDirective,
    ImageComponent,
    NavbarComponent,
    MainContentComponent,
    FiltersComponent,
    MaterialsBarComponent,
    ItemComponent,
    ItemMiniComponent,
    MaterialComponent,
    BaseComponent
  ],
  entryComponents: [ImageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DemoserviceService,
    MainService,
    MaterialsBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
