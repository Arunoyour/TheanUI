import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsnapshotComponent } from './medsnapshot.component';

describe('MedsnapshotComponent', () => {
  let component: MedsnapshotComponent;
  let fixture: ComponentFixture<MedsnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedsnapshotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
