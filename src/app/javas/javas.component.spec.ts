import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavasComponent } from './javas.component';

describe('JavasComponent', () => {
  let component: JavasComponent;
  let fixture: ComponentFixture<JavasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
