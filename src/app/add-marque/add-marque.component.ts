import { Component, OnInit } from '@angular/core';
import {MarqueService} from '../marqueService/services.service';
import {Router} from '@angular/router';
import {Marque} from '../Mod/Marque';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marque.component.html',
  styleUrls: ['./add-marque.component.scss']
})
export class AddMarqueComponent implements OnInit {
 marque:Marque = new Marque();
  constructor(private Service : MarqueService, private  router : Router,private toastr :ToastrService) { }

  ngOnInit() {
  }
  saveMarque(data: any) {

    this.Service.saveMarque(data)
      .subscribe(data => {
        console.log(data)
        this.toastr.success("Votre Marque a été ajouté !")
        this.router.navigate(['marque']);

      }, err => {
        console.log(err);
      })
  }

}
