import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public selectedTab: number = 0;

  setSelectedTab(x: number) {
    this.selectedTab = x;
  }
}
