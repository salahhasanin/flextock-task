import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PeopleSearchComponent } from "./people-search.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { of } from "rxjs/internal/observable/of";
import { PeopleService } from "./../../Services/people.service";

describe("PeopleSearchComponent", () => {
  let component: PeopleSearchComponent;
  let fixture: ComponentFixture<PeopleSearchComponent>;
  let peopleService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleSearchComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        HttpClientModule,
        BrowserAnimationsModule,
      ],
      providers: [
        PeopleService,
        {
          provide: PeopleService,
          useValue: {
            searchPeople: () =>
              of({
                count: 1,
                next: null,
                previous: null,
                results: [
                  {
                    name: "R2-D2",
                    height: "96",
                    mass: "32",
                    hair_color: "n/a",
                    skin_color: "white, blue",
                    eye_color: "red",
                    birth_year: "33BBY",
                    gender: "n/a",
                    homeworld: "http://swapi.dev/api/planets/8/",
                    films: [
                      "http://swapi.dev/api/films/1/",
                      "http://swapi.dev/api/films/2/",
                      "http://swapi.dev/api/films/3/",
                      "http://swapi.dev/api/films/4/",
                      "http://swapi.dev/api/films/5/",
                      "http://swapi.dev/api/films/6/",
                    ],
                    species: ["http://swapi.dev/api/species/2/"],
                    vehicles: [],
                    starships: [],
                    created: "2014-12-10T15:11:50.376000Z",
                    edited: "2014-12-20T21:17:50.311000Z",
                    url: "http://swapi.dev/api/people/3/",
                  },
                ],
              }),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSearchComponent);
    component = fixture.componentInstance;
    peopleService = TestBed.get(PeopleService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should be text in input", () => {
    const compiled = fixture.debugElement.nativeElement;
    const searchInput = compiled.querySelector('input[id="searchInput"]');
    expect(searchInput).toBeTruthy();
  });

  it("should load people detail", () => {
    spyOn(peopleService, "searchPeople").and.callThrough();
    component.searchPeopleResult("r2");
    fixture.detectChanges();
    expect(peopleService.searchPeople).toHaveBeenCalledWith("r2");
    expect(component.people).toEqual({
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: "R2-D2",
          height: "96",
          mass: "32",
          hair_color: "n/a",
          skin_color: "white, blue",
          eye_color: "red",
          birth_year: "33BBY",
          gender: "n/a",
          homeworld: "http://swapi.dev/api/planets/8/",
          films: [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/4/",
            "http://swapi.dev/api/films/5/",
            "http://swapi.dev/api/films/6/",
          ],
          species: ["http://swapi.dev/api/species/2/"],
          vehicles: [],
          starships: [],
          created: "2014-12-10T15:11:50.376000Z",
          edited: "2014-12-20T21:17:50.311000Z",
          url: "http://swapi.dev/api/people/3/",
        },
      ],
    });
  });

  it("search input field validity", () => {
    let errors = {};
    let searchInput = component.searchform.get("searchInput");
    expect(searchInput.valid).toBeTruthy();

    // searchInput field is required
    errors = searchInput.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set searchInput to something correct
    searchInput.setValue("test");
    errors = searchInput.errors || {};
    expect(errors["required"]).toBeFalsy();
  });
});
