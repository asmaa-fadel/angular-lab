import { Component, OnInit, ViewChild  } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import  productss  from "../../assets/products.json";
import {Product} from "../interfaces/product";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild(ProductCardComponent) cardComponent: any;
  products : Array<Product> = productss;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    console.log(this.cardComponent.cardName);
  }

  alertProductName(productName: string) {
    alert(productName);
  }
}
