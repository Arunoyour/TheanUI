import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelAnythingComponent } from './del-anything.component';

describe('DelAnythingComponent', () => {
  let component: DelAnythingComponent;
  let fixture: ComponentFixture<DelAnythingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelAnythingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelAnythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
