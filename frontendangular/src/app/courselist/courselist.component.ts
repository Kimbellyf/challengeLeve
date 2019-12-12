import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CourselistDataSource, CourselistItem } from './courselist-datasource';
import { ApiService } from 'src/service/api.service';
import {Course} from 'src/models/course.model';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  //@ViewChild(MatTable, {static: false}) table: MatTable<CourselistItem>;
  @ViewChild(MatTable, {static: false}) table: MatTable<Course>;
  //dataSource: CourselistDataSource;
  dataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['course_enrollment', 'name'];
  isLoadingResults = true;
  constructor( private _api: ApiService) { }

  ngOnInit() {
    //this.dataSource = new CourselistDataSource();
    this._api.getCourses()
    .subscribe(res => {
      //this.dataSource = new PersonlistallDataSource();
      this.dataSource = new MatTableDataSource(res);
      //this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}