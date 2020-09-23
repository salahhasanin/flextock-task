import { PeopleService } from "./Services/people.service";

import { PeopleSearchComponent } from "./Component/people-search/people-search.component";
import { routes } from "./routes";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
// import { matLabelModule } from "@angular/material";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [AppComponent, PeopleSearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    DragDropModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
