import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendernewsComponent } from './calendernews.component';

describe('CalendernewsComponent', () => {
  let component: CalendernewsComponent;
  let fixture: ComponentFixture<CalendernewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendernewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendernewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
