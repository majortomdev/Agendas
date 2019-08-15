import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared_service/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
    private users: User [];
    constructor(private myUserService: UserService) { }

  // ngOnInit() {
  //   this.myUserService.getUsers().subscribe((users)=>{
  //     console.log(users);
  //     this.users=users;
  //   }, (error) => {
  //     //console.log(error);
  //   })
  // }


  ngOnInit(){
        console.log("weeheee it works...");
  }

}
