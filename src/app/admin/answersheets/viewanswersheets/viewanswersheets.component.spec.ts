import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewanswersheetsComponent } from './viewanswersheets.component';

describe('ViewanswersheetsComponent', () => {
  let component: ViewanswersheetsComponent;
  let fixture: ComponentFixture<ViewanswersheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewanswersheetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewanswersheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
