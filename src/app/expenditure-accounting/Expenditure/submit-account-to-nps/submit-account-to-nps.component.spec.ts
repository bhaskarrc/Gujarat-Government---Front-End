import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAccountToNpsComponent } from './submit-account-to-nps.component';

describe('SubmitAccountToNpsComponent', () => {
  let component: SubmitAccountToNpsComponent;
  let fixture: ComponentFixture<SubmitAccountToNpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAccountToNpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAccountToNpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
