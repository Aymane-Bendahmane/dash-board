import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { MarqueService } from '../marqueService/services.service';
import { Marque } from '../Mod/Marque';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public currentMarque:any;
  mark:Marque=new Marque();
  constructor(public dialog: MatDialog,public Service:MarqueService,public router :Router) { }
  

  ngOnInit() {
    
  }
  saveMarque(data: any) {

    this.Service.saveMarque(data)
      .subscribe(data => {
        console.log(data)
        alert("effectué !");
        this.router.navigate(['marque']);

      }, err => {
        console.log(err);
      })
  }

}
