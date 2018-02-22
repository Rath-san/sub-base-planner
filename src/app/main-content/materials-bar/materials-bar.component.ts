import { Component, OnInit, Input } from '@angular/core';
import { Material } from '../../shared/services/material';

@Component({
  selector: 'app-materials-bar',
  templateUrl: './materials-bar.component.html',
  styleUrls: ['./materials-bar.component.sass']
})
export class MaterialsBarComponent implements OnInit {

  @Input() materials: {
    raw: Material[],
    basic: Material[],
    advanced: Material[]
  };

  constructor() {}

  ngOnInit() {
  }

}
