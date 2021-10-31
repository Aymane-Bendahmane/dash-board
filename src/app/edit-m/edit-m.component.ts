import { Component, OnInit } from '@angular/core';
import {Marque} from '../Mod/Marque';
import {ActivatedRoute, Router} from '@angular/router';
import {MarqueService} from '../marqueService/services.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-m',
  templateUrl: './edit-m.component.html',
  styleUrls: ['./edit-m.component.scss']
})
export class EditMComponent implements OnInit {

  mark:Marque
  mr: Object = new Marque();
  idMark: number;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private Ss: MarqueService,private toastr:ToastrService) {
    this.idMark = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.Ss.getMarkByid(this.idMark)
      .subscribe(data => {
        // @ts-ignore
        this.mark = data;

      }, error => {
        console.log(error);
      });

  }

  updateMark() {
    this.Ss.onUpdateMark(this.mark)
      .subscribe(data => {
        console.log(data);
      this.toastr.success('Marque modifier avec succés !')

        this.router.navigate(['marque']);
      }, error => {
        console.log(error);
        alert('Probleme !');
      });

  }
}
