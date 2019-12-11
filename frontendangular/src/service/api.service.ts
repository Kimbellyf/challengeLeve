import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Person } from '../models/Person.model';
import {Course} from '../models/course.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/Person/';
const apiUrlCourse = 'http://localhost:3000/Course';
const apiUrlStudentCourse = "http://localhost:3000/student/"


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPersons (): Observable<Person[]> {
    return this.http.get<Person[]>(apiUrl)
      .pipe(
        tap(person => console.log('leu as pessoas')),
        catchError(this.handleError('getPeople', []))
      );
  }

  getPerson(id: number): Observable<Person> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      tap(person=> console.log(`leu o Person id=${id}`)),
      catchError(this.handleError<Person>(`getPerson id=${id}`))
    );
  }

  addPerson (Person): Observable<Person> {
    return this.http.post<Person>(apiUrl, Person, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((person: Person) => console.log(`adicionou o Person com w/ id=${person.id}`)),
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  updatePerson(id, Person): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, Person, httpOptions).pipe(
      tap(_ => console.log(`atualiza a pessoa com id=${id}`)),
      catchError(this.handleError<any>('updatePerson'))
    );
  }

  deletePerson (id): Observable<Person> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Person>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o Person com id=${id}`)),
      catchError(this.handleError<Person>('deletePerson'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
  getCourses (): Observable<Course[]> {
    return this.http.get<Course[]>(apiUrlCourse)
      .pipe(
        tap(course => console.log('leu os cursos')),
        catchError(this.handleError('getCursos', []))
      );
  }
  getStudentCourses(student_enrollment: number): Observable<Person> {
    const url = `${apiUrlStudentCourse}/${student_enrollment}`;
    return this.http.get<Person>(url).pipe(
      tap(_ => console.log(`leu o Person id=${student_enrollment}`)),
      catchError(this.handleError<Person>(`getPerson id=${student_enrollment}`))
    );
  }
  /*
  deleteStudentCourses (student_enrollment: number,course_enrollment:number): Observable<Person> {
    const url = `${apiUrlStudentCourse}/${id}`;

    return this.http.delete<Person>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o Person com id=${id}`)),
      catchError(this.handleError<Person>('deletePerson'))
    );
  }
  updateStudentCourses(id, Person): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, Person, httpOptions).pipe(
      tap(_ => console.log(`atualiza a pessoa com id=${id}`)),
      catchError(this.handleError<any>('updatePerson'))
    );
  } */
}