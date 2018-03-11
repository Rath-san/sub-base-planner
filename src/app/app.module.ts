import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DemoserviceService } from './shared/services/demoservice.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './base/navbar/navbar.component';
import { BaseComponent } from './base/base.component';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';
import { MaterialModule } from './shared/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BaseComponent,
    SpinnerLoaderComponent
  ],
  // entryComponents: [ImageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DemoserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
