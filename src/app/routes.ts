import { PeopleSearchComponent } from "./Component/people-search/people-search.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/people",
    pathMatch: "full",
  },
  {
    path: "people",
    component: PeopleSearchComponent,
  },

  {
    path: "**",
    component: PeopleSearchComponent,
  },
];
