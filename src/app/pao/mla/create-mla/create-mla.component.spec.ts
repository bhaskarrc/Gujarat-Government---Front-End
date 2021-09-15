import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMlaComponent } from './create-mla.component';

describe('CreateMlaComponent', () => {
  let component: CreateMlaComponent;
  let fixture: ComponentFixture<CreateMlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
