import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FlightHeaderComponent } from './flight-header/flight-header.component';
import { FlightFooterComponent } from './flight-footer/flight-footer.component';
import { FlightListComponent } from './flight-list/flight-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightHeaderComponent,
    FlightFooterComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [TaskItemComponent]
})
export class AppModule { }
