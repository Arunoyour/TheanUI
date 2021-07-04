import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnydelvryComponent } from './anydelvry.component';

describe('AnydelvryComponent', () => {
  let component: AnydelvryComponent;
  let fixture: ComponentFixture<AnydelvryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnydelvryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnydelvryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
