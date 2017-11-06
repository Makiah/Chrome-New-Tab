import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet>
    
    <ngb-alert>Hi</ngb-alert>
  `,
})
export class AppComponent {
}
