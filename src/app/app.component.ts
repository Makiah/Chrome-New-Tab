import {AfterViewInit, Component} from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div id="shadowContainer">
      <div id="newTabContainer">
        <predictive-search></predictive-search>
        <br>
        <quick-bookmarks></quick-bookmarks>
      </div>
    </div>
  `,
  styles: [`
    #shadowContainer {
      background-color: #eaeaea;
      width: 100%;
      height: 100vh;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    #newTabContainer {
      margin: 0 1vw;
      width: calc(100% - 6vw);
      background-color: white;
      box-shadow: 2px 5px #a7a7a7;
      padding: 0 1vw;
    }
  `]
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Automatically close in 5 seconds.
    setTimeout(() => window.close(), 5000);
  }
}
