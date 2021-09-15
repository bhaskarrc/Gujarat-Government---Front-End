import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeevanPramanPensionerSeenDetailsComponent } from './jeevan-praman-pensioner-seen-details.component';

describe('JeevanPramanPensionerSeenDetailsComponent', () => {
  let component: JeevanPramanPensionerSeenDetailsComponent;
  let fixture: ComponentFixture<JeevanPramanPensionerSeenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeevanPramanPensionerSeenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeevanPramanPensionerSeenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
