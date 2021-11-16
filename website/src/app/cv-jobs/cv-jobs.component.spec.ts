import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvJobsComponent } from './cv-jobs.component';

describe('CvJobsComponent', () => {
  let component: CvJobsComponent;
  let fixture: ComponentFixture<CvJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
