import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedRecepitListComponent } from './revised-recepit-list.component';

describe('RevisedRecepitListComponent', () => {
  let component: RevisedRecepitListComponent;
  let fixture: ComponentFixture<RevisedRecepitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedRecepitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedRecepitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
