import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelParaRegisterListComponent } from './model-para-register-list.component';

describe('ModelParaRegisterListComponent', () => {
  let component: ModelParaRegisterListComponent;
  let fixture: ComponentFixture<ModelParaRegisterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelParaRegisterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelParaRegisterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
