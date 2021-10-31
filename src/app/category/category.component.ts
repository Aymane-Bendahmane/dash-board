import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MarqueService} from '../marqueService/services.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import Swal from 'sweetalert2';
interface Icat{
  id:string;
  catNom?:string;


}
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  dataSource:MatTableDataSource<Icat>;
  categs:any;
  columns: string[] = ['id','catNom','actions'];
  @ViewChild(MatSort, {static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(private markService:MarqueService,public dialog:MatDialog,private router:Router,private toastr:ToastrService) {
  }
  ngOnInit() {
    this.getCat();
  }
  getCat(){

    this.markService.getCateg()
      .subscribe(data=>{
        this.categs=data;


        this.dataSource = new MatTableDataSource(this.categs);
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
  onEditCate(id:any) {

    this.router.navigate(['edit-cat',id]);
  }

  onDeleteCat(id) {
    Swal.fire({
      title: 'La suppression de cette marque entrainera la perte de tout ses articles!',
      text: 'Voulez vous continuer?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.markService.DeleteCategorie(id)
          .subscribe(data=>{
            this.toastr.info('marque supprimé')

            this.getCat()
          },err=>{
            this.toastr.error('Impossible de supprimer cette categorie occupe plusieurs articles!')

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

}
