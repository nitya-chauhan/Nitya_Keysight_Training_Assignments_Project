import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightFooterComponent } from './flight-footer.component';

describe('FlightFooterComponent', () => {
  let component: FlightFooterComponent;
  let fixture: ComponentFixture<FlightFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightFooterComponent]
    });
    fixture = TestBed.createComponent(FlightFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
