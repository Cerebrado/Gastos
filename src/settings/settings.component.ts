import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item, Settings } from '../model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  @Input() public Settings: Settings;
  @Output() SettingsChange: EventEmitter<Settings> =
    new EventEmitter<Settings>();

  public selectedTab: number;
  public items: Item[];

  constructor() {}

  ngOnInit() {
    this.selectedTab = 0;
    this.items = this.Settings.OutcomesList;
  }

  setSelectedTab(x: number) {
    this.selectedTab = x;
    if (x == 0) this.items = this.Settings.OutcomesList;
    else this.items = this.Settings.IncomesList;
  }

  settingsChanged() {
    this.SettingsChange.emit(this.Settings);
  }

  getUniqueCategories() {
    return this.items
      .map((x) => x.Category)
      .filter((element, index, arr) => arr.indexOf(element) === index);
  }

  getItemsForCategory(category: string) {
    return this.items.filter(
      (element, index, arr) => element.Category == category
    );
  }
}
