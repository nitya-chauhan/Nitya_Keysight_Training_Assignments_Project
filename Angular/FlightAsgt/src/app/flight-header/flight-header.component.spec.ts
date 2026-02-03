import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightHeaderComponent } from './flight-header.component';

describe('FlightHeaderComponent', () => {
  let component: FlightHeaderComponent;
  let fixture: ComponentFixture<FlightHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightHeaderComponent]
    });
    fixture = TestBed.createComponent(FlightHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
