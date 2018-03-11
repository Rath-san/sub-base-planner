import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
