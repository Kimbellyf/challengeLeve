import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-personedit',
  templateUrl: './personedit.component.html',
  styleUrls: ['./personedit.component.scss']
})
export class PersonEditComponent implements OnInit {
  id: number = null;
  personForm: FormGroup;
  name_person: String = '';
  cpf_person: String = '';
  telephone_person: number = null;
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getPerson(this.route.snapshot.params['id']);
    this.personForm = this.formBuilder.group({
   'name_person' : [null, Validators.required],
   'cpf_person' : [null, Validators.required],
   'telephone_person' : [null, Validators.required]
 });
 }

 getPerson(id) {
  this.api.getPerson(id).subscribe(data => {
    this.id = data.id;
    this.personForm.setValue({
      name_person: data.name,
      cpf_person: data.cpf,
      telephone_person: data.telephone,
    });
  });
}

updatePerson(form: NgForm) {
  this.isLoadingResults = true;
  this.api.updatePerson(this.id, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/person/detail/' + this.id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}
}
