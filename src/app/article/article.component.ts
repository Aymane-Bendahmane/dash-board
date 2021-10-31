import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { MarqueService } from '../marqueService/services.service';
import { Marque } from '../Mod/Marque';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import Swal from 'sweetalert2';


interface Iproduct{
  id:string;
  artdesignation?:string;
  prix?:number;
  qtstock?:string;
  description?:string;
  marque?:string;
  category?:string;

}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  dataSource: MatTableDataSource<Iproduct>;
  public ListCommandes = new Array()
  product: any;
  columns: string[] = ['id', 'artdesignation', 'prix', 'qtstock', 'description', 'marque', 'category', 'photo', 'actions'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private markService: MarqueService, private route: Router, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getProducts();
    this.getCommands()
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  getProducts() {

    this.markService.getProducts()
      .subscribe(data => {
        this.product = data;


        this.dataSource = new MatTableDataSource(this.product);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;


        console.log(data)
      }, err => {
        console.log(err);
      });
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  on

  onEditArticle(id: any) {

    this.route.navigate(['edit-article', id]);
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
        this.markService.DeleteArticle(id).subscribe(data => {
          this.toastr.info('Article supprimé!')
          this.getProducts()
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

    //}
    getCommands()
    {

      this.markService.getCommands()
        .subscribe(data => {
          this.ListCommandes.push(data);
          console.log(this.ListCommandes)
        }, err => {
          console.log(err);
        });
    }
  }

