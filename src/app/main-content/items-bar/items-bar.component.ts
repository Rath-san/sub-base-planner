import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../shared/services/main.service'
import { Item } from '../item';

@Component({
  selector: 'app-items-bar',
  templateUrl: './items-bar.component.html',
  styleUrls: ['./items-bar.component.sass']
})
export class ItemsBarComponent implements OnInit {

  @Input() items: Item[];

  constructor(private ms: MainService) {

  }

  ngOnInit() {
  }

  // hadnleRemoveFromBar(e) {
  //   console.log(this.items.indexOf(e))
  // }

}
