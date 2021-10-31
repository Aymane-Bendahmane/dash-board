import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { MarqueService } from '../marqueService/services.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import Swal from 'sweetalert2';
interface Icommand{
  id:string;
  date?:string;
  total?:number;
  cmdDesc?:string;
  articles?:string;
  category?:string;

}

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  dataSource:MatTableDataSource<Icommand>;
  commands: any;
  columns: string[] = ['id','date','total','cmdDescription','userr','actions'];

  @ViewChild(MatSort, {static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private Service:MarqueService,private toastr :ToastrService) {



  this.dataSource = new MatTableDataSource(this.commands);
   }

   openDialog() {
    this.dialog.open(DialogComponent);
  }
  ngOnInit() {
 this.getCommands();
  }
  getCommands(){

    this.Service.getCommands()
    .subscribe(data=>{
      this.commands=data;
      console.log(this.commands)

      this.dataSource = new MatTableDataSource(this.commands);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;



    },err=>{
      console.log(err);
    });
}
  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDeleteArticle(id) {
    Swal.fire({
      title: 'Are you sure want to remove this item?',
      text: 'You will not be able to recover the item',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.Service.deleteCommande(id).subscribe(data => {
          this.toastr.info('Commande supprimé!')
          this.getCommands()
        }, err => {
          console.log(err);
        });
        Swal.fire(
          'Deleted!',
          'Your Item is deleted',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your item is safe :)',
          'error'
        )
      }
    })


  }
}
