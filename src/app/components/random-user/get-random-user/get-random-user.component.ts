import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-get-random-user',
  templateUrl: './get-random-user.component.html',
  styleUrls: ['./get-random-user.component.css']
})
export class GetRandomUserComponent implements OnInit {

  users:User={
    results:[{
      name:{
        first:'',
        last:''
      },
      gender:'',
      email:'',
      phone:'',
      picture:{
        large:''
      }
    }]
  }

  constructor(private randomService:RandomUserService) { }

  ngOnInit(): void {
    this.randomService.getRandomUser()
    .subscribe({
      next:(response)=>{
       console.log(response);
       this.users = response;
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }

}
