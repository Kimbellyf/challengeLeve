  
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { Person } from 'src/models/person.model';

@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.component.html',
  styleUrls: ['./persondetail.component.css']
})
export class PersonDetailComponent implements OnInit {
  person: Person = { id: null, name: '', cpf: '', telephone: null };
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {
    this.getPerson(this.route.snapshot.params['id']);
  }

  getPerson(id) {
    this.api.getPerson(id)
      .subscribe(data => {
        this.person = data;
        console.log(this.person);
        this.isLoadingResults = false;
      });
  }

  deletePerson(id) {
    this.isLoadingResults = true;
    this.api.deletePerson(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/person/']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}