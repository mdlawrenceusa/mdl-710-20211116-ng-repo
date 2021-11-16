import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEduComponent } from './cv-edu.component';

describe('CvEduComponent', () => {
  let component: CvEduComponent;
  let fixture: ComponentFixture<CvEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
