import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonlistallComponent } from './personlistall/personlistall.component';
import { PersonDetailComponent } from './persondetail/persondetail.component';
import { NewPersonComponent } from './new-person/new-person.component';
import { PersonEditComponent } from './personedit/personedit.component';
import {CourselistComponent} from './courselist/courselist.component';

const routes: Routes = [
  {
    path: 'person',
    component: PersonlistallComponent,
    data: { title: 'Lista de pessoas' }
  },
  {
    path: 'person/detail/:id',
    component: PersonDetailComponent,
    data: { title: 'Detalhe da pessoa' }
  },
  {
    path: 'person/new',
    component: NewPersonComponent,
    data: { title: 'Adicionar pessoa' }
  },
  {
    path: 'person/edit/:id',
    component: PersonEditComponent,
    data: { title: 'Editar pessoa' }
  },
  {
    path: 'courses',
    component: CourselistComponent,
    data: { title: 'Cursos' }
  },
  /*{
    path: 'courses/:course_enrollment',
    component: CourseSpecificComponent,
    data: { title: 'Cursos' }
  },*/
  { path: '',
    redirectTo: '/Person',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [PersonlistallComponent, PersonDetailComponent, PersonEditComponent,NewPersonComponent,CourselistComponent]