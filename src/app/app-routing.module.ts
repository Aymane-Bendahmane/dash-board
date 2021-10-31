import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CommandeComponent } from './commande/commande.component';
import { DialogComponent } from './dialog/dialog.component';
import { DefaultComponent } from './layouts/default/default.component';
import { MarqueComponent } from './marque/marque.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UsersComponent } from './users/users.component';
import {AddMarqueComponent} from './add-marque/add-marque.component';
import {NewUserComponent} from './new-user/new-user.component';
import {AddArticleComponent} from './add-article/add-article.component';
import {AddCmdComponent} from './add-cmd/add-cmd.component';
import {EditMComponent} from './edit-m/edit-m.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {CategoryComponent} from './category/category.component';
import {AddCatComponent} from './add-cat/add-cat.component';
import {EditCatComponent} from './edit-cat/edit-cat.component';
import {EditArticleComponent} from './edit-article/edit-article.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'marque',
    component: MarqueComponent
  },
    {
      path: 'add-marque',
      component: AddMarqueComponent
    },
    {
      path: 'add-cat',
      component: AddCatComponent
    },
    {
      path: 'new-user',
      component: NewUserComponent
    },
    {
      path: 'category',
      component: CategoryComponent
    },
    {
      path: 'edit-m/:id', component: EditMComponent
    },
    {
      path: 'edit-cat/:id', component: EditCatComponent
    },
    {
      path: 'edit-article/:id', component: EditArticleComponent
    },
    {
      path: 'edit-user/:idU', component: EditUserComponent
    },
    {
      path: 'add-article',
      component: AddArticleComponent
    },
    {
      path: 'add-cmd',
      component: AddCmdComponent
    },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'article',
    component: ArticleComponent
  },
  {
    path: 'commande',
    component: CommandeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
