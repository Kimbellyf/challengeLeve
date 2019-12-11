import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PersonlistallDataSource, PersonlistallItem } from './personlistall-datasource';
import { ApiService } from 'src/service/api.service';
import {Person} from 'src/models/person.model'

@Component({
  selector: 'app-personlistall',
  templateUrl: './personlistall.component.html',
  styleUrls: ['./personlistall.component.css']
})
export class PersonlistallComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<PersonlistallItem>;
  //dataSource: PersonlistallDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name' ,'cpf'];

  dataSource: Person[];
  isLoadingResults = true;
  constructor( private _api: ApiService) { }


  ngOnInit() {
    this._api.getPersons()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
    //this.dataSource = new PersonlistallDataSource();

  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
