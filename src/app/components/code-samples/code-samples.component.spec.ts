import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from '../../app.module';

import { CodeSamplesComponent } from './code-samples.component';

describe('CodeSamplesComponent', () => {
  let component: CodeSamplesComponent;
  let fixture: ComponentFixture<CodeSamplesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CodeSamplesComponent],
        imports: [AppModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
