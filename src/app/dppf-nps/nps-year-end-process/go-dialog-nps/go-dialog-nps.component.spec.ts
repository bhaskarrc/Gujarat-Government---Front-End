import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoDialogNpsComponent } from './go-dialog-nps.component';

describe('GoDialogNpsComponent', () => {
  let component: GoDialogNpsComponent;
  let fixture: ComponentFixture<GoDialogNpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoDialogNpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoDialogNpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
