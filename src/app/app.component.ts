import { Component, VERSION } from '@angular/core';
import { DataModel } from '../model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public selectedTab: number = 2;

  public DataModel: DataModel;

  constructor() {
    //TODO: Get model from storage
    this.DataModel = new DataModel();
  }

  setSelectedTab(x: number) {
    this.selectedTab = x;
  }
}
