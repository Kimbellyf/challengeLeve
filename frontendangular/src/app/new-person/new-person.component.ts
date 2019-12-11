
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})

export class NewPersonComponent implements OnInit {
  personForm: FormGroup;
  person_name: String = '';
  person_cpf: String = '';
  person_telephone: String = "";
  updated_at: Date = null;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
     this.personForm = this.formBuilder.group({
    'name' : [null, Validators.required],
    'cpf' : [null, Validators.required],
    'telephone' : [null, Validators.required]
  });
  }

  addPerson(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addPerson(form)
      .subscribe(res => {
          const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/person']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}