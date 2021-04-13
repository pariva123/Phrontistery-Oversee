import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlotteacherComponent } from './alotteacher.component';

describe('AlotteacherComponent', () => {
  let component: AlotteacherComponent;
  let fixture: ComponentFixture<AlotteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlotteacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlotteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
