import { PeopleService } from "./../../Services/people.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { People } from "src/app/interfaces/people";
@Component({
  selector: "app-people-search",
  templateUrl: "./people-search.component.html",
  styleUrls: ["./people-search.component.scss"],
})
/*
 * Class Declaraiton for people search
 */
export class PeopleSearchComponent implements OnInit {
  searchform: FormGroup;
  // property from People interface
  people: People;
  // store the character’s details to show it
  searchResult;
  // store error if exsist
  errorMessage: string;
  // check for submitting form
  submitted = false;
  constructor(private peopleService: PeopleService, public fb: FormBuilder) {}

  ngOnInit() {
    // set validation for search input
    this.searchform = this.fb.group({
      searchInput: [" ", [Validators.required]],
    });
  }

  /**
   * search function that recieve search value and pass it to
   * service's function and subscribe in observable to fetch data.
   *
   * @param searchValue search input value
   *
   * @return people who have the name
   */
  searchPeopleResult(searchValue = this.searchform.get("searchInput").value) {
    this.submitted = true;
    if (searchValue.length != 1) {
      this.peopleService.searchPeople(searchValue).subscribe({
        next: (people) => {
          this.people = people;
          this.searchResult = this.people.results;
        },
        error: (err) => (this.errorMessage = err),
      });
    }
  }
}
