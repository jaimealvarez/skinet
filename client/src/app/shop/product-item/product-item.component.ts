import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product : IProduct;

  constructor(private basktetService: BasketService) { }

  ngOnInit(): void {
  }

  addItemToBasket() {
    this.basktetService.addItemToBasket(this.product);
  }

}
