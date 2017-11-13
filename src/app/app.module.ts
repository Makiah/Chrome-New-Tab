// Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Components
import { AppComponent } from "./app.component";
import { PredictiveSearchComponent } from "./predictive-search.component";
import { QuickBookmarksComponent } from "./quick-bookmarks.component";

// Services
// import service from service file

@NgModule({
  imports:      [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    PredictiveSearchComponent,
    QuickBookmarksComponent
  ],
  entryComponents: [
    // Components that are added mid-run (like modals)
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
