import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Period } from '../model';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
})
export class DailyComponent implements OnInit {
  @Input() public CurrentPeriod: Period;
  @Output() CurrentPeriodChange: EventEmitter<Period> =
    new EventEmitter<Period>();

  @Input() public PastPeriod: Period;

  constructor() {}

  ngOnInit() {}

  getNumbers(periodsAgo: number, isIncome: boolean) {
    var period = periodsAgo == 0 ? this.CurrentPeriod : this.PastPeriod;
    var result = 0;
    for (let i = 0; i < period.Operations.length; i++) {
      result += period.Operations[i].Quantity * period.Operations[i].Item.Price;
    }
    return result;
  }
}
