import { Component, OnInit } from '@angular/core';
import {Marque} from '../Mod/Marque';
import {User} from '../Mod/User';
import {MarqueService} from '../marqueService/services.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  user:User = new User();
  constructor(private Service : MarqueService, private  router : Router,private toastr :ToastrService) { }


  ngOnInit() {
  }

  saveUser(data: any) {

    this.Service.saveUser(data)
      .subscribe(data => {
        console.log(data)
        this.toastr.success('un nouveau utilisateur a été ajouté')
        this.router.navigate(['users']);
      }, err => {
        this.toastr.error("Une Erreur dans la saisie ")
        console.log(err);
      })
  }

}
