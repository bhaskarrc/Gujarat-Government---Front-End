import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantSurrenderProcessListComponent } from './grant-surrender-process-list.component';

describe('GrantSurrenderProcessListComponent', () => {
  let component: GrantSurrenderProcessListComponent;
  let fixture: ComponentFixture<GrantSurrenderProcessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantSurrenderProcessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantSurrenderProcessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
