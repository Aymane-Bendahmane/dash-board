import { Component, OnInit } from '@angular/core';
import {Marque} from '../Mod/Marque';
import {ActivatedRoute, Router} from '@angular/router';
import {MarqueService} from '../marqueService/services.service';
import {ToastrService} from 'ngx-toastr';
import {User} from '../Mod/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user:User
  us: Object = new Marque();
  idUser: number;
  public ListRoles: Object;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private Ss: MarqueService,private toastr:ToastrService) {
    this.idUser = activatedRoute.snapshot.params['idU'];
  }

  ngOnInit(): void {
    this.Ss.getUserByid(this.idUser)
      .subscribe(data => {
        // @ts-ignore
        this.user = data;

      }, error => {
        console.log(error);
      });
this.onSelectRoles()
  }
  onSelectRoles(){
    this.Ss.getRoles().subscribe(data=>{
      console.log(data)
      this.ListRoles=data

    },err=>{
      console.log(err);
    })
  }

  updateUser() {
    this.Ss.updateUser(this.user)
      .subscribe(data => {
        console.log(data);
        this.toastr.success('Utilisateur modifié avec succés !')

        this.router.navigate(['users']);
      }, error => {
        console.log(error);
        alert('Probleme !');
      });

  }
}
