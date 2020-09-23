import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { People } from "../interfaces/people";

@Injectable({
  providedIn: "root",
})
/*
 * Class Declaraiton for people services
 */
export class PeopleService {
  private people: People;
  constructor(private http: HttpClient) {}
  /**
   * search for people using Get Api to fetch data for them
   * @param peopleName people's name
   * @return observable of people who have that name
   */
  searchPeople(peopleName): Observable<People> {
    if (this.people) {
      return of(this.people);
    }
    return this.http.get<People>(environment.peopleBaseUrl + `${peopleName}`);
  }
}
