import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from '../../app.module';

import { FindMeOnlineComponent } from './find-me-online.component';

describe('FindMeOnlineComponent', () => {
  let component: FindMeOnlineComponent;
  let fixture: ComponentFixture<FindMeOnlineComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FindMeOnlineComponent],
        imports: [AppModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMeOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
