import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCommonDialogComponent } from './info-common-dialog.component';

describe('InfoCommonDialogComponent', () => {
  let component: InfoCommonDialogComponent;
  let fixture: ComponentFixture<InfoCommonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCommonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCommonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
