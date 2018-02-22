import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from '../../shared/services/main.service';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Input() simple: boolean;
  @Input() item;
  @Input() index;

  @Output() emitItem: EventEmitter<Item> = new EventEmitter();
  @Output() removeFromBar: EventEmitter<any> = new EventEmitter();

  itemImage;
  itemText;

  constructor(private ms: MainService) { }

  ngOnInit() {
    this.itemImage = this.item.image;
    this.itemText = this.item.text;
  }

  returnItem(i) {
    this.emitItem.emit(i);
  }

}
