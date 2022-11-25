import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/model/model';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user!: Iuser | undefined;
  public id: number = 1;
  constructor(private users: UsersService, 
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    
    // console.log(this.route.snapshot.params);
    // this.id = +this.route.snapshot.params["id"];
    // console.log(this.id);
    // this.user = this.users.getUser(this.id);
    // console.log(this.user);

    this.route.params
        .subscribe((myParams: Params) => {
          if(myParams['id']) {
            this.id = +myParams['id'];
          }
          this.user = this.users.getUser(this.id);
          // console.log(this.user);
          
        })
    

  }

}
