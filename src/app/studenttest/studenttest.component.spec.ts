import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttestComponent } from './studenttest.component';

describe('StudenttestComponent', () => {
  let component: StudenttestComponent;
  let fixture: ComponentFixture<StudenttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenttestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudenttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
