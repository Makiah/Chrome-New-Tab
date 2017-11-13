import { Component } from "@angular/core";

@Component({
  selector: "predictive-search",
  template: `
    <div id="container">
      <input id="predictiveSearchField" type="text" placeholder="Quick Search" [ngModel]="currentSearch"
             (ngModelChange)="onTyping($event)" autofocus>
    </div>
  `,
  styles: [`
    #container {
      width: 100%;
    }
    
    #predictiveSearchField {
      height: 40px;
      margin: 5px;
      width: calc(100% - 10px);
      
      font-size: 30px;
    }
  `]
})
export class PredictiveSearchComponent {
  currentSearch: string = "";

  // When the user types into the field.
  onTyping (typed) {
    this.currentSearch = typed;
    this.predictSearch();
  }

  // Very basic method of predicting where I want to go (but it works :P)
  predictSearch() {
    switch (this.currentSearch) {
      case "gma":
        this.currentSearch = "https://mail.google.com";
        break;
      case "dri":
        this.currentSearch = "https://drive.google.com";
        break;
      case "gith":
        this.currentSearch = "https://github.com";
        break;
      case "smbc":
        this.currentSearch = "http://smbc-comics.com";
        break;
      default:
        break;
    }

    if (this.currentSearch.indexOf("http") !== -1) {
      window.location.href = this.currentSearch;
    }
  }
}
