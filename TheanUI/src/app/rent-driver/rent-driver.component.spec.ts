import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentDriverComponent } from './rent-driver.component';

describe('RentDriverComponent', () => {
  let component: RentDriverComponent;
  let fixture: ComponentFixture<RentDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
