import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonlistallComponent } from './personlistall/personlistall.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CourselistComponent } from './courselist/courselist.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MenuComponent } from './menu/menu.component';
import {  
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatExpansionModule,
  MatBadgeModule, } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NewPersonComponent } from './new-person/new-person.component';
//import {PersonListComponent } from './personlist/personlist.component';
import {PersonDetailComponent } from './persondetail/persondetail.component';
import {PersonEditComponent } from './personedit/personedit.component';
import { MainNavComponent } from './main-nav/main-nav.component';
//import {CourseListComponent } from './courselist/courselist.component';
import { NgxMaskModule } from 'ngx-mask';
import { CourselistcheckboxComponent } from './courselistcheckbox/courselistcheckbox.component';
//import {routingComponents} from './app-routing.module';
 

@NgModule({
  declarations: [
    AppComponent,
    PersonlistallComponent,
    CourselistComponent,
    HomeComponent,
    NewPersonComponent,
    PersonDetailComponent,
    PersonEditComponent,
    MainNavComponent,
    routingComponents,
    CourselistcheckboxComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,  
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    NgxMaskModule.forRoot({
      validation: true,
    }),
   
    //HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
