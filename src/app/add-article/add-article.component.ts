import { Component, OnInit } from '@angular/core';
import {User} from '../Mod/User';
import {Article} from '../Mod/Article';
import {MarqueService} from '../marqueService/services.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  article:Article = new Article();
  idart:any;
  public ListMark: any;
  public ListCat: any;
  public timestamp: any;
  // @ts-ignore
  public editPhoto: boolean;
  // @ts-ignore
  public selectedFiles;
  // @ts-ignore
  public progress: number;
  public currentFileUpload: any;
  public CurrentArticle:any
  public currentTime: number=0;
  constructor(private Service : MarqueService, private  router : Router,private toastr :ToastrService) { }


  ngOnInit() {
    this.onSelectMark();
    this.onSelectCat();
  }
  saveProd(data: any) {

    this.Service.saveArticle(data)
      .subscribe(data => {
        console.log(data)
        this.CurrentArticle=data
        this.toastr.success('un nouveau Article a été ajouté')
       // this.router.navigate(['article']);
      }, err => {
        this.toastr.error("Une Erreur dans la saisie ")
        console.log(err);
      })
  }
  onSelectMark(){
    this.Service.getmarks().subscribe(data=>{
      console.log(data)
      this.ListMark=data

    },err=>{
      console.log(err);
    })
  }
  onSelectCat(){
    this.Service.getCateg().subscribe(data=>{
      console.log(data)
      this.ListCat=data

    },err=>{
      console.log(err);
    })
  }

  uploadPhoto() {
    this.progress = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.Service.uploadPhoto(this.currentFileUpload, this.CurrentArticle.id).subscribe(event =>{
      this.toastr.info('Fin du Téléchargement de la photo!')
      /* if (event.type === HttpEventType.UploadProgress){
         // @ts-ignore
         this.progress = Math.round(100 * event.loaded / event.total);
         console.log(this.progress);
       }else if (event instanceof HttpResponse){
         alert("Fin de téléchargement.....")
         //this.getProducts('/products/search/selectedProducts');
         this.currentTime=Date.now();
         this.route.navigateByUrl("/Home");
       }*/
      this.router.navigateByUrl("/article")
    },err=>{
      alert("Problème de chargement ");
    })
    this.selectedFiles = undefined
  }

  // @ts-ignore
  onSelectedFile(event) {
    this.selectedFiles=event.target.files;
  }
  getTS() {
    return this.timestamp;
  }
  onEditPhoto(b: any) {
    this.article=b;
    this.editPhoto=true;
  }


}
