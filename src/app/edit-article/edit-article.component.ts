import { Component, OnInit } from '@angular/core';
import {Category} from '../Mod/Category';
import {Marque} from '../Mod/Marque';
import {ActivatedRoute, Router} from '@angular/router';
import {MarqueService} from '../marqueService/services.service';
import {ToastrService} from 'ngx-toastr';
import {Article} from '../Mod/Article';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  article:Article = new Article();
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

  arti:Article
  mr: Object = new Marque();

  idarticle: number;
  private ListMark: Object;
  private ListCat: Object;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private Ss: MarqueService,private toastr:ToastrService) {
    this.idarticle = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.Ss.getarticlebyid(this.idarticle)
      .subscribe(data => {
        // @ts-ignore
        this.arti = data;
        this.CurrentArticle=data

      }, error => {
        console.log(error);
      });

    this.onSelectCat()
    this.onSelectMark()
  }

  updateArticle() {
    this.Ss.onUpdateArticle(this.arti)
      .subscribe(data => {
        console.log(data);
        this.toastr.success('Article modifié avec succés !')

        //this.router.navigate(['article']);
      }, error => {
        console.log(error);
        alert('Probleme !');
      });

  }

  onSelectMark(){
    this.Ss.getmarks().subscribe(data=>{
      console.log(data)
      this.ListMark=data

    },err=>{
      console.log(err);
    })
  }
  onSelectCat(){
    this.Ss.getCateg().subscribe(data=>{
      console.log(data)
      this.ListCat=data

    },err=>{
      console.log(err);
    })
  }
  uploadPhoto() {
    this.progress = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.Ss.uploadPhoto(this.currentFileUpload, this.CurrentArticle.id).subscribe(event =>{
      this.toastr.info('Fin du Téléchargement de la photo!')
      this.router.navigateByUrl("/articles")
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
      this.router.navigate(['article']);
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

