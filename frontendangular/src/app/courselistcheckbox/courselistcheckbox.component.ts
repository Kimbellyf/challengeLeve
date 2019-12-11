import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CourselistcheckboxDataSource, CourselistcheckboxItem } from './courselistcheckbox-datasource';

@Component({
  selector: 'app-courselistcheckbox',
  templateUrl: './courselistcheckbox.component.html',
  styleUrls: ['./courselistcheckbox.component.css']
})
export class CourselistcheckboxComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<CourselistcheckboxItem>;
  dataSource: CourselistcheckboxDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new CourselistcheckboxDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
