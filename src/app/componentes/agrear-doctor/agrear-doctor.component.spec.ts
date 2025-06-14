import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrearDoctorComponent } from './agrear-doctor.component';

describe('AgrearDoctorComponent', () => {
  let component: AgrearDoctorComponent;
  let fixture: ComponentFixture<AgrearDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgrearDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrearDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
