import { Component, OnInit } from '@angular/core';
import {MarqueService} from '../marqueService/services.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-cmd',
  templateUrl: './add-cmd.component.html',
  styleUrls: ['./add-cmd.component.scss']
})
export class AddCmdComponent implements OnInit {
  public ListUsers: any;
  constructor(private Service : MarqueService, private  router : Router,private toastr :ToastrService) { }

  ngOnInit() {
    this.onSelectUsers();
  }
  saveCmd(data: any) {

    this.Service.saveCmd(data)
      .subscribe(data => {
        console.log(data)
        this.toastr.success('une Nouvelle Commande  a été ajouté')
        this.router.navigate(['commande']);
      }, err => {
        this.toastr.error("Une Erreur dans la saisie ")
        console.log(err);
      })
  }
  onSelectUsers(){
    this.Service.getusers().subscribe(data=>{
      console.log(data)
      this.ListUsers=data

    },err=>{
      console.log(err);
    })
  }

}
