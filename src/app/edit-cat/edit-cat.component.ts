import { Component, OnInit } from '@angular/core';
import {Marque} from '../Mod/Marque';
import {ActivatedRoute, Router} from '@angular/router';
import {MarqueService} from '../marqueService/services.service';
import {ToastrService} from 'ngx-toastr';
import {Category} from '../Mod/Category';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.scss']
})
export class EditCatComponent implements OnInit {

  cate:Category
  mr: Object = new Marque();
  idCat: number;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private Ss: MarqueService,private toastr:ToastrService) {
    this.idCat = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.Ss.getCatbyId(this.idCat)
      .subscribe(data => {
        // @ts-ignore
        this.cate = data;

      }, error => {
        console.log(error);
      });

  }

  updateCatego() {
    this.Ss.onUpdateCat(this.cate)
      .subscribe(data => {
        console.log(data);
        this.toastr.success('Categorie modifié avec succés !')

        this.router.navigate(['category']);
      }, error => {
        console.log(error);
        alert('Probleme !');
      });

  }
}
