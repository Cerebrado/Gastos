import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Month } from '../model';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
})
export class DailyComponent implements OnInit {
  @Input() public Months: Month[];
  periodSelector: string;

  // @Output() CurrentPeriodChange: EventEmitter<Period> =
  //   new EventEmitter<Period>();

  constructor() {}

  ngOnInit() {
    this.periodSelector = 'M';
  }

  getNumbers(periodsAgo: number, isIncome: boolean) {
    var today = new Date();
    if (this.periodSelector == 'M') {
      if (periodsAgo == 0) {
        let currentMonth = this.selectMonthForDate(today);
        if (!currentMonth) return 0;
        return this.calculate(currentMonth, isIncome);
      }

      if (periodsAgo == 1) {
        today.setDate(0); //set the date to the latest day of the previous month.
        let pastMonth = this.selectMonthForDate(today);
        if (!pastMonth) return 0;
        return this.calculate(pastMonth, isIncome);
      }
    }
  }

  calculate(currentMonth: Month, isIncome: boolean) {
    throw new Error('Method not implemented.');
  }

  selectMonthForDate(date: Date) {
    var monthesToday = this.Months.filter(
      (element, index, arr) =>
        element.Year == date.getFullYear() && element.Month == date.getMonth()
    );
    if (monthesToday.length == 0) return null;
    return monthesToday[0];
  }
}
