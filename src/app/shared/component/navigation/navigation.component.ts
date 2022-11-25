import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public userId:number = 1;
  public productId: number = 1;

  constructor(private usersService: UsersService, private productsService: ProductsService) { }

  ngOnInit(): void {
  }

}
