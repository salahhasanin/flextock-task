import { People } from "src/app/interfaces/people";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { PeopleService } from "./people.service";

describe("PeopleService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it("should be created", () => {
    const service: PeopleService = TestBed.get(PeopleService);
    expect(service).toBeTruthy();
  });
});

describe("PeopleService", () => {
  let service: PeopleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PeopleService],
    });
    service = TestBed.get(PeopleService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("be able to retrieve people from the API by GET", () => {
    const dummyPeople: People = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: "Luke Skywalker",
          height: "172",
          mass: "77",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "19BBY",
          gender: "male",
          homeworld: "http://swapi.dev/api/planets/1/",
          films: [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/2/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/6/",
          ],
          species: [],
          vehicles: [
            "http://swapi.dev/api/vehicles/14/",
            "http://swapi.dev/api/vehicles/30/",
          ],
          starships: [
            "http://swapi.dev/api/starships/12/",
            "http://swapi.dev/api/starships/22/",
          ],
          created: "2014-12-09T13:50:51.644000Z",
          edited: "2014-12-20T21:17:56.891000Z",
          url: "http://swapi.dev/api/people/1/",
        },
      ],
    };
    service.searchPeople("Luke Skywalker").subscribe((posts) => {
      expect(posts.results.length).toBe(1);
      expect(posts).toEqual(dummyPeople);
    });
    let results = { param: "search", value: "r2" };
    let url = `https://swapi.dev/api/people/?${results.param}=${results.value}`;
    const request = httpMock.expectOne((request) => {
      console.log("url: ", url);
      return true;
    });
    expect(request.request.method).toBe("GET");
    request.flush(dummyPeople);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
