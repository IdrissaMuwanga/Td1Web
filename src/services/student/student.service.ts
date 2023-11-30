import { Injectable } from '@angular/core';
import { Student} from '../../models/student';
import { STUDENTS_MOCKED } from '../../mocks/student.mock';
import { BehaviorSubject, Observable } from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class StudentService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private studentList: Student[] = STUDENTS_MOCKED;
  private apiUrl = 'https://api.myjson.com/bins/ck44c'; 

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

  constructor(private http: HttpClient) {
  }

// getStudent(): Observable<Student[]> {
//   return this.http.get<Student[]>(this.heroesUrl)
//   this.ticketService.ticket.suscribe(next(tickets)=> this.ticketList = tickets);
//   this.ticketService.ticket.suscribe(next(tickets)=> {
//     this.ticketList = tickets;
//     console.log(tickets);
//   });
}
  // addStudent(student: Student) {

  //   //this.tickets$.push(ticket);

    
  //   // You need here to update the list of ticket and then update our observable (Subject) with the new list
  //   // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  // }

