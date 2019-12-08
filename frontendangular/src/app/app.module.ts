import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
//import {PersonListComponent } from './personlist/personlist.component';
//import {PersonDetailComponent } from './persondetail/persondetail.component';
//import {PersonEditComponent } from './personedit/personedit.component';
//import {CourseListComponent } from './courselist/courselist.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
