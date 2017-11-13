import { Component } from "@angular/core";

@Component({
  selector: "quick-bookmarks",
  template: `
    <div class="bookmarksContainer">
      <h1>Personal</h1>
      
      <a href="https://mail.google.com">
        <div class="bookmark" style="background-image: url('/assets/gmail-icon.svg')">
          <p>Gmail</p>
        </div>
      </a>
      
      <a href="https://drive.google.com">
        <div class="bookmark" style="background-image: url('/assets/drive-icon.svg')">
          <p>Drive</p>
        </div>
      </a>
      
      <a href="https://github.com">
        <div class="bookmark" style="background-image: url('/assets/github-icon.png')">
          <p>GitHub</p>
        </div>
      </a>

      <a href="http://ifunny.co">
        <div class="bookmark" style="background-image: url('/assets/ifunny-icon.jpg')">
          <p>iFunny</p>
        </div>
      </a>
    </div>
    <hr>
    <div class="bookmarksContainer">
      <h1>School</h1>
      
      <a href="https://classroom.google.com/u/1/c/NTA3MjIzNTQxOFpa">
        <div class="bookmark" style="background-image: url('/assets/rec-icon.png')">
          <p>Rec</p>
        </div>
      </a>

      <a href="https://moodle.natickps.org/course/view.php?id=629">
        <div class="bookmark" style="background-image: url('/assets/physics-icon.png')">
          <p>AP Physics</p>
        </div>
      </a>

      <a href="https://classroom.google.com/u/1/c/NTA4NDAwMzE2NVpa">
        <div class="bookmark" style="background-image: url('/assets/economics-icon.png')">
          <p>AP Economics</p>
        </div>
      </a>

      <a href="https://moodle.natickps.org/course/view.php?id=717">
        <div class="bookmark" style="background-image: url('/assets/psychology-icon.png')">
          <p>AP Psychology</p>
        </div>
      </a>
      
      <a href="https://moodle.natickps.org/course/view.php?id=739">
        <div class="bookmark" style="background-image: url('/assets/spanish-icon.png')">
          <p>AP Spanish</p>
        </div>
      </a>

      <a href="https://classroom.google.com/u/1/c/NTE1OTE4Mjgy">
        <div class="bookmark" style="background-image: url('/assets/book-icon.png')">
          <p>AP Lit</p>
        </div>
      </a>
    </div>
  `,
  styles: [`
    p {
      margin: 0;
    }

    .bookmarksContainer {
      overflow: hidden;
    }

    .bookmark {
      width: 120px;
      height: 100px;
      float: left;
      margin: 5px;
      
      border-radius: 15px;

      background-size: cover;
      background-position: center;

      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    .bookmark p {
      background: rgba(255, 255, 255, 0.38);
      color: black;
    }
  `]
})
export class QuickBookmarksComponent {
}
