import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightFilterPipe } from './flight-filter.pipe';
import { FlightSortPipe } from './flight-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    FlightFilterPipe,
    FlightSortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
