import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeyautoComponent } from './heyauto.component';

describe('HeyautoComponent', () => {
  let component: HeyautoComponent;
  let fixture: ComponentFixture<HeyautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeyautoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeyautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
