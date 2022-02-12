import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GastosComponent } from '../gastos/gastos.component';
import { StatsComponent } from '../stats/stats.component';
import { SettingsComponent } from '../settings/settings.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    GastosComponent,
    StatsComponent,
    SettingsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
