import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { MarqueService } from '../marqueService/services.service';
import {Route, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import Swal from 'sweetalert2';
interface Iuser{
  idU:string;

   email?:string;

     userLogin?:string;
     userpassword?:string;
     sexe?:string;
     nom?:string;
     prenom?:string;
     phone?:string;
     userAddress?:string;


}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dataSource:MatTableDataSource<Iuser>;
  users:any;
  columns: string[] = ['idU','email','userLogin','sexe','nom','prenom','phone','userAddress','actions'];

  @ViewChild(MatSort, {static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(private markService:MarqueService,public dialog:MatDialog,private router:Router,private toastr :ToastrService) { }

  ngOnInit() {
    this.getUsers();
  }

applyFilter(event) {
  const filterValue = (event.target as HTMLInputElement).value;

  this.dataSource.filter = filterValue.trim().toLowerCase();
}
openDialog() {
  this.dialog.open(DialogComponent);
}
getUsers(){

    this.markService.getusers()
    .subscribe(data=>{
      this.users=data;


      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;


      console.log(data)
    },err=>{
      console.log(err);
    });
}
  odEditUser(idU:any) {

    this.router.navigate(['edit-user',idU]);
  }

  onDeleteUser(id) {
    Swal.fire({
      title: 'La suppression du user entrainera la perte de tout ses données(commande,rating)',
      text: 'Voulez vous toujours continuer?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.markService.deleteUser(id).subscribe(data=>{
          this.toastr.info('User supprimé!')
          this.getUsers()
        },err=>{
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
