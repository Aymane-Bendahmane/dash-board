import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import { MarqueService } from '../marqueService/services.service';
import { Marque } from '../Mod/Marque';
import {DefaultComponent} from '../layouts/default/default.component';
import {ToastrService} from 'ngx-toastr';
import Swal from 'sweetalert2';
interface Imark{
  id:string;
  marqNom?:string;


}
@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.scss']
})
export class MarqueComponent implements OnInit {
  dataSource:MatTableDataSource<Imark>;
  marks:any;
  err:void
  columns: string[] = ['id','marqNom','actions'];
  @ViewChild(MatSort, {static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(private markService:MarqueService,public dialog:MatDialog,private router:Router,private toastr:ToastrService) {
  //   this.marks = [{
  //     id: '1',
  //     marqNom:'lol',

  //   },
  //   {
  //     id: '2',
  //     marqNom:'ekko',

  //   },


  // ];

   }


  ngOnInit() {
    this.getMs();



  }
  openDialog() {
    this.dialog.open(DialogComponent);
  }
  getMs(){

      this.markService.getmarks()
      .subscribe(data=>{
        this.marks=data;


        this.dataSource = new MatTableDataSource(this.marks);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;


        console.log(data)
      },err=>{
        console.log(err);
      });
  }
  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEditMarque(id:any) {

    this.router.navigate(['edit-m',id]);
  }

  DeleteMarkwithAr(id){
    this.markService.deleteMrkandArticle(id)
      .subscribe(data=>{
        this.toastr.info('marque supprimé')

        this.getMs()
      },err=>{
        this.toastr.error('Impossible de supprimer cette marque existe deja dans une commande!')
      })

  }

  /*onDeleteM(id){
    Swal.fire({
      title: 'Are you sure want to remove this item?',
      text: 'You will not be able to recover the item',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.markService.deleteMrkandArticle(id)
          .subscribe(data=>{
            this.toastr.info('marque supprimé')

            this.getMs()
          },err=>{
            this.toastr.error('Impossible de supprimer cette marque existe deja dans une commande!')
          })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your item is safe :)',
          'error'
        )
      }
    })


  }*/
   onDeleteM(id){
      Swal.fire({
        title: 'La suppression de cette marque entrainera la perte de tout ses articles!',
        text: 'Voulez vous continuer?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.markService.deleteMrkandArticle(id)
            .subscribe(data=>{
              this.toastr.info('marque supprimé')

              this.getMs()
            },err=>{
              this.toastr.error('Impossible de supprimer cette marque existe deja dans une commande!')

            })



        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Your item is safe :)',
            'error'
          )
        }
      })
    }




  // onEditMarque(m) {
  //   let url = m._links.self.href;

  //   this.router.navigateByUrl("/edit-marque/"+btoa(url));
  // }

}
