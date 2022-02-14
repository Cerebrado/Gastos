import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DailyComponent } from '../daily/daily.component';
import { StatsComponent } from '../stats/stats.component';
import { SettingsComponent } from '../settings/settings.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    DailyComponent,
    StatsComponent,
    SettingsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
