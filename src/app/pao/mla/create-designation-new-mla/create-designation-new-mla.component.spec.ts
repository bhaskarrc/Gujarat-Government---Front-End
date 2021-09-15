import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDesignationNewMlaComponent } from './create-designation-new-mla.component';

describe('CreateDesignationNewMlaComponent', () => {
  let component: CreateDesignationNewMlaComponent;
  let fixture: ComponentFixture<CreateDesignationNewMlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDesignationNewMlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDesignationNewMlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
