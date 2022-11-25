import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/model';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Iproduct[] = [];
  public selectedProduct: number = 1;

  constructor(private productsData: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsData.getProductsArr();
  }

}
