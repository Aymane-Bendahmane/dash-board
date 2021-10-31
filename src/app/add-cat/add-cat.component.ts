import { Component, OnInit } from '@angular/core';
import {Marque} from '../Mod/Marque';
import {MarqueService} from '../marqueService/services.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Category} from '../Mod/Category';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.scss']
})
export class AddCatComponent implements OnInit {
  cat:Category = new Category();
  constructor(private Service : MarqueService, private  router : Router,private toastr :ToastrService) { }

  ngOnInit() {
  }
  saveCAT(data: any) {

    this.Service.saveCategory(data)
      .subscribe(data => {
        console.log(data)
        this.toastr.success("Votre Category a été ajouté !")
        this.router.navigate(['category']);

      }, err => {
        console.log(err);
      })
  }

}

