import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './personlistall/personlistall.component';
import { PersonDetailComponent } from './persondetail/persondetail.component';
import { NewPersonComponent } from './newperson/newperson.component';
import { PersonEditComponent } from './personedit/personedit.component';

const routes: Routes = [
  {
    path: 'pessoas',
    component: PeopleComponent,
    data: { title: 'Lista de pessoas' }
  },
  {
    path: 'person-detail/:id',
    component: PersonDetailComponent,
    data: { title: 'Detalhe da pessoa' }
  },
  {
    path: 'new-person',
    component: NewPersonComponent,
    data: { title: 'Adicionar pessoa' }
  },
  {
    path: 'produto-editar/:id',
    component: ProdutoEditarComponent,
    data: { title: 'Editar pessoa' }
  },
  { path: '',
    redirectTo: '/People',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
