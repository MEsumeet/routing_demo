import { Injectable } from '@angular/core';
import { Iproduct } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsArr: Iproduct[] = [
    {
      pid: 1,
      pName: 'Lenovo',
      pStatus: 'In Process',
      canEdit: 1
    },
    {
      pid: 2,
      pName: 'JBL',
      pStatus: 'Delievered',
      canEdit: 0
    },
    {
      pid: 3,
      pName: 'Dell',
      pStatus: 'In Process',
      canEdit: 1
    },
    {
      pid: 4,
      pName: 'Apple',
      pStatus: 'Dispatched',
      canEdit: 0
    }
  ]

  constructor() { }

  public getProductsArr(): Iproduct[] {
    return this.productsArr
  }

  public getProduct(id: number): Iproduct | undefined {
    return this.productsArr.find(prod => prod.pid === id);
  }
}
