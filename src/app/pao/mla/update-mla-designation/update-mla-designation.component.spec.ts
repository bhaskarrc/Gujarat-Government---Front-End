import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMlaDesignationComponent } from './update-mla-designation.component';

describe('UpdateMlaDesignationComponent', () => {
  let component: UpdateMlaDesignationComponent;
  let fixture: ComponentFixture<UpdateMlaDesignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMlaDesignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMlaDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
