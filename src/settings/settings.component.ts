import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  public selectedTab: number = 0;
  public items: Item[];



  constructor() {}

  ngOnInit() {}




  setSelectedTab(x: number) {
    this.selectedTab = x;
  }
}
