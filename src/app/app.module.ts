import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { UsersComponent } from './users/users.component';
import { MarqueComponent } from './marque/marque.component';
import { ArticleComponent } from './article/article.component';
import { CommandeComponent } from './commande/commande.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { MatButtonModule, MatDialog, MatDialogModule, MatFormField, MatFormFieldModule, MatHeaderCell, MatHeaderCellDef, MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import {CookieService} from 'ngx-cookie-service';
import {InterceptorService} from './Services/Authentication/interceptor.service';
import {AuthServiceService} from './Services/Authentication/auth-service.service';
import { AddMarqueComponent } from './add-marque/add-marque.component';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { NewUserComponent } from './new-user/new-user.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddCmdComponent } from './add-cmd/add-cmd.component';
import { EditMComponent } from './edit-m/edit-m.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CategoryComponent } from './category/category.component';
import { AddCatComponent } from './add-cat/add-cat.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MarqueComponent,
    ArticleComponent,
    CommandeComponent,
    DialogComponent,
    AddMarqueComponent,
    NewUserComponent,
    AddArticleComponent,
    AddCmdComponent,
    EditMComponent,
    EditUserComponent,
    CategoryComponent,
    AddCatComponent,
    EditCatComponent,
    EditArticleComponent,
  ],
  entryComponents: [DialogComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
        progressBar:true,
        progressAnimation:'decreasing'
      }),

        DefaultModule,
        FormsModule
    ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass:InterceptorService , multi: true },
    AuthServiceService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
