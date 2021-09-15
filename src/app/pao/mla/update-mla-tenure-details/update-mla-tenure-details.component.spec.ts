import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMlaTenureDetailsComponent } from './update-mla-tenure-details.component';

describe('UpdateMlaTenureDetailsComponent', () => {
  let component: UpdateMlaTenureDetailsComponent;
  let fixture: ComponentFixture<UpdateMlaTenureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMlaTenureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMlaTenureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
