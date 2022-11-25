import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/model';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public product!: Iproduct | undefined;
  public prodId: number = 1;
  public canEdit: number = 1;
  constructor(private productsService: ProductsService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.product = this.productsService.getProduct(this.prodId);
    // this.prodId = +this.route.snapshot.params["id"];

    this.route.params
        .subscribe((myParams: Params) => {
          this.prodId = +myParams['id']
          this.product = this.productsService.getProduct(this.prodId);
        })

  }

}
