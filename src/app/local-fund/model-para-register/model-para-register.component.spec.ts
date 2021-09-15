import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelParaRegisterComponent } from './model-para-register.component';

describe('ModelParaRegisterComponent', () => {
  let component: ModelParaRegisterComponent;
  let fixture: ComponentFixture<ModelParaRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelParaRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelParaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
