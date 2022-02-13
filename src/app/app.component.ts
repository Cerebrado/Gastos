import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public selectedTab: number = 2;

  setSelectedTab(x: number) {
    this.selectedTab = x;
  }
}
