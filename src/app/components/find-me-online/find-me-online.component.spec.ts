import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMeOnlineComponent } from './find-me-online.component';

describe('FindMeOnlineComponent', () => {
  let component: FindMeOnlineComponent;
  let fixture: ComponentFixture<FindMeOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FindMeOnlineComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMeOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
