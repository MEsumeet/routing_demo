import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/model';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product!: Iproduct | undefined;
  public id:number = 1;
  constructor(private productsService: ProductsService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    // this.product = this.productsData.getProduct(this.id);

    // this.id = +this.route.snapshot.params["id"];
    this.route.params
        .subscribe((myParams: Params) => {
          if(myParams['id']) {
            this.id = +myParams['id'];
          }
          this.product = this.productsService.getProduct(this.id);
        })
  }

  public goToEditProduct(): void {
    this.router.navigate(['/products', this.id, 'edit'], {queryParamsHandling: 'preserve'});
  }

}
